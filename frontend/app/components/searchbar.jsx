"use client";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  handleSearch,
}) {
  return (
    <form onSubmit={handleSearch} className="w-full max-w-[90rem] mx-auto px-4">
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search anime..."
          className="input input-bordered w-full h-16 rounded-full pl-8 pr-20 text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <button
          type="submit"
          className="btn btn-primary h-14 rounded-full absolute right-2 px-10 hover:bg-primary-focus"
        >
          <FiSearch className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
}
