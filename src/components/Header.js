import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/auth";
const Header = () => {
	const isAuthenticated = useSelector((state) => state.authentication.isAuth);
	const dispatch = useDispatch();
	const onLogoutHandler = () => {
		dispatch(authAction.logout());
	};
	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			{isAuthenticated && (
				<nav>
					<ul>
						<li>
							<a href="/">My Products</a>
						</li>
						<li>
							<a href="/">My Sales</a>
						</li>
						<li>
							<button onClick={onLogoutHandler}>Logout</button>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Header;
