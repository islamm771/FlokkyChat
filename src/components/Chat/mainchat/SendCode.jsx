import React, { useEffect, useRef } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { selectGlobal , toggleModelCodeSnipest ,SendCodeFalse } from "../../../app/feature/ListChatSlice";
const SendCode = () => {
    const dispatch = useDispatch()
    const SendCodeRef = useRef()
  const { isModelCodeSnipest } = useSelector(selectGlobal);
  const handleToggleModelCodeSnipest = () => {
dispatch(toggleModelCodeSnipest());
};
useEffect(() => {
    const handleClickOutside = (event) => {
      if (SendCodeRef.current && !SendCodeRef.current.contains(event.target)) {
        dispatch(SendCodeFalse());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);
  return (
    <>
      {isModelCodeSnipest && (
        <div className={`overlay`}>
          <div className={`sendcode`} ref={SendCodeRef}>
            <div className="header-chatRoom">
              <h5>Share Code Snippet</h5>
              <IoMdCloseCircle onClick={handleToggleModelCodeSnipest}/>
            </div>
            <hr />
            <form className="wrap-inputs-sendCode">
              <div className="inpt-sendCode">
                <input
                  type="text"
                  placeholder="Title or Caption"
                  className="inpt-send-code"
                />
                <select id="plainTextSelect" className="inpt-send-code">
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
                placeholder="Type your code here"
              ></textarea>
              <hr/>
              <div className="btn-Report">
              <button className="SubmitReport sendcode-submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SendCode;
