import MovieList from "@/components/MovieList";
import { getAnimeSearch } from "@/api";
import { mapToMovieCard } from "@/utils";

export default async function SearchContent({ query }) {
  const animeSearch = await getAnimeSearch({ limit: 20, q: query, sfw: true });
  const animeList = animeSearch.data.map(mapToMovieCard);

  if (animeList.length === 0) {
    return (
      <p>
        No data found fo "<span className="font-bold">{query}</span>", please
        try other keywords !
      </p>
    );
  }

  return <MovieList list={animeList} />;
}
