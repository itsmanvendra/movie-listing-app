import React, { useState } from "react";

const SkeletonMovieOverview = () => {
	return (
		<div className="card relative w-11/12 md:w-60 h-[410px] md:h-[360px] my-3 mx-4 md:my-5 md:mx-0 cursor-pointer rounded-xl overflow-hidden bg-[#282832] opacity-75">
			<button className="absolute bg-black text-white p-2 z-20 right-0 m-3 rounded-full text-xl">
				{" "}
                <svg
                    opacity="0"
					stroke="currentColor"
					fill="currentColor"
					strokeWidth="0"
					viewBox="0 0 1024 1024"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
				</svg>
			</button>
			<div className="absolute bottom-0 w-full flex justify-between items-end p-3 z-20">
				<h1 className="text-white text-xl font-semibold  break-normal break-words">
					{/* {item.title} */}
				</h1>
				<h1 className="font-bold text-green-500 p-2 bg-zinc-900 rounded-full">
					<p className="opacity-0">5.8</p>
				</h1>
			</div>
			<div>
				<span style={{ color: "transparent", display: "inline-block" }}>
					{/* <img className="img object-cover" src={bgImage} /> */}
				</span>
			</div>
		</div>
	);
};

export default SkeletonMovieOverview;
