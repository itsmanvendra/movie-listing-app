"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SiCodefactor } from "react-icons/si";
import { VscChromeClose } from "react-icons/vsc";
import Modal from "../components/Modal";

const NavBar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

  	const toggleModal = () => {
			setIsModalOpen(!isModalOpen);
		};
	return (
		<>
			<div className="fixed bottom-6 right-10 z-50 lg:hidden">
				{isModalOpen ? (
					<button
						className="bg-red-500 text-white p-4 rounded-full z-auto"
						onClick={toggleModal}>
						<VscChromeClose />
					</button>
				) : (
					<button
						className="bg-blue-500 text-white p-4 rounded-full"
						onClick={toggleModal}>
						<SiCodefactor />
					</button>
				)}
				{isModalOpen && <Modal onClose={toggleModal} />}
			</div>
			<div className="hidden lg:flex lg:flex-col w-1/4 bg-black text-white p-4 h-screen sticky">
				<div className="mb-4 text-center">
					<img
						src="/logo.jpg"
						alt="logo"
						className="mx-auto w-1/2 h-1/2"
					/>
					<h1 className="mt-2 text-2xl font-bold">Movie App</h1>
				</div>
				<div className="flex flex-col mb-4 text-center">
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
		</>
	);
};

export default NavBar;
