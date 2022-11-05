import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Counter";
import AuthReducer from "./auth";

const store = configureStore({
	reducer: { count: CounterReducer, authentication: AuthReducer },
});

export default store;
