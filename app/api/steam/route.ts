import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.STEAM_API_KEY;
  const id = process.env.STEAM_ID;

  // https://api.steampowered.com/<interface>/<method>/v<version>?<options>
  const URL = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${key}&steamid=${id}&include_appinfo=true&include_played_free_games=true&format=json`;

  try {
    const res = await fetch(URL, { next: { revalidate: 3600 } });
    const data = await res.json();

    const games = data.response.games || [];
    const playedGames = games
      .filter((game) => game.playtime_forever > 0)
      .sort((a, b) => b.playtime_forever - a.playtime_forever)
      .map((game) => ({
        id: game.appid,
        name: game.name,
        playTimeHours: Math.round(game.playtime_forever / 60),
        iconUrl: `https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`,
      }));
    const topGames = playedGames.slice(0, 5);

    return NextResponse.json(
      { top5: topGames, games: playedGames.slice(5, playedGames.length) },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching games:", error);
    return NextResponse.json(
      { error: "Failed to fetch Steam data" },
      { status: 500 },
    );
  }
}
