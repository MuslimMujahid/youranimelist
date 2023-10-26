export const FANTASY_ID = "10";

function fetchBase(path, query) {
  const url = new URL(process.env.NEXT_PUBLIC_BASE_API_URL);
  const searchParams = new URLSearchParams(query);

  // make sure base url ends with "/"
  if (!url.pathname.endsWith("/")) {
    url.pathname += "/";
  }

  // make sure path doesn't start with "/"
  if (path.startsWith("/")) {
    path = path.slice(1);
  }

  // join path
  url.pathname += path;

  // insert search params
  url.search = searchParams.toString();

  return fetch(url.href);
}

export async function getTopAnime(query) {
  const res = await fetchBase("top/anime", query);
  return res.json();
}

export async function getSeasonNowAnime(query) {
  const res = await fetchBase("seasons/now", query);
  return res.json();
}

export async function getAnimeSearch(query) {
  const res = await fetchBase("anime", query);
  return res.json();
}
