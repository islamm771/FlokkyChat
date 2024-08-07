import { useDispatch, useSelector } from "react-redux";
import { FalsePinMessage, selectGlobal, togglePinMessage, togglePinMessageChat } from "../../app/feature/ListChatSlice";
import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import FormCheckbox from "../ui/formCheckbox/FormCheckbox";
import FormRadio from "../ui/formRadio/formRadio";
import { FaTimes } from "react-icons/fa";

const PinMessage = () => {
  const PinMessageRef = useRef(null);
  const { isPinMessageModel } = useSelector(selectGlobal);
  const dispatch = useDispatch();

  const handleCancelPin = () => {
    // dispatch(togglePinMessage());
    dispatch(FalsePinMessage())
  };
  const handleTogglePinMessage = () => {
    dispatch(togglePinMessageChat());
    handleCancelPin()
  };


  const [position, setPosition] = useState(0);
  const [startY, setStartY] = useState(0);

  const [isSliding, setIsSliding] = useState(false)

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
    if (diffY < 0) {
      setPosition(0)
    } else {
      setPosition(diffY);
    }
  };

  const handleTouchEnd = () => {
    if (position > 100) {
      setPosition(800);
      dispatch(FalsePinMessage());
    } else {
      setPosition(0);
    }
    setIsSliding(false)
    enableScroll();
  };

  useEffect(() => {
    if (isPinMessageModel) {
      setPosition(0)
    }
  }, [isPinMessageModel])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (PinMessageRef.current && PinMessageRef.current == event.target) {
        dispatch(FalsePinMessage());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);



  return (
    <div ref={PinMessageRef} className={`Overlay-Pin ${isPinMessageModel ? "Overlay-PinActive" : "Overlay-PinDisActive"}`}>
      <div className={`PinModel ${isPinMessageModel ? "active" : ""}`}
        {...handlers}
        style={screen.width <= 768 ? {
          transform: `translateY(${position}px)`,
          transition: isSliding ? "none" : ""
        } : {}}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className='drawer-heading block md:hidden'>
          <span className='w-[100px] h-[5px] bg-[#ddd] block mb-[25px] mx-auto rounded-3xl'></span>
        </div>
        <div className="pin-header">
          <h5>Pin Message</h5>
          <span className="hidden md:block" onClick={handleCancelPin}><FaTimes /></span>
        </div>
        <div className="content-PinMessage">
          <form className="wrap-pin-message">
            <div className="radio-item mb-[15px]">
              <FormRadio label={"24 hours"} name={"duration"} id={"24hours"} />
            </div>
            <div className="radio-item mb-[15px]">
              <FormRadio label={"7 days"} name={"duration"} id={"7days"} />
            </div>
            <div className="radio-item">
              <FormRadio label={"30 days"} name={"duration"} id={"30days"} />
            </div>
          </form>
        </div>
        <div className="flex gap-[15px] mt-[3rem]">
          <button className="button white" onClick={handleCancelPin}>Cancel</button>
          <button className="button primary" onClick={handleTogglePinMessage}>Pin</button>
        </div>
      </div>
    </div>
  );
};

export default PinMessage;
