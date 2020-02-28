import { IEpisode, IAction, IState } from "./interfaces";

export const fetchData = async (dispatch: any) => {

	const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

	const data = await fetch(URL);
	const dataToJSON = await data.json();

	return dispatch({
		type: "FETCH_DATA",
		payload: dataToJSON._embedded.episodes
	});
};

export const toggleFavorite = (state:IState, dispatch:any, episode: IEpisode | any): IAction => {
	// Checks if the episode is already faved
	const favedEpisode = state.favorites.includes(episode);

	let dispatchObject = {
		type: "ADD_FAV",
		payload: episode
	};

	// If the episode is already faved
	if (favedEpisode) {
		// Delete it from the favorites array
		const favoritesWOEpisode = state.favorites.filter((fav: IEpisode) => fav.id !== episode.id);

		dispatchObject = {
			type: "REMOVE_FAV",
			payload: favoritesWOEpisode
		};
	}

	return dispatch(dispatchObject);
};
