export const FANTASY_ID = "10";

export async function getTopAnime(query) {
  const searchParams = new URLSearchParams({ ...query, sfw: true });

  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_API_URL
    }/top/anime?${searchParams.toString()}`
  );

  return res.json();
}

export async function getSeasonNowAnime(query) {
  const searchParams = new URLSearchParams({ ...query, sfw: true });

  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_API_URL
    }/seasons/now?${searchParams.toString()}`
  );

  return res.json();
}

export async function getAnimeSearch(query) {
  const searchParams = new URLSearchParams({ ...query, sfw: true });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/anime?${searchParams.toString()}`
  );

  return res.json();
}
