import { IoIosArrowDown, IoMdArchive } from "react-icons/io";
import bfs from "../../../../assests/chat/bf4.jpg";
import bfs1 from "../../../../assests/chat/black.jpeg";
import bfs2 from "../../../../assests/chat/duke.jpeg";
import { FaVolumeUp } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { toggleWrapgroupPeopleChat } from "../../../../app/feature/ListChatSlice";
import { useDispatch } from "react-redux";
const ArchieveMessages = ({direction}) => {
    const dispatch = useDispatch();
    const [isListActionPeopleChat2, setIsListActionPeopleChat2] = useState(false);
    const [isListActionPeopleChat3, setIsListActionPeopleChat3] = useState(false);
    const [isListActionPeopleChat4, setIsListActionPeopleChat4] = useState(false);
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
          setIsListActionPeopleChat2(false);
          setIsListActionPeopleChat3(false);
          setIsListActionPeopleChat4(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [listRef, listRef2, listRef3]);
  
    const handleToggleListActionPeople2 = () => {
      setIsListActionPeopleChat2(!isListActionPeopleChat2);
    };
    const handleToggleListActionPeople3 = () => {
      setIsListActionPeopleChat3(!isListActionPeopleChat3);
    };
    const handleToggleListActionPeople4 = () => {
      setIsListActionPeopleChat4(!isListActionPeopleChat4);
    };
    const handleToggleWrapgroupPeopleChat = () => {
      if (window.innerWidth < 918) {
        dispatch(toggleWrapgroupPeopleChat());
      }
    };
    
  return (
    <div className={`ArchieveMessage ${direction === "right" ? "reverse" : ""}`}>
        <div className="wrapMessageArchieve">
            <div className="header-archieve">
                <IoMdArchive />
                Archived
            </div>
      <div className="Wrap-Tabs-chat ArchieveChat">
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
              <li>Unarchive chat</li>
              <li>Exit group</li>
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
              <li>Unarchive chat</li>
              <li>Exit group</li>
              <li>Make as unread</li>
            </div>
          </div>
        </div>
        <div className="profile-header-chat active-people-chat">
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
            <div className="ul-chat-people">
              <li>Unarchive chat</li>
              <li>Exit group</li>
              <li>Make as unread</li>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        </div>
    </div>
  )
}

export default ArchieveMessages