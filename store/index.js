import { createStore, applyMiddleware } from "redux";
import { postsReducer } from "./reducers/postReducer";

import thunk from "redux-thunk";

const middleware = [thunk];
export const store = createStore(postsReducer, applyMiddleware(...middleware));
