import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	setIsLargeHidden,
	setIsMobileNavOpen,
	setIsOverlayVisible,
} from "../../../app/feature/outletSlice";
import { setActiveTab } from "../../../app/feature/TabSlice";
import { GrUserWorker } from "react-icons/gr";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaCircle, FaEnvelope, FaHeart } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";


const MyChatItems = ({ isMobile }) => {
	const location = useLocation();
	const dispatch = useDispatch();
	const isLargeHidden = useSelector((state) => state.outlet.isLargeHidden);
	const activeTab = useSelector((state) => state.tabs.activeTab);

	const handleTabClick = (tabNumber) => {
		dispatch(setActiveTab(tabNumber));
	};
	return (
		// <div className="flokk-items">
		// 	<li
		// 		className={`menu-item ${
		// 			location.pathname.includes("/marketplace") ? "active" : ""
		// 		}`}
		// 	>
		// 		<Link
		// 			className="menu-item-link"
		// 			to="/affiliations"
		// 			onClick={() => {
		// 				if (isMobile) {
		// 					dispatch(setIsOverlayVisible({ value: false }));
		// 					dispatch(setIsMobileNavOpen({ value: false }));
		// 				} else {
		// 					dispatch(setIsLargeHidden({ value: !isLargeHidden }));
		// 				}
		// 			}}
		// 		>
		// 			<svg className="menu-item-link-icon icon-group">
		// 				<use xlinkHref="#svg-group"></use>
		// 			</svg>
		// 			Marketplace
		// 		</Link>
		// 	</li>

		// 	<li
		// 		className={`menu-item ${
		// 			location.pathname.includes("/businesses") ? "active" : ""
		// 		}`}
		// 	>
		// 		<Link
		// 			to={"/businesses"}
		// 			className="menu-item-link"
		// 			onClick={() => {
		// 				if (isMobile) {
		// 					dispatch(setIsOverlayVisible({ value: false }));
		// 					dispatch(setIsMobileNavOpen({ value: false }));
		// 				} else {
		// 					dispatch(setIsLargeHidden({ value: !isLargeHidden }));
		// 				}
		// 			}}
		// 		>
		// 			<svg
		// 				className="menu-item-link-icon icon-directory"
		// 				xmlns="http://www.w3.org/2000/svg"
		// 				width="24"
		// 				height="24"
		// 				viewBox="0 0 24 24"
		// 			>
		// 				<path
		// 					// fill="#f79f58"
		// 					d="M5,21 L5,1 L7,1 L7,2 L21.1247446,2 L18.1259893,7.99991055 L21.126034,14 L7,14 L7,21 L8,21 L8,23 L4,23 L4,21 L5,21 Z M7,12 L17.889966,12 L15.8900107,8.00008945 L17.8892554,4 L7,4 L7,12 Z"
		// 				></path>
		// 			</svg>
		// 			Communities
		// 		</Link>
		// 	</li>

		// 	<li
		// 		className={`menu-item ${
		// 			location.pathname.includes("/connections") ? "active" : ""
		// 		}`}
		// 	>
		// 		<Link
		// 			to={"/connections"}
		// 			className="menu-item-link"
		// 			onClick={() => {
		// 				if (isMobile) {
		// 					dispatch(setIsOverlayVisible({ value: false }));
		// 					dispatch(setIsMobileNavOpen({ value: false }));
		// 				} else {
		// 					dispatch(setIsLargeHidden({ value: !isLargeHidden }));
		// 				}
		// 			}}
		// 		>
		// 			<svg className="menu-item-link-icon icon-forums">
		// 				<use xlinkHref="#svg-forums"></use>
		// 			</svg>
		// 			Connections
		// 		</Link>
		// 	</li>
		// </div>

		<ul className="chat-items pl-[20px]">
          <li
            className={`menu-item ${
              activeTab === 1 ? "active" : ""
            }`}
            onClick={() => {
				dispatch(setIsOverlayVisible({ value: false }));
				dispatch(setIsMobileNavOpen({ value: false }));
				handleTabClick(1)
			}}
          >
            <div
              className="menu-item-link text-tooltip-tfr"
              to="/"
              data-title="Newsfeed"
            >
              <IoChatbubblesSharp className="menu-item-link-icon icon-newsfeed" />
			  <span>Communities</span>
            </div>
          </li>
          <li
            className={`menu-item ${
              activeTab === 2 ? "active" : ""
            }`}
            onClick={() => {
				dispatch(setIsOverlayVisible({ value: false }));
				dispatch(setIsMobileNavOpen({ value: false }));
				handleTabClick(2)
			}}
          >
            <div
              className="menu-item-link"
              to="/"
              data-title="Newsfeed"
            >
              <FaEnvelope className="menu-item-link-icon icon-newsfeed" />
			  <span>Connections</span>
            </div>
          </li>
          <li
            className={`menu-item ${
              activeTab === 3 ? "active" : ""
            }`}
            onClick={() => {
				dispatch(setIsOverlayVisible({ value: false }));
				dispatch(setIsMobileNavOpen({ value: false }));
				handleTabClick(3)
			}}
          >
            <div
              className="menu-item-link"
              to="/"
              data-title="Newsfeed"
            >
              <GrUserWorker className="menu-item-link-icon icon-newsfeed gray-icon-chat" />
			  <span>Job</span>
            </div>
          </li>
          <li
            className={`menu-item ${
              activeTab === 4 ? "active" : ""
            }`}
            onClick={() => {
				dispatch(setIsOverlayVisible({ value: false }));
				dispatch(setIsMobileNavOpen({ value: false }));
				handleTabClick(4)
			}}
          >
            <div
              className="menu-item-link"
              to="/"
              data-title="Newsfeed"
            >
              <SiGooglemarketingplatform className="menu-item-link-icon icon-newsfeed" />
			  <span>Marketplace</span>
            </div>
          </li>
          <li
            className={`menu-item ${
              activeTab === 5 ? "active" : ""
            }`}
            onClick={() => {
				dispatch(setIsOverlayVisible({ value: false }));
				dispatch(setIsMobileNavOpen({ value: false }));
				handleTabClick(5)
			}}
          >
            <div
              className="menu-item-link"
              to="/"
              data-title="Newsfeed"
            >
              <FaHeart className="menu-item-link-icon icon-newsfeed" />
			  <span>Favourites</span>
            </div>
          </li>
        </ul>


	);
};

export default MyChatItems;
