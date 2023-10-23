import {
  getTopAnime,
  getSeasonNowAnime,
  getAnimeSearch,
  FANTASY_ID,
} from "@/api";
import MovieList from "@/components/MovieList";
import { mapToMovieCard } from "@/utils";

export default async function HomePage() {
  const topAnimeData = getTopAnime({ limit: 6 });
  const seasonAnimeData = getSeasonNowAnime({ limit: 6 });
  const fantasyAnimeData = getAnimeSearch({
    limit: 6,
    genres: FANTASY_ID,
    start_date: "2023-01-01",
  });

  const [topAnime, seasonAnime, fantasyAnime] = await Promise.all([
    topAnimeData,
    seasonAnimeData,
    fantasyAnimeData,
  ]).then((results) =>
    results.map((result) => result.data.map(mapToMovieCard))
  );

  return (
    <>
      <MovieList title="Top Anime" list={topAnime} />
      <MovieList title="Anime This Season" list={seasonAnime} />
      <MovieList title="Fantasy" list={fantasyAnime} />
    </>
  );
}
