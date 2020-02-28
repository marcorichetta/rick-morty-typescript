import React, { useContext } from "react";
import { Store } from "../Store";
import { IEpisodeProps } from "../interfaces";
import { toggleFavorite } from "../actions";

const EpisodeList = React.lazy((): any => import("../components/EpisodeList"));

export default function FavoritesPage(): JSX.Element {
	const { state, dispatch } = useContext(Store);

	const props: IEpisodeProps = {
		episodes: state.favorites,
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
