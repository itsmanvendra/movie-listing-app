"use client";
import { useState, useEffect } from "react";
import Genres from "../components/Genres";
import MovieList from "../components/MovieList";
import Search from "../components/Search";
import SearchResult from "../components/SearchResult";

const Home = () => {
	const [listOfGenres, setListOfGenres] = useState([]);
	const [selectedGenre, setSelectedGenre] = useState(28);
	const [movieList, setMovieList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [showSearch, setShowSearch] = useState(false);
	const [searchResult, setSearchResult] = useState([]);
	const [isLoadingSearch, setIsLoadingSearch] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  };
	async function getData() {
		try {
			let data = await fetch(
				"https://api.themoviedb.org/3/genre/movie/list?language=en",
				options
			);
			data = await data.json();
			data = data.genres;
			setListOfGenres(data);
		} catch (error) {
			console.log(error);
		}
	}

	async function getMovieData(page, selectedGenre) {
		try {
			let data = await fetch(
				`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${selectedGenre}&with_origin_country=IN`,
				options
			);
			data = await data.json();
			const newData = [...movieList, ...data.results];
			setMovieList(newData);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			
		}
	}

	async function getSearchData(searchTerm) {
		try {

			setIsLoadingSearch(true);
			let data = await fetch(
				`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=true&language=en-US&page=1`,
				options
			);
			data = await data.json();
			setSearchResult(data.results);
			setIsLoadingSearch(false);
			setShowSearch(true);
		} catch (error) {
			console.log(error);
			
		}
	}
	const handleClick = (value) => {
		setCurrentPage(1);
		setSelectedGenre(value.id);
		setIsLoading(true);
		setMovieList([]);
	};
	const handlePageChange = () => {
		setCurrentPage((prev) => prev + 1);
	};
	const handleShowSearch = (value) => {
		setShowSearch(value);
	};
	const handleSearchTerm = (value) => {
		setSearchTerm(value);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="flex flex-col justify-center items-center">
			<Search
				searchTerm={searchTerm}
				handleSearchTerm={handleSearchTerm}
				getSearchData={getSearchData}
			/>
			{showSearch ? (
				<SearchResult
					handleShowSearch={handleShowSearch}
					searchResult={searchResult}
					isLoadingSearch={isLoadingSearch}
				/>
			) : (
				<>
					<Genres
						listOfGenres={listOfGenres}
						selectedGenre={selectedGenre}
						handleClick={handleClick}
					/>
					<div className="flex flex-col w-full justify-center items-center mt-2">
						<div className="p-4 justify-center items-center text-white font-bold text-2xl text-center">
							Genres
						</div>
							<MovieList
							movieList={movieList}
							getMovieData={getMovieData}
							isLoading={isLoading}
							page={currentPage}
							genre={selectedGenre}
							handlePageChange={handlePageChange}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Home;
