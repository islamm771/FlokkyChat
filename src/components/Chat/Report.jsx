import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {  ReportFalse, toggleReport } from "../../app/feature/ListChatSlice";
import { selectGlobal } from "../../app/feature/ListChatSlice";
import { useEffect, useRef } from "react"; 

const Report = () => {
  const dispatch = useDispatch();
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
  return (
    <div className={`overlay ${isReport?"active-chat":"disactive-chat"}`}>
      <div ref={chatRoomRef} className={`Report`}>
        <div className="header-Report">
          <h5>Report:</h5>
          <IoMdCloseCircle onClick={handleToggleChatList}/>
        </div>
        <hr />
        <form className="wrap-inputs-Report">
              <div className="inpt-Report">
                <p>Report Reason</p>
                <select id="plainTextSelect" className="inpt-Report-select">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Additional Details"
              ></textarea>
              <hr />
              <div className="btn-Report">
                <button type="button" onClick={handleToggleChatList} className="closeReport">Close</button>
                <button className="SubmitReport">Submit Report</button>
              </div>
            </form>
      </div>
    </div>
  );
};

export default Report;
