export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

  const KEY = '68C9B335F34F32699533F121674EBE90';
  const STEAMID = '76561199189297151';

  try {
    const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${KEY}&steamid=${STEAMID}&include_appinfo=true&include_played_free_games=true`;
    const r = await fetch(url);
    const data = await r.json();

    if (!data.response || !data.response.games) {
      return res.status(500).json({ error: 'No game data' });
    }

    const games = data.response.games
      .filter(g => g.playtime_forever > 0)
      .sort((a, b) => b.playtime_forever - a.playtime_forever)
      .slice(0, 12)
      .map(g => ({
        appid: g.appid,
        name: g.name,
        hours: Math.round(g.playtime_forever / 60),
        icon: `https://media.steampowered.com/steamcommunity/public/images/apps/${g.appid}/${g.img_icon_url}.jpg`,
        recent: g.playtime_2weeks ? Math.round(g.playtime_2weeks / 60) : 0,
      }));

    // Total playtime across all games
    const totalHours = data.response.games.reduce((sum, g) => sum + g.playtime_forever, 0) / 60;

    return res.json({ games, totalHours: Math.round(totalHours), count: data.response.game_count });
  } catch (e) {
    return res.status(500).json({ error: 'Failed to fetch Steam data' });
  }
}
