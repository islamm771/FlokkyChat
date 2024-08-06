import { IoIosArrowDown } from "react-icons/io";
import FormInputwithIcon from "../../ui/formInputWithSearchIcon/FormInputwithIcon";
// import bfs from "../../../assests/chat/johny.jpeg";
import { FaVolumeUp } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { setActiveMessage, toggleChatRoom, toggleContacts, toggleWrapgroupPeopleChat } from "../../../app/feature/ListChatSlice";
import { useDispatch } from "react-redux";
import { GoPlus } from "react-icons/go";
import { IoFilterOutline } from "react-icons/io5";
import PeopleHeaderChat from "./PeopleHeaderChat";

const Connections = () => {
  const dispatch = useDispatch();
  const [activeChat, setActiveChat] = useState(1);
  const [activeMenu, setActiveMenu] = useState(null);
  

  const handleToggleChatList = () => {
    dispatch(toggleChatRoom());
  };

  const handleLongPress = (id) => {
    setActiveMenu(prev => (prev === id ? null : id));
  };
  
  const handleToggleContacts = () => {
    dispatch(toggleContacts());
  };
  
  return (
    <div>
      <div className="tab-heading flex items-center justify-between py-[15px] px-2">
        <h3 className="text-[25px]">Connections</h3>
        <div className="flex gap-3">
          <button className="text-[#3e3f5e] w-fit" onClick={handleToggleContacts}>
            <GoPlus className="inline" /> 
            <span className="hidden md:inline ml-1">New</span>
          </button>
          <button className="text-[#3e3f5e] w-fit">
            <IoFilterOutline className="inline" /> 
            <span className="hidden md:inline ml-1">Filter</span>
            </button>
        </div>
      </div>
      {/* <div className="hidden md:block Search-people-chat">
        <FormInputwithIcon
          name={"Search-People"}
          id={"Search-People"}
          label={"Search Connections"}
        />
        <div style={{ marginBottom: "5px" }}></div>
      </div> */}
      <div className="people-chat-list">
        <PeopleHeaderChat
        id={1}
        name="Neko Bebop" 
        bfs={"/img/avatar/01.jpg"} 
        activeMessage={2} 
        activeChat={activeChat} 
        setActiveChat={setActiveChat} 
        activeMenu={ activeMenu} 
        onLongPress={handleLongPress} />
      </div>
    </div>
  );
};

export default Connections;
