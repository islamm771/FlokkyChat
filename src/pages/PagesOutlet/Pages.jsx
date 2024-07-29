import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationAndSidebar from "../../components/NavigationAndSidebar/NavigationAndSidebar";
import { useSelector } from "react-redux";
const MainPage = () => {
	const isLargeHidden = useSelector((state) => state.outlet.isLargeHidden);
	const isChatsOpen = useSelector((state) => state.outlet.isChatsOpen);
	const isChatOpen = useSelector((state) => state.outlet.isChatOpen);

	const [width, setWidth] = useState(window.innerWidth);
	const [isHidden, setIsHidden] = useState(false);
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	const breakpointForGrid = 1365;
	const breakpoint = 680;

	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResizeWindow);

		return () => {
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, []);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const threshold = 100;
		setIsHidden(scrollPosition > threshold);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<NavigationAndSidebar />
			<div
				className={`content-grid`}
				style={{
					transform: `translate(${
						width >= breakpointForGrid &&
						isLargeHidden &&
						!isChatsOpen &&
						!isChatOpen
							? `${100 + (width - breakpointForGrid) * 0.5}px`
							: width >= breakpointForGrid && isLargeHidden && isChatsOpen
							? `${100 + (width - breakpointForGrid) * 0.5 - 110}px`
							: width >= breakpointForGrid &&
							  !isLargeHidden &&
							  !isChatsOpen &&
							  !isChatOpen
							? `${100 + (width - breakpointForGrid) * 0.5 + 110}px`
							: "0px"
					}, 0px)`,
					transition: "transform .68s ease-in-out 0s",
				}}
			>
				<Outlet />
			</div>
		</>
	);
};

export default MainPage;
