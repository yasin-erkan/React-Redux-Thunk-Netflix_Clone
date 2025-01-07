import { baseImgUrl } from "../../utils/constants";

const Banner = ({ movie }) => {
  return (
    <div className="h-[20vh] md:h-[30vh] bg-red-500 relative drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]">
      <img
        src={baseImgUrl + movie.backdrop_path}
        className="size-full rounded-sm object-cover"
      />

      <div className="bg-black absolute inset-0 grid place-items-center bg-opacity-40 p-3">
        <h2 className="text-3xl md:text-4xl font-semibold font-mono text-center">
          {movie.title}
        </h2>
      </div>
    </div>
  );
};

export default Banner;
