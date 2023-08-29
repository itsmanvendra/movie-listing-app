import React from "react";
import SkeletonGenres from "../components/SkeletonGenres";


const Genres = ({ listOfGenres, selectedGenre, handleClick }) => {
	
    const changeGenre = (item) => {
        handleClick(item);
    }

	return (
		<>
			{listOfGenres.length === 0 && <SkeletonGenres />}
			{listOfGenres.length > 0 && (
				<div className=" mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full content-center justify-center text-white border-slate-600 border-2 rounded-lg px-4 py-4">
					{listOfGenres.map((item) => {
                        if (selectedGenre === item.id) {
                            return (
								<div
									key={item.id}
									className="bg-slate-300 p-2 rounded-xl, text-[#282832] text-center font-semibold text-lg"
									>
									{item.name}
								</div>
							);
                        }
						return (
							<div
								key={item.id}
								className="bg-[#282832] p-2 rounded-lg text-center font-semibold text-lg"
								onClick={() => changeGenre(item)}>
								{item.name}
							</div>
						);
					})}
				</div>
			)}
		</>
	);
};    
export default Genres;
