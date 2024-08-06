import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
	setIsMobileNavOpen,
	setIsOverlayVisible,
	setIsGroupsMenuOpen,
	setIsStoreMenuOpen,
	setIsMainLinksMenuOpen,
	setIsProfileMenuOpen,
	setIsAccountMenuOpen,
	setIsMyFlokkMenuOpen,
	setIsMySidekicksMenuOpen,
	setIsMarketplaceMenuOpen,
} from "../../../app/feature/outletSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MyFlokkItems from "../NavigationComponents/MyFlokkItems";
import MySidekicksItems from "../NavigationComponents/MySidekicksItems";
import MyMarketPlaceItems from "../NavigationComponents/MyMarketPlaceItems";
import CareerItems from "../NavigationComponents/CareerItems";
import Crea8Items from "../NavigationComponents/Crea8Items";

const MobileNavigation = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const isMobileNavOpen = useSelector((state) => state.outlet.isMobileNavOpen);
	const isOverlayVisible = useSelector(
		(state) => state.outlet.isOverlayVisible
	);
	const isGroupsMenuOpen = useSelector(
		(state) => state.outlet.isGroupsMenuOpen
	);
	const isStoreMenuOpen = useSelector((state) => state.outlet.isStoreMenuOpen);
	const isMainLinksMenuOpen = useSelector(
		(state) => state.outlet.isMainLinksMenuOpen
	);
	const isProfileMenuOpen = useSelector(
		(state) => state.outlet.isProfileMenuOpen
	);
	const isAccountMenuOpen = useSelector(
		(state) => state.outlet.isAccountMenuOpen
	);
	const isMyFlokkMenuOpen = useSelector(
		(state) => state.outlet.isMyFlokkMenuOpen
	);
	const isMySidekicksMenuOpen = useSelector(
		(state) => state.outlet.isMySidekicksMenuOpen
	);
	const isMarketplaceMenuOpen = useSelector(
		(state) => state.outlet.isMarketplaceMenuOpen
	);

	return (
		<>
			<div
				className={`ourOverlay ${
					isOverlayVisible ? "showOurOverlay" : "hideOurOverlay"
				}`}
				onClick={() => {
					dispatch(setIsOverlayVisible({ value: false }));
					dispatch(setIsMobileNavOpen({ value: false }));
				}}
				onTouchMove={() => {
					dispatch(setIsOverlayVisible({ value: false }));
					dispatch(setIsMobileNavOpen({ value: false }));
				}}
			></div>
			<nav
				id="navigation-widget-mobile"
				className={`navigation-widget navigation-widget-mobile sidebar left ${
					isMobileNavOpen ? "" : "hidden"
				}`}
				data-simplebar
			>
				<div
					className="navigation-widget-close-button"
					onClick={() => {
						dispatch(setIsOverlayVisible({ value: false }));
						dispatch(setIsMobileNavOpen({ value: false }));
					}}
				>
					<svg className="navigation-widget-close-button-icon icon-back-arrow">
						<use xlinkHref="#svg-back-arrow"></use>
					</svg>
				</div>

				<div className="navigation-widget-info-wrap">
					<div className="navigation-widget-info">
						<div className="user-avatar small no-outline user-chat user-status-avatar">
							<img src="/img/avatar/01.jpg" alt="Profile" />
							<RiVerifiedBadgeFill size={16} color={"#36e9f7"} />
							<div className="badge-container-nav-mobile">
								<img src="/img/download.png" alt="Padge" />
								<p className="badge-number-nav-mobile">12</p>
							</div>
						</div>
						<p className="navigation-widget-info-title navTitle">
							<div
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "start",
									gap: "5px",
								}}
							>
								Marina Valentine{" "}
								<MdAdminPanelSettings size={20} color={"#d7006a"} />
							</div>
						</p>

						<p className="navigation-widget-info-text navInfo">
							Marketing Manager
						</p>
						<p className="navigation-widget-info-text navInfo">Brandmarks</p>
					</div>
				</div>

				{!location.pathname.includes("/marketplace") &&
					!location.pathname.includes("/chat") &&
					!location.pathname.includes("/crea8") &&
					!location.pathname.includes("/careers") && (
						<div className="badge-list small">
							<div className="badge-item">
								<img src="img/badge/gold-s.png" alt="badge-gold-s" />
							</div>
							<div className="badge-item">
								<img src="img/badge/age-s.png" alt="badge-age-s" />
							</div>
							<div className="badge-item">
								<img
									src="img/badge/caffeinated-s.png"
									alt="badge-caffeinated-s"
								/>
							</div>
							<div className="badge-item">
								<img src="img/badge/warrior-s.png" alt="badge-warrior-s" />
							</div>
							<a className="badge-item" href="profile-badges.html">
								<img src="img/badge/blank-s.png" alt="badge-blank-s" />
								<p className="badge-item-text">+9</p>
							</a>
						</div>
					)}

				{!location.pathname.includes("/marketplace") &&
					!location.pathname.includes("/chat") &&
					!location.pathname.includes("/crea8") &&
					!location.pathname.includes("/careers") && (
						<div className="user-stats">
							<div className="user-stat">
								<p className="user-stat-title">930</p>
								<p className="user-stat-text">posts</p>
							</div>
							<div className="user-stat">
								<p className="user-stat-title">82</p>
								<p className="user-stat-text">friends</p>
							</div>
							<div className="user-stat">
								<p className="user-stat-title">5.7k</p>
								<p className="user-stat-text">visits</p>
							</div>
						</div>
					)}

				<ul className="menu">
					{location.pathname.includes("/marketplace") && (
						<p className="big-nav-title-secondary">Marketplace</p>
					)}
					{location.pathname.includes("/chat") && (
						<p className="big-nav-title-secondary">Chat</p>
					)}
					{location.pathname.includes("/crea8") && (
						<p className="big-nav-title-secondary">Crea8</p>
					)}
					{location.pathname.includes("/careers") && (
						<p className="big-nav-title-secondary">Careers</p>
					)}
					{location.pathname.toString().includes("/marketplace") && (
						<li class="menu-item active">
							<Link
								className="market-icon-active menu-item-link text-tooltip-tfr"
								data-title="Newsfeed"
								to="/marketplace"
								onClick={() => {
									dispatch(setIsOverlayVisible({ value: false }));
									dispatch(setIsMobileNavOpen({ value: false }));
								}}
							>
								<svg
									class="menu-item-link-icon icon-events menu-item-link-icon icon-forums"
									xmlns="http://www.w3.org/2000/svg"
									width="1em"
									height="1em"
									viewBox="0 0 24 24"
								>
									<g fill="none" fill-rule="evenodd">
										<path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
										<path
											fill="currentColor"
											d="M11 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zM5 5h4v4H5zm16 0a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zm-6 0h4v4h-4zm-6 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2H5v4h4zm4 2a1 1 0 0 1 1-1h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 0 1-1-1"
										/>
									</g>
								</svg>
								Member Classifieds
							</Link>
						</li>
					)}
					{location.pathname.toString().includes("/marketplace") && (
						<li class="menu-item">
							<Link
								className="menu-item-link text-tooltip-tfr"
								to="/marketplace"
								onClick={() => {
									dispatch(setIsOverlayVisible({ value: false }));
									dispatch(setIsMobileNavOpen({ value: false }));
								}}
							>
								<svg
									class="menu-item-link-icon icon-events menu-item-link-icon icon-forums market-place-icon"
									xmlns="http://www.w3.org/2000/svg"
									width="1.25em"
									height="1em"
									viewBox="0 0 640 512"
								>
									<path d="M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144s144-64.41 144-144s-64.41-144-144-144m64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32M320 96H192V64h128zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48" />
								</svg>
								Business Products
							</Link>
						</li>
					)}
					{location.pathname.toString().includes("/marketplace") && (
						<li class="menu-item">
							<Link
								className="menu-item-link text-tooltip-tfr"
								to="/marketplace"
								onClick={() => {
									dispatch(setIsOverlayVisible({ value: false }));
									dispatch(setIsMobileNavOpen({ value: false }));
								}}
							>
								<svg
									class="menu-item-link-icon icon-events menu-item-link-icon icon-forums market-place-icon"
									xmlns="http://www.w3.org/2000/svg"
									width="1em"
									height="1em"
									viewBox="0 0 24 24"
								>
									<path d="M16.923 15.02q-.154-.59-.6-1.1q-.446-.512-1.135-.766l-6.992-2.62q-.136-.05-.27-.06q-.134-.012-.307-.012H7v-2.34q0-.385.177-.743t.5-.575l4.885-3.479q.223-.159.458-.229t.478-.07t.49.07t.45.229l4.885 3.479q.323.217.5.575T20 8.12v6.898zM14.5 8.441q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m-2 0q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m2 2q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m-2 0q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m1.01 11.23q.198.055.482.048q.283-.007.48-.06L21 19.5q0-.696-.475-1.137q-.475-.44-1.179-.44h-5.158q-.498 0-1.02-.06t-.978-.22l-1.57-.526q-.162-.055-.237-.211t-.025-.315q.05-.14.202-.21t.313-.016l1.433.502q.407.146.893.217q.486.07 1.053.07h1.202q.283 0 .453-.162q.17-.161.17-.455q0-.389-.309-.81q-.308-.421-.716-.565l-6.021-2.21q-.137-.042-.273-.074t-.293-.032h-2.08v6.737zM2.385 19.922q0 .46.308.768q.309.309.769.309h.846q.46 0 .768-.309t.309-.768v-6q0-.46-.309-.768t-.768-.309h-.846q-.46 0-.769.309q-.308.308-.308.768z" />
								</svg>
								Spaces
							</Link>
						</li>
					)}
					{location.pathname.toString().includes("/marketplace") && (
						<li class="menu-item">
							<Link
								className="menu-item-link text-tooltip-tfr"
								to="/marketplace"
								onClick={() => {
									dispatch(setIsOverlayVisible({ value: false }));
									dispatch(setIsMobileNavOpen({ value: false }));
								}}
							>
								<svg
									class="menu-item-link-icon icon-events menu-item-link-icon icon-forums market-place-icon"
									xmlns="http://www.w3.org/2000/svg"
									width="1em"
									height="1em"
									viewBox="0 0 24 24"
								>
									<path d="M16.923 15.02q-.154-.59-.6-1.1q-.446-.512-1.135-.766l-6.992-2.62q-.136-.05-.27-.06q-.134-.012-.307-.012H7v-2.34q0-.385.177-.743t.5-.575l4.885-3.479q.223-.159.458-.229t.478-.07t.49.07t.45.229l4.885 3.479q.323.217.5.575T20 8.12v6.898zM14.5 8.441q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m-2 0q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m2 2q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m-2 0q.162 0 .283-.12t.12-.284t-.12-.282t-.283-.121t-.283.12t-.12.283t.12.283t.283.121m1.01 11.23q.198.055.482.048q.283-.007.48-.06L21 19.5q0-.696-.475-1.137q-.475-.44-1.179-.44h-5.158q-.498 0-1.02-.06t-.978-.22l-1.57-.526q-.162-.055-.237-.211t-.025-.315q.05-.14.202-.21t.313-.016l1.433.502q.407.146.893.217q.486.07 1.053.07h1.202q.283 0 .453-.162q.17-.161.17-.455q0-.389-.309-.81q-.308-.421-.716-.565l-6.021-2.21q-.137-.042-.273-.074t-.293-.032h-2.08v6.737zM2.385 19.922q0 .46.308.768q.309.309.769.309h.846q.46 0 .768-.309t.309-.768v-6q0-.46-.309-.768t-.768-.309h-.846q-.46 0-.769.309q-.308.308-.308.768z" />
								</svg>
								Real Estate
							</Link>
						</li>
					)}
					{location.pathname.toString().includes("/marketplace") && (
						<li class="menu-item">
							<Link
								className="menu-item-link menu-item-link text-tooltip-tfr"
								to="/marketplace"
								onClick={() => {
									dispatch(setIsOverlayVisible({ value: false }));
									dispatch(setIsMobileNavOpen({ value: false }));
								}}
							>
								<svg
									class="menu-item-link-icon icon-events menu-item-link-icon icon-forums market-place-icon"
									xmlns="http://www.w3.org/2000/svg"
									width="1em"
									height="1em"
									viewBox="0 0 24 24"
								>
									<path d="M14.42 7.5L16 11H8l1.42-3.5zM9 12c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m6 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m6-7v6c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4zm-3 7l-2.16-5c-.2-.58-.76-1-1.42-1h-5C8.76 6 8.2 6.42 8 7l-2 5v4c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h6v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1z" />
								</svg>
								Automotives
							</Link>
						</li>
					)}
					{location.pathname.includes("/careers") && (
						<CareerItems isMobile={true} />
					)}
					{location.pathname.includes("/crea8") && (
						<Crea8Items isMobile={true} />
					)}
					{(location.pathname.toString().includes("/marketplace") ||
						location.pathname.toString().includes("/chat") ||
						location.pathname.toString().includes("/crea8") ||
						location.pathname.toString().includes("/careers")) && (
						<div className="mobile-nav-secondary"></div>
					)}
					<li
						className={`menu-item ${location.pathname === "/" ? "active" : ""}`}
					>
						<Link
							className="menu-item-link"
							to="/"
							onClick={() => {
								dispatch(setIsOverlayVisible({ value: false }));
								dispatch(setIsMobileNavOpen({ value: false }));
							}}
						>
							<svg className="menu-item-link-icon icon-newsfeed">
								<use xlinkHref="#svg-newsfeed"></use>
							</svg>
							Home
						</Link>
					</li>

					<li
						className={`menu-item ${
							location.pathname.includes("/directory") ? "active" : ""
						}`}
					>
						<Link
							to={"/directory"}
							className="menu-item-link"
							onClick={() => {
								dispatch(setIsOverlayVisible({ value: false }));
								dispatch(setIsMobileNavOpen({ value: false }));
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="menu-item-link-icon icon-directory"
							>
								<path d="M1,13 C0.44771525,13 0,12.5522847 0,12 C0,11.4477153 0.44771525,11 1,11 L1.41604369,11 C2.18760031,9.23409522 3.94968096,8 6,8 C7.82440303,8 9.42058775,8.97711876 10.2937745,10.4365766 C10.7845275,10.1580384 11.3764731,10 12,10 C12.6235269,10 13.2154725,10.1580384 13.7062255,10.4365766 C14.5794122,8.97711876 16.175597,8 18,8 C20.050319,8 21.8123997,9.23409522 22.5839563,11 L23,11 C23.5522847,11 24,11.4477153 24,12 C24,12.5522847 23.5522847,13 23,13 C23,15.7614237 20.7614237,18 18,18 C15.2385763,18 13,15.7614237 13,13 C13,12.8312503 13.0083597,12.6644531 13.0246876,12.5 L13,12.5 C13,12.2965729 12.6045695,12 12,12 C11.3954305,12 11,12.2965729 11,12.5 L10.9753124,12.5 C10.9916403,12.6644531 11,12.8312503 11,13 C11,15.7614237 8.76142375,18 6,18 C3.23857625,18 1,15.7614237 1,13 Z M6,16 C7.65685425,16 9,14.6568542 9,13 C9,11.3431458 7.65685425,10 6,10 C4.34314575,10 3,11.3431458 3,13 C3,14.6568542 4.34314575,16 6,16 Z M18,16 C19.6568542,16 21,14.6568542 21,13 C21,11.3431458 19.6568542,10 18,10 C16.3431458,10 15,11.3431458 15,13 C15,14.6568542 16.3431458,16 18,16 Z"></path>
							</svg>
							Directory
						</Link>
					</li>

					<li
						className={`menu-item menu-item-title`}
						onClick={() => {
							dispatch(setIsMyFlokkMenuOpen({ value: !isMyFlokkMenuOpen }));
						}}
					>
						<div className="menu-item-link menu-link-title">
							<p>My Flokk</p>
							<svg
								className="slider-control-icon icon-small-arrow"
								style={{
									transform: `rotate(${isMyFlokkMenuOpen ? "270" : "90"}deg)`,
									cursor: "pointer",
								}}
							>
								<use xlinkHref="#svg-small-arrow"></use>
							</svg>
						</div>
					</li>

					{isMyFlokkMenuOpen && <MyFlokkItems isMobile={true} />}

					<li
						className={`menu-item menu-item-title`}
						onClick={() => {
							dispatch(
								setIsMySidekicksMenuOpen({ value: !isMySidekicksMenuOpen })
							);
						}}
					>
						<div className="menu-item-link menu-link-title">
							<p>My Sidekicks</p>
							<svg
								className="slider-control-icon icon-small-arrow"
								style={{
									transform: `rotate(${
										isMySidekicksMenuOpen ? "270" : "90"
									}deg)`,
									cursor: "pointer",
								}}
							>
								<use xlinkHref="#svg-small-arrow"></use>
							</svg>
						</div>
					</li>

					{isMySidekicksMenuOpen && <MySidekicksItems isMobile={true} />}

					{!location.pathname.includes("/marketplace") && (
						<li
							className={`menu-item menu-item-title`}
							onClick={() => {
								dispatch(
									setIsMarketplaceMenuOpen({ value: !isMarketplaceMenuOpen })
								);
							}}
						>
							<div className="menu-item-link menu-link-title">
								<p>Marketplace</p>
								<svg
									className="slider-control-icon icon-small-arrow"
									style={{
										transform: `rotate(${
											isMarketplaceMenuOpen ? "270" : "90"
										}deg)`,
										cursor: "pointer",
									}}
								>
									<use xlinkHref="#svg-small-arrow"></use>
								</svg>
							</div>
						</li>
					)}

					{isMarketplaceMenuOpen &&
						!location.pathname.includes("/marketplace") && (
							<MyMarketPlaceItems isMobile={true} />
						)}

					{/* <li
						className={`menu-item ${
							location.pathname.includes("/affiliations") ? "active" : ""
						}`}
					>
						<Link
							className="menu-item-link"
							to="/affiliations"
							onClick={() => {
								dispatch(setIsOverlayVisible({ value: false }));
								dispatch(setIsMobileNavOpen({ value: false }));
							}}
						>
							<svg className="menu-item-link-icon icon-group">
								<use xlinkHref="#svg-group"></use>
							</svg>
							Affiliations
						</Link>
					</li>

					<li
						className={`menu-item ${
							location.pathname.includes("/businesses") ? "active" : ""
						}`}
					>
						<Link
							to={"/businesses"}
							className="menu-item-link"
							onClick={() => {
								dispatch(setIsOverlayVisible({ value: false }));
								dispatch(setIsMobileNavOpen({ value: false }));
							}}
						>
							<svg
								className="menu-item-link-icon icon-directory"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M5,21 L5,1 L7,1 L7,2 L21.1247446,2 L18.1259893,7.99991055 L21.126034,14 L7,14 L7,21 L8,21 L8,23 L4,23 L4,21 L5,21 Z M7,12 L17.889966,12 L15.8900107,8.00008945 L17.8892554,4 L7,4 L7,12 Z"></path>
							</svg>
							Businesses
						</Link>
					</li>

					<li
						className={`menu-item ${
							location.pathname.includes("/connections") ? "active" : ""
						}`}
					>
						<Link
							to={"/connections"}
							className="menu-item-link"
							onClick={() => {
								dispatch(setIsOverlayVisible({ value: false }));
								dispatch(setIsMobileNavOpen({ value: false }));
							}}
						>
							<svg className="menu-item-link-icon icon-forums">
								<use xlinkHref="#svg-forums"></use>
							</svg>
							Connections
						</Link>
					</li> */}

					{/* <li
						className={`menu-item ${
							location.pathname.includes("/sidekicks") ? "active" : ""
						}`}
					>
						<Link
							to={"/sidekicks"}
							className="menu-item-link"
							onClick={() => {
								dispatch(setIsOverlayVisible({ value: false }));
								dispatch(setIsMobileNavOpen({ value: false }));
							}}
						>
							<svg
								className="menu-item-link-icon icon-directory"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"></path>
							</svg>
							Sidekicks
						</Link>
					</li> */}

					<li
						className={`menu-item ${
							location.pathname.includes("/reviews") ? "active" : ""
						}`}
					>
						<Link
							className="menu-item-link"
							to="/reviews"
							onClick={() => {
								dispatch(setIsOverlayVisible({ value: false }));
								dispatch(setIsMobileNavOpen({ value: false }));
							}}
						>
							<svg className="menu-item-link-icon icon-quests">
								<use xlinkHref="#svg-quests"></use>
							</svg>
							Reviews
						</Link>
					</li>

					{/* <li
						className={`menu-item ${
							location.pathname.includes("/jobsandprojects") ? "active" : ""
						}`}
					>
						<Link
							to={"/jobsandprojects"}
							className="menu-item-link job-icon"
							onClick={() => {
								dispatch(setIsOverlayVisible({ value: false }));
								dispatch(setIsMobileNavOpen({ value: false }));
							}}
						>
							<svg
								className="menu-item-link-icon icon-directory"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								style={{
									color: location.pathname.includes("/jobsandprojects")
										? "white"
										: "#adafca",
								}}
							>
								<rect
									fill="none"
									x="2"
									y="7"
									width="20"
									height="14"
									rx="2"
									ry="2"
								></rect>
								<path
									fill="none"
									d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
								></path>
							</svg>
							Jobs & Projects
						</Link>
					</li>

					{!location.pathname.includes("/marketplace") && (
						<li
							className={`menu-item ${
								location.pathname.includes("/marketplace") ? "active" : ""
							}`}
						>
							<Link
								to={"/marketplace"}
								className="menu-item-link market-icon"
								onClick={() => {
									dispatch(setIsOverlayVisible({ value: false }));
									dispatch(setIsMobileNavOpen({ value: false }));
								}}
							>
								<svg
									className="menu-item-link-icon icon-directory"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 30 30"
								>
									<path
										fill={
											location.pathname.includes("/marketplace")
												? "white"
												: "#adafca"
										}
										d="M23 14c-.7 0-1.4-.2-2-.6-.6.3-1.3.6-2 .6s-1.4-.2-2-.6c-.6.3-1.3.6-2 .6s-1.4-.2-2-.6c-.6.3-1.3.6-2 .6s-1.4-.2-2-.6c-.6.4-1.3.6-2 .6s-1.4-.2-2-.5c-.6.3-1.3.5-2 .5v11c0 1.1.9 2 2 2h12V17h6v10h2c1.1 0 2-.9 2-2V14c-.7 0-1.4-.2-2-.5-.6.3-1.3.5-2 .5zm-10 9H7v-6h6v6zM26 6V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v1l-3 4c0 1.1.9 2 2 2s2-.9 2-2l2-4h3l-1 4c0 1.1.9 2 2 2s2-.9 2-2V6h4v4c0 1.1.9 2 2 2s2-.9 2-2l-1-4h3l2 4c0 1.1.9 2 2 2s2-.9 2-2l-3-4z"
									></path>
								</svg>
								Marketplace
							</Link>
						</li>
					)} */}

					<li
						className={`menu-item ${
							location.pathname.includes("/offers") ? "active" : ""
						}`}
					>
						<Link
							to={"/offers"}
							className="menu-item-link market-icon"
							onClick={() => {
								dispatch(setIsOverlayVisible({ value: false }));
								dispatch(setIsMobileNavOpen({ value: false }));
							}}
						>
							<svg
								className="menu-item-link-icon icon-directory"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z"></path>
							</svg>
							Offers
						</Link>
					</li>

					<li
						className={`menu-item ${
							location.pathname.includes("/events") ? "active" : ""
						}`}
					>
						<Link
							to={"/events"}
							className="menu-item-link market-icon"
							onClick={() => {
								dispatch(setIsOverlayVisible({ value: false }));
								dispatch(setIsMobileNavOpen({ value: false }));
							}}
						>
							<svg
								className="menu-item-link-icon icon-directory"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M20,8 L20,5 L18,5 L18,6 L16,6 L16,5 L8,5 L8,6 L6,6 L6,5 L4,5 L4,8 L20,8 Z M20,10 L4,10 L4,20 L20,20 L20,10 Z M18,3 L20,3 C21.1045695,3 22,3.8954305 22,5 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,5 C2,3.8954305 2.8954305,3 4,3 L6,3 L6,2 L8,2 L8,3 L16,3 L16,2 L18,2 L18,3 Z M9,14 L7,14 L7,12 L9,12 L9,14 Z M13,14 L11,14 L11,12 L13,12 L13,14 Z M17,14 L15,14 L15,12 L17,12 L17,14 Z M9,18 L7,18 L7,16 L9,16 L9,18 Z M13,18 L11,18 L11,16 L13,16 L13,18 Z"></path>
							</svg>
							Events
						</Link>
					</li>

					<li
						className={`menu-item ${
							location.pathname.includes("/forum") ? "active" : ""
						}`}
					>
						<Link
							className="menu-item-link"
							to="/forum"
							onClick={() => {
								dispatch(setIsOverlayVisible({ value: false }));
								dispatch(setIsMobileNavOpen({ value: false }));
							}}
						>
							<svg className="menu-item-link-icon icon-forums">
								<use xlinkHref="#svg-forums"></use>
							</svg>
							Forum
						</Link>
					</li>
				</ul>

				{/* <div
					// style={{
					// 	marginTop: "32px",
					// 	display: "flex",
					// 	alignItems: "center",
					// 	justifyContent: "space-between",
					// 	paddingRight: "30px",
					// }}
					className={`menu-item-link ${isProfileMenuOpen ? "active" : ""}`}
					onClick={() => {
						dispatch(setIsProfileMenuOpen({ value: !isProfileMenuOpen }));
					}}
				>
					<p
						className="navigation-widget-section-title"
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "8px",
						}}
					>
						<svg
							className="menu-item-link-icon icon-members"
							style={{ marginTop: "-4px" }}
						>
							<use xlinkHref="#svg-members"></use>
						</svg>{" "}
						My Profile
					</p>

					<svg
						className="slider-control-icon icon-small-arrow"
						onClick={() => {
							dispatch(setIsProfileMenuOpen({ value: !isProfileMenuOpen }));
						}}
						style={{
							transform: `rotate(${isProfileMenuOpen ? "270" : "90"}deg)`,
							cursor: "pointer",
						}}
					>
						<use xlinkHref="#svg-small-arrow"></use>
					</svg>

				</div>
				<div
					className={`profile-menu ${isProfileMenuOpen ? "active" : ""}`}
					style={{
						marginBottom: "46px",
						marginTop: "14px",
					}}
				>
					<a className="navigation-widget-section-link" href="#">Profile Info</a>

					<a className="navigation-widget-section-link" href="#">Affiliations</a>
				</div>
				<div
					style={{
						marginTop: "32px",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						paddingRight: "30px",
					}}
					className={`menu-items ${isAccountMenuOpen ? "active" : ""}`}
					onClick={() => {
						dispatch(setIsAccountMenuOpen({ value: !isAccountMenuOpen }));
					}}
				>
					<p
						className="navigation-widget-section-title"
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "8px",
						}}
					>
						<svg
							className="menu-item-link-icon icon-members"
							style={{ marginTop: "-4px" }}
						>
							<use xlinkHref="#svg-members"></use>
						</svg>{" "}
						Account
					</p>
					<svg
						className="slider-control-icon icon-small-arrow"
						onClick={() => {
							dispatch(setIsAccountMenuOpen({ value: !isAccountMenuOpen }));
						}}
						style={{
							transform: `rotate(${isAccountMenuOpen ? "270" : "90"}deg)`,
							cursor: "pointer",
						}}
					>
						<use xlinkHref="#svg-small-arrow"></use>
					</svg>
				</div>
				<div
					className={`account-menu ${isAccountMenuOpen ? "active" : ""}`}
					style={{
						marginBottom: "46px",
						marginTop: "14px",
					}}
				>
					<a className="navigation-widget-section-link">Advertising</a>

					<a className="navigation-widget-section-link">Wallet</a>

					<a className="navigation-widget-section-link">Privacy</a>
				</div>
				<div
					style={{
						marginTop: "32px",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						paddingRight: "30px",
					}}
					className={`menu-items ${isGroupsMenuOpen ? "active" : ""}`}
					onClick={() => {
						dispatch(setIsGroupsMenuOpen({ value: !isGroupsMenuOpen }));
					}}
				>
					<p
						className="navigation-widget-section-title"
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "8px",
						}}
					>
						<svg
							className="menu-item-link-icon icon-members"
							style={{ marginTop: "-4px" }}
						>
							<use xlinkHref="#svg-members"></use>
						</svg>{" "}
						Groups
					</p>
					<svg
						className="slider-control-icon icon-small-arrow"
						onClick={() => {
							dispatch(setIsGroupsMenuOpen({ value: !isGroupsMenuOpen }));
						}}
						style={{
							transform: `rotate(${isGroupsMenuOpen ? "270" : "90"}deg)`,
							cursor: "pointer",
						}}
					>
						<use xlinkHref="#svg-small-arrow"></use>
					</svg>
				</div>
				{isGroupsMenuOpen && (
					<div
						style={{
							marginBottom: "46px",
							marginTop: "14px",
						}}
					>
						<a className="navigation-widget-section-link">Manage Groups</a>

						<a className="navigation-widget-section-link">Invitations</a>
					</div>
				)}
				<div
					style={{
						marginTop: "32px",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						paddingRight: "30px",
					}}
					className={`menu-items ${isStoreMenuOpen ? "active" : ""}`}
					onClick={() => {
						dispatch(setIsStoreMenuOpen({ value: !isStoreMenuOpen }));
					}}
				>
					<p
						className="navigation-widget-section-title"
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "8px",
						}}
					>
						<svg
							className="menu-item-link-icon icon-members"
							style={{ marginTop: "-4px" }}
						>
							<use xlinkHref="#svg-members"></use>
						</svg>{" "}
						My Store
					</p>
					<svg
						className="slider-control-icon icon-small-arrow"
						onClick={() => {
							dispatch(setIsStoreMenuOpen({ value: !isStoreMenuOpen }));
						}}
						style={{
							transform: `rotate(${isStoreMenuOpen ? "270" : "90"}deg)`,
							cursor: "pointer",
						}}
					>
						<use xlinkHref="#svg-small-arrow"></use>
					</svg>
				</div>
				{isStoreMenuOpen && (
					<div
						style={{
							marginBottom: "46px",
							marginTop: "14px",
						}}
					>
						<a
							className="navigation-widget-section-link"
							href="hub-store-account.html"
						>
							My Account <span className="highlighted">$250,32</span>
						</a>

						<a
							className="navigation-widget-section-link"
							href="hub-store-statement.html"
						>
							Sales Statement
						</a>

						<a
							className="navigation-widget-section-link"
							href="hub-store-items.html"
						>
							Manage Items
						</a>

						<a
							className="navigation-widget-section-link"
							href="hub-store-downloads.html"
						>
							Downloads
						</a>
					</div>
				)}
				<div
					style={{
						marginTop: "32px",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						paddingRight: "30px",
					}}
					className={`menu-items ${isMainLinksMenuOpen ? "active" : ""}`}
					onClick={() => {
						dispatch(setIsMainLinksMenuOpen({ value: !isMainLinksMenuOpen }));
					}}
				>
					<p
						className="navigation-widget-section-title"
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "8px",
						}}
					>
						<svg
							className="menu-item-link-icon icon-members"
							style={{ marginTop: "-4px" }}
						>
							<use xlinkHref="#svg-members"></use>
						</svg>{" "}
						Main Links
					</p>
					<svg
						className="slider-control-icon icon-small-arrow"
						onClick={() => {
							dispatch(setIsMainLinksMenuOpen({ value: !isMainLinksMenuOpen }));
						}}
						style={{
							transform: `rotate(${isMainLinksMenuOpen ? "270" : "90"}deg)`,
							cursor: "pointer",
						}}
					>
						<use xlinkHref="#svg-small-arrow"></use>
					</svg>
				</div>
				{isMainLinksMenuOpen && (
					<div
						style={{
							marginBottom: "46px",
							marginTop: "14px",
						}}
					>
						<a className="navigation-widget-section-link">Home</a>

						<a className="navigation-widget-section-link">Careers</a>

						<a className="navigation-widget-section-link">Faqs</a>

						<a className="navigation-widget-section-link">About Us</a>

						<a className="navigation-widget-section-link">Our Blog</a>

						<a className="navigation-widget-section-link">Contact Us</a>

						<a className="navigation-widget-section-link">Privacy Policy</a>
					</div>
				)} */}

				<div
					style={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						marginTop: "15px",
						flex: "auto",
					}}
				>
					<p
						className="navigation-widget-info-button button small secondary"
						style={{ width: "85%", marginTop: "12px" }}
					>
						Logout
					</p>
				</div>
			</nav>
		</>
	);
};

export default MobileNavigation;
