import { configureStore, createSlice } from "@reduxjs/toolkit";

const countReducer = { count: 0, showCounter: true };
const counterSlice = createSlice({
	name: "count",
	initialState: countReducer,
	reducers: {
		increment(state) {
			state.count++;
		},
		decrement(state) {
			state.count--;
		},
		increasre(state, action) {
			state.count = state.count + action.payload;
		},
		toggle(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

const store = configureStore({
	reducer: counterSlice.reducer,
});
export const counterAction = counterSlice.actions;

export default store;
