"use client";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  handleSearch,
}) {
  return (
    <form onSubmit={handleSearch} className="container mx-auto px-4">
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search anime..."
          className="input w-full h-16 rounded-full pl-8 pr-20 text-lg"
        />
        <button
          type="submit"
          className="btn-primary h-14 rounded-full absolute right-2 px-10"
        >
          <FiSearch className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
}
