import { useId } from "react";
import { Search as SearchIcon } from "react-feather";

export default function SearchInput(props) {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className="px-2 flex items-center focus-within:outline-none focus-within:border-white focus-within:ring-1 focus-within:ring-white"
    >
      <SearchIcon />
      <input id={id} className="text-sm p-2 bg-black outline-none" {...props} />
    </label>
  );
}
