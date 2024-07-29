import React, { useEffect, useState } from "react";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	setIsLargeHidden,
	setIsChatsOpen,
	setIsChatOpen,
} from "../../../app/feature/outletSlice";

const AsideChat = () => {
	const dispatch = useDispatch();
	const isLargeHidden = useSelector((state) => state.outlet.isLargeHidden);
	const isChatsOpen = useSelector((state) => state.outlet.isChatsOpen);
	const isChatOpen = useSelector((state) => state.outlet.isChatOpen);
	// const [isLoad, setIsLoad] = useState(true);
	// const [currentPath, setCurrentPath] = useState(window.location.pathname);
	// const breakPoint = 680;

	// const [width, setWidth] = useState(window.innerWidth);
	// const [isHidden, setIsHidden] = useState(false);
	// const [delayedIcon, setDelayedIcon] = useState(null);

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

	// useEffect(() => {
	// 	const handleResizeWindow = () => setWidth(window.innerWidth);
	// 	window.addEventListener("resize", handleResizeWindow);
	// 	return () => {
	// 		window.removeEventListener("resize", handleResizeWindow);
	// 	};
	// }, []);

	// useEffect(() => {
	// 	const handlePathChange = () => {
	// 		setCurrentPath(window.location.pathname);
	// 	};

	// 	window.addEventListener("popstate", handlePathChange);

	// 	return () => {
	// 		window.removeEventListener("popstate", handlePathChange);
	// 	};
	// }, []);

	// useEffect(() => {
	// 	const onPageLoad = () => {
	// 		console.log("Page loaded!");
	// 		setIsLoad(false);
	// 	};

	// 	if (document.readyState === "complete") {
	// 		onPageLoad();
	// 	} else {
	// 		window.addEventListener("load", onPageLoad, false);
	// 		return () => window.removeEventListener("load", onPageLoad);
	// 	}
	// }, []);

	return (
		<aside
			id={`chat-widget-message`}
			style={{ height: `${window.innerHeight - 80}px` }}
			className={`chat-widget chat-widget-overlay ${
				isChatOpen ? "" : "hidden"
			} sidebar right`}
		>
			<div className="chat-widget-header">
				<div
					className="chat-widget-close-button"
					onClick={() => dispatch(setIsChatOpen({ value: false }))}
				>
					<svg className="chat-widget-close-button-icon icon-back-arrow">
						<use xlinkHref="#svg-back-arrow"></use>
					</svg>
				</div>

				<div className="user-status">
					<div className="user-chat-profile user-status-avatar">
						<MdAdminPanelSettings
							color={"#d7006a"}
							size={16}
							className="admin-icon-inside-chat"
						/>
						<img src="/img/avatar/03.jpg" alt="Profile" />
						<RiVerifiedBadgeFill
							color={"#36e9f7"}
							size={16}
							className="verify-icon-inside-chat"
						/>
						<div className="badge-container-chats">
							<img src="/img/download.png" alt="Padge" />
							<p className="badge-number-chats">12</p>
						</div>
					</div>

					<p className="user-status-title">
						<span className="bold">Nick Grissom</span>
					</p>

					<p
						className="user-status-text user-chat-job small"
						style={{ color: "#adafca" }}
					>
						Marketing Manager
					</p>

					<p
						className="user-status-text user-chat-job small"
						style={{ color: "#adafca" }}
					>
						Brandmarks
					</p>
				</div>
			</div>

			<div
				className="chat-widget-conversation"
				style={{ height: `${window.innerHeight - 160 - 92 - 86}px` }}
				data-simplebar
			>
				<div className="chat-widget-speaker left">
					<div className="chat-widget-speaker-avatar">
						<div className="user-avatar tiny no-border">
							<div className="user-avatar-content">
								<div
									className="hexagon-image-24-26"
									data-src="img/avatar/03.jpg"
								></div>
							</div>
						</div>
					</div>

					<p className="chat-widget-speaker-message">
						Hi Marina! It's been a long time!
					</p>

					<p className="chat-widget-speaker-timestamp">Yesterday at 8:36PM</p>
				</div>

				<div className="chat-widget-speaker right">
					<p className="chat-widget-speaker-message">Hey Nick!</p>

					<p className="chat-widget-speaker-message">
						You're right, it's been a really long time! I think the last time we
						saw was at Neko's party
					</p>

					<p className="chat-widget-speaker-timestamp">10:05AM</p>
				</div>

				<div className="chat-widget-speaker left">
					<div className="chat-widget-speaker-avatar">
						<div className="user-avatar tiny no-border">
							<div className="user-avatar-content">
								<div
									className="hexagon-image-24-26"
									data-src="img/avatar/03.jpg"
								></div>
							</div>
						</div>
					</div>

					<p className="chat-widget-speaker-message">
						Yeah! I remember now! The stream launch party
					</p>

					<p className="chat-widget-speaker-message">
						That reminds me that I wanted to ask you something
					</p>

					<p className="chat-widget-speaker-message">
						Can you stream the new game?
					</p>
				</div>
			</div>

			<form className="chat-widget-form">
				<div className="interactive-input small">
					<input
						type="text"
						id="chat-widget-message-text"
						name="chat_widget_message_text"
						placeholder="Write a message..."
					/>
					<div className="interactive-input-icon-wrap">
						<svg className="interactive-input-icon icon-send-message">
							<use xlinkHref="#svg-send-message"></use>
						</svg>
					</div>

					<div className="interactive-input-action">
						<svg className="interactive-input-action-icon icon-cross-thin">
							<use xlinkHref="#svg-cross-thin"></use>
						</svg>
					</div>
				</div>
			</form>
		</aside>
	);
};

export default AsideChat;
