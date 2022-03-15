import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";

const loggerMiddleware = createLogger();

const middlewares = [thunkMiddleware];
middlewares.push(loggerMiddleware);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
