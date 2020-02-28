import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from "./Store";
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
	<StoreProvider>
		<Router>
			<App />
		</Router>
	</StoreProvider>,
	document.getElementById("root")
);
