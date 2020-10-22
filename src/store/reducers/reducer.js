import { combineReducers } from "redux";
import App_Reducer from "./app_reducer";
import User_Reducer from "./user_reducer";
import API_REDUCER from "./api_reducer";

const Reducer = combineReducers({
  App_Data: App_Reducer,
  User_Data: User_Reducer,
  corona: API_REDUCER,
});

export default Reducer;
