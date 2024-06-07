import axios from "axios";

export const getAllMovies = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/changes",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTJlYjJkMzQ2NDZlNTc5NzFiOGJmMTI5MGMxMzQ2NyIsInN1YiI6IjY1ZDhiMDdkYTI4NGViMDE2Mjg3ZGMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UFDNovEat4jUxdB9hOUzXZk8XLiWAwpC4JXlmltVWFo",
          accept: "application/json",
        },
      }
    );
    return {
      type: "GET_ALL_MOVIES_SUCCESS",
      payload: response.data,
    };
  } catch (error) {
    return {
      type: "GET_ALL_MOVIES_ERROR",
      payload: error,
    };
  }
};
