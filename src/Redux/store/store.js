import { createStore } from "redux";
import quantity_reducer from "../reducer/quantity_state";
const store = createStore(
  quantity_reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
