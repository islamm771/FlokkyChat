import { FaArrowsAltH, FaVideo } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Header = ({
  handleToggleListPeople,
  handleToggleWrapgroupPeopleChat,
  bfs4,
  handleToggleVideoCall,
  handleToggleOnlineList
}) => {
  return (
    <div className="header-Main-chat-page">
      <div className="right-header-main-chat">
        <div className="icon" onClick={handleToggleListPeople}>
          <FaArrowsAltH />
        </div>
        <div className="iconSm" onClick={handleToggleWrapgroupPeopleChat}>
          {/* <FaArrowsAltH /> */}
          <IoArrowBack />
        </div>
        <div className="info-main-chat">
          <div className="profile-header__avatar online-profile-header-chat border-header-profile-chat"
            onClick={handleToggleOnlineList} >
            <img src={bfs4} alt={`'s avatar`} />
          </div>
          <div className="info-username-hashtag">
            <p className="username-main-chat">Marketing</p>
            <p className="hashtag-main-chat">
              #Technology
              <RiVerifiedBadgeFill color={"#36e9f7"} size={16} />
              <MdAdminPanelSettings color={"#d7006a"} size={16} />
              <div className="badge-main-chat">
                <img src="/img/download.png" alt="Padge" />
                <p className="badge-number-mainchat">12</p>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="left-header-main-chat">
        {/* <div className="desc-main-chat">
        This group is for like-minded marketeers to connect and discuss all
        things marketing.
      </div> */}
      </div>
      <div className="left-header-main-chat">
        <div className="btn-call" onClick={handleToggleVideoCall}>
          {/* <LuPhone /> */}
          <IoIosCall size={20} />
        </div>
        <div className="btn-call" onClick={handleToggleVideoCall}>
          <FaVideo />
        </div>
        <div className="!hidden md:!flex icon" onClick={handleToggleOnlineList}>
          <FaArrowsAltH />
        </div>
      </div>
    </div>
  );
};

export default Header;
