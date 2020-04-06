import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { orderStatusReducer } from "./reducer";
import { tableNumberReducer } from "./reducer";
import { totalPricesReducer } from "./reducer";

const rootReducer = combineReducers({
  orderStatus: orderStatusReducer,
  tableNumber: tableNumberReducer,
  totalPrices: totalPricesReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
