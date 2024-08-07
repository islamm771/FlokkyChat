import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {  ReportFalse, toggleReport } from "../../app/feature/ListChatSlice";
import { selectGlobal } from "../../app/feature/ListChatSlice";
import { useEffect, useRef, useState } from "react"; 
import { FaTimes } from "react-icons/fa";
import FormTextBox from "../ui/formTextBox/formTextBox";
import { useSwipeable } from "react-swipeable";
import Select from "../ui/select/Select";

const reasons = [
  { id:1 , value:"Reason 1" },
  { id:2 , value:"Reason 2" },
  { id:3 , value:"Reason 3" },
]

const Report = () => {
  const dispatch = useDispatch();
  const [reportValue,setReportValue] = useState("")
  const { isReport } = useSelector(selectGlobal);
  const chatRoomRef = useRef(null); 

  const handleToggleChatList = () => {
    dispatch(toggleReport());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRoomRef.current && !chatRoomRef.current.contains(event.target)) {
        dispatch(ReportFalse());
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
      dispatch(ReportFalse());
    } else {
      setPosition(0);
    }
    setIsSliding(false)
    enableScroll();
  };

  useEffect( () => {
    if(isReport){
      setPosition(0)
    }
  } ,[isReport])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRoomRef.current && chatRoomRef.current == event.target) {
        dispatch(ReportFalse());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);
  

  return (
    <div ref={chatRoomRef} className={`overlay ${isReport?"active-chat":"disactive-chat"}`}>
      <div className={`Report ${isReport?"active":""}`}
      {...handlers}
      style={ screen.width <= 768 ? { transform: `translateY(${position}px)`,
      transition: isSliding ? "none" : "" } : {} }
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      >
        <div className='drawer-heading block md:hidden'>
          <span className='w-[100px] h-[5px] bg-[#ddd] block mb-[15px] mx-auto rounded-3xl'></span>
        </div>
        <div className="header-Report">
          <h5>Report</h5>
          <span className="hidden md:block" onClick={handleToggleChatList}><FaTimes /></span>
        </div>
        <form className="wrap-inputs-Report">
          {/* <div className="inpt-Report">
            <p>Report Reason</p>
            <select id="plainTextSelect" className="inpt-Report-select">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div> */}
          <Select defaultValue={"Report Reason"} optionsArray={reasons} />
          <FormTextBox label={"Additional Details"} name={"report-reason"} value={reportValue} setValue={setReportValue} />
          <div className="flex gap-[15px] mt-[3rem]">
            <button className="button white" onClick={handleToggleChatList}>Cancel</button>
            <button className="button primary">Submit Report</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Report;
