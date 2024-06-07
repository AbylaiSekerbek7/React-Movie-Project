import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../store/actions";

const Home = () => {
  const dispatch = useDispatch();
  const movieList = dispatch(getAllMovies());

  // const [moviesList, setMoviesList] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://api.themoviedb.org/3/movie/changes", {
  //       headers: {
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTJlYjJkMzQ2NDZlNTc5NzFiOGJmMTI5MGMxMzQ2NyIsInN1YiI6IjY1ZDhiMDdkYTI4NGViMDE2Mjg3ZGMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UFDNovEat4jUxdB9hOUzXZk8XLiWAwpC4JXlmltVWFo",
  //         accept: "application/json",
  //       },
  //     })
  //     .then((res) => setMoviesList(res.data))
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // console.log(moviesList);
  console.log(movieList);

  return (
    <>
      <div>Home</div>
    </>
  );
};

export default Home;
