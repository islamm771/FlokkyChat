import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FaArrowsAltH, FaInfo, FaUserCog, FaVideo } from "react-icons/fa";
import {
  toggleChatList,
  toggleProfile,
  toggleReport,
  toggleVideoCall,
} from "../../../app/feature/ListChatSlice";
import {
  FaRegCircle,
  FaRegHeart,
  FaBell,
  FaFlag,
  FaCommentSlash,
} from "react-icons/fa";

const Navigation = () => {
  const [dropDownStates, setDropDownStates] = useState(false);
  const wrapperRef = useRef(null);

  const handleToggleVideoCall = () => {
    dispatch(toggleVideoCall());
  };

  const handleToggleMenu = () => {
    setDropDownStates(!dropDownStates);
  };
  const handleToggleReport = () => {
    dispatch(toggleReport());
  };

  const dispatch = useDispatch();

  const handleToggleChatList = () => {
    dispatch(toggleChatList());
  };
  const handleToggleProfile = () => {
    dispatch(toggleProfile());
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
    <div className="listChat">
      <div className="header-mainChat">
        <div className="right-main-chat">
          <div className="icon" onClick={handleToggleChatList}>
            <FaArrowsAltH />
          </div>
          <div className="user-info-main-chat">
            <p className="name">Layla Mccall</p>
            <p className="nickname">@layla</p>
          </div>
          <div className="user-icon">
            <FaUserCog onClick={handleToggleMenu} />
            <div
              ref={wrapperRef}
              className={`list-user-profile-main ${
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
                <li onClick={handleToggleProfile}>
                  <FaInfo />
                  <p>Toggle Chat Info</p>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="right-main-chat">
          <div className="btn-call" onClick={handleToggleVideoCall}>
            <FaVideo />
            Call
          </div>
          <div className="icon" onClick={handleToggleProfile}>
            <FaArrowsAltH />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
