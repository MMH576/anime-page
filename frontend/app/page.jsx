"use client";
import { useState, useEffect } from "react";
import { searchAnime, getTopAnime } from "./utils/api";
import { FiSearch } from "react-icons/fi";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [animeResults, setAnimeResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load initial top anime when page loads
    const fetchInitialAnime = async () => {
      setIsLoading(true);
      try {
        const data = await getTopAnime(1);
        setAnimeResults(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialAnime();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    try {
      const results = await searchAnime(searchQuery);
      setAnimeResults(results);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            <span className="text-primary">Ani</span>Find
          </h1>
          <p className="mt-3 text-base sm:text-lg md:mt-5 md:text-xl max-w-3xl mx-auto">
            Find Your Next Favorite Anime
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mt-8 flex justify-center">
            <div className="join">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for anime..."
                className="input input-bordered join-item w-full max-w-xs"
              />
              <button type="submit" className="btn btn-primary join-item">
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Anime Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {animeResults.map((anime) => (
              <div
                key={anime.mal_id}
                className="card bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative pb-[140%]">
                  <img
                    src={anime.images.jpg.large_image_url}
                    alt={anime.title}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 bg-primary/90 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                    ★ {anime.score ? anime.score.toFixed(1) : "N/A"}
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="font-bold text-lg mb-2 line-clamp-2">
                    {anime.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-gray-600 text-sm">
                      {anime.year || "Year N/A"}
                    </span>
                    <span className="text-gray-600 text-sm">{anime.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
