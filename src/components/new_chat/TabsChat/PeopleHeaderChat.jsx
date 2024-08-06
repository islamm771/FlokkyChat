import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveMessage, toggleWrapgroupPeopleChat } from '../../../app/feature/ListChatSlice';
import useLongPress from '../../../hooks/useLongPress';
import { FaVolumeUp } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const PeopleHeaderChat = ({ name,id, bfs,activeMessage ,activeChat,setActiveChat,activeMenu, onLongPress }) => {
  const dispatch = useDispatch();
  const listRef = useRef();

  const handleToggleWrapgroupPeopleChat = () => {
    dispatch(toggleWrapgroupPeopleChat());
  };

  const handleChatClick = () => {
    if (window.innerWidth < 918) {
      dispatch(toggleWrapgroupPeopleChat());
      dispatch(setActiveMessage(activeMessage));
    } else {
      dispatch(setActiveMessage(activeMessage));
    }
    setActiveChat(id)
  };

  const onLongPressHandler = () => {
    if (screen.width <= 768) {
      onLongPress(id);
    }
  };

  const longPressEvent = useLongPress(onLongPressHandler, 500);

  useEffect(() => {
    function handleClickOutside(event) {
      if (listRef.current && !listRef.current.contains(event.target) && activeMenu === id) {
        onLongPress(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMenu, id, onLongPress]);

  return (
    <div className={`profile-header-chat ${activeChat == id ? "active-people-chat" : ""}`}
      {...longPressEvent}
    >
      <div className="profile-header__avatar online-profile-header-chat"
      onClick={handleChatClick}
      >
        <img src={bfs} alt="avatar" />
      </div>
      <div className="profile-header__content">
        <div className="timeStamp-name"
        onClick={handleChatClick}
        >
          <p className="name-peopla-chat">{name}</p>
          <p className="message_Recieved-chat">Salem: How are you?</p>
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
          <div className="list-people-chat" ref={listRef}>
            <IoIosArrowDown
              onClick={() => onLongPress(id)}
            />
            <div
              className={`list-actoin-people-chat ${
                activeMenu === id ? "active-people-chat" : "disActive-people-chat"
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
      </div>
      {/* <div
        ref={listRef}
        className={`list-actoin-people-chat ${
          activeMenu === id ? "active-people-chat" : "disActive-people-chat"
        }`}
      >
        <div className="ul-chat-people">
          <li>Archive chat</li>
          <li>Mute notifications</li>
          <li>Exit group</li>
          <li>Pin chat</li>
          <li>Make as unread</li>
        </div>
      </div> */}
    </div>
  );
};

export default PeopleHeaderChat;