import { useEffect, useState } from "react";
import Hero from "./hero";
import api from "../../utils/api";
import Error from "../../components/error";
import Loader from "../../components/loader";
import MovieList from "./movie-list";

const Home = () => {
  const [genres, setGenres] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/genre/movie/list?language=en")
      .then((res) => setGenres(res.data.genres))
      .catch((er) => setError(error.message));
  }, []);

  return (
    <div>
      <Hero />

      {error ? (
        <Error info={error} />
      ) : !genres ? (
        <Loader />
      ) : (
        genres.map((genre) => <MovieList key={genre.id} genre={genre} />)
      )}
    </div>
  );
};

export default Home;
