import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const movieContext = useMovieContext();

  const favourites = movieContext?.favorites ?? [];

  if (favourites.length === 0) {
    return (
      <div className="container py-4">
        <h2>Your Favourite Movies</h2>
        <p>You have no favourite movies yet.</p>
        <p>
          Add some movies to your favourites list and they will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="container justify-content-center py-4">
      <h2 className="text-center">Your Favourites</h2>
      <div className="container d-flex flex-wrap gap-3 justify-content-center">
        {favourites.map((movie) => {
          const movieWithNumberId = {
            ...movie,
            id: typeof movie.id === "string" ? Number(movie.id) : movie.id,
          } as typeof movie & { id: number };

          // Normalize description for MovieCard typing; TMDB uses `overview`.
          const normalized = {
            description:
              (movie as any).description ?? (movie as any).overview ?? "",
            ...movieWithNumberId,
          };

          // If an item has no poster_path, you can optionally skip or provide a placeholder.
          return (
            <MovieCard movie={normalized as any} key={movieWithNumberId.id} />
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
