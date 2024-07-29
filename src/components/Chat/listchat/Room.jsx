import flag from "../../../assests/chat/amrica.webp";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { chatList } from "../../../assests/data/ListChat";
import { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown, IoMdRefresh } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleDmChat } from "../../../app/feature/ListChatSlice";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Room = () => {
  const [dropDownStates, setDropDownStates] = useState(
    chatList.map(() => false)
  );
  const dispatch = useDispatch();
  const handleToggleGroupChat = () => {
    dispatch(toggleDmChat());
  };
  const toggleDropDown = (index) => {
    const newDropDownStates = [...dropDownStates];
    newDropDownStates[index] = !newDropDownStates[index];
    setDropDownStates(newDropDownStates);
  };
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDownStates(chatList.map(() => false));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {chatList.map((data, index) => (
        <>
          <div
            className="chat-item"
            key={data._id}
            onClick={handleToggleGroupChat}>
            <div className="user-list-item">
              <div className="user-avatar-chat-chat">
                <div className="user-chat-profile user-status-avatar">
                  <img src="/img/avatar/05.jpg" alt="Profile" />
                  <RiVerifiedBadgeFill
                    color={"#36e9f7"}
                    className="verfied"
                    fontSize={18}
                  />
                  <MdAdminPanelSettings
                    color={"#d7006a"}
                    size={16}
                    className="admin-chat"
                  />
                </div>
              </div>
              <div className="user-info">
                <div className="chat-name">
                  <div className="chat-name-text">{data.name}</div>
                  <img src={flag} alt="" className="flag" />
                  {data.Admin ? (
                    <div className="user-type-badge">ADMIN</div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="chat-preview">
                  <div className="chat-is-read">{data.message}</div>
                </div>
              </div>
              <div
                onClick={() => toggleDropDown(index)}
                className="user-options"
              >
                <div className="dropdown-chat">
                  <IoEllipsisVerticalSharp />
                </div>
                <div
                  ref={dropdownRef}
                  className={`dropdown-menu-chat ${
                    dropDownStates[index]
                      ? "active-dropdown"
                      : "disabled-dropdown"
                  }`}
                >
                  <span className="dropdown-item-chat">View Profile</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
      <div className="load-refresh">
        <div className="load-more">
          <div className="icon">
            <IoMdArrowDropdown />
          </div>
          <div className="txt">Load More</div>
        </div>
        <div className="load-more">
          <div className="icon">
            <IoMdRefresh />
          </div>
          <div className="txt">Refresh List</div>
        </div>
      </div>
    </div>
  );
};

export default Room;
