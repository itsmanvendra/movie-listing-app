import React from "react";
import NoData from "../components/NoData";
import MovieOverview from "../components/MovieOverview";
import SkeletonMovieOverview from "../components/SkeletonMovieOverview";
const SearchResult = ({ handleShowSearch, searchResult, isLoadingSearch }) => {
	const handleBackClick = () => {
		handleShowSearch(false);
	};
	return (
		<>
			<div className="flex flex-col justify-center items-center w-full">
				<div className="flex flex-col w-full justify-center items-center mt-2">
					<div className="flex w-full justify-center items-center mt-2">
						<button
							className="flex-none bg-blue-500 text-white px-4 py-1 rounded-md"
							onClick={handleBackClick}>
							Back
						</button>
						<div className="flex-1 p-4 justify-center items-center text-white font-bold text-2xl text-center">
							Search Results
						</div>
					</div>
					{isLoadingSearch ? (
						<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 w-full content-center justify-center md:justify-center gap-4">
							{Array.from({ length: 10 }).map((item, index) => {
								return (
									<SkeletonMovieOverview
										item={item}
										key={index}
									/>
								);
							})}
						</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 w-full content-center justify-center md:justify-center gap-4">
							{searchResult.length === 0 && <NoData />}
							{searchResult.length > 0 &&
								searchResult.map((item, index) => {
									return (
										<MovieOverview
											item={item}
											key={index}
										/>
									);
								})}
						</div>
					)}
				</div>
				<div className="bg-blue-100 text-gray-600 font-medium text-md w-full p-2 text-center">
					Note: Top 20 search results are only displayed here
				</div>
			</div>
		</>
	);
};

export default SearchResult;
