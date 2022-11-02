import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/index";

import classes from "./Counter.module.css";

const Counter = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count);
	const showToggle = useSelector((state) => state.showCounter);

	const toggleCounterHandler = () => {
		dispatch(counterAction.toggle());
	};
	const incrementHandler = () => {
		return dispatch(counterAction.increment());
	};
	const incrementFiveHandler = () => {
		return dispatch(counterAction.increasre(5));
	};
	const decrementHandler = () => {
		return dispatch(counterAction.decrement());
	};
	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showToggle && <div className={classes.value}>{count}</div>}
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
