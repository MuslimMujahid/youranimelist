"use client";

import { useRouter } from "next/navigation";
import SearchInput from "./SearchInput";

export default function HeaderSearchInput() {
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
    <SearchInput
      placeholder="Search ..."
      onChange={handleSearch}
      onKeyDown={handleSearchKey}
    />
  );
}
