export default function HomeLoading() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-2">
      {Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="rounded h-56 animate-pulse bg-gray-500" />
      ))}
    </div>
  );
}
