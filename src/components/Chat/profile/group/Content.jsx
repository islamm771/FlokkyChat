import React, { useEffect, useRef, useState } from "react";
import tony from "../../../../assests/chat/bf4.jpg";
import {
  FaSearch,
  FaBell,
  FaFlag,
  FaCommentSlash,
  FaShareAlt,
  FaLink,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
  FaFileAlt,
  FaDownload,
  FaExternalLinkAlt,
  FaExpandArrowsAlt,
  FaCaretDown,
  FaClosedCaptioning,
} from "react-icons/fa";
import img from '../../../../assests/chat/plane.jpeg'
import { FaInfo, FaPlus } from "react-icons/fa";
import {
  IoMdArrowDropup,
  IoIosArrowForward,
  IoIosArrowDown
} from "react-icons/io";
import {IoCloseOutline, IoExitOutline} from 'react-icons/io5'
import { useDispatch } from "react-redux";
import { toggleReport, toggleSearch , toggleNewChat} from "../../../../app/feature/ListChatSlice";
import flag from '../../../../assests/chat/amrica.webp'
import { MdEmail } from "react-icons/md";


const Content = () => {
  const [activeTab, setActiveTab] = useState("Media");
  const [dropDownStates, setDropDownStates] = useState(false);
  const [ShowMore, setShowMore] = useState(false);
  const [dropDownShareStates, setDropDownShareStates] = useState(false);
  const [profileInfo, setProfileInfo] = useState(true);
  const wrapperRef = useRef(null); 
  const wrapperRefShare = useRef(null);

  const dispatch = useDispatch();

  const handleShowMore = ()=>{
setShowMore(!ShowMore)
  }
  const handleToggleSearch = () => {
    dispatch(toggleSearch());
  };
  const handleToggleNewChat = () => {
    dispatch(toggleNewChat());
  };

  const handleToggleShare = () =>{
    setDropDownShareStates(!dropDownShareStates)
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleToggleMenu = () => {
    setDropDownStates(!dropDownStates);
  };
  const handleToggleReport = () => {
    dispatch(toggleReport());
  };
  const handleToggleProfileInfo = () => {
    setProfileInfo(!profileInfo);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        (wrapperRef.current && !wrapperRef.current.contains(event.target)) ||
        (wrapperRefShare.current && !wrapperRefShare.current.contains(event.target))
      ) {
        setDropDownStates(false);
        setDropDownShareStates(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, wrapperRefShare, setDropDownStates, setDropDownShareStates]);
  
  return (
    <div className="content">
      <div className="wrap-profile">
        {!ShowMore&&(
          <>
        <div className="user-profile-group">
          <img src={tony} alt="tony" />
          <p className="name">Tony Stark</p>
          <div>
          </div>
        </div>
        <div className="actions">
        <div className="share-action">
          <div className="share-btn" onClick={handleToggleShare}>
                <FaShareAlt/>
          </div>
          {dropDownShareStates&&(
          <div
              ref={wrapperRefShare}
              className={`list-user-profile-share ${
                dropDownStates
                  ? "list-user-profile-active"
                  : "list-user-profile-"
              }`}
            >
              <div className="list">
                <li>
                  <FaLink />
                  <p>Get Link</p>
                </li>
                <li>
                  <FaFacebook />
                  <p>Share on Facebook</p>
                </li>
                <li>
                  <FaTwitter />
                  <p>Share on Twitter</p>
                </li>
                <li>
                  <MdEmail />
                  <p>Email Invitation</p>
                </li>{" "}
                <li>
                  <FaWhatsapp />
                  <p>Invite via Whatsapp</p>
                </li>
                <li>
                  <FaTelegram />
                  <p>Invite Telegram</p>
                </li>
              </div>
            </div>
          )}
        </div>
          <div className="search" onClick={handleToggleSearch}>
            <FaSearch />
          </div>
          <div className="options">
            <div className="btn-option" onClick={handleToggleMenu}>
              <p>Options</p>
              <IoMdArrowDropup />
            </div>
            <div
              ref={wrapperRef}
              className={`list-user-profile ${
                dropDownStates
                  ? "list-user-profile-active"
                  : "list-user-profile-disabled"
              }`}
            >
              <div className="list">
                <li>
                  <FaBell />
                  <p>Mute</p>
                </li>
                <li onClick={handleToggleReport}>
                  <FaFlag />
                  <p>Report</p>
                </li>{" "}
                <li>
                  <FaCommentSlash />
                  <p>Clear Chats</p>
                </li>
                <li >
                  <IoExitOutline />
                  <p>Leave Room</p>
                </li>
                <li onClick={handleToggleNewChat}>
                  <FaPlus />
                  <p>New Chat Room</p>
                </li>
                <li>
                  <FaInfo />
                  <p>Toggle Chat Info</p>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="responsive-space">
          <p>Responsive Ad Space</p>
        </div>
        <div className="toogleProfile-info">
          <div className="main-btn-profile" onClick={handleToggleProfileInfo}>
          Recent Users
            {profileInfo ? <IoIosArrowForward /> : <IoIosArrowDown  />}
          </div>
          <div
            className={`list-profile-info ${
              profileInfo
                ? "list-profile-info-active"
                : "list-profile-info-disabled"
            }`}
          >
            <div className="info-group">
              <img src={tony} alt="" className="people"/> 
              <p>Tony Stark</p>
              <img src={flag} alt="" className="flag" />
              <div className="user-type-badge">Admin</div>
            </div>
            <div className="info-group">
              <img src={tony} alt="" className="people"/> 
              <p>Tony Stark</p>
              <img src={flag} alt="" className="flag" />
              <div className="user-type-badge">Admin</div>
            </div>
            <div className="info-group">
              <img src={tony} alt="" className="people"/> 
              <p>Tony Stark</p>
              <img src={flag} alt="" className="flag" />
              <div className="user-type-badge">Admin</div>
            </div>
            <div className="info-group">
              <img src={tony} alt="" className="people"/> 
              <p>Tony Stark</p>
              <img src={flag} alt="" className="flag" />
              <div className="user-type-badge">Admin</div>
            </div>
            <div className="info-group">
              <img src={tony} alt="" className="people"/> 
              <p>Tony Stark</p>
              <img src={flag} alt="" className="flag" />
              <div className="user-type-badge">Admin</div>
            </div>
            <div className="info-group">
              <img src={tony} alt="" className="people"/> 
              <p>Tony Stark</p>
              <img src={flag} alt="" className="flag" />
              <div className="user-type-badge">Admin</div>
            </div>
          </div>
        </div>
          </>
        )}
        <div className="media-file">
          <div className="tabs-profile">
            <div
              className={`${activeTab === "Media" ? "active" : ""}`}
              onClick={() => handleTabClick("Media")}
            >
              <p>Media</p>
            </div>
            <div
              className={`${activeTab === "Files" ? "active" : ""}`}
              onClick={() => handleTabClick("Files")}
            >
              <p>Files</p>
            </div>
            <div
              className={`${activeTab === "links" ? "active" : ""}`}
              onClick={() => handleTabClick("links")}
            >
              <p>links</p>
            </div>
            {ShowMore&&(
              <IoCloseOutline onClick={handleShowMore}/>
            )}
          </div>
        </div>
          <div className="tabs-content-profile-groupe">
            {activeTab === "Media" && (
              <div className="tabs-content-profile-groupe">
                <div className="grid-img">
                  <div className="img">
                  <img src={img} alt="" />
                  </div>
                  <div className="img">
                  <img src={img} alt="" />
                  </div>
                  <div className="img">
                  <img src={img} alt="" />
                  </div>
                  <div className="img">
                  <img src={img} alt="" />
                  </div>
                  <div className="img">
                  <img src={img} alt="" />
                  </div>
                  <div className="img">
                  <img src={img} alt="" />
                  </div>
                  <div className="img">
                  <img src={img} alt="" />
                  </div>
                  <div className="img">
                  <img src={img} alt="" />
                  </div>
                  <div className="img">
                  <img src={img} alt="" />
                  </div>
                  <div className="img">
                  <img src={img} alt="" />
                  </div>
                  <div className="img">
                  <img src={img} alt="" />
                  </div>
                  <div className="img">
                  <img src={img} alt="" />
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Files" && (
              <>
              <div className="content-media-file-groupe">
                <FaFileAlt/>
                <div className="info">
                  <p>ipsv6.txt</p>
                  <p>36 bytes txt file</p>
                </div>
                <FaDownload/>
              </div>
              <div className="content-media-file-groupe">
                <FaFileAlt/>
                <div className="info">
                  <p>ipsv6.txt</p>
                  <p>36 bytes txt file</p>
                </div>
                <FaDownload/>
              </div>              <div className="content-media-file-groupe">
                <FaFileAlt/>
                <div className="info">
                  <p>ipsv6.txt</p>
                  <p>36 bytes txt file</p>
                </div>
                <FaDownload/>
              </div>              <div className="content-media-file-groupe">
                <FaFileAlt/>
                <div className="info">
                  <p>ipsv6.txt</p>
                  <p>36 bytes txt file</p>
                </div>
                <FaDownload/>
              </div>              <div className="content-media-file-groupe">
                <FaFileAlt/>
                <div className="info">
                  <p>ipsv6.txt</p>
                  <p>36 bytes txt file</p>
                </div>
                <FaDownload/>
              </div>
              
              </>
            )}
                        {activeTab === "links" && (
                        <>
               <div className="content-media-file-groupe">
                <img src={img} alt="" />
                <div className="info">
                  <p>ipsv6.txt</p>
                  <p>36 bytes txt file</p>
                </div>
                <FaExternalLinkAlt/>
              </div>
                        </>
            )}
        <div className="load-refresh">
          {!ShowMore?(
        <div className="load-more" onClick={handleShowMore}>
          <div className="icon">
            <FaExpandArrowsAlt />
          </div>
          <div className="txt">View More</div>
        </div>

          ):(
            <div className="load-more">
            <div className="icon">
              <FaCaretDown />
            </div>
            <div className="txt">Load More</div>
          </div>
          )}
      </div>
          </div>
      </div>
    </div>
  );
};

export default Content;
