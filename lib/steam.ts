import { STEAM_API_KEY, STEAM_ID } from "./constants";

export async function getSteamStats() {
  // https://api.steampowered.com/<interface>/<method>/v<version>?<options>
  const URL = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&include_appinfo=true&include_played_free_games=true&format=json`;

  try {
    const res = await fetch(URL, { next: { revalidate: 3600 } });
    const data = await res.json();

    const games = data.response.games || [];
    let playedGames = games
      .filter((game) => game.playtime_forever > 0)
      .sort((a, b) => b.playtime_forever - a.playtime_forever)
      .map((game) => ({
        id: game.appid,
        name: game.name,
        playTimeHours: Math.round(game.playtime_forever / 60),
        iconUrl: `https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`,
      }));
    const topGames = playedGames.slice(0, 5);
    playedGames = playedGames.slice(5, playedGames.length)

    return { top5: topGames, games: playedGames };
  } catch (error) {
    console.error("Error fetching Steam data:", error);
    return { top5: [], games: [] };
  }
}
