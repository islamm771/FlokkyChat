import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	setIsLargeHidden,
	setIsMobileNavOpen,
	setIsOverlayVisible,
} from "../../../app/feature/outletSlice";

const MySidekicksItems = ({ isMobile }) => {
	const location = useLocation();
	const dispatch = useDispatch();
	const isLargeHidden = useSelector((state) => state.outlet.isLargeHidden);
	return (
		<div className="flokk-items">
			<li className={`menu-item`}>
				<Link
					className="menu-item-link"
					to="/"
					onClick={() => {
						if (isMobile) {
							dispatch(setIsOverlayVisible({ value: false }));
							dispatch(setIsMobileNavOpen({ value: false }));
						} else {
							dispatch(setIsLargeHidden({ value: !isLargeHidden }));
						}
					}}
				>
					<svg className="menu-item-link-icon icon-group">
						<use xlinkHref="#svg-group"></use>
					</svg>
					Munch
				</Link>
			</li>
			{!location.pathname.includes("/crea8") && (
				<li
					className={`menu-item ${
						location.pathname.includes("/crea8") ? "active" : ""
					}`}
				>
					<Link
						className="menu-item-link"
						to="https://crea8.flokky.app/"
						onClick={() => {
							if (isMobile) {
								dispatch(setIsOverlayVisible({ value: false }));
								dispatch(setIsMobileNavOpen({ value: false }));
							} else {
								dispatch(setIsLargeHidden({ value: !isLargeHidden }));
							}
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
								color: location.pathname.includes("/crea8")
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
						Crea8
					</Link>
				</li>
			)}
			<li className={`menu-item`}>
				<Link
					className="menu-item-link"
					to="https://trot.flokky.app/"
					onClick={() => {
						if (isMobile) {
							dispatch(setIsOverlayVisible({ value: false }));
							dispatch(setIsMobileNavOpen({ value: false }));
						} else {
							dispatch(setIsLargeHidden({ value: !isLargeHidden }));
						}
					}}
				>
					<svg className="menu-item-link-icon icon-group">
						<use xlinkHref="#svg-group"></use>
					</svg>
					Trot
				</Link>
			</li>
			{!location.pathname.includes("/careers") && (
				<li
					className={`menu-item ${
						location.pathname.includes("/careers") ? "active" : ""
					}`}
				>
					<Link
						className="menu-item-link"
						to="/careers"
						onClick={() => {
							if (isMobile) {
								dispatch(setIsOverlayVisible({ value: false }));
								dispatch(setIsMobileNavOpen({ value: false }));
							} else {
								dispatch(setIsLargeHidden({ value: !isLargeHidden }));
							}
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
								color: location.pathname.includes("/careers")
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
						Careers
					</Link>
				</li>
			)}
		</div>
	);
};

export default MySidekicksItems;
