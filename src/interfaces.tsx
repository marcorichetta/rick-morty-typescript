export type Dispatch = React.Dispatch<IAction>

export interface IState {
	episodes: Array<IEpisode>; // Array of IEpisodes
	favorites: Array<IEpisode>; // Array of any objects with no specified length
}

export interface IAction {
	type: string;
	payload: Array<IEpisode>;
}

export interface IEpisode {
	id: number;
	name: string;
	image: { medium: string };
	season: number;
	number: number;
}

export interface IEpisodeProps {
	episodes: Array<IEpisode>;
	store: { state: IState; dispatch: Dispatch };
	toggleFavorite: (state: IState, dispatch: Dispatch, episode: IEpisode) => IAction;
	favorites: Array<IEpisode>;
}
