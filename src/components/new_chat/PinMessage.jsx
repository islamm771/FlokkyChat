import { useDispatch, useSelector } from "react-redux";
import {  FalsePinMessage, selectGlobal, togglePinMessage, togglePinMessageChat } from "../../app/feature/ListChatSlice";
import { useEffect, useRef } from "react";

const PinMessage = () => {
  const PinMessageRef = useRef(null);
  const { isPinMessageModel } = useSelector(selectGlobal);
  const dispatch = useDispatch();

  const handleToggleDeleteMessage = () => {
    dispatch(togglePinMessage());
  };
  const handleTogglePinMessage = () => {
    dispatch(togglePinMessageChat());
    handleToggleDeleteMessage()
  };

  useEffect(() => {
    const handleClickOutsideReactions = (event) => {
      if (PinMessageRef.current && !PinMessageRef.current.contains(event.target)) {
        dispatch(FalsePinMessage());
      }
    };

    document.addEventListener("mousedown", handleClickOutsideReactions);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideReactions);
    };
  }, [PinMessageRef, dispatch]);

  return (
    <div className={`Overlay-Pin ${isPinMessageModel ? "Overlay-PinActive" : "Overlay-PinDisActive"}`}>
      <div ref={PinMessageRef} className="PinModel">
        <div className="headerDeleteMessage">
          <p className="txt-main-head-pin">Choose how long your pin lasts</p>
          <p className="desc-main-head-pin">You can unpin at any time</p>
        </div>
          <div className="content-PinMessage">
             <div className="wrap-pin-message">
                <div className="checkboox-label-pin">
                    <input type="checkbox" name="" id="24hours" />
                    <label htmlFor="24hours">24 hours</label>
                </div>
                <div className="checkboox-label-pin">
                    <input type="checkbox" name="" id="7days" />
                    <label htmlFor="7days">7 days</label>
                </div>
                <div className="checkboox-label-pin">
                    <input type="checkbox" name="" id="30days" />
                    <label htmlFor="30days">30 days</label>
                </div>
             </div>
          </div>
          <div className="content-DeleteMessage">
            <div className="Cancel">
              <button className="Cancel_deleteMessage" onClick={handleToggleDeleteMessage}>Cancel</button>
              <button className="DeleteForMe_deleteMessage" onClick={handleTogglePinMessage}>Pin</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default PinMessage;
