import { combineReducers } from "redux";

import restaurantReducer from "./Restaurant";

export default combineReducers({
  restaurant: restaurantReducer,
});
