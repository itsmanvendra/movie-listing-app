"use client";
import React, { useState, useEffect } from "react";
import MovieList from "../../components/MovieList";


const Trending = () => {
	const [listOfTrending, setListOfTrending] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const handleCurrentPage = () => {
		setCurrentPage((prev) => prev + 1);
	};
	const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  };

	async function getTrendingMovieData(page, selectedGenre = "Action") {
		try {
			let data = await fetch(
				`https://api.themoviedb.org/3/trending/movie/week?language=en-US&with_origin_country=IN&page=${page}`,
				options
			);
			data = await data.json();
			const newData = [...listOfTrending, ...data.results];
			setListOfTrending(newData);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getTrendingMovieData(currentPage);
	}, []);
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="flex flex-col w-full justify-center items-center mt-2">
				<div className="p-4 justify-center items-center text-white font-bold text-2xl text-center">
					Trending Movies
				</div>
				<MovieList
					movieList={listOfTrending}
					getMovieData={getTrendingMovieData}
					isLoading={isLoading}
					page={currentPage}
					handlePageChange={handleCurrentPage}
				/>
			</div>
		</div>
	);
};

export default Trending;
