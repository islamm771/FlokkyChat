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
            <div
              className="menu-item-link text-tooltip-tfr width-group-chat"
              to="/"
              data-title="Newsfeed"
            >
              <IoChatbubblesSharp className="menu-item-link-icon icon-newsfeed" />
            </div>
          </li>
          <li
            className={`menu-item ${
              activeTab === 2 ? "active" : ""
            } list-group-chat`}
            onClick={() => handleTabClick(2)}
          >
            <div
              className="menu-item-link text-tooltip-tfr width-group-chat"
              to="/"
              data-title="Newsfeed"
            >
              <FaEnvelope className="menu-item-link-icon icon-newsfeed" />
            </div>
          </li>
          <li
            className={`menu-item ${
              activeTab === 3 ? "active" : ""
            } list-group-chat`}
            onClick={() => handleTabClick(3)}
          >
            <div
              className="menu-item-link text-tooltip-tfr width-group-chat"
              to="/"
              data-title="Newsfeed"
            >
              <GrUserWorker className="menu-item-link-icon icon-newsfeed gray-icon-chat" />
            </div>
          </li>
          <li
            className={`menu-item ${
              activeTab === 4 ? "active" : ""
            } list-group-chat`}
            onClick={() => handleTabClick(4)}
          >
            <div
              className="menu-item-link text-tooltip-tfr width-group-chat"
              to="/"
              data-title="Newsfeed"
            >
              <SiGooglemarketingplatform className="menu-item-link-icon icon-newsfeed" />
            </div>
          </li>
          <li
            className={`menu-item ${
              activeTab === 5 ? "active" : ""
            } list-group-chat`}
            onClick={() => handleTabClick(5)}
          >
            <div
              className="menu-item-link text-tooltip-tfr width-group-chat"
              to="/"
              data-title="Newsfeed"
            >
              <FaHeart className="menu-item-link-icon icon-newsfeed" />
            </div>
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
