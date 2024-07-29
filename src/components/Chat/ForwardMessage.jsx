import React, { useEffect, useRef, useState } from "react";
import tony from "../../assests/chat/tony.jpeg";
import flag from "../../assests/chat/amrica.webp";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGlobal,
  toggleModelCodeSnipest,
  ForwardMessageModelFalse,
} from "../../app/feature/ListChatSlice";
import { FaCircle, FaPaperPlane, FaSearch } from "react-icons/fa";
import FormInputwithIcon from "../ui/formInputWithSearchIcon/FormInputwithIcon";
const ForwardMessage = () => {
    const [selected,setSelected] = useState(false)
  const dispatch = useDispatch();
  const SendCodeRef = useRef();
  const { isForwardModel } = useSelector(selectGlobal);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (SendCodeRef.current && !SendCodeRef.current.contains(event.target)) {
        dispatch(ForwardMessageModelFalse());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);
  return (
    <>
    {isForwardModel&&(
      <div className={`overlay-forward`}>
        <div className={`ForwardMessage-Model`} ref={SendCodeRef}>
          <div className="header-forward">
            <h5>Forward message to</h5>
          </div>
          <div className="Search-people-chat">
        <FormInputwithIcon
          name={"Search-People"}
          id={"Search-People"}
          label={"Search Forward Message"}
        />
        <div style={{ marginBottom: "5px" }}></div>
      </div>
          <div className="wrap-forward-model">
            <div className="content-info-forw">
              <input type="checkbox" name="" id="" onChange={()=>setSelected(!selected)}/>
              <div className="info">
                <img src={tony} alt="" className="people-img" />
                <div className="info-forw">
                  <div className="admin-for">
                    <p>Tony Stark </p>
                    {/* <img src={flag} alt="" className="flag" /> */}
                    {/* <div className="user-type-badge">ADMIN</div> */}
                  </div>
                  <p className="online">
                    <FaCircle className="online" /> Online
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          {selected&&(
          <div className="send-forward">
            <div className="name-send-to-forward">
                <p>Sut David & 2 other(s)</p>
            </div>
            <div className="icon-send-froward">
                <FaPaperPlane/>
            </div>
          </div>
          )}
        </div>
      </div>
    )}
    </>
  );
};

export default ForwardMessage;
