import { BsReply } from "react-icons/bs";
import { FaCheckDouble, FaRegEye, FaStar } from "react-icons/fa";
import { IoIosArrowDown, IoMdCopy } from "react-icons/io";
import { IoFlagOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { RiShareForwardLine, RiUnpinLine } from "react-icons/ri";
import { TiPinOutline } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { messages } from "../../../../assests/data/messages";
import {
  setDeleteMessage,
  toggleDeleteMessage,
  toggleForwardMessageModel,
  toggleListOnlineListChat,
  toggleMessageInfo,
  togglePinMessage,
  toggleReport,
} from "../../../../app/feature/ListChatSlice";
import { setActiveTabOnline } from "../../../../app/feature/TabOnlineList";

const SterredMessages = ({ direction }) => {
  const dispatch = useDispatch();
  const PinMessageTop = useRef(null);
  const [isListActionMessage, setIsListActionMessage] = useState(false);
  const [showFullList, setShowFullList] = useState(true);

  const [isReactions, setIsReactions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [actionIndex, setActionIndex] = useState(null);
  const [activeReactionsIndex, setActiveReactionsIndex] = useState(null);
  const [isPin, setIsPin] = useState(true);
  const [isPinMessageTop, setIsPinMessageTop] = useState(true);
  const [isStar, setIsStar] = useState(true);
  const reactionsRef = useRef(null);
  const reactionsRefList = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (reactionsRef.current &&
          !reactionsRef.current.contains(event.target)) ||
        (reactionsRefList.current &&
          !reactionsRefList.current.contains(event.target))
      ) {
        setIsReactions(false);
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [reactionsRef, setIsReactions, setActiveIndex]);

  useEffect(() => {
    const handleClickOutsideReactions = (event) => {
      if (
        PinMessageTop.current &&
        !PinMessageTop.current.contains(event.target)
      ) {
        setIsPinMessageTop(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideReactions);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideReactions);
    };
  }, [PinMessageTop]);

  const handleTogglePin = () => {
    setIsPin(!isPin);
    if (isPin) {
      dispatch(togglePinMessage());
      return;
    }
  };
  const handleToggleStar = () => {
    setIsStar(!isStar);
    if (isStar) {
      toast("1 message starred", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        theme: "light",
        style: { width: "200px", height: "50px" },
      });
    } else {
      toast("1 message unstarred", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        theme: "light",
        style: { width: "200px", height: "50px" },
      });
    }
  };

  const handleToggleFullList = () => {
    setShowFullList(!showFullList);
  };

  const handleToggleReactionsList = (index) => {
    setActiveReactionsIndex(activeReactionsIndex === index ? null : index);
  };
  const handleOpenReplyMessage = () => {
    setIsListActionMessage(false);
  };

  const handleForwardMessage = () => {
    dispatch(toggleForwardMessageModel());
    setIsListActionMessage(false);
  };
  const handleMessageCopy = (message) => {
    return () => {
      navigator.clipboard.writeText(message);
      toast("Message copied", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        theme: "light",
        style: { width: "200px", height: "50px" },
      });
    };
  };

  const handleToggleOnlineList = () => {
    dispatch(toggleListOnlineListChat());
  };

  const handleToggleReportMessage = () => {
    dispatch(toggleReport());
    setIsListActionMessage(false);
  };

  const handleToggleAction = (index) => {
    setActiveIndex(index);
    setActionIndex(!isReactions);
    setShowFullList(true);
  };

  const handleToggleDeleteMessage = (messageData) => {
    dispatch(setDeleteMessage(messageData));
    dispatch(toggleDeleteMessage());
    setIsListActionMessage(false);
    setActiveIndex(null);
  };
  const handleViewProfile = () => {
    dispatch(setActiveTabOnline(5));
  };
  return (
    <div
      className={`SterredMessages ${direction === "right" ? "reverse" : ""}`}
    >
      <div className="Wrap-Tabs-chat ArchieveChat">
        <div className="header-archieve">
          <FaStar />
          Starred messages
        </div>
        <div className="people-chat-list">
          <div className="messages">
            {messages.map((data, index) => (
              <div
                key={index}
                className={`${
                  data.sendme
                    ? "wrap-message-select-from"
                    : "wrap-message-select-to-end"
                }`}
              >
                {data.sendme && (
                  <div
                    className={`${data.sendme ? "message-from" : "message-to"}`}
                    key={index}
                  >
                    <div className="img">
                      <img src={data.img} alt="" />
                    </div>
                    <div
                      className={`message ${
                        data.sendme ? "flex-messages-from" : "flex-messages-to"
                      }`}
                    >
                      <div className="wrap-message-contnet">
                        {data.sendme && (
                          <p className="name-message-sent">Ahmed</p>
                        )}
                        <div
                          className={`message ${
                            data.sendme
                              ? "message-Content-from"
                              : "message-Content-to "
                          }`}
                        >
                          {activeIndex === index && (
                            <div
                              ref={reactionsRefList}
                              className={`list-action-main-chat ${
                                activeIndex
                                  ? "list-active-main-chat"
                                  : "list-disactive-main-chat"
                              } ${isListActionMessage ? "animation" : ""}`}
                            >
                              <div className="ul-main-chat">
                                <div
                                  className={`listOne-main-chat ${
                                    showFullList
                                      ? "Active-chat-main-list-action"
                                      : "disActive-chat-main-list-action"
                                  }`}
                                >
                                  {data.sendme && (
                                    <li onClick={handleViewProfile}>
                                      <p>View Profile</p>
                                      <FaRegEye />
                                    </li>
                                  )}
                                  <li onClick={handleOpenReplyMessage}>
                                    <p>Reply</p>
                                    <BsReply />
                                  </li>
                                  {data.sendme && (
                                    <li onClick={handleToggleReportMessage}>
                                      <p>Report</p>
                                      <IoFlagOutline />
                                    </li>
                                  )}
                                  <li onClick={handleForwardMessage}>
                                    <p>Forward</p>
                                    <RiShareForwardLine />
                                  </li>
                                  <li
                                    className="more-less-list-chat"
                                    onClick={handleToggleFullList}
                                  >
                                    More...
                                  </li>
                                </div>
                                <div
                                  className={`listTwo-main-chat ${
                                    showFullList
                                      ? "disActive-chat-main-list-actionListTwo"
                                      : "Active-chat-main-list-actionListTwo"
                                  }`}
                                >
                                  <li onClick={handleTogglePin}>
                                    {isPin ? (
                                      <>
                                        <p>Pin</p>
                                        <TiPinOutline />
                                      </>
                                    ) : (
                                      <>
                                        <p>UnPin</p>
                                        <RiUnpinLine />
                                      </>
                                    )}
                                  </li>
                                  <li onClick={handleToggleStar}>
                                    <p>UnStar</p>
                                    <FaStar />
                                  </li>
                                  <li onClick={handleMessageCopy(data.message)}>
                                    <p>Copy</p>
                                    <IoMdCopy />
                                  </li>
                                  <li
                                    onClick={() =>
                                      handleToggleDeleteMessage(data.sendme)
                                    }
                                  >
                                    <p>Delete</p>
                                    <MdDeleteOutline />
                                  </li>
                                  <li
                                    className="more-less-list-chat"
                                    onClick={handleToggleFullList}
                                  >
                                    Less
                                  </li>
                                </div>
                              </div>
                            </div>
                          )}
                          <div
                            className={`${
                              data.sendme
                                ? "icon-message-main-chat-to"
                                : "icon-message-main-chat-from"
                            }`}
                            onClick={() => handleToggleAction(index)}
                          >
                            <IoIosArrowDown />
                          </div>
                          <p>{data.message}</p>
                        </div>
                        <div className="wrap-time-stamp">
                          <p
                            className={`time-stamp ${
                              data.sendme ? "time-stamp-from" : "time-stamp-to"
                            }`}
                          >
                            02:23 PM <FaCheckDouble />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SterredMessages;
