import React from "react";

const SkeletonGenres = () => {
    return (
		<div className=" mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full content-center justify-center text-white border-slate-600 border-2 rounded-lg px-4 py-4">
			{Array.from({ length: 19 }).map((item, index) => {
				return (
					<div
						key={index}
						className="bg-[#282832] p-2 rounded-lg text-center font-semibold text-lg opacity-50"
                    >
                        <p className="opacity-0">Loading</p>
					</div>
				);
			})}
		</div>
	);
};

export default SkeletonGenres;
