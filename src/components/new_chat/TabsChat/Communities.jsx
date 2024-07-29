import { IoIosArrowDown } from "react-icons/io";
import { IoFilterOutline, IoVolumeMuteSharp } from "react-icons/io5";
import FormInputwithIcon from "../../ui/formInputWithSearchIcon/FormInputwithIcon";
import bfs from "../../../assests/chat/bf4.jpg";
import bfs1 from "../../../assests/chat/black.jpeg";
import bfs2 from "../../../assests/chat/duke.jpeg";
import { FaVolumeUp } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { toggleChatRoom, toggleWrapgroupPeopleChat } from "../../../app/feature/ListChatSlice";
import { useDispatch } from "react-redux";
import { GoPlus } from "react-icons/go";

const Communities = () => {
  const dispatch = useDispatch();
  const [isListActionPeopleChat1, setIsListActionPeopleChat1] = useState(false);
  const [isListActionPeopleChat2, setIsListActionPeopleChat2] = useState(false);
  const [isListActionPeopleChat3, setIsListActionPeopleChat3] = useState(false);
  const [isListActionPeopleChat4, setIsListActionPeopleChat4] = useState(false);
  const [isListActionPeopleChat5, setIsListActionPeopleChat5] = useState(false);
  const [isListActionPeopleChat6, setIsListActionPeopleChat6] = useState(false);
  const [isListActionPeopleChat7, setIsListActionPeopleChat7] = useState(false);
  const [isListActionPeopleChat8, setIsListActionPeopleChat8] = useState(false);
  const [isListActionPeopleChat9, setIsListActionPeopleChat9] = useState(false);
  const listRef = useRef();
  const listRef2 = useRef();
  const listRef3 = useRef();
  const listRef4 = useRef();
  const listRef5 = useRef();
  const listRef6 = useRef();
  const listRef7 = useRef();
  const listRef8 = useRef();
  const listRef9 = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        (listRef.current && !listRef.current.contains(event.target)) ||
        (listRef2.current && !listRef2.current.contains(event.target)) ||
        (listRef3.current && !listRef3.current.contains(event.target)) ||
        (listRef4.current && !listRef4.current.contains(event.target)) ||
        (listRef5.current && !listRef5.current.contains(event.target)) ||
        (listRef6.current && !listRef6.current.contains(event.target)) ||
        (listRef7.current && !listRef7.current.contains(event.target)) ||
        (listRef8.current && !listRef8.current.contains(event.target)) ||
        (listRef9.current && !listRef9.current.contains(event.target))
      ) {
        setIsListActionPeopleChat1(false);
        setIsListActionPeopleChat2(false);
        setIsListActionPeopleChat3(false);
        setIsListActionPeopleChat4(false);
        setIsListActionPeopleChat5(false);
        setIsListActionPeopleChat6(false);
        setIsListActionPeopleChat7(false);
        setIsListActionPeopleChat8(false);
        setIsListActionPeopleChat9(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [listRef, listRef2, listRef3,listRef4]);

  const handleToggleListActionPeople1 = () => {
    setIsListActionPeopleChat1(!isListActionPeopleChat1);
  };
  const handleToggleListActionPeople2 = () => {
    setIsListActionPeopleChat2(!isListActionPeopleChat2);
  };
  const handleToggleListActionPeople3 = () => {
    setIsListActionPeopleChat3(!isListActionPeopleChat3);
  };
  const handleToggleListActionPeople4 = () => {
    setIsListActionPeopleChat4(!isListActionPeopleChat4);
  };
  const handleToggleListActionPeople5 = () => {
    setIsListActionPeopleChat5(!isListActionPeopleChat5);
  };
  const handleToggleListActionPeople6 = () => {
    setIsListActionPeopleChat6(!isListActionPeopleChat6);
  };
  const handleToggleListActionPeople7 = () => {
    setIsListActionPeopleChat7(!isListActionPeopleChat7);
  };
  const handleToggleListActionPeople8 = () => {
    setIsListActionPeopleChat8(!isListActionPeopleChat8);
  };
  const handleToggleListActionPeople9 = () => {
    setIsListActionPeopleChat9(!isListActionPeopleChat9);
  };
  const handleToggleWrapgroupPeopleChat = () => {
    if (window.innerWidth < 918) {
      dispatch(toggleWrapgroupPeopleChat());
    }
  };
  const handleToggleChatList = () => {
    dispatch(toggleChatRoom());
  };

  

  return (
    <div>
      <div className="tab-heading flex items-center justify-between py-[15px] px-2">
        <h3 className="text-[25px]">Communities</h3>
        <div className="flex gap-3">
          <button className="text-[#3e3f5e] w-fit" onClick={handleToggleChatList}>
            <GoPlus className="inline" /> 
            <span className="hidden md:inline ml-1">New</span>
          </button>
          <button className="text-[#3e3f5e] w-fit">
            <IoFilterOutline className="inline" /> 
            <span className="hidden md:inline ml-1">Filter</span>
            </button>
        </div>
      </div>
      <div className="Search-people-chat">
        <FormInputwithIcon
          name={"Search-People"}
          id={"Search-People"}
          label={"Search Communities"}
        />
        <div style={{ marginBottom: "5px" }}></div>
      </div>
      <div className="people-chat-list">
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

        <div className="profile-header-chat active-people-chat"
          onClick={handleToggleWrapgroupPeopleChat}  >
          <div className="profile-header__avatar night-profile-header-chat">
            <img src={bfs2} alt={`'s avatar`} />
          </div>
          <div className="profile-header__content">
            <div
              className="timeStamp-name"
              onClick={
                window.innerWidth < 490
                  ? handleToggleListActionPeople4
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
                onClick={handleToggleListActionPeople4}
              />
            </div>
          </div>
          <div
            ref={listRef4}
            className={`list-actoin-people-chat ${
              isListActionPeopleChat4
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

        {/* <div className="profile-header-chat">
          <div className="profile-header__avatar">
            <img src={bfs} alt={`'s avatar`} />
          </div>
          <div
            className="profile-header__content"
            onClick={handleToggleWrapgroupPeopleChat}
          >
            <div className="timeStamp-name">
              <p className="name-peopla-chat">Devolpers Frontend</p>
              <p className="timeStamp-chat-people">12:19 pm</p>
            </div>
            <div className="message-people-count">
              <p>Salem:How are you?</p>
              <div className="count-volume-chat-list">
                <FaVolumeUp className="icon-volume-chat" />
                <p className="count-people-chat-list">1</p>
              </div>
            </div>
          </div>
          <IoIosArrowDown
            className="list-people-chat"
            onClick={handleToggleListActionPeople4}
          />
          <div
            ref={listRef4}
            className={`list-actoin-people-chat ${
              isListActionPeopleChat4
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
          <div className="profile-header__avatar">
            <img src={bfs} alt={`'s avatar`} />
          </div>
          <div
            className="profile-header__content"
            onClick={handleToggleWrapgroupPeopleChat}
          >
            <div className="timeStamp-name">
              <p className="name-peopla-chat">Devolpers Frontend</p>
              <p className="timeStamp-chat-people">12:19 pm</p>
            </div>
            <div className="message-people-count">
              <p>Salem:How are you?</p>
              <div className="count-volume-chat-list">
                <FaVolumeUp className="icon-volume-chat" />
                <p className="count-people-chat-list">1</p>
              </div>
            </div>
          </div>
          <IoIosArrowDown
            className="list-people-chat"
            onClick={handleToggleListActionPeople5}
          />
          <div
            ref={listRef5}
            className={`list-actoin-people-chat ${
              isListActionPeopleChat5
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
          <div className="profile-header__avatar">
            <img src={bfs} alt={`'s avatar`} />
          </div>
          <div
            className="profile-header__content"
            onClick={handleToggleWrapgroupPeopleChat}
          >
            <div className="timeStamp-name">
              <p className="name-peopla-chat">Devolpers Frontend</p>
              <p className="timeStamp-chat-people">12:19 pm</p>
            </div>
            <div className="message-people-count">
              <p>Salem:How are you?</p>
              <div className="count-volume-chat-list">
                <FaVolumeUp className="icon-volume-chat" />
                <p className="count-people-chat-list">1</p>
              </div>
            </div>
          </div>
          <IoIosArrowDown
            className="list-people-chat"
            onClick={handleToggleListActionPeople6}
          />
          <div
            ref={listRef6}
            className={`list-actoin-people-chat ${
              isListActionPeopleChat6
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
          <div className="profile-header__avatar">
            <img src={bfs} alt={`'s avatar`} />
          </div>
          <div
            className="profile-header__content"
            onClick={handleToggleWrapgroupPeopleChat}
          >
            <div className="timeStamp-name">
              <p className="name-peopla-chat">Devolpers Frontend</p>
              <p className="timeStamp-chat-people">12:19 pm</p>
            </div>
            <div className="message-people-count">
              <p>Salem:How are you?</p>
              <div className="count-volume-chat-list">
                <FaVolumeUp className="icon-volume-chat" />
                <p className="count-people-chat-list">1</p>
              </div>
            </div>
          </div>
          <IoIosArrowDown
            className="list-people-chat"
            onClick={handleToggleListActionPeople7}
          />
          <div
            ref={listRef7}
            className={`list-actoin-people-chat ${
              isListActionPeopleChat7
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
          <div className="profile-header__avatar">
            <img src={bfs} alt={`'s avatar`} />
          </div>
          <div
            className="profile-header__content"
            onClick={handleToggleWrapgroupPeopleChat}
          >
            <div className="timeStamp-name">
              <p className="name-peopla-chat">Devolpers Frontend</p>
              <p className="timeStamp-chat-people">12:19 pm</p>
            </div>
            <div className="message-people-count">
              <p>Salem:How are you?</p>
              <div className="count-volume-chat-list">
                <FaVolumeUp className="icon-volume-chat" />
                <p className="count-people-chat-list">1</p>
              </div>
            </div>
          </div>
          <IoIosArrowDown
            className="list-people-chat"
            onClick={handleToggleListActionPeople8}
          />
          <div
            ref={listRef8}
            className={`list-actoin-people-chat ${
              isListActionPeopleChat8
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
          <div className="profile-header__avatar">
            <img src={bfs} alt={`'s avatar`} />
          </div>
          <div
            className="profile-header__content"
            onClick={handleToggleWrapgroupPeopleChat}
          >
            <div className="timeStamp-name">
              <p className="name-peopla-chat">Devolpers Frontend</p>
              <p className="timeStamp-chat-people">12:19 pm</p>
            </div>
            <div className="message-people-count">
              <p>Salem:How are you?</p>
              <div className="count-volume-chat-list">
                <FaVolumeUp className="icon-volume-chat" />
                <p className="count-people-chat-list">1</p>
              </div>
            </div>
          </div>
          <IoIosArrowDown
            className="list-people-chat"
            onClick={handleToggleListActionPeople9}
          />
          <div
            ref={listRef9}
            className={`list-actoin-people-chat ${
              isListActionPeopleChat9
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
        </div> */}
      </div>
    </div>
  );
};

export default Communities;
