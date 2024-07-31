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
  const {isMuteModel} = useSelector( state => state.global );

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
  }, [list_music]);

  const [position, setPosition] = useState(0); // Current position of the div
  const startX = useRef(0); // Initial touch position
  const divRef = useRef(null);
  
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const difference = currentX - startX.current; // Difference to determine direction

    setPosition((prevPosition) => {
      // Calculate new position and clamp it between 0 and maxPosition
      const newPosition = Math.min(Math.max(prevPosition + difference, 0), 600);
      // Update the position and return it
      return newPosition;
    });

    if (Math.min(Math.max(position + difference, 0), 600) >= divRef?.current?.clientWidth) {
      setPosition(divRef.current.clientWidth);
      handleToggleOnlineList();
    }

    startX.current = currentX; // Update start position
  };

  const handleTouchEnd = () => {
    // Optionally: Implement snapping back or other logic if needed
  };

  const handleOutsideClose = (e) => {
    if (divRef.current && !divRef.current.contains(e.target)) {
      handleToggleOnlineList();
    }
  };

  useEffect(() => {
    if (isOnlineList && !isMuteModel && window.innerWidth < 1670) {
      document.addEventListener("mousedown", handleOutsideClose);
    } else {
      document.removeEventListener('mousedown', handleOutsideClose);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClose);
    };
  }, [isOnlineList, isMuteModel, window.innerWidth]);

  useEffect(() => {
    if (isOnlineList) {
      setPosition(0);
    }
  }, [isOnlineList]);

  return (
    <div
      className={`${
        isOnlineList ? "OnlineListContainer" : "OnlineListContainerHidden"
      }`}
      ref={divRef}
      style={{ right: `${-position}px` }}
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
