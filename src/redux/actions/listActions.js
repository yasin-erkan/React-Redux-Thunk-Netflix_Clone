import api from "../../utils/api";
import ActionTypes from "./../actionTypes";

// User ID
const account_id = import.meta.env.VITE_ACCOUNT_ID;

// Asynchronous thunk action to fetch movies in the watchlist
export const getWatchList = () => async (dispatch) => {
  dispatch({ type: ActionTypes.LIST_LOADING });

  api
    .get(`/account/${account_id}/watchlist/movies`)
    .then((res) =>
      dispatch({ type: ActionTypes.LIST_SUCCESS, payload: res.data.results })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message })
    );
};

// Asynchronous thunk action to add/remove a movie from the watchlist
export const toggleMovieList = (movie, isAdd) => async (dispatch) => {
  // Prepare the body content
  const body = {
    media_type: "movie",
    media_id: movie.id,
    watchlist: isAdd,
  };

  // Make the API request
  api
    .post(`/account/${account_id}/watchlist`, body)
    .then(() => {
      // Notify the reducer based on add/remove action
      isAdd
        ? dispatch({ type: ActionTypes.ADD_TO_LIST, payload: movie })
        : dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: movie });
    })
    .catch((err) => console.log(err));
};
