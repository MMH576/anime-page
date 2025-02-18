"use client";
import { useState, useEffect } from "react";
import { getAiringAnime } from "../utils/api";

export default function AiringAnimePage() {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchAnime = async () => {
      setIsLoading(true);
      try {
        const data = await getAiringAnime(page);
        setAnimeList(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnime();
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Top Airing Anime
        </h1>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {animeList.map((anime) => (
                <div
                  key={anime.mal_id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative pb-[140%]">
                    <img
                      src={anime.images.jpg.large_image_url}
                      alt={anime.title}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-indigo-600 text-white px-2 py-1 rounded-md">
                      ★ {anime.score || "N/A"}
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="font-bold text-lg mb-2 line-clamp-2">
                      {anime.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {anime.type}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {anime.episodes ? `${anime.episodes} eps` : "Ongoing"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {anime.synopsis}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md disabled:bg-gray-300 hover:bg-indigo-700"
              >
                Previous
              </button>
              <span className="px-4 py-2 bg-white rounded-md">Page {page}</span>
              <button
                onClick={() => setPage((prev) => prev + 1)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
