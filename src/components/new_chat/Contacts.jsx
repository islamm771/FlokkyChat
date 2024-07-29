import React, { useEffect, useRef, useState } from "react";
import tony from "../../assests/chat/tony.jpeg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGlobal,
  FalseContacts,
} from "../../app/feature/ListChatSlice";
import { FaCircle, FaPaperPlane } from "react-icons/fa";
import FormInputwithIcon from "../ui/formInputWithSearchIcon/FormInputwithIcon";

const Contacts = () => {
    const [selected,setSelected] = useState(false)
  const dispatch = useDispatch();
  const SendCodeRef = useRef();
  const { isContactsModel } = useSelector(selectGlobal);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (SendCodeRef.current && !SendCodeRef.current.contains(event.target)) {
        dispatch(FalseContacts());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);
  return (
    <>
    {isContactsModel&&(
      <div className={`overlay-forward`}>
        <div className={`ForwardMessage-Model`} ref={SendCodeRef}>
          <div className="header-forward">
            <h5>Contacts</h5>
          </div>
          <div className="Search-people-chat">
        <FormInputwithIcon
          name={"Search-People"}
          id={"Search-People"}
          label={"Search Contacts"}
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
                  </div>
                  <p className="online">
                    <FaCircle /> Online
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          {selected&&(
          <div className="send-forward">
            <div className="name-send-to-forward">
                <p>Tony Starc</p>
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

export default Contacts;
