import { FaListUl, FaArrowAltCircleRight } from "react-icons/fa";
import logo from "../../../assests/chat/logo.svg";
import { useDispatch } from "react-redux";
import {
  toggleChatList,
  toggleChatRoom,
} from "../../../app/feature/ListChatSlice";
const Navigation = () => {
  const dispatch = useDispatch();

  const handleToggleChatList = () => {
    dispatch(toggleChatList());
  };
  const handleToggleChatRoom = () => {
    dispatch(toggleChatRoom());
  };
  return (
    <div className="listChat">
      <div className="header-listChat">
        <img src={logo} alt="" className="logo-mobile" />
        <div className="room-selector" >
          <div className="room-selected" onClick={handleToggleChatRoom}>Private Chats Only</div>
          <div className="launch-modal">
            <FaListUl />
          </div>
          <div className="icon" onClick={handleToggleChatList}>
            <FaArrowAltCircleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
