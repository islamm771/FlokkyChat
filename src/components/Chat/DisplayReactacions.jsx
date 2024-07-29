import React, { useEffect, useRef, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGlobal,
  toggleReactPeopleInfo,
  DisplayReactFalse,
} from "../../app/feature/ListChatSlice";
import like from "../../assests/chat/like.gif";
import love from "../../assests/chat/love.gif";
import care from "../../assests/chat/care.gif";
import haha from "../../assests/chat/haha.gif";
import wow from "../../assests/chat/wow.gif";
import angry from "../../assests/chat/angry.gif";
import sad from "../../assests/chat/sad.gif";
import tony from "../../assests/chat/tony.jpeg";
import { MdDeleteOutline } from "react-icons/md";

const DisplayReactacions = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const handleTabNumber = (number) => {
    setTabIndex(number);
  };

  const dispatch = useDispatch();
  const SendCodeRef = useRef();
  const { isReactPeopleInfo } = useSelector(selectGlobal);

  const handleToggleModelCodeSnipest = () => {
    dispatch(toggleReactPeopleInfo());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (SendCodeRef.current && !SendCodeRef.current.contains(event.target)) {
        dispatch(DisplayReactFalse());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <>
      {isReactPeopleInfo && (
        <div className={`overlay-DisplayReact`}>
          <div className={`displayReactModel`} ref={SendCodeRef}>
            <div className="header-ReactModel">
              <div className="Display-reactions">
                <li
                  onClick={() => handleTabNumber(1)}
                  className={`${tabIndex === 1 ? "active-react" : ""}`}
                >
                  All
                </li>
                <li
                  onClick={() => handleTabNumber(2)}
                  className={`${tabIndex === 2 ? "active-react" : ""}`}
                >
                  <img src={like} alt="" />
                </li>
                <li
                  onClick={() => handleTabNumber(3)}
                  className={`${tabIndex === 3 ? "active-react" : ""}`}
                >
                  <img src={love} alt="" />
                </li>
                <li
                  onClick={() => handleTabNumber(4)}
                  className={`${tabIndex === 4 ? "active-react" : ""}`}
                >
                  <img src={care} alt="" />
                </li>
                <li
                  onClick={() => handleTabNumber(5)}
                  className={`${tabIndex === 5 ? "active-react" : ""}`}
                >
                  <img src={haha} alt="" />
                </li>
                <li
                  onClick={() => handleTabNumber(6)}
                  className={`${tabIndex === 6 ? "active-react" : ""}`}
                >
                  <img src={wow} alt="" />
                </li>
                <li
                  onClick={() => handleTabNumber(7)}
                  className={`${tabIndex === 7 ? "active-react" : ""}`}
                >
                  <img src={sad} alt="" />
                </li>
                <li
                  onClick={() => handleTabNumber(8)}
                  className={`${tabIndex === 8 ? "active-react" : ""}`}
                >
                  <img src={angry} alt="" />
                </li>
              </div>
              <IoMdCloseCircle onClick={handleToggleModelCodeSnipest} />
            </div>
            <hr />
            {tabIndex === 1 && (
              <>
                <div className="react-people">
                  <div className="react-people-info">
                    <img src={tony} alt="" />
                    <p>Ahmed</p>
                    <MdDeleteOutline />
                  </div>
                  <div className="react-type">
                    <img src={love} alt="" />
                  </div>
                </div>
                <div className="react-people">
                  <div className="react-people-info">
                    <img src={tony} alt="" />
                    <p>Ahmed</p>
                    <MdDeleteOutline />
                  </div>
                  <div className="react-type">
                    <img src={love} alt="" />
                  </div>
                </div>
                <div className="react-people">
                  <div className="react-people-info">
                    <img src={tony} alt="" />
                    <p>Ahmed</p>
                    <MdDeleteOutline />
                  </div>
                  <div className="react-type">
                    <img src={love} alt="" />
                  </div>
                </div>
              </>
            )}
            {tabIndex === 2 && (
              <>
                <div className="react-people">
                  <div className="react-people-info">
                    <img src={tony} alt="" />
                    <p>Ahmed</p>
                    <MdDeleteOutline />
                  </div>
                  <div className="react-type">
                    <img src={love} alt="" />
                  </div>
                </div>
                <div className="react-people">
                  <div className="react-people-info">
                    <img src={tony} alt="" />
                    <p>Ahmed</p>
                    <MdDeleteOutline />
                  </div>
                  <div className="react-type">
                    <img src={love} alt="" />
                  </div>
                </div>
                <div className="react-people">
                  <div className="react-people-info">
                    <img src={tony} alt="" />
                    <p>Ahmed</p>
                    <MdDeleteOutline />
                  </div>
                  <div className="react-type">
                    <img src={love} alt="" />
                  </div>
                </div>
              </>
            )}
            {tabIndex === 3 && (
              <>
                <div className="react-people">
                  <div className="react-people-info">
                    <img src={tony} alt="" />
                    <p>Ahmed</p>
                    <MdDeleteOutline />
                  </div>
                  <div className="react-type">
                    <img src={love} alt="" />
                  </div>
                </div>
                <div className="react-people">
                  <div className="react-people-info">
                    <img src={tony} alt="" />
                    <p>Ahmed</p>
                    <MdDeleteOutline />
                  </div>
                  <div className="react-type">
                    <img src={love} alt="" />
                  </div>
                </div>
                <div className="react-people">
                  <div className="react-people-info">
                    <img src={tony} alt="" />
                    <p>Ahmed</p>
                    <MdDeleteOutline />
                  </div>
                  <div className="react-type">
                    <img src={love} alt="" />
                  </div>
                </div>
              </>
            )}
            {tabIndex === 4 && (
              <>
                <div className="react-people">
                  <div className="react-people-info">
                    <img src={tony} alt="" />
                    <p>Ahmed</p>
                    <MdDeleteOutline />
                  </div>
                  <div className="react-type">
                    <img src={love} alt="" />
                  </div>
                </div>
                <div className="react-people">
                  <div className="react-people-info">
                    <img src={tony} alt="" />
                    <p>Ahmed</p>
                    <MdDeleteOutline />
                  </div>
                  <div className="react-type">
                    <img src={love} alt="" />
                  </div>
                </div>
                <div className="react-people">
                  <div className="react-people-info">
                    <img src={tony} alt="" />
                    <p>Ahmed</p>
                    <MdDeleteOutline />
                  </div>
                  <div className="react-type">
                    <img src={love} alt="" />
                  </div>
                </div>
              </>
            )}
            {tabIndex === 5 && (
              <>
                <div className="react-people">
                  <div className="react-people-info">
                    <img src={tony} alt="" />
                    <p>Ahmed</p>
                    <MdDeleteOutline />
                  </div>
                  <div className="react-type">
                    <img src={love} alt="" />
                  </div>
                </div>
                <div className="react-people">
                  <div className="react-people-info">
                    <img src={tony} alt="" />
                    <p>Ahmed</p>
                    <MdDeleteOutline />
                  </div>
                  <div className="react-type">
                    <img src={love} alt="" />
                  </div>
                </div>
                <div className="react-people">
                  <div className="react-people-info">
                    <img src={tony} alt="" />
                    <p>Ahmed</p>
                    <MdDeleteOutline />
                  </div>
                  <div className="react-type">
                    <img src={love} alt="" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayReactacions;
