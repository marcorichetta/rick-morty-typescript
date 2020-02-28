import React, { useEffect, useContext } from "react";
import { IEpisodeProps } from "../interfaces";
import { Store } from "../Store";
import { fetchData, toggleFavorite } from "../actions";

const EpisodeList = React.lazy((): any => import("../components/EpisodeList"));

export default function HomePage(): JSX.Element {
	const { state, dispatch } = useContext(Store);

	// Check if there's episodes, if not fetch episodes from API
	useEffect(() => {
		state.episodes.length === 0 && fetchData(dispatch);
	});

	// Props to be passed to EpisodeList
	const props: IEpisodeProps = {
		episodes: state.episodes,
		store: { state, dispatch },
		toggleFavorite,
		favorites: state.favorites
	};

	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<section className="episode-layout">
				<EpisodeList {...props} />
			</section>
		</React.Suspense>
	);
}
