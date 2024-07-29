import "../OnlineList/OnlineList.css";
import radio from "../../../assests/chat/radio_1.png";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGlobal, toggleListOnlineListChat } from "../../../app/feature/ListChatSlice";
import { toast } from "react-toastify";
import InformationChat from "./TabsListOnline/InformationChat";
import SearchChat from "./TabsListOnline/SearchChat";
import ArchieveMessages from "./TabsListOnline/ArchieveMessages";
import SterredMessages from "./TabsListOnline/SterredMessages";
import { setActiveTabOnline } from "../../../app/feature/TabOnlineList";
import ViewProfile from "./TabsListOnline/ViewProfile";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const OnlineList = () => {
  const list_music = useRef(null);

  const dispatch = useDispatch();
  const { isOnlineList } = useSelector(selectGlobal);
  const activeTabOnline = useSelector(
    (state) => state.tabsOnline.activeTabOnline
  );

  const [isPlay, setIsPlay] = useState(false);
  const [onlineListMusic, setOnlineListMusic] = useState(false);

  const handleTabClick = (tabNumber) => {
    dispatch(setActiveTabOnline(tabNumber));
  };

  const handleToggleOnlineList = () => {
    dispatch(toggleListOnlineListChat());
  };

  const handleTogglePlay = () => {
    setIsPlay(!isPlay);
  };
  const handleTextCoppied = () => {
    toast("link invite copied", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      theme: "light",
      style: { width: "200px", height: "50px" },
    });
  };
  const handleToggleOnlineListMusic = () => {
    setOnlineListMusic(!onlineListMusic);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (list_music.current && !list_music.current.contains(event.target)) {
        setOnlineListMusic(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ list_music]);


  const [position, setPosition] = useState(0); // Current position of the div
  const startX = useRef(0); // Initial touch position
  const divRef = useRef(null)  
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const difference = currentX - startX.current; // Difference to determine direction

    setPosition(prevPosition => {
      // Calculate new position and clamp it between 0 and maxPosition
      const newPosition = Math.min(Math.max(prevPosition + difference, 0), 600);
      // Update the position and return it
      return newPosition;
    });

    if(Math.min(Math.max(position + difference, 0), 600) >= divRef?.current?.clientWidth){
      setPosition(divRef.current.clientWidth)
      handleToggleOnlineList();
    }

    startX.current = currentX; // Update start position
  };

  const handleTouchEnd = () => {
    // Optionally: Implement snapping back or other logic if needed
  };

  useEffect( () => {
    if(isOnlineList){
      setPosition(0)
    }
  } ,[isOnlineList])

  return (
    <div
    className={`${
      isOnlineList ? "OnlineListContainer" : "OnlineListContainerHidden"
    }`}
    ref={divRef}
    // style={{ left: isOnlineList ? `${position}px` : `${position}px`}}
    style={{ right: `${-position}px`}}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
    >
      <Header
        handleToggleOnlineList={handleToggleOnlineList}
        handleTextCoppied={handleTextCoppied}
        handleTabClick={handleTabClick}
        // setIsSetting={setIsSetting}
        // isSetting={isSetting}
      />
      {/* <div
        ref={dropDown_DownList}
        className="dropdown-navigation header-settings-dropdown setHeight-online-list"
        style={{
          position: "absolute",
          zIndex: "9999",
          top: "64px",
          right: "22px",
          opacity: `${isSetting ? "1" : "0"}`,
          visibility: `${isSetting ? "visible" : "hidden"}`,
          transform: `translate(0px, ${isSetting ? "0px" : "-40px"})`,
          transition:
            "transform 0.4s ease-in-out 0s, opacity 0.4s ease-in-out 0s, visibility 0.4s ease-in-out 0s",
        }}
      >
        <div className="dropdown-navigation-header">
          <div className="user-status">
            <div className="user-chat-profile user-status-avatar">
              <img src="/img/avatar/01.jpg" alt="Profile" />
            </div>

            <p className="user-status-title">
              <span className="bold">Hi Marina!</span>
            </p>

            <p className="user-status-text small">
              <a href="profile-timeline.html">@marinavalentine</a>
            </p>
          </div>
        </div>

        <p className="dropdown-navigation-category">My Profile</p>

        <a className="dropdown-navigation-link" href="hub-profile-info.html">
          Profile Info
        </a>

        <a className="dropdown-navigation-link" href="hub-profile-social.html">
          Social &amp; Stream
        </a>

        <a
          className="dropdown-navigation-link"
          href="hub-profile-notifications.html"
        >
          Notifications
        </a>

        <a
          className="dropdown-navigation-link"
          href="hub-profile-messages.html"
        >
          Messages
        </a>

        <a
          className="dropdown-navigation-link"
          href="hub-profile-requests.html"
        >
          Friend Requests
        </a>

        <p className="dropdown-navigation-category">Account</p>

        <a className="dropdown-navigation-link" href="hub-account-info.html">
          Account Info
        </a>

        <a
          className="dropdown-navigation-link"
          href="hub-account-password.html"
        >
          Change Password
        </a>

        <a
          className="dropdown-navigation-link"
          href="hub-account-settings.html"
        >
          General Settings
        </a>

        <p className="dropdown-navigation-category">Groups</p>

        <a
          className="dropdown-navigation-link"
          href="hub-group-management.html"
        >
          Manage Groups
        </a>

        <a
          className="dropdown-navigation-link"
          href="hub-group-invitations.html"
        >
          Invitations
        </a>

        <p className="dropdown-navigation-category">My Store</p>

        <a className="dropdown-navigation-link" href="hub-store-account.html">
          My Account <span className="highlighted">$250,32</span>
        </a>

        <a className="dropdown-navigation-link" href="hub-store-statement.html">
          Sales Statement
        </a>

        <a className="dropdown-navigation-link" href="hub-store-items.html">
          Manage Items
        </a>

        <a className="dropdown-navigation-link" href="hub-store-downloads.html">
          Downloads
        </a>

        <p className="dropdown-navigation-button button small secondary">
          Logout
        </p>
      </div> */}
      {activeTabOnline === 1 && <InformationChat direction="right" />}
      {activeTabOnline === 2 && <SterredMessages direction="right" />}
      {activeTabOnline === 3 && <ArchieveMessages direction="right" />}
      {activeTabOnline === 4 && <SearchChat direction="right" />}
      {activeTabOnline === 5 && <ViewProfile direction="right" />}
      <Footer
        radio={radio}
        handleTogglePlay={handleTogglePlay}
        isPlay={isPlay}
        handleToggleOnlineListMusic={handleToggleOnlineListMusic}
        list_music={list_music}
        onlineListMusic={onlineListMusic}
      />
    </div>
  );
};

export default OnlineList;
