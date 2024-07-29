import { useEffect, useRef, useState } from "react";
import { IoChatbubblesOutline, IoChatbubblesSharp } from "react-icons/io5";
import { FaRegEnvelope, FaSearch, FaEnvelope, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Room from "./Room";
import Dm from "./Dm";
import Fav from "./Fav";
import { chatList } from "../../../assests/data/ListChat";
import bfs from "../../../assests/chat/bf4.jpg";
import { BsThreeDots } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { SiGooglemarketingplatform } from "react-icons/si";
import { useDispatch } from "react-redux";
import { toggleGroupChat } from "../../../app/feature/ListChatSlice";

const PanelContent = () => {
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState(1);
  const [tabsMobileList, setTabsMobileList] = useState(false);

  const handleToggleGroupChat = ()=>{
    dispatch(toggleGroupChat())
  }
  const toggleTabsMobileList = () => {
    setTabsMobileList(!tabsMobileList);
  };

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const mobileTabListRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileTabListRef.current &&
        !mobileTabListRef.current.contains(event.target)
      ) {
        setTabsMobileList(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="panel-content ">
        <div className="wrap-list-chat">
          <div onClick={toggleTabsMobileList} className="icon-mobile">
            {activeTab === 1 && <IoChatbubblesOutline className="offline" />}
            {activeTab === 2 && <FaRegEnvelope className="offline" />}
            {activeTab === 3 && <GrUserWorker className="offline" />}
            {activeTab === 4 && <SiGooglemarketingplatform className="offline" />}
            {activeTab === 5 && <CiHeart className="offline" />}
          </div>
          <ul
            className={`tabsmobile ${
              tabsMobileList ? "tabsmobile-active" : "tabsmobile-disbled"
            }`}
            ref={mobileTabListRef}
          >
            <li
              className={activeTab === 1 ? "activemobile" : ""}
              onClick={() => handleTabClick(1)}
            >
              <h5>
                <IoChatbubblesOutline className="offline" /> <p>Communities</p>
              </h5>
            </li>
            <li
              className={activeTab === 2 ? "activemobile" : ""}
              onClick={() => handleTabClick(2)}
            >
              <h5>
                <FaEnvelope className="offline" /> <p>Connections</p>
              </h5>
            </li>
            <li
              className={activeTab === 3 ? "activemobile" : ""}
              onClick={() => handleTabClick(3)}
            >
              <h5>
                <GrUserWorker className="offline" /> <p>Jobs</p>
              </h5>
            </li>
            <li
              className={activeTab === 4 ? "activemobile" : ""}
              onClick={() => handleTabClick(4)}
            >
              <h5>
                <SiGooglemarketingplatform className="offline" /> <p>Marketplace</p>
              </h5>
            </li>
            <li
              className={activeTab === 5 ? "activemobile" : ""}
              onClick={() => handleTabClick(5)}
            >
              <h5>
                <CiHeart className="offline" /> <p>Fav</p>
              </h5>
            </li>
          </ul>
          <ul className="tabs">
            <li
              className={activeTab === 1 ? "active tabs-enter" : "tabs-exit"}
              onClick={() => handleTabClick(1)}
            >
              <h5>
                <IoChatbubblesSharp /> Communities
              </h5>
            </li>
            <li
              className={activeTab === 2 ? "active tabs-enter" : "tabs-exit"}
              onClick={() => handleTabClick(2)}
            >
              <h5>
                <FaEnvelope /> Connections
              </h5>
            </li>
            <li
              className={activeTab === 3 ? "active tabs-enter" : "tabs-exit"}
              onClick={() => handleTabClick(3)}
            >
              <h5>
                <GrUserWorker /> Jobs
              </h5>
            </li>
            <li
              className={activeTab === 4 ? "active tabs-enter" : "tabs-exit"}
              onClick={() => handleTabClick(4)}
            >
              <h5>
                <SiGooglemarketingplatform /> Marketplace
              </h5>
            </li>
            <li
              className={activeTab === 5 ? "active tabs-enter" : "tabs-exit"}
              onClick={() => handleTabClick(5)}
            >
              <h5>
                <FaHeart /> Fav
              </h5>
            </li>
          </ul>
          <div className="nav-search">
            <div className="input-group-listChat">
              <input
                type="text"
                className="inpt-Search-listChat"
                placeholder="Search users in this room..."
              />
              <div className="input-group-append">
                <FaSearch />
              </div>
            </div>
          </div>
          {activeTab === 1 && (
            <div className="pinned-room" onClick={handleToggleGroupChat}>
              {chatList.slice(0, 1).map((data, index) => (
                <div>
                  <div className="chat-item chat-item-z-index" key={data._id}>
                    <div className="user-list-item">
                      <div className="user-avatar-chat">
                        <div className={`user-room`}>
                          <img src={bfs} alt="tony" className="img-chat" />
                        </div>
                      </div>
                      <div className="user-info">
                        <div className="chat-name">
                          <div className="chat-name-text">Battlefield 4 </div>
                        </div>
                        <div className="chat-preview">
                          <div className="chat-is-read">
                            Battlefield 4 Chat Room
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="hr-room-pinned">
                <div className="svg">
                  <BsThreeDots />
                </div>
              </div>
            </div>
          )}
          <div className="tab-content">
            <div className="wrap-tab-content">
              {activeTab === 1 && (
                <div>
                  <Room />
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  <Dm />
                </div>
              )}
              {activeTab === 3 && (
                <div>
                  <Fav />
                </div>
              )}
            </div>
          </div>
          <div className="responsive-space-list-chat">
          <p>Responsive Ad Space</p>
        </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default PanelContent;
