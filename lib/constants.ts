import dotenv from "dotenv"

dotenv.config({path: ".env", debug: true})

export const STEAM_API_KEY = process.env.STEAM_API_KEY
export const STEAM_ID  = process.env.STEAM_ID

export const GITHUB_TOKEN = process.env.GITHUB_TOKEN

// GitHub API official language colors map
export const LANGUAGE_COLORS: Record<string, string> = {
  Rust: "#e5a183",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  C: "#555555",
  "C++": "#f34b7d",
  Go: "#00ADD8",
  Shell: "#89e051",
  Vue: "#41b883",
  Svelte: "#ff3e00",
};