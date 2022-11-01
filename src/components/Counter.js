import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count);

	const toggleCounterHandler = () => {
		dispatch({ type: "empty" });
	};
	const incrementHandler = () => {
		return dispatch({ type: "increment" });
	};
	const incrementFiveHandler = () => {
		return dispatch({ type: "increment", amount: 5 });
	};
	const decrementHandler = () => {
		return dispatch({ type: "decrement" });
	};
	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{count}</div>
			<div>
				<button onClick={incrementHandler}> increment</button>
				<button onClick={decrementHandler}>Decrement</button>
				<button onClick={incrementFiveHandler}>increse by 5</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
