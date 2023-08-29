"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
    
	const [favourites, setFavourites] = useState([]);
	const handleFavourites = (item, isPresent=false) => {
		console.log(item);
		if (isPresent) {
			setFavourites((prev) => {
				return prev.filter((movie) => movie.id !== item.id);
			});
			return;
		}
		setFavourites((prev) => [...prev, item]);
	};
	return (
		<GlobalContext.Provider value={{ favourites, handleFavourites }}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
