import { IoMdCloseCircle } from "react-icons/io";
import img from "../../../assests/chat/bf4.jpg";
import { BiWorld } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ChatRoomFalse, toggleChatRoom } from "../../../app/feature/ListChatSlice";
import { selectGlobal } from "../../../app/feature/ListChatSlice";
import { useEffect, useRef } from "react"; // Import useEffect and useRef
import FormInputwithIcon from "../../ui/formInputWithSearchIcon/FormInputwithIcon";

const ChatRooms = () => {
  const dispatch = useDispatch();
  const { isChatRoom } = useSelector(selectGlobal);
  const chatRoomRef = useRef(null); 

  const handleToggleChatList = () => {
    dispatch(toggleChatRoom());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRoomRef.current && !chatRoomRef.current.contains(event.target)) {
        dispatch(ChatRoomFalse());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);
  return (
    <div className={`overlay ${isChatRoom? "active-chat": "disactive-chat"}`}>
      <div ref={chatRoomRef} className={`chatRoom`}>
        <div className="header-chatRoom">
          <h5>Chat Rooms</h5>
          <IoMdCloseCircle onClick={handleToggleChatList}/>
        </div>
        <hr />
        <div className="search-input my-3">
          <FormInputwithIcon label={"Search for communities..."} id={"comm-search"} name={"comm-search"} />
        </div>
        <div className="joined mb-4">
          <p className="joined-title">Joined</p>
          <div className="list-joined">
            <div className="boxes">
              <div className="boxx">
                <div className="box-content">
                  <div className="info-chat-room">
                    <div className="img">
                      <img src={img} alt="" />
                    </div>
                    <div className="room-info">
                      <p className="name-room">Battlefield 4</p>
                      <p className="numbers">405 People Joined</p>
                      <div>
                        <BiWorld /> Public
                      </div>
                    </div>
                  </div>
                  <div className="arrow">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="boxx">
                <div className="box-content">
                  <div className="info-chat-room">
                    <div className="img">
                      <img src={img} alt="" />
                    </div>
                    <div className="room-info">
                      <p className="name-room">Battlefield 4</p>
                      <p className="numbers">405 People Joined</p>
                      <div>
                        <BiWorld /> Public
                      </div>
                    </div>
                  </div>
                  <div className="arrow">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="boxx">
                <div className="box-content">
                  <div className="info-chat-room">
                    <div className="img">
                      <img src={img} alt="" />
                    </div>
                    <div className="room-info">
                      <p className="name-room">Battlefield 4</p>
                      <p className="numbers">405 People Joined</p>
                      <div>
                        <BiWorld /> Public
                      </div>
                    </div>
                  </div>
                  <div className="arrow">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="joined">
          <p className="joined-title">Not Joined</p>
          <div className="list-joined">
            <div className="boxes">
              <div className="boxx">
                <div className="box-content">
                  <div className="info-chat-room">
                    <div className="img">
                      <img src={img} alt="" />
                    </div>
                    <div className="room-info">
                      <p className="name-room">Battlefield 4</p>
                      <p className="numbers">405 People Joined</p>
                      <div>
                        <BiWorld /> Public
                      </div>
                    </div>
                  </div>
                  <div className="arrow">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="boxx">
                <div className="box-content">
                  <div className="info-chat-room">
                    <div className="img">
                      <img src={img} alt="" />
                    </div>
                    <div className="room-info">
                      <p className="name-room">Battlefield 4</p>
                      <p className="numbers">405 People Joined</p>
                      <div>
                        <BiWorld /> Public
                      </div>
                    </div>
                  </div>
                  <div className="arrow">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="boxx">
                <div className="box-content">
                  <div className="info-chat-room">
                    <div className="img">
                      <img src={img} alt="" />
                    </div>
                    <div className="room-info">
                      <p className="name-room">Battlefield 4</p>
                      <p className="numbers">405 People Joined</p>
                      <div>
                        <BiWorld /> Public
                      </div>
                    </div>
                  </div>
                  <div className="arrow">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="boxx">
                <div className="box-content">
                  <div className="info-chat-room">
                    <div className="img">
                      <img src={img} alt="" />
                    </div>
                    <div className="room-info">
                      <p className="name-room">Battlefield 4</p>
                      <p className="numbers">405 People Joined</p>
                      <div>
                        <BiWorld /> Public
                      </div>
                    </div>
                  </div>
                  <div className="arrow">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="boxx">
                <div className="box-content">
                  <div className="info-chat-room">
                    <div className="img">
                      <img src={img} alt="" />
                    </div>
                    <div className="room-info">
                      <p className="name-room">Battlefield 4</p>
                      <p className="numbers">405 People Joined</p>
                      <div>
                        <BiWorld /> Public
                      </div>
                    </div>
                  </div>
                  <div className="arrow">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRooms;
