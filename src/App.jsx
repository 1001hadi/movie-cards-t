import "./App.css";
import { MovieCard } from "./components/MovieCard";

function App() {
  const movieNumber = 1;
  return (
    <>
      {movieNumber === 1 && (
        <MovieCard movie={{ title: "Benyamin's film", release_date: "2015" }} />
      )}
    </>
  );
}

export default App;
