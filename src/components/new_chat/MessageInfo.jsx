import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { FalseMessageInfo, selectGlobal, toggleMessageInfo } from "../../app/feature/ListChatSlice";
import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

const MessageInfo = () => {
  const MessageInfoRef = useRef(null);
  const {isMessageInfoModel} = useSelector(selectGlobal);
  const dispatch = useDispatch()
  const handleToggleMessageInfo = () => {
      dispatch(toggleMessageInfo())
  }

  const [position, setPosition] = useState(0);
  const [startY, setStartY] = useState(0);

  const [isSliding,setIsSliding] = useState(false)

  const disableScroll = () => {
    document.body.style.overscrollBehavior = 'none';
  };

  const enableScroll = () => {
    document.body.style.overscrollBehavior = 'auto';
  };

  const handlers = useSwipeable({
    onSwiping: ({ dir, deltaY }) => {
      if (dir === 'Up') {
        setPosition((prev) => Math.max(prev - deltaY, -window.innerHeight));
      } else if (dir === 'Down') {
        setPosition((prev) => Math.min(prev + deltaY, 0));
      }
    },
    // onSwipedUp: () => dispatch(toggleContacts()),
    // onSwipedDown: () => dispatch(FalseMessageInfo()),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
    setIsSliding(true)
    disableScroll();
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
      dispatch(FalseMessageInfo());
    } else {
      setPosition(0);
    }
    setIsSliding(false)
    enableScroll();
  };

  useEffect( () => {
    if(isMessageInfoModel){
      setPosition(0)
    }
  } ,[isMessageInfoModel])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (MessageInfoRef.current && MessageInfoRef.current == event.target) {
        dispatch(FalseMessageInfo());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);
  


  const scrollDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(0)
    };

    const scrollDiv = scrollDivRef.current;
    scrollDiv.addEventListener('scroll', handleScroll);

    return () => {
      scrollDiv.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={MessageInfoRef} className={`Overlay-MessageInfo ${isMessageInfoModel?"Overlay-MessageInfoActive":"Overlay-MessageInfoDisActive"}`}>
      <div className={`messageInfoModel ${isMessageInfoModel ? "active" : ""}`}
        {...handlers}
        style={ screen.width <= 768 ? { transform: `translateY(${position}px)`,
        transition: isSliding ? "none" : "" } : {} }
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className='drawer-heading block md:hidden'>
          <span className='w-[100px] h-[5px] bg-[#ddd] block my-[15px] mx-auto rounded-3xl'></span>
        </div>
        <div className="header-messageInfo">
          <div className="hidden md:block close-btn-message-info" onClick={handleToggleMessageInfo}>
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
        <div className="reading_delivering-Message" ref={scrollDivRef}>
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
