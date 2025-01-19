import { Splide, SplideSlide } from "@splidejs/react-Splide";
import ReactPlayer from "react-player";

const Trailers = ({ videos }) => {
  const isRender = videos && videos.length > 0;

  return isRender ? (
    <div className="mb-10">
      <h2 className="font-semibold text-lg md:text-xl my-5">Trailers</h2>

      <Splide options={{ pagination: false }}>
        {videos.map((video) => (
          <SplideSlide>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video.key}`}
              width={"100%"}
              height="400px"
              controls
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  ) : (
    <div className="text-center mb-10 text-zinc-400">No Trailers found</div>
  );
};

export default Trailers;
