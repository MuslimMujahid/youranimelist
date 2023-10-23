import React from "react";
import Image from "next/image";

export default function MovieCard({
  thumbnail,
  title,
  score,
  genres,
  className,
}) {
  return (
    <div className={`text-sm rounded ${className}`}>
      <div className="h-56 overflow-hidden rounded">
        <Image
          className="w-full"
          src={thumbnail}
          alt={title}
          width={240}
          height={360}
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <span className="text-xs bg-blue-400 px-2 py-1 rounded-lg self-start">
          {score ?? "N/A"}
        </span>
        <span>{title}</span>
        <div className="text-slate-500 flex flex-wrap gap-x-2">
          {genres.map((genre, index) => (
            <React.Fragment key={genre}>
              <span>{genre}</span>
              {index < genres.length - 1 && <>&bull;</>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
