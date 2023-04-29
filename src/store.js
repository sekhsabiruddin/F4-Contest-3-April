import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//check letet can be mistake//
import rootReducer from "./reducers/reducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
