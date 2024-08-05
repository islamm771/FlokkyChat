import FormInputwithIcon from "../../ui/formInputWithSearchIcon/FormInputwithIcon";
import bfs from "../../../assests/chat/roseanna.jpeg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleChatRoom } from "../../../app/feature/ListChatSlice";
import { GoPlus } from "react-icons/go";
import { IoFilterOutline } from "react-icons/io5";
import PeopleHeaderChat from "./PeopleHeaderChat";

const Flokkancing = () => {
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
        <h3 className="text-[25px]">Flokkancing</h3>
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
          label={"Search Flokkancing"}
        />
        <div style={{ marginBottom: "5px" }}></div>
      </div>
      <div className="people-chat-list" >
      <PeopleHeaderChat bfs={bfs} activeMessage={3} activeChat={activeChat} setActiveChat={setActiveChat} activeMenu={ activeMenu} onLongPress={handleLongPress} id={1} />
      </div>
    </div>
  );
};

export default Flokkancing;
