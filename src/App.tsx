import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
import Popular from "./pages/Popular";
import Action from "./pages/genre/Action";

function App() {
  const movieNumber = 2;
  return (
    <MovieProvider>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/genre/action" element={<Action />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
