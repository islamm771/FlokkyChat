import React, { useState } from "react";
import radio from "../../../assests/chat/radio_1.png";
import { FaCirclePlay, FaSliders, FaVolumeLow } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectGlobal } from "../../../app/feature/ListChatSlice";

const Footer = () => {
    const [active,setActive] = useState(false)
    const handleToggle = () => {
        setActive(!active)
    }
    const { isProfile , isNotification , isSearch} = useSelector(selectGlobal);

  return (
    <div className={`${isProfile?"footer-profile footer-profile-screen":"disactive-chat"}`}>
      <div className={`content-music  ${isNotification?"disactive-chat":""}
       ${isSearch?"disactive-chat":""}`}>
        <div className="wrap-music">
          <div className="right-music">
            <div className="img">
              <img src={radio} alt="" />
            </div>
            <div className="play">
              <FaCirclePlay/>
            </div>
            <div className="info-music">
              <p className="name">Dash Hits X</p>
              <p className="desc-music">Dash Hits X gives you the big..</p>
            </div>
          </div>
          <div className="left-music" onClick={handleToggle}>
            <FaSliders/>
          </div>
        </div>
        <div className={`list-music ${active?"active-chat":"disactive-chat"}`}>
            <p className="head">Radio Station List</p>
            <div className="list">
                <p>Dash Hits X</p>
                <p>Dash Hits X</p>
                <p>Dash Hits X</p>
                <p>Dash Hits X</p>
                <div className="volume">
                <FaVolumeLow/>
                <input type="range" name="" id="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
