import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODk1Nzc2N2FlN2UxYzFiNDRjODU0MzllNzA5OWJkZCIsIm5iZiI6MTczNjAxNTU1OC4yOTUsInN1YiI6IjY3Nzk3ZWM2MzhkMjZhMmE2MzcyODVlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CgxLIEqlZ53uA7KW6zls7zJEzCC-FWeF2Dr1Z5Wt2Gs",
  },
});
export default api;
