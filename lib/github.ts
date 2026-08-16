import { GITHUB_TOKEN, LANGUAGE_COLORS } from "./constants";

export interface CommitData {
  id: string;
  repo: string;
  message: string;
  additions: number;
  deletions: number;
  url: string;
}

export interface LanguageStat {
  name: string;
  percentage: number;
  colour: string;
  repos?: number;
}

export async function getGithubStats(username: string) {
  const headers: RequestInit["headers"] = GITHUB_TOKEN
    ? {
        Authorization: GITHUB_TOKEN.startsWith("Bearer")
          ? GITHUB_TOKEN
          : `Bearer ${GITHUB_TOKEN}`,
      }
    : {};

  try {
    // fetch public events -> extract stats
    const eventsRes = await fetch(
      `https://api.github.com/users/${username}/events/public`,
      { headers, next: { revalidate: 3600 } },
    );
    const events = await eventsRes.json();

    // PushEvent => contains commits => keep only recent 4
    const pushEvents = Array.isArray(events)
      ? events.filter((e: any) => e.type === "PushEvent").slice(0, 4)
      : [];

    const repoNames: string[] = Array.from(
      new Set(pushEvents.map((e: any) => e.repo.name)),
    );

    // fetch detailed commit stats and repo language breakdowns in parallel
    const commitsPromise = Promise.all(
      pushEvents.map(async (event: any) => {
        const fullRepoName = event.repo.name; // username/repo name
        const repoName = fullRepoName.split("/")[1] || fullRepoName;
        const commitSHA = event.payload.head || event.payload.commits?.[0]?.sha;

        let additions: number,
          deletions: number = 0;

        let commitMessage = `Push to ${event.payload.ref?.replace("refs/head/", "") || repoName}`;
        let commitURL = `https://github.com/${fullRepoName}`;

        if (commitSHA) {
          commitURL = `https://github.com/${fullRepoName}/commit/${commitSHA}`;
          try {
            const commitRes = await fetch(
              `https://api.github.com/repos/${fullRepoName}/commits/${commitSHA}`,
              { headers, next: { revalidate: 3600 } },
            );
            const commitDetails = await commitRes.json();
            additions = commitDetails.stats?.additions || 0;
            deletions = commitDetails.stats?.deletions || 0;
            commitMessage =
              commitDetails.commit?.message?.split("\n")[0] || commitMessage;
          } catch {}
        }

        return {
          id: event.id,
          repo: repoName,
          message: commitMessage,
          additions,
          deletions,
          url:
            commitURL ||
            `https://github.com/${fullRepoName}/commit/${commitSHA}`,
        };
      }),
    );

    const languagesPromise = Promise.all(
      repoNames.map(async (repo) => {
        try {
          const res = await fetch(
            `https://api.github.com/repos/${repo}/languages`,
            { headers, next: { revalidate: 3600 } },
          );
          return await res.json();
        } catch {
          return {};
        }
      }),
    );

    const [commits, languagesArray] = await Promise.all([
      commitsPromise,
      languagesPromise,
    ]);

    // language data for a repo returned like:
    // { <lang>: <bytes>, ... } -> need to aggregate languages from all repos
    const aggregatedBytes: Record<string, number> = {};
    let totalBytes = 0;

    languagesArray.forEach((repoLanguages) => {
      if (repoLanguages && typeof repoLanguages === "object") {
        Object.entries(repoLanguages).forEach(([language, bytes]) => {
          if (typeof bytes === "number") {
            aggregatedBytes[language] =
              (aggregatedBytes[language] || 0) + bytes;
            totalBytes += bytes;
          }
        });
      }
    });

    const languages: LanguageStat[] = Object.entries(aggregatedBytes)
      .map(([language, bytes]) => ({
        name: language,
        percentage: totalBytes > 0 ? Math.round((bytes / totalBytes) * 100) : 0,
        colour: LANGUAGE_COLORS[language] || "#61AFEF",
      }))
      .filter((lang) => lang.percentage > 0)
      .sort((a, b) => b.percentage - a.percentage);

    return {
      commits,
      languages,
    };
  } catch (error) {
    console.error("Error fetching GitHub stats: ", error);
    return { commits: [], languages: [], error };
  }
}

export async function getUserRepoStats(username: string) {
  const token = GITHUB_TOKEN?.replace("Bearer ", "").trim();

  // GraphQL requires an authenticated token
  if (!token) {
    console.error("GITHUB_TOKEN is required for GraphQL queries.");
    return { reposCount: 0, languages: [] };
  }

  const query = `
    query ($username: String!) {
      user(login: $username) {
        repositories(first: 100, ownerAffiliations: OWNER, isFork: false, orderBy: {field: UPDATED_AT, direction: DESC}) {
          totalCount
          nodes {
            name
            languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
              edges {
                size
                node {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { username } }),
      next: { revalidate: 3600 },
    });

    const { data, errors } = await res.json();

    if (errors) {
      console.error("GraphQL Errors:", errors);
      return { reposCount: 0, languages: [] };
    }

    const repos = data?.user?.repositories?.nodes || [];
    const reposCount = data?.user?.repositories?.totalCount || 0;

    const aggregatedBytes: Record<string, { bytes: number; color: string, repos: number }> = {};
    let totalBytes = 0;

    // Process language byte sizes locally from the single response
    repos.forEach((repo: any) => {
      repo.languages?.edges?.forEach((edge: any) => {
        const langName = edge.node.name;
        const bytes = edge.size;
        const color = edge.node.color || LANGUAGE_COLORS[langName] || "#61AFEF";

        if (!aggregatedBytes[langName]) {
          aggregatedBytes[langName] = { repos: 0, bytes: 0, color };
        }

        aggregatedBytes[langName].bytes += bytes;
        aggregatedBytes[langName].repos += 1;
        totalBytes += bytes
      });
    });

    const languages = Object.entries(aggregatedBytes)
      .map(([name, { bytes, color, repos }]) => ({
        name,
        repos,
        percentage: totalBytes > 0 ? Math.round((bytes / totalBytes) * 100) : 0,
        colour: color,
      }))
      .filter((language) => language.percentage > 0)
      .sort((a, b) => b.repos - a.repos);

    return { reposCount, languages };
  } catch (error) {
    console.error("Error fetching GitHub Repo stats:", error);
    return { reposCount: 0, languages: [], error };
  }
}