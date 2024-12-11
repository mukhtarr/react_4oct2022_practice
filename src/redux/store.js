
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import itemReducer from "./item/itemReducer";

const store = createStore(itemReducer, applyMiddleware(logger))

export default store

