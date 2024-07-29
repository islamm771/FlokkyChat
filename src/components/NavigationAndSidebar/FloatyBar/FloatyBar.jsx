import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	setIsLargeHidden,
	setIsMiniMenuHidden,
	setIsFloatyHidden,
} from "../../../app/feature/outletSlice";

const FloatyBar = () => {
	const dispatch = useDispatch();
	const isFloatyHidden = useSelector((state) => state.outlet.isFloatyHidden);
	const breakPoint = 680;
	const [width, setWidth] = useState(window.innerWidth);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const threshold = 100;
		dispatch(setIsMiniMenuHidden({ value: scrollPosition > threshold }));

		if (scrollPosition > threshold) {
			dispatch(setIsFloatyHidden({ value: true }));
		} else {
			dispatch(setIsFloatyHidden({ value: false }));
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const handleResizeWindow = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResizeWindow);
		return () => {
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, []);

	return (
		<aside
			className={`floaty-bar ${
				isFloatyHidden ? "floaty-display-none" : "floaty-display-show"
			}`}
		>
			<div className="bar-actions">
				<div className="progress-stat">
					<div className="bar-progress-wrap">
						<p className="bar-progress-info">
							Next:{" "}
							<span className="bar-progress-text">
								38<span className="bar-progress-unit">exp</span>
							</span>
						</p>
					</div>

					<div
						id="logged-user-level"
						className="progress-stat-bar"
						style={{ width: "110px", height: "4px", position: "relative" }}
					>
						<canvas
							style={{
								position: "absolute",
								top: "0px",
								left: "0px",
								width: "70px",
								height: "4px",
								backgroundColor: "#23d2e2",
								zIndex: "1",
							}}
						></canvas>
						<canvas
							style={{
								position: "absolute",
								top: "0px",
								left: "0px",
								width: "110px",
								height: "4px",
								backgroundColor: "#4e4ac8",
							}}
						></canvas>
					</div>
				</div>
			</div>

			<div className="bar-actions">
				<div className="action-list dark">
					<a className="action-list-item" href="marketplace-cart.html">
						<svg className="action-list-item-icon icon-shopping-bag">
							<use xlinkHref="#svg-shopping-bag"></use>
						</svg>
					</a>

					<a className="action-list-item" href="hub-profile-requests.html">
						<svg className="action-list-item-icon icon-friend">
							<use xlinkHref="#svg-friend"></use>
						</svg>
					</a>

					<a className="action-list-item" href="hub-profile-messages.html">
						<Link to={"/chat"}>
							<svg className="action-list-item-icon icon-messages">
								<use xlinkHref="#svg-messages"></use>
							</svg>
						</Link>
					</a>

					<a
						className="action-list-item unread"
						href="hub-profile-notifications.html"
					>
						<svg className="action-list-item-icon icon-notification">
							<use xlinkHref="#svg-notification"></use>
						</svg>
					</a>
				</div>

				<a className="action-item-wrap" href="hub-profile-info.html">
					<div className="action-item dark">
						<svg className="action-item-icon icon-settings">
							<use xlinkHref="#svg-settings"></use>
						</svg>
					</div>
				</a>
			</div>
		</aside>
	);
};

export default FloatyBar;
