import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	setIsLargeHidden,
	setIsMobileNavOpen,
	setIsOverlayVisible,
} from "../../../app/feature/outletSlice";

const MyFlokkItems = ({ isMobile }) => {
	const location = useLocation();
	const dispatch = useDispatch();
	const isLargeHidden = useSelector((state) => state.outlet.isLargeHidden);
	return (
		<div className="flokk-items">
			<li
				className={`menu-item ${
					location.pathname.includes("/affiliations") ? "active" : ""
				}`}
			>
				<Link
					className="menu-item-link"
					to="https://main.flokky.app/affiliations"
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
					Affiliations
				</Link>
			</li>

			<li
				className={`menu-item ${
					location.pathname.includes("/businesses") ? "active" : ""
				}`}
			>
				<Link
					to={"https://main.flokky.app/businesses"}
					className="menu-item-link"
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
					>
						<path
							// fill="#f79f58"
							d="M5,21 L5,1 L7,1 L7,2 L21.1247446,2 L18.1259893,7.99991055 L21.126034,14 L7,14 L7,21 L8,21 L8,23 L4,23 L4,21 L5,21 Z M7,12 L17.889966,12 L15.8900107,8.00008945 L17.8892554,4 L7,4 L7,12 Z"
						></path>
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
						if (isMobile) {
							dispatch(setIsOverlayVisible({ value: false }));
							dispatch(setIsMobileNavOpen({ value: false }));
						} else {
							dispatch(setIsLargeHidden({ value: !isLargeHidden }));
						}
					}}
				>
					<svg className="menu-item-link-icon icon-forums">
						<use xlinkHref="#svg-forums"></use>
					</svg>
					Connections
				</Link>
			</li>
		</div>
	);
};

export default MyFlokkItems;
