import { FaSquareCheck } from "react-icons/fa6";
import { FaRegTrashAlt, FaRegTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleNotification } from "../../../app/feature/ListChatSlice";

const Notification = () => {
  const dispatch = useDispatch();
  const handleToggleChatList = () => {
    dispatch(toggleNotification());
  };
  return (
    <div className="notification">
      <div className="wrap-profile">
        <div className="header-notify">
          <p>Notifications</p>
          <div className="icons">
            <FaSquareCheck />
            <FaRegTrashAlt />
            <FaRegTimesCircle onClick={handleToggleChatList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
