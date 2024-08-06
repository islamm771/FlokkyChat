import { IoMdCloseCircle } from "react-icons/io";
import img from "../../../assests/chat/bf4.jpg";
import { BiWorld } from "react-icons/bi";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ChatRoomFalse, toggleChatRoom } from "../../../app/feature/ListChatSlice";
import { selectGlobal } from "../../../app/feature/ListChatSlice";
import { useEffect, useRef, useState } from "react"; // Import useEffect and useRef
import FormInputwithIcon from "../../ui/formInputWithSearchIcon/FormInputwithIcon";
import { useSwipeable } from "react-swipeable";

const ChatRooms = () => {
  const dispatch = useDispatch();
  const { isChatRoom } = useSelector(selectGlobal);
  const chatRoomRef = useRef(null); 

  const handleToggleChatList = () => {
    dispatch(toggleChatRoom());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRoomRef.current && chatRoomRef.current == event.target ) {
        dispatch(ChatRoomFalse());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);
  


  const [position, setPosition] = useState(0);
  const [startY, setStartY] = useState(0);

  const [isSliding,setIsSliding] = useState(false)

  const handlers = useSwipeable({
    onSwiping: ({ dir, deltaY }) => {
      if (dir === 'Up') {
        setPosition((prev) => Math.max(prev - deltaY, -window.innerHeight));
      } else if (dir === 'Down') {
        setPosition((prev) => Math.min(prev + deltaY, 0));
      }
    },
    // onSwipedUp: () => dispatch(toggleContacts()),
    // onSwipedDown: () => dispatch(FalseContacts()),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
    setIsSliding(true)
  };

  const handleTouchMove = (e) => {
    const touchY = e.touches[0].clientY;
    const diffY = touchY - startY;
    if(diffY < 0){
      setPosition(0)
    }else{
      setPosition(diffY);
    }
  };

  const handleTouchEnd = () => {
    if (position > 100) {
      setPosition(800);
      dispatch(ChatRoomFalse());
    } else {
      setPosition(0);
    }
    setIsSliding(false)
  };

  useEffect( () => {
    if(isChatRoom){
      setPosition(0)
    }
  } ,[isChatRoom])

  return (
    <div ref={chatRoomRef} className={`overlay overflow-hidden ${isChatRoom? "active-chat": "disactive-chat"}`}>
      <div className={`chatRoom ${isChatRoom? "active": ""}`}
        {...handlers}
        style={ screen.width <= 768 ? { transform: `translateY(${position}px)`,
        transition: isSliding ? "none" : "" } : {} }
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd} >
        <div className='block md:hidden drawer-heading'>
          <span className='w-[100px] h-[5px] bg-[#ddd] block mb-[15px] mx-auto rounded-3xl'></span>
        </div>
        <div className="header-chatRoom">
          <h5>Chat Rooms</h5>
          <span className="hidden md:block" onClick={handleToggleChatList}>
            <FaTimes />
          </span>
        </div>
        <div className="search-input my-3">
          <FormInputwithIcon label={"Search for communities..."} id={"comm-search"} name={"comm-search"} />
        </div>
        <div className="wrap-new-chat pr-[20px]">
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
    </div>
  );
};

export default ChatRooms;
