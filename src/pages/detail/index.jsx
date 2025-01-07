import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "./../../../api";
import Error from "../../components/error/index";
import Loader from "../../components/loader/index";
import Buttons from "./buttons";
import Banner from "./banner";
import Content from "./content";
import Actors from "./actors";
import Trailers from "./trailers";

const Detail = () => {
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const params = {
      append_to_response: "images, credits, videos, reviews",
    };
    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err.message));
  }, []);
  if (error) return <Error info={error} />;
  if (!movie) return <Loader />;

  return (
    <div>
      <Buttons movie={movie} />

      <Banner movie={movie} />

      <Content movie={movie} />

      <Actors movie={movie} />

      <Trailers movie={movie} />
    </div>
  );
};
export default Detail;
