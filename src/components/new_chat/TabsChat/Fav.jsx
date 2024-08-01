import { IoIosArrowDown } from "react-icons/io";
import FormInputwithIcon from "../../ui/formInputWithSearchIcon/FormInputwithIcon";
import bfs from "../../../assests/chat/abbie.jpeg";
import bfs1 from "../../../assests/chat/black.jpeg";
import bfs2 from "../../../assests/chat/duke.jpeg";
import { FaVolumeUp } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import {
  toggleChatRoom,
  toggleWrapgroupPeopleChat,
} from "../../../app/feature/ListChatSlice";
import { useDispatch } from "react-redux";
import { GoPlus } from "react-icons/go";
import { IoFilterOutline } from "react-icons/io5";

const Fav = () => {
  const [isListActionPeopleChat1, setIsListActionPeopleChat1] = useState(false);
  const [isListActionPeopleChat2, setIsListActionPeopleChat2] = useState(false);
  const [isListActionPeopleChat3, setIsListActionPeopleChat3] = useState(false);
  const listRef = useRef();
  const listRef2 = useRef();
  const listRef3 = useRef();
  const dispatch = useDispatch();

  const handleToggleWrapgroupPeopleChat = () => {
    dispatch(toggleWrapgroupPeopleChat());
  };

  const handleToggleListActionPeople1 = () => {
    setIsListActionPeopleChat1(!isListActionPeopleChat1);
  };
  const handleToggleListActionPeople2 = () => {
    setIsListActionPeopleChat2(!isListActionPeopleChat2);
  };
  const handleToggleListActionPeople3 = () => {
    setIsListActionPeopleChat3(!isListActionPeopleChat3);
  };

  const handleToggleChatList = () => {
    dispatch(toggleChatRoom());
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setIsListActionPeopleChat1(false);
      }
      if (listRef2.current && !listRef2.current.contains(event.target)) {
        setIsListActionPeopleChat2(false);
      }
      if (listRef3.current && !listRef3.current.contains(event.target)) {
        setIsListActionPeopleChat3(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [listRef, listRef2, listRef3]);

  return (
    <div>
      <div className="tab-heading flex items-center justify-between py-[15px] px-2">
        <h3 className="text-[25px]">Favourites</h3>
        <div className="flex gap-3">
          <button
            className="text-[#3e3f5e] w-fit"
            onClick={handleToggleChatList}
          >
            <GoPlus className="inline" />
            <span className="hidden md:inline ml-1">New</span>
          </button>
          <button className="text-[#3e3f5e] w-fit">
            <IoFilterOutline className="inline" />
            <span className="hidden md:inline ml-1">Filter</span>
          </button>
        </div>
      </div>
      <div className="hidden md:block Search-people-chat">
        <FormInputwithIcon
          name={"Search-People"}
          id={"Search-People"}
          label={"Search Fav"}
        />
        <div style={{ marginBottom: "5px" }}></div>
      </div>
      <div className="people-chat-list">
        <div className="communities-list">
          <p className="text-[18px] font-bold my-2 px-2">Communities</p>

          <div className="profile-header-chat">
            <div className="profile-header__avatar night-profile-header-chat">
              <img src={bfs} alt={`'s avatar`} />
            </div>
            <div className="profile-header__content">
              <div
                className="timeStamp-name"
                onClick={
                  window.innerWidth < 490
                    ? handleToggleListActionPeople1
                    : undefined
                }
              >
                <p className="name-peopla-chat">Devolpers Frontend</p>
                <p className="message_Recieved-chat">Salem:How are you?</p>
              </div>

              <div className="message-people-count">
                <div
                  className="wrap-list-toggle"
                  onClick={handleToggleWrapgroupPeopleChat}
                >
                  <p className="timeStamp-chat-people">12:19 pm</p>
                  <div className="count-volume-chat-list">
                    <FaVolumeUp className="icon-volume-chat" />
                    <p className="count-people-chat-list">1</p>
                  </div>
                </div>
                <IoIosArrowDown
                  className="list-people-chat"
                  onClick={handleToggleListActionPeople1}
                />
              </div>
            </div>
            <div
              ref={listRef}
              className={`list-actoin-people-chat ${
                isListActionPeopleChat1
                  ? "active-people-chat"
                  : "disActive-people-chat"
              }`}
            >
              <div className="ul-chat-people">
                <li>Archive chat</li>
                <li>Mute notifications</li>
                <li>Exit group</li>
                <li>Pin chat</li>
                <li>Make as unread</li>
              </div>
            </div>
          </div>
          <div className="profile-header-chat">
            <div className="profile-header__avatar online-profile-header-chat">
              <img src={bfs} alt={`'s avatar`} />
            </div>
            <div className="profile-header__content">
              <div
                className="timeStamp-name"
                onClick={
                  window.innerWidth < 490
                    ? handleToggleListActionPeople2
                    : undefined
                }
              >
                <p className="name-peopla-chat">Devolpers Frontend</p>
                <p className="message_Recieved-chat">Salem:How are you?</p>
              </div>

              <div className="message-people-count">
                <div
                  className="wrap-list-toggle"
                  onClick={handleToggleWrapgroupPeopleChat}
                >
                  <p className="timeStamp-chat-people">12:19 pm</p>
                  <div className="count-volume-chat-list">
                    <FaVolumeUp className="icon-volume-chat" />
                    <p className="count-people-chat-list">1</p>
                  </div>
                </div>
                <IoIosArrowDown
                  className="list-people-chat"
                  onClick={handleToggleListActionPeople2}
                />
              </div>
            </div>
            <div
              ref={listRef2}
              className={`list-actoin-people-chat ${
                isListActionPeopleChat2
                  ? "active-people-chat"
                  : "disActive-people-chat"
              }`}
            >
              <div className="ul-chat-people">
                <li>Archive chat</li>
                <li>Mute notifications</li>
                <li>Exit group</li>
                <li>Pin chat</li>
                <li>Make as unread</li>
              </div>
            </div>
          </div>
          <div className="profile-header-chat">
            <div className="profile-header__avatar offline-profile-header-chat">
              <img src={bfs1} alt={`'s avatar`} />
            </div>
            <div className="profile-header__content">
              <div
                className="timeStamp-name"
                onClick={
                  window.innerWidth < 490
                    ? handleToggleListActionPeople3
                    : undefined
                }
              >
                <p className="name-peopla-chat">Devolpers Frontend</p>
                <p className="message_Recieved-chat">Salem:How are you?</p>
              </div>

              <div className="message-people-count">
                <div
                  className="wrap-list-toggle"
                  onClick={handleToggleWrapgroupPeopleChat}
                >
                  <p className="timeStamp-chat-people">12:19 pm</p>
                  <div className="count-volume-chat-list">
                    <FaVolumeUp className="icon-volume-chat" />
                    <p className="count-people-chat-list">1</p>
                  </div>
                </div>
                <IoIosArrowDown
                  className="list-people-chat"
                  onClick={handleToggleListActionPeople3}
                />
              </div>
            </div>
            <div
              ref={listRef3}
              className={`list-actoin-people-chat ${
                isListActionPeopleChat3
                  ? "active-people-chat"
                  : "disActive-people-chat"
              }`}
            >
              <div className="ul-chat-people">
                <li>Archive chat</li>
                <li>Mute notifications</li>
                <li>Exit group</li>
                <li>Pin chat</li>
                <li>Make as unread</li>
              </div>
            </div>
          </div>
        </div>

        <div className="connection-list">
          <p className="text-[18px] font-bold my-2 px-2">Connections</p>
        </div>


        <div className="job-list">
          <p className="text-[18px] font-bold my-2 px-2">Jobs</p>
        </div>
      </div>
    </div>
  );
};

export default Fav;
