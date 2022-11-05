import { createSlice } from "@reduxjs/toolkit";
const intialLogin = { isAuth: false };
const authSlice = createSlice({
	name: "authentication",
	initialState: intialLogin,
	reducers: {
		login(state) {
			state.isAuth = true;
		},
		logout(state) {
			state.isAuth = false;
		},
	},
});
export const authAction = authSlice.actions;
export default authSlice.reducer;
