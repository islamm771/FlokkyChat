import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../../app/feature/TabSlice";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaCircle, FaEnvelope, FaHeart } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { MdOutlineNightlight } from "react-icons/md";
import logo from "../../../assests/chat/logo.svg";
import "./Group.css";
import { Tooltip } from "antd";
import { BsShop } from "react-icons/bs";

const Grouping = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tabs.activeTab);

  const handleTabClick = (tabNumber) => {
    dispatch(setActiveTab(tabNumber));
  };

  return (
    <>
      <header className="h-[60px] md:h-[80px]">
        <div className="header-Grouping-chat">
          <div className="img">
            <img src={logo} alt="" />
          </div>
        </div>
      </header>
      <div className="content-Groupig">
        {/* <div className="profile-image">
          <div className="profile-image-content chat-main">
            <img src="/img/avatar/01.jpg" alt="Profile" />
            <RiVerifiedBadgeFill
              className="nav-small-verify"
              color={"#36e9f7"}
              size={16}
            />
            <MdAdminPanelSettings
              className="nav-small-admin"
              color={"#d7006a"}
              size={16}
            />
            						<div className="badge-container-nav">
							<img src="/img/download.png" alt="Padge" />
							<p className="badge-number-nav">12</p>
						</div>
          </div>
        </div> */}
        <div className="profile-image">
          <div className="profile-image-chat">
            <img src="/img/avatar/01.jpg" alt="Profile" />
            <RiVerifiedBadgeFill
              className="nav-small-verify"
              color={"#36e9f7"}
              size={16}
            />
            <MdAdminPanelSettings
              className="nav-small-admin"
              color={"#d7006a"}
              size={16}
            />
            <div className="badge-container-nav">
              <img src="/img/download.png" alt="Padge" />
              <p className="badge-number-nav">12</p>
            </div>
            <div className="status-profile-chat">
              <FaCircle/>
            </div>
          </div>
        </div>
        <ul className="menu small" style={{ paddingLeft: "0" }}>
          <li
            className={`menu-item ${
              activeTab === 1 ? "active" : ""
            } list-group-chat`}
            onClick={() => handleTabClick(1)}
          >
            <Tooltip placement="right" color="#fd6728" title="Communities">
              <div
                className="menu-item-link text-tooltip-tfr width-group-chat"
                to="/"
                data-title="Newsfeed"
              >
                <IoChatbubblesSharp className="menu-item-link-icon icon-newsfeed" />
              </div>
            </Tooltip>
          </li>
          <li
            className={`menu-item ${
              activeTab === 2 ? "active" : ""
            } list-group-chat`}
            onClick={() => handleTabClick(2)}
          >
            <Tooltip placement="right" color="#fd6728" title="Connections">
              <div
                className="menu-item-link text-tooltip-tfr width-group-chat"
                to="/"
                data-title="Newsfeed"
              >
                <FaEnvelope className="menu-item-link-icon icon-newsfeed" />
              </div>
            </Tooltip>
          </li>
          <li
            className={`menu-item ${
              activeTab === 6 ? "active" : ""
            } list-group-chat`}
            onClick={() => handleTabClick(6)}
          >
            <Tooltip placement="right" color="#fd6728" title="Flokkancing">
              <div
                className="menu-item-link text-tooltip-tfr width-group-chat"
                to="/"
                data-title="Newsfeed"
                >
                <GrUserWorker className="menu-item-link-icon icon-newsfeed gray-icon-chat" />
              </div>
            </Tooltip>
          </li>
          <li
            className={`menu-item ${
              activeTab === 3 ? "active" : ""
            } list-group-chat`}
            onClick={() => handleTabClick(3)}
          >
            <Tooltip placement="right" color="#fd6728" title="Jobs">
              <div
                className="menu-item-link text-tooltip-tfr width-group-chat"
                to="/"
                data-title="Newsfeed"
                >
                <GrUserWorker className="menu-item-link-icon icon-newsfeed gray-icon-chat" />
              </div>
            </Tooltip>
          </li>
          <li
            className={`menu-item ${
              activeTab === 4 ? "active" : ""
            } list-group-chat`}
            onClick={() => handleTabClick(4)}
          >
            <Tooltip placement="right" color="#fd6728" title="Marketplace">
              <div
                className="menu-item-link text-tooltip-tfr width-group-chat"
                to="/"
                data-title="Newsfeed"
                >
                  <svg
                  className="menu-item-link-icon icon-directory"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                >
                  <path
                    d="M23 14c-.7 0-1.4-.2-2-.6-.6.3-1.3.6-2 .6s-1.4-.2-2-.6c-.6.3-1.3.6-2 .6s-1.4-.2-2-.6c-.6.3-1.3.6-2 .6s-1.4-.2-2-.6c-.6.4-1.3.6-2 .6s-1.4-.2-2-.5c-.6.3-1.3.5-2 .5v11c0 1.1.9 2 2 2h12V17h6v10h2c1.1 0 2-.9 2-2V14c-.7 0-1.4-.2-2-.5-.6.3-1.3.5-2 .5zm-10 9H7v-6h6v6zM26 6V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v1l-3 4c0 1.1.9 2 2 2s2-.9 2-2l2-4h3l-1 4c0 1.1.9 2 2 2s2-.9 2-2V6h4v4c0 1.1.9 2 2 2s2-.9 2-2l-1-4h3l2 4c0 1.1.9 2 2 2s2-.9 2-2l-3-4z"
                  ></path>
                  </svg>
              </div>
            </Tooltip>
          </li>
          <li
            className={`menu-item ${
              activeTab === 5 ? "active" : ""
            } list-group-chat`}
            onClick={() => handleTabClick(5)}
          >
            <Tooltip placement="right" color="#fd6728" title="Favourites">
              <div
                className="menu-item-link text-tooltip-tfr width-group-chat"
                to="/"
                data-title="Newsfeed"
              >
                <FaHeart className="menu-item-link-icon icon-newsfeed" />
              </div>
            </Tooltip>
          </li>
        </ul>
      </div>
      <div className="light-night-mode-chat">
        <div className="icon-chat-light-night-mode">
          <MdOutlineNightlight />
        </div>
      </div>
    </>
  );
};

export default Grouping;
