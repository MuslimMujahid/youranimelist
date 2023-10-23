"use client";

import { useRouter } from "next/navigation";
import SearchInput from "./SearchInput";

export default function Headbar() {
  const router = useRouter();

  function handleSearch(event) {
    if (!event.target.value) {
      router.push("/home");
    }
  }

  function handleSearchKey(event) {
    if (event.key === "Enter") {
      router.push(`../search?q=${event.target.value}`);
    }
  }

  return (
    <div className="px-12 py-8 flex justify-between items-center sticky top-0 bg-black">
      <a className="font-bold" href="/home">
        YOURANIMELIST
      </a>
      <SearchInput
        placeholder="Search ..."
        onChange={handleSearch}
        onKeyDown={handleSearchKey}
      />
    </div>
  );
}
