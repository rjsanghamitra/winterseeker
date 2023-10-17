import {configureStore, combineReducers} from "@reduxjs/toolkit";
import locationReducer from "./locationReducer.js";

const rootReducer = combineReducers({
    location: locationReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;