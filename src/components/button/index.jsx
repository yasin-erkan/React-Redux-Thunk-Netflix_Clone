import { BsBookmarkPlusFill } from "react-icons/bs";

const Button = () => {
  return (
    <button className="hero-btn bg-blue-600 hover:bg-blue-700">
      <BsBookmarkPlusFill />
      Add to the list
    </button>
  );
};

export default Button;
