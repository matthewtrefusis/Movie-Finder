import { useMovieContext } from "../contexts/MovieContext";

interface Props {
  title: string;
  releaseDate: string;
  description: string;
  imageUrl: string;
  onFavourite?: () => void;
}
interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
}

function MovieCard({ movie }: { movie: Movie }) {
  const movieContext = useMovieContext();
  const favorite = movieContext?.isFavorite
    ? movieContext.isFavorite(movie.id)
    : false;

  function onFavoriteClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!movieContext) return;
    if (favorite) movieContext.removeFromFavorites(movie.id);
    else movieContext.addToFavorites(movie);
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.release_date}</p>
        <p className="card-text">{movie.overview}</p>
        <button
          className={`btn btn-light ${favorite ? "active" : ""}`}
          onClick={onFavoriteClick}
        >
          ❤️
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
