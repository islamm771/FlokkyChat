import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FalseShareVacancy,
  toggleShareVacancy,
} from "../../app/feature/ListChatSlice";
import { selectGlobal } from "../../app/feature/ListChatSlice";
import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import Select from "../ui/select/Select";
import { useSwipeable } from "react-swipeable";

const businessPages = [
  { id:1,value: "Business Page 1" },
  { id:2,value: "Business Page 2" },
  { id:3,value: "Business Page 3" },
  { id:4,value: "Business Page 4" },
  { id:5,value: "Business Page 5" },
];

const ShareVacancy = () => {
  const [vacancy , setVacancy] = useState("")
  const [value , setValue] = useState("Business Page")
  const dispatch = useDispatch();
  const { isShareVacancyModal } = useSelector(selectGlobal);
  const chatRoomRef = useRef(null);

  const handleToggleShareVacancy = () => {
    dispatch(toggleShareVacancy());
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
    // onSwipedDown: () => dispatch(FalseShareVacancy()),
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
      dispatch(FalseShareVacancy());
    } else {
      setPosition(0);
    }
    setIsSliding(false)
    enableScroll();
  };

  useEffect( () => {
    if(isShareVacancyModal){
      setPosition(0)
    }
  } ,[isShareVacancyModal])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRoomRef.current && chatRoomRef.current == event.target) {
        dispatch(FalseShareVacancy());
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
        isShareVacancyModal ? "active-chat" : "disactive-chat"
      } `}
    >
      <div className={`new-chat ${
        isShareVacancyModal ? "new-chat-active" : ""
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
        <div className="share-vacancy-container">
            <div className="flex items-center justify-between mb-8 px-[15px] md:px-[20px]">
              <h2 className="sell-product-title !mb-0">Share Vacancy</h2>
              <button className="w-fit p-2 text-[#adafca] hidden md:block" onClick={handleToggleShareVacancy}><FaTimes /></button>
            </div>
            <form action="">
              <div className="wrap-new-chat" ref={scrollDivRef}>
              <Select defaultValue={value} setValue={setValue} optionsArray={businessPages} />
              {vacancy && 
                <h2 className="mt-[2rem] w-fit text-white text-[1rem] bg-[#fd6729] py-[8px] px-[20px] rounded-[30px] cursor-pointer"
                onClick={() => setVacancy("")}>
                  {vacancy} <FaTimes className="inline" />
                </h2>
              }
              { value !== "Business Page" && (
                <div className="mt-[2rem]">
                    <h2 className="text-[25px]">Jobs</h2>
                    <div className="grid md:!grid-cols-2 lg:!grid-cols-3 mt-[1rem]">
                        <div className="select-job-card" onClick={() => setVacancy("Vacancy 1")}>
                            <img className="rounded-t-[12px] w-full" src="/img/cover/05.jpg" alt="" />
                            <p className="text-[16px] p-[20px] text-center font-semibold">Job title here</p>
                        </div>
                        <div className="select-job-card" onClick={() => setVacancy("Vacancy 2")}>
                            <img className="rounded-t-[12px] w-full" src="/img/cover/03.jpg" alt="" />
                            <p className="text-[16px] p-[20px] text-center font-semibold">Job title here</p>
                        </div>
                        <div className="select-job-card" onClick={() => setVacancy("Vacancy 3")}>
                            <img className="rounded-t-[12px] w-full" src="/img/cover/04.jpg" alt="" />
                            <p className="text-[16px] p-[20px] text-center font-semibold">Job title here</p>
                        </div>
                        <div className="select-job-card" onClick={() => setVacancy("Vacancy 4")}>
                            <img className="rounded-t-[12px] w-full" src="/img/cover/04.jpg" alt="" />
                            <p className="text-[16px] p-[20px] text-center font-semibold">Job title here</p>
                        </div>
                        <div className="select-job-card" onClick={() => setVacancy("Vacancy 5")}>
                            <img className="rounded-t-[12px] w-full" src="/img/cover/04.jpg" alt="" />
                            <p className="text-[16px] p-[20px] text-center font-semibold">Job title here</p>
                        </div>
                    </div>
                </div>
              )}
              </div>
              <div className="flex gap-[15px] mt-[3rem] px-[15px] md:px-[20px]">
                <button className="button white">Cancel</button>
                <button className="button primary">Publich Job</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ShareVacancy;
