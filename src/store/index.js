import { createStore } from "redux";

const countReducer = (state = { count: 0 }, action) => {
	if (action.type === "increment") {
		return { count: state.count + action.amount };
	}
	if (action.type === "decrement") {
		return { count: state.count - 1 };
	}
	if (action.type === "empty") {
		return { count: 0 };
	}
	return state;
};

const store = createStore(countReducer);

export default store;
