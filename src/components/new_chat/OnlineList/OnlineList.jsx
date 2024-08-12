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
  const onlineListRef = useRef(null);
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
      if (onlineListRef.current && !onlineListRef.current.contains(event.target) && isOnlineList) {
        dispatch(toggleListOnlineListChat());
      }
      if (list_music.current && !list_music.current.contains(event.target)) {
        setOnlineListMusic(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [list_music,isOnlineList]);


  return (
    <div
      className={`${
        isOnlineList ? "OnlineListContainer" : "OnlineListContainerHidden"
      }`}
      ref={onlineListRef}
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
