import React from "react";
import MovieListSkeleton from "@/components/MovieListSkeleton";
import SearchContent from "./content";

export default async function SearchPage({ searchParams }) {
  const { q } = searchParams;
  return (
    <React.Suspense key={q} fallback={<MovieListSkeleton count={12} />}>
      <SearchContent query={q} />
    </React.Suspense>
  );
}
