const BASE_URL = 'https://api.jikan.moe/v4';

// Search anime
export const searchAnime = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/anime?q=${query}&sfw=true`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error searching anime:', error);
    return [];
  }
};

// Get anime by ID
export const getAnimeById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/anime/${id}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching anime details:', error);
    return null;
  }
};

// Get top anime (Popular)
export const getTopAnime = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/top/anime?page=${page}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching top anime:', error);
    return [];
  }
};

// Get currently airing anime
export const getAiringAnime = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/anime?status=airing&order_by=popularity&page=${page}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching airing anime:', error);
    return [];
  }
};

// Get upcoming anime (New)
export const getUpcomingAnime = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/anime?status=upcoming&order_by=popularity&page=${page}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching upcoming anime:', error);
    return [];
  }
};

// Get anime by type (TV, Movie, OVA, etc.)
export const getAnimeByType = async (type, page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/anime?type=${type}&order_by=popularity&page=${page}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching ${type} anime:`, error);
    return [];
  }
};

// Get seasonal anime
export const getSeasonalAnime = async (year, season, page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/seasons/${year}/${season}?page=${page}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching seasonal anime:', error);
    return [];
  }
};

// Get anime recommendations
export const getAnimeRecommendations = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/recommendations/anime?page=${page}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching anime recommendations:', error);
    return [];
  }
};
