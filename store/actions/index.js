import { FETCH_FAILED, START_FETCHING, POSTS_FETCHED } from "./types";
import axios from "axios";

export const startFetch = () => ({
  type: START_FETCHING,
});

export const fetchFailed = () => ({
  type: FETCH_FAILED,
});
export const fetchSuccess = (payload) => {
  console.log("PAYLOAD");
  return {
    type: POSTS_FETCHED,
    payload,
  };
};
export const fetchPosts = () => {
  console.log("testeeee");
  return async (dispatch) => {
    console.log("o que e o dispatch", dispatch);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response);
      dispatch(fetchSuccess(response.data));
    } catch (error) {
      console.log("falhou", error);

      dispatch(fetchFailed("Deu pau na request"));
    }
  };
};
