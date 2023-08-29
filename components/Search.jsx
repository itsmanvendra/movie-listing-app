import React, { useEffect} from "react";
import useDebounce from "../customHooks/useDebounce";



const Search = ({
    searchTerm,
    handleSearchTerm,
    getSearchData
}) => {
	
	const debouncedSearch = useDebounce(searchTerm, 2000);
	

	useEffect(() => {
		if (debouncedSearch) {
			getSearchData(debouncedSearch);
			console.log(debouncedSearch);
		}
	}, [debouncedSearch]);

	return (
		<div className="flex mb-4 w-full justify-center items-center">
			<input
				type="text"
				placeholder="Search with movie or person name...."
				className="w-3/4 px-4 py-2 border rounded"
				value={searchTerm}
				onChange={(e) => handleSearchTerm(e.target.value)}
			/>
		</div>
	);
};

export default Search;



