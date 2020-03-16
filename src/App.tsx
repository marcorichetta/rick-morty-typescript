import React, { Fragment, useContext } from "react";
import "./App.css";
import { Store } from "./Store";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";

export default function App(): JSX.Element {
	const { state } = useContext(Store);

	return (
		<Fragment>
			<header className="header">
				<div>
					<h1>Rick and Morty Episode Picker</h1>
					<div>
						<Link style={{ padding: "10px" }} to="/">
							Home
						</Link>
						<Link style={{ padding: "10px" }} to="/favorites">
							Favorites: {state.favorites.length}
						</Link>
					</div>
				</div>
			</header>
			<Switch>
				<Route path="/favorites">
					<FavoritesPage />
				</Route>
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>
		</Fragment>
	);
}
