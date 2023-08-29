"use client";
import React, { useState } from "react";
import { BiSolidHeart, BiHeart } from "react-icons/bi";
import { useGlobalContext } from "../context/Context";

const MovieOverview = ({ item }) => {
	const { favourites, handleFavourites } = useGlobalContext();
	const [toggle, setToggle] = useState(
		favourites.some((fav) => fav.id === item.id)
	);

	const handleFavouriteClicked = (item) => {
		if (favourites.some((fav) => fav.id === item.id)) {
			handleFavourites(item, true);
		} else {
			handleFavourites(item);
		}
		setToggle((prev) => !prev);
	};

	const bgImage = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;

	return (
		<div className="card relative w-11/12 md:w-60 h-[410px] md:h-[360px] my-3 mx-4 md:my-5 md:mx-0 cursor-pointer rounded-xl overflow-hidden border-2 border-gray-700">
			<button
				className="absolute bg-black text-white p-2 z-20 right-0 m-3 rounded-full text-xl"
				onClick={() => handleFavouriteClicked(item)}>
				{" "}
				{toggle ? <BiSolidHeart /> : <BiHeart />}
			</button>
			<div className="absolute bottom-0 w-full flex justify-between items-end p-3 z-20">
				<h1 className="text-white text-xl font-semibold  break-normal break-words">
					{item.title}
				</h1>
				<h1 className="font-bold text-green-500 p-2 bg-zinc-900 rounded-full">
					{item.vote_average}
				</h1>
			</div>
			<div>
				<span style={{ color: "transparent", display: "inline-block" }}>
					{item.poster_path && (
						<img className="img object-cover" src={bgImage} />
					)}
				</span>
			</div>
		</div>
	);
};

export default MovieOverview;
