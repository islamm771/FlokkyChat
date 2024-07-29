import React, { useEffect, useState } from "react";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
	setIsLargeHidden,
	setIsChatOpen,
	setIsChatsOpen,
} from "../../../app/feature/outletSlice";

const AsideChats = () => {
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
			id="chat-widget-messages"
			className={`chat-widget ${isChatsOpen ? "" : "closed"} sidebar right`}
		>
			<div
				className="chat-widget-messages"
				data-simplebar
				// style={{ height: "70%" }}
				style={{
					height: isChatsOpen
						? `${window.innerHeight - 160 - 92}px`
						: `${window.innerHeight - 160}px`,
				}}
			>
				<div
					className={`chat-widget-message`}
					onClick={() => {
						dispatch(setIsLargeHidden({ value: true }));
						dispatch(setIsChatsOpen({ value: true }));
						dispatch(setIsChatOpen({ value: true }));
					}}
				>
					<div className="user-status">
						<div
							className={`user-chat-profile user-status-avatar ${
								isChatsOpen ? "friend-image" : ""
							}`}
							onClick={() => {
								dispatch(setIsLargeHidden({ value: true }));
								dispatch(setIsChatsOpen({ value: true }));
								dispatch(setIsChatOpen({ value: true }));
							}}
						>
							<img src="/img/avatar/09.jpg" alt="Profile" />
							<MdAdminPanelSettings
								color={"#d7006a"}
								size={16}
								className="adminSVG"
							/>
							<div className="badge-container-chats">
								<img src="/img/download.png" alt="Padge" />
								<p className="badge-number-chats">12</p>
							</div>
						</div>

						<p className="user-status-title">
							<span className="bold">Neko Bebop </span>
						</p>

						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Marketing Manager
							</p>
						)}
						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Brandmarks
							</p>
						)}

						<p className="user-status-text small">
							Awesome! I'll see you there!
						</p>

						<p className="user-status-timestamp floaty">54mins</p>
					</div>
				</div>
				<div
					className={`chat-widget-message`}
					onClick={() => {
						dispatch(setIsLargeHidden({ value: true }));
						dispatch(setIsChatsOpen({ value: true }));
						dispatch(setIsChatOpen({ value: true }));
					}}
				>
					<div className="user-status">
						<div
							className={`user-chat-profile user-status-avatar ${
								isChatsOpen ? "friend-image" : ""
							}`}
							onClick={() => {
								dispatch(setIsLargeHidden({ value: true }));
								dispatch(setIsChatsOpen({ value: true }));
								dispatch(setIsChatOpen({ value: true }));
							}}
						>
							<img src="/img/avatar/05.jpg" alt="Profile" />
							<RiVerifiedBadgeFill color={"#36e9f7"} />
							<MdAdminPanelSettings
								color={"#d7006a"}
								size={16}
								className="adminSVG"
							/>
							<div className="badge-container-chats">
								<img src="/img/download.png" alt="Padge" />
								<p className="badge-number-chats">12</p>
							</div>
						</div>

						<p className="user-status-title">
							<span className="bold">Neko Bebop </span>
						</p>

						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Marketing Manager
							</p>
						)}
						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Brandmarks
							</p>
						)}

						<p className="user-status-text small">
							Awesome! I'll see you there!
						</p>

						<p className="user-status-timestamp floaty">54mins</p>
					</div>
				</div>
				<div
					className={`chat-widget-message`}
					onClick={() => {
						dispatch(setIsLargeHidden({ value: true }));
						dispatch(setIsChatsOpen({ value: true }));
						dispatch(setIsChatOpen({ value: true }));
					}}
				>
					<div className="user-status">
						<div
							className={`user-chat-profile user-status-avatar ${
								isChatsOpen ? "friend-image" : ""
							}`}
							onClick={() => {
								dispatch(setIsLargeHidden({ value: true }));
								dispatch(setIsChatsOpen({ value: true }));
								dispatch(setIsChatOpen({ value: true }));
							}}
						>
							<img src="/img/avatar/04.jpg" alt="Profile" />
							<RiVerifiedBadgeFill color={"#36e9f7"} />
							<div className="badge-container-chats">
								<img src="/img/download.png" alt="Padge" />
								<p className="badge-number-chats">12</p>
							</div>
						</div>

						<p className="user-status-title">
							<span className="bold">Neko Bebop</span>
						</p>

						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Marketing Manager
							</p>
						)}
						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Brandmarks
							</p>
						)}

						<p className="user-status-text small">
							Awesome! I'll see you there!
						</p>

						<p className="user-status-timestamp floaty">54mins</p>
					</div>
				</div>
				<div
					className={`chat-widget-message`}
					onClick={() => {
						dispatch(setIsLargeHidden({ value: true }));
						dispatch(setIsChatsOpen({ value: true }));
						dispatch(setIsChatOpen({ value: true }));
					}}
				>
					<div className="user-status">
						<div
							className={`user-chat-profile user-status-avatar ${
								isChatsOpen ? "friend-image" : ""
							}`}
							onClick={() => {
								dispatch(setIsLargeHidden({ value: true }));
								dispatch(setIsChatsOpen({ value: true }));
								dispatch(setIsChatOpen({ value: true }));
							}}
						>
							<img src="/img/avatar/03.jpg" alt="Profile" />
							<RiVerifiedBadgeFill color={"#36e9f7"} />
							<div className="badge-container-chats">
								<img src="/img/download.png" alt="Padge" />
								<p className="badge-number-chats">12</p>
							</div>
						</div>

						<p className="user-status-title">
							<span className="bold">Neko Bebop</span>
						</p>

						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Marketing Manager
							</p>
						)}
						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Brandmarks
							</p>
						)}

						<p className="user-status-text small">
							Awesome! I'll see you there!
						</p>

						<p className="user-status-timestamp floaty">54mins</p>
					</div>
				</div>
				<div
					className={`chat-widget-message`}
					onClick={() => {
						dispatch(setIsLargeHidden({ value: true }));
						dispatch(setIsChatsOpen({ value: true }));
						dispatch(setIsChatOpen({ value: true }));
					}}
				>
					<div className="user-status">
						<div
							className={`user-chat-profile user-status-avatar ${
								isChatsOpen ? "friend-image" : ""
							}`}
							onClick={() => {
								dispatch(setIsLargeHidden({ value: true }));
								dispatch(setIsChatsOpen({ value: true }));
								dispatch(setIsChatOpen({ value: true }));
							}}
						>
							<img src="/img/avatar/02.jpg" alt="Profile" />
							<RiVerifiedBadgeFill color={"#36e9f7"} />
							<div className="badge-container-chats">
								<img src="/img/download.png" alt="Padge" />
								<p className="badge-number-chats">12</p>
							</div>
						</div>

						<p className="user-status-title">
							<span className="bold">Neko Bebop</span>
						</p>

						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Marketing Manager
							</p>
						)}
						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Brandmarks
							</p>
						)}

						<p className="user-status-text small">
							Awesome! I'll see you there!
						</p>

						<p className="user-status-timestamp floaty">54mins</p>
					</div>
				</div>
				<div
					className={`chat-widget-message`}
					onClick={() => {
						dispatch(setIsLargeHidden({ value: true }));
						dispatch(setIsChatsOpen({ value: true }));
						dispatch(setIsChatOpen({ value: true }));
					}}
				>
					<div className="user-status">
						<div
							className={`user-chat-profile user-status-avatar ${
								isChatsOpen ? "friend-image" : ""
							}`}
							onClick={() => {
								dispatch(setIsLargeHidden({ value: true }));
								dispatch(setIsChatsOpen({ value: true }));
								dispatch(setIsChatOpen({ value: true }));
							}}
						>
							<img src="/img/avatar/11.jpg" alt="Profile" />
							<RiVerifiedBadgeFill color={"#36e9f7"} />
							<div className="badge-container-chats">
								<img src="/img/download.png" alt="Padge" />
								<p className="badge-number-chats">12</p>
							</div>
						</div>

						<p className="user-status-title">
							<span className="bold">Neko Bebop</span>
						</p>

						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Marketing Manager
							</p>
						)}
						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Brandmarks
							</p>
						)}

						<p className="user-status-text small">
							Awesome! I'll see you there!
						</p>

						<p className="user-status-timestamp floaty">54mins</p>
					</div>
				</div>
				<div
					className={`chat-widget-message`}
					onClick={() => {
						dispatch(setIsLargeHidden({ value: true }));
						dispatch(setIsChatsOpen({ value: true }));
						dispatch(setIsChatOpen({ value: true }));
					}}
				>
					<div className="user-status">
						<div
							className={`user-chat-profile user-status-avatar ${
								isChatsOpen ? "friend-image" : ""
							}`}
							onClick={() => {
								dispatch(setIsLargeHidden({ value: true }));
								dispatch(setIsChatsOpen({ value: true }));
								dispatch(setIsChatOpen({ value: true }));
							}}
						>
							<img src="/img/avatar/12.jpg" alt="Profile" />
							<RiVerifiedBadgeFill color={"#36e9f7"} />
							<div className="badge-container-chats">
								<img src="/img/download.png" alt="Padge" />
								<p className="badge-number-chats">12</p>
							</div>
						</div>

						<p className="user-status-title">
							<span className="bold">Neko Bebop</span>
						</p>

						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Marketing Manager
							</p>
						)}
						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Brandmarks
							</p>
						)}

						<p className="user-status-text small">
							Awesome! I'll see you there!
						</p>

						<p className="user-status-timestamp floaty">54mins</p>
					</div>
				</div>
				<div
					className={`chat-widget-message`}
					onClick={() => {
						dispatch(setIsLargeHidden({ value: true }));
						dispatch(setIsChatsOpen({ value: true }));
						dispatch(setIsChatOpen({ value: true }));
					}}
				>
					<div className="user-status">
						<div
							className={`user-chat-profile user-status-avatar ${
								isChatsOpen ? "friend-image" : ""
							}`}
							onClick={() => {
								dispatch(setIsLargeHidden({ value: true }));
								dispatch(setIsChatsOpen({ value: true }));
								dispatch(setIsChatOpen({ value: true }));
							}}
						>
							<img src="/img/avatar/13.jpg" alt="Profile" />
							<RiVerifiedBadgeFill color={"#36e9f7"} />
							<div className="badge-container-chats">
								<img src="/img/download.png" alt="Padge" />
								<p className="badge-number-chats">12</p>
							</div>
						</div>

						<p className="user-status-title">
							<span className="bold">Neko Bebop</span>
						</p>

						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Marketing Manager
							</p>
						)}
						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Brandmarks
							</p>
						)}

						<p className="user-status-text small">
							Awesome! I'll see you there!
						</p>

						<p className="user-status-timestamp floaty">54mins</p>
					</div>
				</div>
				<div
					className={`chat-widget-message`}
					onClick={() => {
						dispatch(setIsLargeHidden({ value: true }));
						dispatch(setIsChatsOpen({ value: true }));
						dispatch(setIsChatOpen({ value: true }));
					}}
				>
					<div className="user-status">
						<div
							className={`user-chat-profile user-status-avatar ${
								isChatsOpen ? "friend-image" : ""
							}`}
							onClick={() => {
								dispatch(setIsLargeHidden({ value: true }));
								dispatch(setIsChatsOpen({ value: true }));
								dispatch(setIsChatOpen({ value: true }));
							}}
						>
							<img src="/img/avatar/14.jpg" alt="Profile" />
							<RiVerifiedBadgeFill color={"#36e9f7"} />
							<div className="badge-container-chats">
								<img src="/img/download.png" alt="Padge" />
								<p className="badge-number-chats">12</p>
							</div>
						</div>

						<p className="user-status-title">
							<span className="bold">Neko Bebop</span>
						</p>

						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Marketing Manager
							</p>
						)}
						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Brandmarks
							</p>
						)}

						<p className="user-status-text small">
							Awesome! I'll see you there!
						</p>

						<p className="user-status-timestamp floaty">54mins</p>
					</div>
				</div>
				<div
					className={`chat-widget-message`}
					onClick={() => {
						dispatch(setIsLargeHidden({ value: true }));
						dispatch(setIsChatsOpen({ value: true }));
						dispatch(setIsChatOpen({ value: true }));
					}}
				>
					<div className="user-status">
						<div
							className={`user-chat-profile user-status-avatar ${
								isChatsOpen ? "friend-image" : ""
							}`}
							onClick={() => {
								dispatch(setIsLargeHidden({ value: true }));
								dispatch(setIsChatsOpen({ value: true }));
								dispatch(setIsChatOpen({ value: true }));
							}}
						>
							<img src="/img/avatar/17.jpg" alt="Profile" />
							<RiVerifiedBadgeFill color={"#36e9f7"} />
							<div className="badge-container-chats">
								<img src="/img/download.png" alt="Padge" />
								<p className="badge-number-chats">12</p>
							</div>
						</div>

						<p className="user-status-title">
							<span className="bold">Neko Bebop</span>
						</p>

						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Marketing Manager
							</p>
						)}
						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Brandmarks
							</p>
						)}

						<p className="user-status-text small">
							Awesome! I'll see you there!
						</p>

						<p className="user-status-timestamp floaty">54mins</p>
					</div>
				</div>
				<div
					className={`chat-widget-message`}
					onClick={() => {
						dispatch(setIsLargeHidden({ value: true }));
						dispatch(setIsChatsOpen({ value: true }));
						dispatch(setIsChatOpen({ value: true }));
					}}
				>
					<div className="user-status">
						<div
							className={`user-chat-profile user-status-avatar ${
								isChatsOpen ? "friend-image" : ""
							}`}
							onClick={() => {
								dispatch(setIsLargeHidden({ value: true }));
								dispatch(setIsChatsOpen({ value: true }));
								dispatch(setIsChatOpen({ value: true }));
							}}
						>
							<img src="/img/avatar/18.jpg" alt="Profile" />
							<RiVerifiedBadgeFill color={"#36e9f7"} />
							<div className="badge-container-chats">
								<img src="/img/download.png" alt="Padge" />
								<p className="badge-number-chats">12</p>
							</div>
						</div>

						<p className="user-status-title">
							<span className="bold">Neko Bebop</span>
						</p>

						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Marketing Manager
							</p>
						)}
						{isChatsOpen && (
							<p
								className="user-status-text small"
								style={{ color: "#adafca" }}
							>
								Brandmarks
							</p>
						)}

						<p className="user-status-text small">
							Awesome! I'll see you there!
						</p>

						<p className="user-status-timestamp floaty">54mins</p>
					</div>
				</div>
			</div>

			<form className="chat-widget-form">
				<div className="interactive-input small">
					<input
						type="text"
						id="chat-widget-search"
						name="chat_widget_search"
						placeholder="Search Messages..."
					/>
					<div className="interactive-input-icon-wrap">
						<svg className="interactive-input-icon icon-magnifying-glass">
							<use xlinkHref="#svg-magnifying-glass"></use>
						</svg>
					</div>

					<div className="interactive-input-action">
						<svg className="interactive-input-action-icon icon-cross-thin">
							<use xlinkHref="#svg-cross-thin"></use>
						</svg>
					</div>
				</div>
			</form>

			<div
				className="chat-widget-button"
				onClick={() => {
					dispatch(setIsLargeHidden({ value: true }));
					dispatch(setIsChatsOpen({ value: !isChatsOpen }));
					dispatch(setIsChatOpen({ value: false }));
				}}
			>
				<div className="chat-widget-button-icon">
					<div className="burger-icon">
						<div className="burger-icon-bar"></div>

						<div className="burger-icon-bar"></div>

						<div className="burger-icon-bar"></div>
					</div>
				</div>

				<p className="chat-widget-button-text">Messages / Chat</p>
			</div>
		</aside>
	);
};

export default AsideChats;
