import { IoMdCloseCircle } from "react-icons/io";
import { useEffect, useRef } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { setIsMuteModel } from "../../app/feature/ListChatSlice";

const Mute = () => {
    const {isMuteModel} = useSelector( state => state.global )
    const dispatch = useDispatch()
    const chatRoomRef = useRef(null); 

  const handleToggleChatList = () => {
      dispatch( setIsMuteModel(false) )
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRoomRef.current && !chatRoomRef.current.contains(event.target)) {
        dispatch( setIsMuteModel(false) )
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);
  return (
    <div className={`overlay ${isMuteModel ?"active-chat":"disactive-chat"}`}>
      <div ref={chatRoomRef} className={`Mute`}>
        <div className="header-mute">
          <h5>Mute Conversation:</h5>
          <IoMdCloseCircle color="#fd6729" onClick={handleToggleChatList}/>
        </div>
        <form className="wrap-inputs-mute">
            <div className="input-mute-option">
                <input type="radio" name="mute-duration" id="15-min" />
                <label htmlFor="15-min">For 15 min</label>
            </div>
            <div className="input-mute-option">
                <input type="radio" name="mute-duration" id="1-hr" />
                <label htmlFor="1-hr">For 1 Hour</label>
            </div>
            <div className="input-mute-option">
                <input type="radio" name="mute-duration" id="1-day" />
                <label htmlFor="1-day">For 1 Day</label>
            </div>
            <div className="input-mute-option">
                <input type="radio" name="mute-duration" id="untill-i" />
                <label htmlFor="untill-i">Until I turn back on</label>
            </div>
            <div className="input-mute-option !mt-[18px]">
                <button className="button primary"> Mute </button>
                <button className="button white" onClick={handleToggleChatList}> Cancel </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Mute;
