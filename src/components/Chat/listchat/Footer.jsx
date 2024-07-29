import React, { useState, useEffect, useRef } from "react";
import { FaCircle, FaPlus ,FaCloudMoon} from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import tony from "../../../assests/chat/abbie.jpeg";
import { useSelector } from "react-redux";
import { selectGlobal } from "../../../app/feature/ListChatSlice";

const Footer = () => {
  const [dropDownStates, setDropDownStates] = useState(false);
  const [dropDownThemeStates, setDropDownThemeStates] = useState(false);

  const toggleDropDown = () => {
    setDropDownStates(!dropDownStates);
  };
  const toggleDropDownTheme = () => {
    setDropDownThemeStates(!dropDownThemeStates);
  };

  const wrapperRef = useRef(null);
  const wrapperThemeRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        (wrapperRef.current && !wrapperRef.current.contains(event.target)) &&
        (wrapperThemeRef.current && !wrapperThemeRef.current.contains(event.target))
      ) {
        setDropDownStates(false);
        setDropDownThemeStates(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, wrapperThemeRef]);
  const { isOpenChatList , isProfile , } = useSelector(selectGlobal);

  return (
    <div className={`${isOpenChatList?"footer  ":"togglefooter"} ${isProfile?" wrap-bottom-mainchat-screen":""}`}>
      <div className="txt-main">
        <div onClick={toggleDropDown} className="user-avatar-chatFooter">
          <div className={`online-status`}>
            <FaCircle className={`${"online"}`} />
            <img src={tony} alt="tony" className="img-chat" />
          </div>
          <div className="username">Layla Macall</div>
          <div className="icon">
            <IoMdArrowDropup />
          </div>
        </div>
        <div onClick={toggleDropDownTheme} className="theme-color">
          <div className="icons">
            <FaSun />
            <MdOutlineDarkMode />
          </div>
        </div>
      </div>
      <div
        ref={wrapperRef}
        className={`list-user ${
          dropDownStates ? "list-user-active" : "list-user-disbled"
        }`}
      >
        <div className="list">
          <li>
            <FaCircle className="online" />
            <p>Online</p>
          </li>
          <li>
            <FaCircle className="offline" />
            <p>Offline</p>
          </li>
          <li>
            <FaCircle className="busy" />
            <p>Busy</p>
          </li>
          <li>
            <FaCircle className="away" />
            <p>Away</p>
          </li>
          <hr />
          <li>
            <FaUser className="offline" />
            <p>Profile</p>
          </li>
          <li>
            <IoChatbubblesSharp className="offline" />
            <p>My Rooms</p>
          </li>
          <li>
            <FaPlus className="offline" />
            <p>New Chat Room</p>
          </li>
          <hr />
          <li>
            <p>About Us</p>
          </li>
          <li>
            <p>Contact Us</p>
          </li>
          <li>
            <p>Privacy Policy</p>
          </li>
          <li>
            <p>Terms & Conditions</p>
          </li>
          <hr />
          <li>
            <FaPowerOff className="offline" />
            <p>Logout</p>
          </li>
        </div>
      </div>
      <div ref={wrapperThemeRef} className={`list-theme ${dropDownThemeStates?"list-theme-active" : "list-theme-disbled"}`}>
      <div className="list">
          <li>
            <MdOutlineDarkMode className="offline"/>
            <p>Switch to Dark Theme</p>
          </li>
          <li>
            <FaCloudMoon className="offline"/>
            <p> Switch to Hybrid Theme</p>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
