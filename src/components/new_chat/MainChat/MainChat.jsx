import { FaPaperPlane, FaPlusCircle, FaShare } from "react-icons/fa";
import bfs4 from "../../../assests/chat/bf4.jpg";
import "../MainChat/MainChat.css";
import { useDispatch, useSelector } from "react-redux";
import {
  FalseForwardMessage,
  selectGlobal,
  toggleForwardMessage,
  toggleForwardMessageModel,
  toggleListActionPeopleChat,
  toggleListOnlineListChat,
  toggleReactPeopleInfo,
  toggleReport,
  toggleWrapgroupPeopleChat,
  toggleCreateMessageOptionsModel,
  toggleMessageInfo,
  toggleDeleteMessage,
  setDeleteMessage,
  togglePinMessage,
  toggleContacts,
  toggleSellProducts,
  togglePinMessageChat,
  toggleVideoCall,
} from "../../../app/feature/ListChatSlice";
import { BsEmojiSmile } from "react-icons/bs";
import camera from "../../../assests/chat/cam.svg";
import video from "../../../assests/chat/video.svg";
import poll from "../../../assests/chat/poll.svg";
import bg from "../../../assests/chat/bg.svg";
import gif from "../../../assests/chat/gificon.svg";
import { MdOutlineClose } from "react-icons/md";
import like from "../../../assests/chat/like.webp";
import { GrServices } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import tony from "../../../assests/chat/tony.jpeg";
import love from "../../../assests/chat/love.webp";
import haha from "../../../assests/chat/funny.webp";
import wow from "../../../assests/chat/wow.webp";
import sad from "../../../assests/chat/sad.webp";
import care from "../../../assests/chat/dislike.webp";
import funny from "../../../assests/chat/funny.webp";
import angry from "../../../assests/chat/angry.webp";
import sellProduct from "../../../assests/chat/pub-product.svg";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { toast } from "react-toastify";
import { IoMdContacts } from "react-icons/io";
import { setActiveTabOnline } from "../../../app/feature/TabOnlineList";
import Header from "./Header/Header/Header";
import Messages from "./MessagesChat/Messages";

const MainChat = () => {
  const reactionsRefList = useRef(null);
  const pickerRef = useRef(null);
  const ReactionsChatMain = useRef(null);
  const PinMessageTop = useRef(null);
  const reactionsRef = useRef(null);

  const dispatch = useDispatch();
  const { isForward, isPinMessage } = useSelector(selectGlobal);

  const [isListActionMessage, setIsListActionMessage] = useState(false);
  const [isSelectForward, setSelectForward] = useState(false);
  const [showFullList, setShowFullList] = useState(true);
  const [isReplyMessage, setIsreplyMessage] = useState(false);
  const [isReactionList, setIsReactionList] = useState(false);
  const [isPickerEmoju, setIsPickerEmoju] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState(null);
  const [isReactions, setIsReactions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [actionIndex, setActionIndex] = useState(null);
  const [activeMessageOption , setActiveMessageOption] = useState(false)
  const [activeReactionsIndex, setActiveReactionsIndex] = useState(null);
  const [isPin, setIsPin] = useState(true);
  const [isPinMessageTop, setIsPinMessageTop] = useState(true);
  const [isStar, setIsStar] = useState(true);

  const handleViewProfile = () => {
    dispatch(setActiveTabOnline(5));
    if (window.innerWidth < 1670) {
      dispatch(toggleListOnlineListChat());
    }
  };
  const handleTogglePinMessage = () => {
    dispatch(togglePinMessageChat());
  };

  const handleTogglePin = () => {
    setIsPin(!isPin);
    if (isPin) {
      dispatch(togglePinMessage());
      return;
    }
  };
  const handleTogglePinMessageTop = () => {
    setIsPinMessageTop(!isPinMessageTop);
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
  const handleCheckboxChange = (messageId) => {
    setSelectForward((prevState) => ({
      ...prevState,
      [messageId]: !prevState[messageId],
    }));
  };

  const handleOpenPickerEmoji = () => {
    setIsPickerEmoju(!isPickerEmoju);
  };

  const handleToggleFullList = () => {
    setShowFullList(!showFullList);
  };

  const handleToggleReactionsList = (index) => {
    setActiveReactionsIndex(activeReactionsIndex === index ? null : index);
  };

  let timeout;
  const handleLongPressReactionsList = (index) => {
    timeout = setTimeout(() => {
      setActiveReactionsIndex(index);
    }, 500); 
    console.log("long press")
  };
  const handleTouchEnd = (index) => {
    clearTimeout(timeout);
    setActiveReactionsIndex(activeReactionsIndex === index ? null : index);
  };

  const clearLongPress = () => {
    clearTimeout(timeout);
  };


  const handleToggleListPeople = () => {
    dispatch(toggleListActionPeopleChat());
  };

  const handleToggleSellProduct = () => {
    dispatch(toggleSellProducts());
  };

  const handleCloseReplyMessage = () => {
    setIsreplyMessage(false);
  };
  const handleOpenReplyMessage = () => {
    setIsreplyMessage(true);
    setIsListActionMessage(false);
    setIsPickerEmoju(false);
    dispatch(FalseForwardMessage());
  };

  const HanldeCloseTemporay = () => {
    setIsListActionMessage(false);
    setIsPickerEmoju(false);
  };

  const handleToggleModelCodeSnipest = () => {
    dispatch(toggleReactPeopleInfo());
    setIsPickerEmoju(false);
  };

  const handleForwardMessage = () => {
    dispatch(toggleForwardMessage());
    setIsListActionMessage(false);
    setSelectForward({});
    setIsPickerEmoju(false);
    setIsreplyMessage(false);
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
    setIsPickerEmoju(false);
  };

  const handleToggleReportMessage = () => {
    dispatch(toggleReport());
    setIsListActionMessage(false);
    setIsPickerEmoju(false);
  };
  const handleToggleForwardMessageModel = () => {
    dispatch(toggleForwardMessageModel());
    setIsListActionMessage(false);
    setIsPickerEmoju(false);
  };

  const handleToggleWrapgroupPeopleChat = () => {
    dispatch(toggleWrapgroupPeopleChat());
    setIsPickerEmoju(false);
  };

  const handleToggleOpenMessageOptionModel = () => {
    dispatch(toggleCreateMessageOptionsModel());
  };

  const handleToggleAction = (index) => {
    setActiveIndex(index);
    setActionIndex(!isReactions);
    setShowFullList(true);
  };

  const handleToggleMessageInfo = () => {
    dispatch(toggleMessageInfo());
  };

  const handleToggleContacts = () => {
    dispatch(toggleContacts());
  };

  const handleToggleVideoCall = () => {
    dispatch(toggleVideoCall());
  };

  const handleToggleDeleteMessage = (messageData) => {
    dispatch(setDeleteMessage(messageData));
    dispatch(toggleDeleteMessage());
    setIsListActionMessage(false);
    setActiveIndex(null);
    console.log(messageData);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isPickerEmoju &&
        pickerRef.current &&
        !pickerRef.current.contains(event.target)
      ) {
        setIsPickerEmoju(false);
      }
      if (
        isReactionList &&
        ReactionsChatMain.current &&
        !ReactionsChatMain.current.contains(event.target)
      ) {
        setIsReactionList(false);
      }
      if (
        PinMessageTop.current &&
        !PinMessageTop.current.contains(event.target)
      ) {
        setIsPinMessageTop(null);
      }
      if (
        (reactionsRef.current &&
          !reactionsRef.current.contains(event.target)) ||
        (reactionsRefList.current &&
          !reactionsRefList.current.contains(event.target))
      ) {
        setIsReactions(false);
        setActiveIndex(null);
      }
      if (
        ReactionsChatMain.current &&
        !ReactionsChatMain.current.contains(event.target)
      ) {
        setActiveReactionsIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    isPickerEmoju,
    isReactionList,
    PinMessageTop,
    reactionsRef,
    setIsPickerEmoju,
    setIsReactionList,
    setIsPinMessageTop,
    setIsReactions,
    setActiveIndex,
    ReactionsChatMain,
    setActiveReactionsIndex,
  ]);



  return (
    <div>
      <Header
        handleToggleListPeople={handleToggleListPeople}
        handleToggleWrapgroupPeopleChat={handleToggleWrapgroupPeopleChat}
        bfs4={bfs4}
        handleToggleVideoCall={handleToggleVideoCall}
        handleToggleOnlineList={handleToggleOnlineList}
      />
      <Messages
        isPinMessage={isPinMessage}
        PinMessageTop={PinMessageTop}
        isPinMessageTop={isPinMessageTop}
        handleTogglePinMessage={handleTogglePinMessage}
        handleTogglePinMessageTop={handleTogglePinMessageTop}
        isForward={isForward}
        isSelectForward={isSelectForward}
        handleCheckboxChange={handleCheckboxChange}
        activeIndex={activeIndex}
        reactionsRefList={reactionsRefList}
        isListActionMessage={isListActionMessage}
        showFullList={showFullList}
        handleViewProfile={handleViewProfile}
        handleToggleFullList={handleToggleFullList}
        handleToggleDeleteMessage={handleToggleDeleteMessage}
        handleToggleMessageInfo={handleToggleMessageInfo}
        handleToggleReactionsList={handleToggleReactionsList}
        handleOpenReplyMessage={handleOpenReplyMessage}
        handleToggleReportMessage={handleToggleReportMessage}
        handleForwardMessage={handleForwardMessage}
        handleTogglePin={handleTogglePin}
        isPin={isPin}
        handleToggleStar={handleToggleStar}
        isStar={isStar}
        handleMessageCopy={handleMessageCopy}
        HanldeCloseTemporay={HanldeCloseTemporay}
        handleToggleAction={handleToggleAction}
        ReactionsChatMain={ReactionsChatMain}
        activeReactionsIndex={activeReactionsIndex}
        like={like}
        love={love}
        care={care}
        funny={funny}
        haha={haha}
        wow={wow}
        angry={angry}
        sad={sad}
        handleToggleModelCodeSnipest={handleToggleModelCodeSnipest}
        handleLongPressReactionsList={handleLongPressReactionsList}
        handleTouchEnd={handleTouchEnd}
        clearLongPress={clearLongPress}
      />

      <div className="footer-Main-chat-page">
        <div className={`replay-message ${
            isReplyMessage
              ? "active-replay-message"
              : "disactive-replay-message"
          }`}
        >
          <div className="content-replay-meessage">
            <div className="info-replay">
              <span className="border-left-replay"></span>
              <div className="txt">
                <p>Reply to Ahmed</p>
                <p>How are you?</p>
              </div>
              <div className="img">
                <img src={tony} alt="" />
              </div>
            </div>
          </div>
          <div
            className="close-replay-meessage"
            onClick={handleCloseReplyMessage}
          >
            <IoCloseCircleOutline />
          </div>
        </div>
        <div className="images-actions-main-chat">
          <div className="icons-actions-main-chat icons-actions-main-chat-camera">
            <div className="text-icons-actions-camera">
              <p>Upload Images</p>
            </div>
            <div className="box-camera-chat">
              <input type="file" accept="image/x-png, image/gif, image/jpeg" />
              <img src={camera} alt="" />
            </div>
          </div>
          <div className="cursor-pointer"
            onClick={() => setActiveMessageOption( prev => !prev )}
          >
            <FaPlusCircle size={20} color="#fd6729" />
          </div>

          <div className={`flex flex-col bg-white gap-3 py-[5px] px-[10px] rounded-lg shadow-[0px_0px_7px_0px_#ddd] absolute bottom-[60px] left-[8px] transition-opacity duration-[0.5s]
                ${ activeMessageOption ? "opacity-100" : "opacity-0" } `}>

          <div className="icons-actions-main-chat icons-actions-main-chat-bg"
            onClick={handleToggleOpenMessageOptionModel}
          >
            <div className="text-icons-actions-bg">
              <p>Background</p>
            </div>
            <img src={bg} alt="" />
          </div>
          <div className="icons-actions-main-chat icons-actions-main-chat-gif"
            onClick={handleToggleOpenMessageOptionModel}
          >
            <div className="text-icons-actions-gif">
              <p>GIF</p>
            </div>
            <img src={gif} alt="" />
          </div>
          <div className="icons-actions-main-chat icons-actions-main-chat-audio">
            <div className="text-icons-actions-audio">
              <p>Audio Upload</p>
            </div>
            <div className="box-camera-chat">
              <input type="file" accept="audio/*" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="feather feather-mic"
              >
                <path
                  fill="#3f51b5"
                  d="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="icons-actions-main-chat icons-actions-main-chat-video">
            <div className="text-icons-actions-video">
              <p>Upload Video</p>
            </div>
            <div className="box-camera-chat">
              <input type="file" accept="video/*" />
              <img src={video} alt="" />
            </div>
          </div>
          <div className="icons-actions-main-chat icons-actions-main-chat-poll"
            onClick={handleToggleOpenMessageOptionModel}
          >
            <div className="text-icons-actions-poll">
              <p>Create Poll</p>
            </div>
            <img src={poll} alt="" />
          </div>
          <div className="icons-actions-main-chat icons-actions-main-chat-product"
            onClick={handleToggleSellProduct}
          >
            <div className="text-icons-actions-product">
              <p>Sell product</p>
            </div>
            <img src={sellProduct} alt="" />
          </div>
          <div className="icons-actions-main-chat icons-actions-main-chat-services"
            onClick={handleToggleOpenMessageOptionModel}
          >
            <div className="text-icons-actions-services">
              <p>Share Services</p>
            </div>
            <GrServices />
          </div>
          <div className="icons-actions-main-chat icons-actions-main-chat-contacts"
            onClick={handleToggleContacts}
          >
            <div className="text-icons-actions-contacts">
              <p>Contacts</p>
            </div>
            <IoMdContacts />
          </div>
          </div>
        </div>

        <div className="input-send-messag-main-chat">
          {/* <input
            type="text"
            name="currentEmoji"
            placeholder="Type a message..."
          /> */}
          <textarea className="h-[48px] !py-[12px] !border-none" name="" id="" placeholder="Type a message..."></textarea>
          <BsEmojiSmile onClick={handleOpenPickerEmoji} />
        </div>

        <div className="send-message-main-chat flex gap-1">
          <div className="icons-actions-main-chat icons-actions-main-chat-mic">
            <div className="text-icons-actions-mic">
              <p>Record Voice</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="feather feather-mic"
            >
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          </div>
          <FaPaperPlane />
        </div>

        <div className="open-list-chat-action-main-chat"
          onClick={handleToggleOpenMessageOptionModel}
        >
          <FaPlusCircle />
        </div>

        {isForward && (
          <div className="Forward-message-footer">
            <div className="right-fror">
              <div onClick={handleForwardMessage}>
                <MdOutlineClose />
              </div>
              <p>1 Selected</p>
            </div>
            <div
              className="left-rorward"
              onClick={handleToggleForwardMessageModel}
            >
              <FaShare />
            </div>
          </div>
        )}
        <div
          ref={pickerRef}
          className={`pickerEmojiChatMessage ${
            isPickerEmoju ? "active-picker" : "disactive-picker"
          }`}
        >
          <Picker
            theme="light"
            data={data}
            previewPosition="none"
            onEmojiSelect={(e) => {
              setCurrentEmoji(e.native);
              // setIsPickerEmoji(!isPickerEmoji);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainChat;
