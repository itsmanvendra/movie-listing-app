"use client";
import { useGlobalContext } from "../../context/Context";
import MovieOverview from "../../components/MovieOverview";
import NoData from "../../components/NoData";

const Favourites = () => {
	const { favourites } = useGlobalContext();

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="flex flex-col w-full justify-center items-center mt-2">
				<div className="p-4 justify-center items-center text-white font-bold text-2xl text-center">
					Favourites
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 w-full content-center justify-center md:justify-center gap-4">
					{favourites.length === 0 && <NoData />}
					{favourites.length > 0 &&
						favourites.map((item, index) => {
							return <MovieOverview item={item} key={item.id} />;
						})}
				</div>
			</div>
		</div>
	);
};

export default Favourites;
