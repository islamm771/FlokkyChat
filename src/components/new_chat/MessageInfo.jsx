import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { FalseMessageInfo, selectGlobal, toggleMessageInfo } from "../../app/feature/ListChatSlice";
import { useEffect, useRef } from "react";

const MessageInfo = () => {
  const MessageInfoRef = useRef(null);
    const {isMessageInfoModel} = useSelector(selectGlobal);
    const dispatch = useDispatch()
    const handleToggleMessageInfo=()=>{
        dispatch(toggleMessageInfo())
    }
    useEffect(() => {
      const handleClickOutsideReactions = (event) => {
        if (
          MessageInfoRef.current &&
          !MessageInfoRef.current.contains(event.target)
        ) {
          dispatch(FalseMessageInfo())
        }
      };
  
      document.addEventListener("mousedown", handleClickOutsideReactions);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutsideReactions);
      };
    }, [MessageInfoRef, dispatch]);
  return (
    <div className={`Overlay-MessageInfo ${isMessageInfoModel?"Overlay-MessageInfoActive":"Overlay-MessageInfoDisActive"}`}>
      <div  ref={MessageInfoRef} className="messageInfoModel">
        <div className="header-messageInfo">
          <div className="close-btn-message-info" onClick={handleToggleMessageInfo}>
            <IoClose />
          </div>
          <div className="txt-meesage-info">
            <p>Message info</p>
          </div>
        </div>
        <div className="content-message-info">
          <div className="wrap-content-messageInfo">
            <p className="messageContentInfo">
              You're right, it's been a really long time! I think the last time
              we saw was at Neko's party
            </p>
          </div>
          <div className="wrap-time-stamp">
            <p className="time-stamp time-stamp-to">
              02:23 PM{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"></path>
              </svg>
            </p>
          </div>
        </div>
        <div className="reading_delivering-Message">
          <div className="wrap-reading-delivering">
            <div className="reading_list">
              <p>Read by</p>
              <div className="reader_message_info">
                <div className="img-reader">
                  <img src="/img/avatar/09.jpg" alt="" />
                </div>
                <div className="info-reader">
                  <p className="name-info-reader">Tony Starc</p>
                  <p className="time-info-reader">Today at 3:46 PM</p>
                </div>
              </div>
              <div className="reader_message_info">
                <div className="img-reader">
                  <img src="/img/avatar/09.jpg" alt="" />
                </div>
                <div className="info-reader">
                  <p className="name-info-reader">Ducke Ali</p>
                  <p className="time-info-reader">Today at 3:46 PM</p>
                </div>
              </div>
              <div className="reader_message_info">
                <div className="img-reader">
                  <img src="/img/avatar/09.jpg" alt="" />
                </div>
                <div className="info-reader">
                  <p className="name-info-reader">Ducke Ali</p>
                  <p className="time-info-reader">Today at 3:46 PM</p>
                </div>
              </div>
              <div className="reader_message_info">
                <div className="img-reader">
                  <img src="/img/avatar/09.jpg" alt="" />
                </div>
                <div className="info-reader">
                  <p className="name-info-reader">Ducke Ali</p>
                  <p className="time-info-reader">Today at 3:46 PM</p>
                </div>
              </div>
              <div className="reader_message_info">
                <div className="img-reader">
                  <img src="/img/avatar/09.jpg" alt="" />
                </div>
                <div className="info-reader">
                  <p className="name-info-reader">Ducke Ali</p>
                  <p className="time-info-reader">Today at 3:46 PM</p>
                </div>
              </div>
            </div>
            <div className="delivered_list">
              <p>Delivered to</p>
              <div className="reader_message_info">
                <div className="img-reader">
                  <img src="/img/avatar/09.jpg" alt="" />
                </div>
                <div className="info-reader">
                  <p className="name-info-reader">Ducke Ali</p>
                  <p className="time-info-reader">Today at 3:46 PM</p>
                </div>
              </div>
              <div className="reader_message_info">
                <div className="img-reader">
                  <img src="/img/avatar/09.jpg" alt="" />
                </div>
                <div className="info-reader">
                  <p className="name-info-reader">Ducke Ali</p>
                  <p className="time-info-reader">Today at 3:46 PM</p>
                </div>
              </div>
              <div className="reader_message_info">
                <div className="img-reader">
                  <img src="/img/avatar/09.jpg" alt="" />
                </div>
                <div className="info-reader">
                  <p className="name-info-reader">Ducke Ali</p>
                  <p className="time-info-reader">Today at 3:46 PM</p>
                </div>
              </div>
              <div className="reader_message_info">
                <div className="img-reader">
                  <img src="/img/avatar/09.jpg" alt="" />
                </div>
                <div className="info-reader">
                  <p className="name-info-reader">Ducke Ali</p>
                  <p className="time-info-reader">Today at 3:46 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageInfo;
