const RAW_API_KEY = (import.meta.env.VITE_TMDB_API_KEY as string) ?? "";
// Sanitize accidental quotes/semicolons anywhere in the key
let API_KEY = RAW_API_KEY.trim().replace(/["';]/g, "");
const BASE_URL = "https://api.themoviedb.org/3";

function assertApiKey() {
  if (!API_KEY || typeof API_KEY !== "string" || API_KEY.trim() === "") {
    throw new Error(
      "TMDB API key is missing. Set VITE_TMDB_API_KEY in your .env file and restart the dev server."
    );
  }
}

async function fetchJson(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    const msg = await response.text().catch(() => "");
    throw new Error(`TMDB request failed ${response.status} ${response.statusText}: ${msg}`);
  }
  return response.json();
}

export const getPopularMovies = async () => {
  assertApiKey();
  const data = await fetchJson(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return Array.isArray(data.results) ? data.results : [];
};

export const searchMovies = async (query: string) => {
  assertApiKey();
  const data = await fetchJson(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  return Array.isArray(data.results) ? data.results : [];
};

// Fetch movies by genre using TMDB Discover endpoint
export const getMoviesByGenre = async (genreId: number) => {
  assertApiKey();
  const data = await fetchJson(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
  );
  return Array.isArray(data.results) ? data.results : [];
};