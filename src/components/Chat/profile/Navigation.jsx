import { useDispatch } from "react-redux";
import { toggleNotification , toggleProfile} from "../../../app/feature/ListChatSlice";
import { IoIosNotifications } from "react-icons/io";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Navigation = () => {
  const dispatch = useDispatch();

  const handleToggleChatList = () => {
    dispatch(toggleNotification());
  };
  const handleToggleProfile = () => {
    dispatch(toggleProfile());
  };
  return (
    <div className="listChat">
      <div className="header-Profile">
      <div className="icon" onClick={handleToggleProfile}><FaArrowAltCircleRight/></div> 
        <IoIosNotifications className="notify" onClick={handleToggleChatList}/>
      </div>
    </div>
  );
};

export default Navigation;
