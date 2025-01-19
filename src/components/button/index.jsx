import { BsBookmarkPlusFill } from "react-icons/bs";
import { GoBookmarkSlashFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { toggleMovieList } from "../../redux/actions/listActions";

const Button = ({ movie }) => {
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store);

  const isAdded = list.find((item) => item.id == movie.id);

  const handleClick = () => {
    dispatch(toggleMovieList(movie, !isAdded));
  };

  return (
    <button
      onClick={handleClick}
      className="hero-btn bg-blue-600 hover:bg-blue-700"
    >
      {isAdded ? (
        <>
          <GoBookmarkSlashFill />
          Remove from the List
        </>
      ) : (
        <>
          <BsBookmarkPlusFill />
          Add to list
        </>
      )}
    </button>
  );
};

export default Button;
