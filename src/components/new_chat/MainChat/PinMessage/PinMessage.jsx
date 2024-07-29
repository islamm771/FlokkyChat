import { GoPin } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";

const PinMessage = ({ isPinMessage, PinMessageTop, isPinMessageTop , handleTogglePinMessage,handleTogglePinMessageTop }) => {
  return (
    <>
      {isPinMessage && (
        <div className="pinMessageMainChat">
          <div className="wrapPinMessageChat">
            <div className="icon-pin">
              <GoPin />
            </div>
            <div className="content-messagePin">How are you?</div>
          </div>
          <div className="icon-hover-list">
            <div className="iconPinChat" onClick={handleTogglePinMessageTop}>
              <SlArrowDown />
            </div>
            <div
              ref={PinMessageTop}
              className={`list-pin-message ${
                isPinMessageTop
                  ? "list-pin-messageActive"
                  : "list-pin-messageDisActive"
              }`}
            >
              <p onClick={handleTogglePinMessage}>Unpin</p>
              <p>Go to message</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PinMessage;
