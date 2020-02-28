import React, { createContext, useReducer } from "react";
import { IAction, IState } from "./interfaces";

const initialState: IState = {
	episodes: [],
	favorites: []
};

export const Store = createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
	switch (action.type) {
		case "FETCH_DATA":
			return { ...state, episodes: action.payload };
		case "ADD_FAV":
			return { ...state, favorites: [...state.favorites, action.payload] };
		case "REMOVE_FAV":
			return { ...state, favorites: action.payload };
		default:
			return state;
	}
}

export function StoreProvider(props: JSX.ElementChildrenAttribute): JSX.Element {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
}
