import "../style/globals.css";
import NavBar from "../components/NavBar"
// import { GlobalContextProvider } from "@context/Context";
import { GlobalContextProvider} from "../context/Context";

export const metadata = {
	title: "Movie Listing App",
	description: "A movie listing app built with Next.js",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<div className="flex h-screen">
					<NavBar />

					<div className=" w-full lg:w-3/4 bg-gradient-to-tr from-gray-700 via-gray-900 to-black p-4 overflow-y-auto">
						<div className="w-full">
							<GlobalContextProvider>
								{children}
							</GlobalContextProvider>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
