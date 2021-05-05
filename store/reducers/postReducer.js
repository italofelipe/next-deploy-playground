import { START_FETCHING, FETCH_FAILED, POSTS_FETCHED } from "../actions/types";
const initialState = {
  posts: [],
  loading: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FAILED:
      return {
        ...state,
        loading: false,
      };
    case POSTS_FETCHED:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
