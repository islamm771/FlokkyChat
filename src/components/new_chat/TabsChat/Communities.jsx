import React, { useState } from 'react';
import PeopleHeaderChat from './PeopleHeaderChat';
import { GoPlus } from 'react-icons/go';
import { IoFilterOutline } from 'react-icons/io5';
import FormInputwithIcon from '../../ui/formInputWithSearchIcon/FormInputwithIcon';
import bfs from '../../../assests/chat/bf4.jpg';
import bfs1 from '../../../assests/chat/black.jpeg';
import bfs2 from '../../../assests/chat/duke.jpeg';
import { useDispatch } from 'react-redux';
import { toggleChatRoom } from '../../../app/feature/ListChatSlice';

const Communities = () => {
  const dispatch = useDispatch();
  const [activeChat, setActiveChat] = useState(1);
  const [activeMenu, setActiveMenu] = useState(null);
  

  const handleToggleChatList = () => {
    dispatch(toggleChatRoom());
  };

  const handleLongPress = (id) => {
    setActiveMenu(prev => (prev === id ? null : id));
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
      <div className="hidden md:block Search-people-chat">
        <FormInputwithIcon
          name={"Search-People"}
          id={"Search-People"}
          label={"Search Communities"}
        />
        <div style={{ marginBottom: "5px" }}></div>
      </div>
      <div className="people-chat-list">
        <PeopleHeaderChat bfs={bfs} activeMessage={1} activeChat={activeChat} setActiveChat={setActiveChat} activeMenu={ activeMenu} onLongPress={handleLongPress} id={1} />
        <PeopleHeaderChat bfs={bfs1} activeMessage={1} activeChat={activeChat} setActiveChat={setActiveChat} activeMenu={ activeMenu} onLongPress={handleLongPress} id={2} />
        <PeopleHeaderChat bfs={bfs2} activeMessage={1} activeChat={activeChat} setActiveChat={setActiveChat} activeMenu={activeMenu} onLongPress={handleLongPress} id={3} />
      </div>
    </div>
  );
};

export default Communities;
