import React, { useEffect, useState } from "react";
// import { MdAdminPanelSettings } from "react-icons/md";
// import { RiVerifiedBadgeFill } from "react-icons/ri";
import "./NavigationAndSidebar.css";
// import { Link } from "react-router-dom";
// import { IoArrowBackCircle } from "react-icons/io5";
// import { IoArrowForwardCircle } from "react-icons/io5";
import FloatyBar from "./FloatyBar/FloatyBar";
import Header from "./Header/Header";
import AsideChat from "./AsideChat/AsideChat";
import AsideChats from "./AsideChats/AsideChats";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import BigNavigation from "./BigNavigation/BigNavigation";
import MiniNavigation from "./Mini-Navigation/MiniNavidation";
const NavigationAndSidebar = () => {
	const [isLoad, setIsLoad] = useState(true);
	const breakPoint = 680;

	const [width, setWidth] = useState(window.innerWidth);
	// const [isHidden, setIsHidden] = useState(false);
	const [delayedIcon, setDelayedIcon] = useState(null);

	// const toggleSidebar = () => {
	// 	setIsLargeHidden((prev) => !prev);

	// 	setTimeout(() => {
	// 		setDelayedIcon(
	// 			isLargeHidden ? (
	// 				<IoArrowForwardCircle size={23} />
	// 			) : (
	// 				<IoArrowBackCircle size={23} />
	// 			)
	// 		);
	// 	}, 250);
	// };

	// const handleScroll = () => {
	// 	const scrollPosition = window.scrollY;
	// 	const threshold = 100;
	// 	setIsHidden(scrollPosition > threshold);
	// };

	// useEffect(() => {
	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);

	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResizeWindow);
		return () => {
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, []);

	// useEffect(() => {
	// 	const handlePathChange = () => {
	// 		setCurrentPath(window.location.pathname);
	// 	};

	// 	window.addEventListener("popstate", handlePathChange);

	// 	return () => {
	// 		window.removeEventListener("popstate", handlePathChange);
	// 	};
	// }, []);

	useEffect(() => {
		const onPageLoad = () => {
			console.log("Page loaded!");
			setIsLoad(false);
		};

		if (document.readyState === "complete") {
			onPageLoad();
		} else {
			window.addEventListener("load", onPageLoad, false);
			return () => window.removeEventListener("load", onPageLoad);
		}
	}, []);

	return (
		<React.Fragment>
			<div className={`page-loader ${isLoad ? "" : "hidden"} indexZ`}>
				<div className="page-loader-decoration indexZ">
					<img src="/img/flockyFavicon.svg" alt="Flocky" />
				</div>

				<div className="page-loader-info indexZ">
					<img
						src="/img/FlockyLogoWhite.svg"
						alt="Flocky"
						style={{
							width: "70px",
							marginTop: "12px",
						}}
					/>

					<p className="page-loader-info-text indexZ">Loading...</p>
				</div>

				<div className="page-loader-indicator loader-bars indexZ">
					<div className="loader-bar"></div>
					<div className="loader-bar"></div>
					<div className="loader-bar"></div>
					<div className="loader-bar"></div>
					<div className="loader-bar"></div>
					<div className="loader-bar"></div>
					<div className="loader-bar"></div>
					<div className="loader-bar"></div>
				</div>
			</div>

			<MiniNavigation />

			<BigNavigation />

			<MobileNavigation />

			<AsideChats />

			<AsideChat />

			<Header />

			<FloatyBar />
		</React.Fragment>
	);
};

export default NavigationAndSidebar;
