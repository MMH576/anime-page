"use client";
import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log("Searching:", searchQuery);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/luffy.png"
              alt="Luffy"
              className="w-8 h-8 object-contain"
            />
            <h1 className="text-2xl font-bold text-primary">
              Ani<span className="text-gray-900">Find</span>
            </h1>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/popular"
              className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-primary transition-colors"
            >
              Popular Anime
            </Link>
            <Link
              href="/airing"
              className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-primary transition-colors"
            >
              Top Airing
            </Link>
            <Link
              href="/new"
              className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-primary transition-colors"
            >
              New Anime
            </Link>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Quick search..."
                className="w-40 px-3 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <FiSearch className="text-gray-400 hover:text-gray-600" />
              </button>
            </form>

            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-primary transition-colors focus:outline-none"
              >
                <FiMenu className="w-6 h-6" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                  <Link
                    href="/sub"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                  >
                    Sub Anime
                  </Link>
                  <Link
                    href="/dub"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                  >
                    Dub Anime
                  </Link>
                  <Link
                    href="/tv"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                  >
                    TV
                  </Link>
                  <Link
                    href="/special"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                  >
                    Special
                  </Link>
                  <Link
                    href="/movie"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                  >
                    Movie
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-primary transition-colors focus:outline-none"
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isDropdownOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/popular"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-primary"
              >
                Popular Anime
              </Link>
              <Link
                href="/airing"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-primary"
              >
                Top Airing
              </Link>
              <Link
                href="/new"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-primary"
              >
                New Anime
              </Link>
              <div className="border-t border-gray-200 mt-2 pt-2">
                <Link
                  href="/sub"
                  className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-primary"
                >
                  Sub Anime
                </Link>
                <Link
                  href="/dub"
                  className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-primary"
                >
                  Dub Anime
                </Link>
                <Link
                  href="/tv"
                  className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-primary"
                >
                  TV
                </Link>
                <Link
                  href="/special"
                  className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-primary"
                >
                  Special
                </Link>
                <Link
                  href="/movie"
                  className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-primary"
                >
                  Movie
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
