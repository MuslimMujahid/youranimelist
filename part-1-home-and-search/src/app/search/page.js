import MovieList from "@/components/MovieList";
import { getAnimeSearch } from "@/api";
import { mapToMovieCard } from "@/utils";

export default async function SearchPage({ searchParams }) {
  const animeSearch = await getAnimeSearch({ limit: 20, q: searchParams.q });
  const animeList = animeSearch.data.map(mapToMovieCard);

  if (animeList.length === 0) {
    return (
      <p>
        No data found fo "<span className="font-bold">{searchParams.q}</span>",
        please try other keywords !
      </p>
    );
  }

  return <MovieList list={animeList} />;
}
