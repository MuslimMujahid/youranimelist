import MovieCard from "./MovieCard";

export default function MovieList({ title, list }) {
  return (
    <div className="py-4">
      {title && <h2 className="font-bold text-lg mb-2">{title}</h2>}
      <div className="grid grid-cols-[repeat(6,_minmax(200px,_1fr))] gap-2">
        {list.map(({ id, ...rest }) => (
          <MovieCard
            key={id}
            {...rest}
            className="cursor-pointer hover:scale-110 ease-in duration-100 hover:shadow-xl"
          />
        ))}
      </div>
    </div>
  );
}
