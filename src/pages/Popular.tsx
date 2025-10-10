import MovieCard from "../components/MovieCard";
import { FormEvent, useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

const Popular = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();
    if (!searchTerm.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const results = await searchMovies(searchTerm);
      setMovies(results);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }

    setSearchTerm("");
  };

  return (
    <div className="Popular">
        <h2 className="text-center">Popular Movies</h2>

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

export default Popular;
