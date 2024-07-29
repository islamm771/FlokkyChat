import React, { useEffect, useRef, useState } from "react";
import tony from "../../../assests/chat/tony.jpeg";
import one from "../../../assests/chat/1.jpg";
import two from "../../../assests/chat/2.jpg";
import three from "../../../assests/chat/3.jpg";
import four from "../../../assests/chat/4.jpg";
import {
  FaRegCircle,
  FaSearch,
  FaRegHeart,
  FaBell,
  FaFlag,
  FaCommentSlash,
} from "react-icons/fa";
import {
  IoMdArrowDropup,
  IoIosArrowForward,
  IoIosArrowDown
} from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleReport, toggleSearch } from "../../../app/feature/ListChatSlice";

const Content = () => {
  const [activeTab, setActiveTab] = useState("Media");
  const [dropDownStates, setDropDownStates] = useState(false);
  const [profileInfo, setProfileInfo] = useState(true);
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();

  const handleToggleSearch = () => {
    dispatch(toggleSearch());
  };
  const handleToggleReport = () => {
    dispatch(toggleReport());
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleToggleMenu = () => {
    setDropDownStates(!dropDownStates);
  };
  const handleToggleProfileInfo = () => {
    setProfileInfo(!profileInfo);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setDropDownStates(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <div className="content">
      <div className="wrap-profile">
        <div className="user-profile">
          <img src={tony} alt="tony" />
          <p className="name">Tony Stark</p>
          <div>
            <p className="message">
              Two things are infinite: the universe and human stupidity; and I'm
              not sure about the universe.
            </p>
          </div>
        </div>
        <div className="competition">
          <img src={one} alt="wo" />
          <img src={two} alt="wo" />
          <img src={three} alt="wo" />
          <img src={four} alt="wo" />
        </div>
        <div className="actions">
          <div className="search" onClick={handleToggleSearch}>
            <FaSearch />
          </div>
          <div className="options">
            <div className="btn-option" onClick={handleToggleMenu}>
              <p>Options</p>
              <IoMdArrowDropup />
            </div>
            <div
              ref={wrapperRef}
              className={`list-user-profile ${
                dropDownStates
                  ? "list-user-profile-active"
                  : "list-user-profile-disabled"
              }`}
            >
              <div className="list">
                <li>
                  <FaRegHeart />
                  <p>Make Favorite</p>
                </li>
                <li>
                  <FaRegCircle />
                  <p>Block</p>
                </li>
                <li>
                  <FaBell />
                  <p>Mute</p>
                </li>
                <li onClick={handleToggleReport}>
                  <FaFlag />
                  <p>Report</p>
                </li>{" "}
                <li>
                  <FaCommentSlash />
                  <p>Clear Chats</p>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="responsive-space">
          <p>Responsive Ad Space</p>
        </div>
        <div className="toogleProfile-info">
          <div className="main-btn-profile" onClick={handleToggleProfileInfo}>
            Profile
            {profileInfo ? <IoIosArrowForward /> : <IoIosArrowDown  />}
          </div>
          <div
            className={`list-profile-info ${
              profileInfo
                ? "list-profile-info-active"
                : "list-profile-info-disabled"
            }`}
          >
            <div className="info">
              <p className="label-name">Name</p>
              <p className="name">Tony Stark</p>
            </div>
            <div className="info">
              <p className="label-name">Birthday</p>
              <p className="name">1993-09-21</p>
            </div>
            <div className="info">
              <p className="label-name">Country</p>
              <p className="name">US</p>
            </div>
          </div>
        </div>
        <div className="media-file">
          <div className="tabs-profile">
            <div
              className={`${activeTab === "Media" ? "active" : ""}`}
              onClick={() => handleTabClick("Media")}
            >
              <p>Media</p>
            </div>
            <div
              className={`${activeTab === "Files" ? "active" : ""}`}
              onClick={() => handleTabClick("Files")}
            >
              <p>Files</p>
            </div>
          </div>
          <div className="tabs-content-profile">
            {activeTab === "Media" && (
              <div className="tabs-content-profile">media</div>
            )}
            {activeTab === "Files" && (
              <div className="content-media-file">Files</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
