import { useEffect, useMemo, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { getMoviesByGenre } from "../services/api";

const GENRE_MAP: Record<string, { id: number; label: string }> = {
  action: { id: 28, label: "Action" },
  adventure: { id: 12, label: "Adventure" },
  animation: { id: 16, label: "Animation" },
  comedy: { id: 35, label: "Comedy" },
  crime: { id: 80, label: "Crime" },
  documentary: { id: 99, label: "Documentary" },
  drama: { id: 18, label: "Drama" },
  family: { id: 10751, label: "Family" },
  fantasy: { id: 14, label: "Fantasy" },
  history: { id: 36, label: "History" },
  horror: { id: 27, label: "Horror" },
  music: { id: 10402, label: "Music" },
  mystery: { id: 9648, label: "Mystery" },
  romance: { id: 10749, label: "Romance" },
  "science-fiction": { id: 878, label: "Science Fiction" },
  "tv-movie": { id: 10770, label: "TV Movie" },
  thriller: { id: 53, label: "Thriller" },
  war: { id: 10752, label: "War" },
  western: { id: 37, label: "Western" },
};

const GenrePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const meta = useMemo(() => (slug ? GENRE_MAP[slug] : undefined), [slug]);
  const [movies, setMovies] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (!meta) return;
      setLoading(true);
      try {
        const results = await getMoviesByGenre(meta.id);
        setMovies(results);
        setError(null);
      } catch (e) {
        console.error(e);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [meta]);

  if (!meta) return <Navigate to="/" replace />;

  return (
    <div className="GenrePage">
      <h2 className="text-center">{meta.label} Movies</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="container d-flex flex-wrap gap-3 justify-content-center">
          {movies.map((movie: any) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GenrePage;
