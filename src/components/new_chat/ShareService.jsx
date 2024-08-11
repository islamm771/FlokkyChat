import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FalseShareService,
  toggleShareService,
} from "../../app/feature/ListChatSlice";
import { selectGlobal } from "../../app/feature/ListChatSlice";
import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const ShareService = () => {
  const [service , setService] = useState("")

  const dispatch = useDispatch();
  const { isShareServiceModal } = useSelector(selectGlobal);
  const chatRoomRef = useRef(null);

  const handleToggleShareService = () => {
    dispatch(toggleShareService());
  };


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
    // onSwipedDown: () => dispatch(FalseContacts()),
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
      dispatch(FalseShareService());
    } else {
      setPosition(0);
    }
    setIsSliding(false)
    enableScroll();
  };

  useEffect( () => {
    if(isShareServiceModal){
      setPosition(0)
    }
  } ,[isShareServiceModal])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRoomRef.current && chatRoomRef.current == event.target) {
        dispatch(FalseShareService());
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
    <div
      ref={chatRoomRef}
      className={`overlay overflow-hidden ${
        isShareServiceModal ? "active-chat" : "disactive-chat"
      } `}
    >
      <div className={`new-chat ${
        isShareServiceModal ? "new-chat-active" : ""
        }`}
        {...handlers}
        style={ screen.width <= 768 ? { transform: `translateY(${position}px)`,
        transition: isSliding ? "none" : "" } : {} }
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        >
        <div className='drawer-heading block md:hidden'>
          <span className='w-[100px] h-[5px] bg-[#ddd] block mb-[25px] mx-auto rounded-3xl'></span>
        </div>
        <div className="share-service-container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="sell-product-title !mb-0">Share Service</h2>
              <button className="hidden md:block w-fit p-2 text-[#adafca]" onClick={handleToggleShareService}><FaTimes /></button>
            </div>
            {service && 
                <h2 className="w-fit text-white text-[1rem] bg-[#fd6729] py-[8px] px-[20px] rounded-[30px] cursor-pointer"
                onClick={() => setService("")}>
                  {service} <FaTimes className="inline" />
                </h2>
              }
            <form action="">
              <div className="wrap-new-chat" ref={scrollDivRef}>
                <div className="grid md:!grid-cols-2 lg:!grid-cols-3 py-[10px] pr-[20px]">
                  <div className="select-service-card" onClick={() => setService("Service 1")}>
                    <img className="rounded-t-[12px] w-full" src="/img/cover/05.jpg" alt="" />
                    <p className="text-[16px] p-[20px] text-center font-semibold">Service Name Here</p>
                  </div>
                  <div className="select-service-card" onClick={() => setService("Service 2")}>
                    <img className="rounded-t-[12px] w-full" src="/img/cover/05.jpg" alt="" />
                    <p className="text-[16px] p-[20px] text-center font-semibold">Service Name Here</p>
                  </div>
                  <div className="select-service-card" onClick={() => setService("Service 3")}>
                    <img className="rounded-t-[12px] w-full" src="/img/cover/05.jpg" alt="" />
                    <p className="text-[16px] p-[20px] text-center font-semibold">Service Name Here</p>
                  </div>
                  <div className="select-service-card" onClick={() => setService("Service 4")}>
                    <img className="rounded-t-[12px] w-full" src="/img/cover/05.jpg" alt="" />
                    <p className="text-[16px] p-[20px] text-center font-semibold">Service Name Here</p>
                  </div>
                  <div className="select-service-card" onClick={() => setService("Service 5")}>
                    <img className="rounded-t-[12px] w-full" src="/img/cover/05.jpg" alt="" />
                    <p className="text-[16px] p-[20px] text-center font-semibold">Service Name Here</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[15px] mt-[3rem]">
                <button className="button white">Cancel</button>
                <button className="button primary">Share Service</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ShareService;
