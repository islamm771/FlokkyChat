import { FaPaperPlane, FaPlusCircle, FaShare } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import sendImage from "../../../assests/chat/image_icon.png";
import sendVideo from "../../../assests/chat/video_icon.png";
// import sendSteaker from "../../../assests/chat/sticker_icon.png";
// import sendGifts from "../../../assests/chat/gif_icon.png";
import sendFiles from "../../../assests/chat/files_icon.png";
import sendCode from "../../../assests/chat/codes_icon.png";
import { useEffect, useRef, useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useSelector, useDispatch } from "react-redux";
import {
  selectGlobal,
  toggleModelMainChat,
  toggleModelCodeSnipest,
  toggleReplayMessage,
  toggleForwardMessage,
  toggleForwardMessageModel,
} from "../../../app/feature/ListChatSlice";
import { IoCloseCircleOutline } from "react-icons/io5";
import tony from "../../../assests/chat/tony.jpeg";
import { MdOutlineClose } from "react-icons/md";

const Footer = () => {
  const [show, setShow] = useState(false);
  const [isPickerEmoji, setIsPickerEmoji] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState(null);
  const ListActionRef = useRef();
  const dispatch = useDispatch();
  const handleToggleModelChat = () => {
    dispatch(toggleModelMainChat());
  };
  const handleToggleModelCodeSnipest = () => {
    dispatch(toggleModelCodeSnipest());
  };

    const handleToggleForwardMessageModel = () => {
    dispatch(toggleForwardMessageModel());
  };

  const handleToggleReplayMessage = () => {
    dispatch(toggleReplayMessage());
  };

  const handleToggleFrowardMessage = () => {
    dispatch(toggleForwardMessage());
  };
  const handleToggleListAction = () => {
    setShow(!show);
  };
  const handleTogglePickerEmoji = () => {
    setIsPickerEmoji(!isPickerEmoji);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ListActionRef.current &&
        !ListActionRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ListActionRef]);
  const { isProfile, isOpenChatList, isReplayMessage, isForward } =
    useSelector(selectGlobal);

  return (
    <div
      className={`wrap-bottom-mainchat  ${
        isProfile ? " wrap-bottom-mainchat-screen" : ""
      } ${isOpenChatList ? "wrap-bottom-mainchat-screen " : ""}`}
    >
      <div className="footer-chat">
        <div className="wrap-send-chat">
          <div className="actions-chat">
            <div
              className="open-list-chat-action"
              onClick={handleToggleListAction}
            >
              <FaPlusCircle />
            </div>
            <div
              className={`list-chat-action ${
                show ? "list-chat-action-active" : "list-chat-action-disbaled"
              }`}
              ref={ListActionRef}
            >
              <div className="btn-action-chat" onClick={handleToggleModelChat}>
                <img src={sendImage} alt="" />
              </div>
              <div className="btn-action-chat" onClick={handleToggleModelChat}>
                <img src={sendVideo} alt="" />
              </div>
              {/* <div className="btn-action-chat">
                <img src={sendSteaker} alt="" />
              </div>
              <div className="btn-action-chat">
                <img src={sendGifts} alt="" />
              </div> */}
              <div className="btn-action-chat" onClick={handleToggleModelChat}>
                <img src={sendFiles} alt="" />
              </div>
              <div
                className="btn-action-chat"
                onClick={handleToggleModelCodeSnipest}
              >
                <img src={sendCode} alt="" />
              </div>
            </div>
          </div>
          <div className="input-send-messag">
            <input
              type="text"
              name="currentEmoji"
              placeholder="Type a message..."
              value={currentEmoji}
            />
            <BsEmojiSmile onClick={handleTogglePickerEmoji} />
          </div>
          <div className="send-message">
            <FaPaperPlane />
          </div>
        </div>
      </div>
      <div
        className={`pickerEmoji ${
          isPickerEmoji ? "pickerEmoji-active" : "pickerEmoji-disabled"
        }`}
      >
        <Picker
          theme="light"
          data={data}
          previewPosition="none"
          onEmojiSelect={(e) => {
            setCurrentEmoji(e.native);
            setIsPickerEmoji(!isPickerEmoji);
          }}
        />
      </div>
      {isReplayMessage && (
        <div className="replay-message">
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
            onClick={handleToggleReplayMessage}
          >
            <IoCloseCircleOutline />
          </div>
        </div>
      )}
      {isForward && (
        <div className="Forward-message-footer">
          <div className="right-fror">
            <div onClick={handleToggleFrowardMessage}>
            <MdOutlineClose/>
            </div>
            <p>1 Selected</p>
          </div>
          <div className="left-rorward" onClick={handleToggleForwardMessageModel}>
            <FaShare />
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
