import React, { useEffect, useRef, useState, useCallback } from "react";
import MovieOverview from "../components/MovieOverview";
import SkeletonMovieOverview from "../components/SkeletonMovieOverview";
import NoData from "../components/NoData";

const MovieList = ({
	movieList,
	getMovieData,
	isLoading,
	genre,
	page,
	handlePageChange,
}) => {
	const observer = useRef();
	const containerRef = useCallback((node) => {
		// if (isLoading) return;
		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				handlePageChange();
			}
		});
		if (node) observer.current.observe(node);
	}, []);

	useEffect(() => {
		getMovieData(page, genre);
	}, [page, genre]);

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 w-full content-center justify-center md:justify-center gap-4">
			{isLoading &&
				Array.from({ length: 19 }).map((item, index) => {
					return <SkeletonMovieOverview key={index} />;
				})}
			{!isLoading && movieList.length === 0 && <NoData />}
			{movieList.length > 0 &&
				movieList.map((item, index) => {
					if (movieList.length - 8 === index) {
						return (
							<div key={index} ref={containerRef}>
								<MovieOverview item={item} key={item.id} />
							</div>
						);
					}
					return <MovieOverview item={item} key={index} />;
				})}
		</div>
	);
};

export default MovieList;
