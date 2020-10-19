import { createStore, compose, applyMiddleware } from "redux";
import Reducer from "./reducers/reducer";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
