import { createSlice } from "@reduxjs/toolkit";
const inistialcountReducer = { count: 0, showCounter: true };
const counterSlice = createSlice({
	name: "count",
	initialState: inistialcountReducer,
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
export const counterAction = counterSlice.actions;
export default counterSlice.reducer;
