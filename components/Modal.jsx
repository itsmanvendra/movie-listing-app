import React from "react";
import Link from "next/link";

const Modal = ({onClose}) => {
    return (
		<div className="fixed bottom-0 right-0 z-30 w-full h-full bg-black bg-opacity-50" onClick={onClose}>
			<div className="flex flex-col justify-start items-center bg-slate-800 bg-opacity-70 h-full py-20">
				<div className="mb-4 text-center w-3/4">
					<img
						src="/logo.jpg"
						alt="logo"
						className="mx-auto w-1/2 h-1/2"
					/>
					<h1 className="mt-2 text-2xl font-bold text-slate-300">Movie App</h1>
					{/* Logo here */}
				</div>
				<div className="flex flex-col mb-4 text-center text-slate-300 w-3/4">
					<Link
						href="/"
						className="mb-3 px-4 py-2 bg-[#15171A] font-semibold 
                        rounded-md  hover:border-2 hover:border-[#383ef7] active:opacity-70 active:bg-[#383ef7] active:border-[#383ef7] active:bottom-2">
						Genres
					</Link>
					<Link
						href="/trending"
						className="mb-3 px-4 py-2 bg-[#15171A] font-semibold 
                        rounded-md hover:border-2 hover:border-[#383ef7] active:opacity-70 active:bg-[#383ef7] active:border-[#383ef7] active:bottom-2">
						Trending
					</Link>
					<Link
						href="/favourites"
						className="mb-3 px-4 py-2 bg-[#15171A] font-semibold 
                        rounded-md hover:border-2 hover:border-[#383ef7] active:opacity-70 active:bg-[#383ef7] active:border-[#383ef7] active:bottom-2">
						Favorites
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Modal;
