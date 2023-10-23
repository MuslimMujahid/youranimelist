export function mapToMovieCard(item) {
  return {
    id: item.mal_id,
    thumbnail: item.images.webp.image_url,
    title: item.title,
    genres: item.genres.map((genre) => genre.name),
    score: item.score,
  };
}
