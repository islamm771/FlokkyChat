import { FaBell, FaCircle, FaMinusCircle, FaPen } from "react-icons/fa";
import "../../OnlineList/OnlineList.css";
import { MdAdminPanelSettings, MdModeNight, MdPermMedia } from "react-icons/md";
import { IoEllipsisVerticalSharp, IoOptionsOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import duke from "../../../../assests/chat/duke.jpeg";
import tony from "../../../../assests/chat/tony.jpeg";
import { RiCloseFill, RiVerifiedBadgeFill } from "react-icons/ri";
import { FaHashtag } from "react-icons/fa";
import { TbBrandDiscord, TbMessageCircleShare } from "react-icons/tb";
import { SiPreact } from "react-icons/si";
import { FiMapPin } from "react-icons/fi";
import { Tabs } from 'antd';
import { Wheel } from '@uiw/react-color';
import { IoIosInformationCircle } from "react-icons/io";
import { setIsMuteModel } from "../../../../app/feature/ListChatSlice";
import { useDispatch } from "react-redux";
import UserProfileImage from "../../../user-profile-image/UserProfileImage";

const items = [
  {
    key: '1',
    label: 'Images',
    children: (
      <div className="content-tabs-online-chat-info">
          <div className="wrapImages-tabs">
            <img src="/img/avatar/10.jpg" alt="" />
            <img src="/img/avatar/11.jpg" alt="" />
            <img src="/img/avatar/12.jpg" alt="" />
            <img src="/img/avatar/13.jpg" alt="" />
            <img src="/img/avatar/14.jpg" alt="" />
            <img src="/img/avatar/15.jpg" alt="" />
            <img src="/img/avatar/16.jpg" alt="" />
            <img src="/img/avatar/17.jpg" alt="" />
            <img src="/img/avatar/18.jpg" alt="" />
            <img src="/img/avatar/19.jpg" alt="" />
            <img src="/img/avatar/20.jpg" alt="" />
            <img src="/img/avatar/21.jpg" alt="" />
            <img src="/img/avatar/22.jpg" alt="" />
            <div className="EndMoreImageChat">
              <img src="/img/avatar/30.jpg" alt="" />
              <div className="numberMoreImageChat">+61</div>
            </div>
          </div>
      </div>
    ),
  },
  {
    key: '2',
    label: 'Videos',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Files',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Polls',
    children: 'Content of Tab Pane 4',
  },
  {
    key: '5',
    label: 'Products',
    children: 'Content of Tab Pane 5',
  },
  {
    key: '6',
    label: 'Services',
    children: 'Content of Tab Pane 6',
  },
];


const InformationChat = ({ direction }) => {
  const dispatch = useDispatch()
  const BoxRef1 = useRef(null);
  const BoxRef2 = useRef(null);
  const BoxRef3 = useRef(null);
  const BoxRef5 = useRef(null);
  const BoxRef6 = useRef(null);
  const BoxRef7 = useRef(null);
  const [isShowBoxOne, setIsShowBoxOne] = useState(false);
  const [isShowBoxTwo, setIsShowBoxTwo] = useState(false);
  const [isShowBoxThree, setIsShowBoxThree] = useState(false);
  const [isShowBoxOne5, setIsShowBoxOne5] = useState(false);
  const [isNote, setIsNote] = useState(false);
  const [isShowBoxTwo6, setIsShowBoxTwo6] = useState(false);
  const [isShowBoxThree7, setIsShowBoxThree7] = useState(false);
  const [hex, setHex] = useState("#fff");
  const [chatSettings , setChatSettings] = useState("about")
  
  const onTabChange = (key) => {
    console.log(key);
  };

  const handleToggleShowBox6 = () => {
    setIsShowBoxTwo6(!isShowBoxTwo6);
  };
  const handleToggleNoteBox = () => {
    setIsNote(!isNote);
  };

  const handleToggleShowBox = () => {
    setIsShowBoxOne(!isShowBoxOne);
  };

  const handleToggleCloseBox = () => {
    setIsShowBoxOne(false);
    setIsShowBoxOne5(false);
    setIsShowBoxTwo(false);
    setIsShowBoxThree(false);
    setIsShowBoxTwo6(false);
    setIsShowBoxThree7(false);
  };

  const handleToggleShowBoxBlock = () => {
    setIsShowBoxThree7(!isShowBoxOne5);
  };

  const handleTogglesetIsShowBoxTwo = () => {
    setIsShowBoxTwo(!isShowBoxOne);
  };

  const handleToggleShowBoxThree = () => {
    setIsShowBoxThree(!isShowBoxOne);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (BoxRef5.current && !BoxRef5.current.contains(event.target)) {
        setIsShowBoxOne5(false);
      }
      if (BoxRef2.current && !BoxRef2.current.contains(event.target)) {
        setIsShowBoxTwo(false);
      }
      if (BoxRef3.current && !BoxRef3.current.contains(event.target)) {
        setIsShowBoxThree(false);
      }
      if (BoxRef1.current && !BoxRef1.current.contains(event.target)) {
        setIsShowBoxOne(false);
      }
      if (BoxRef6.current && !BoxRef6.current.contains(event.target)) {
        setIsShowBoxTwo6(false);
      }
      if (BoxRef7.current && !BoxRef7.current.contains(event.target)) {
        setIsShowBoxThree7(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    const images = document.querySelectorAll(".img-online-list img");
    const numImages = images.length;
    images.forEach((image, index) => {
      image.style.zIndex = numImages - index;
    });

    const numbersOnlineList = document.querySelector(".numbers-online-list");
    numbersOnlineList.style.zIndex = numImages + 1;

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [BoxRef5, BoxRef2, BoxRef3, BoxRef1, BoxRef6]);
  const handleRightClick = (event) => {
    event.preventDefault();

    setIsShowBoxOne(true);
  };
  const handleRightClick6 = (event) => {
    event.preventDefault();

    setIsShowBoxTwo6(true);
  };
  const handleRightClick7 = (event) => {
    event.preventDefault();

    setIsShowBoxThree7(true);
  };
  return (
    <div
      className={`InformationChat ${direction === "right" ? "reverse" : ""}`}
    >
      <div className="wrap-content-onlineList">
        <div className="head-content-onlineList">
          <div className="words-content-onlinelist">
            <p>
              <span>Members -</span>{" "}
            </p>
          </div>
          <div className="avatar-onlineList">
            <div className="numbers-online-list">
              <p>+250</p>
            </div>
            <div className="img-online-list">
              <img src={duke} alt="" loading="lazy" />
              <img src={tony} alt="" loading="lazy" />
              <img src={duke} alt="" loading="lazy" />
              <img src={tony} alt="" loading="lazy" />
              <img src={duke} alt="" loading="lazy" />
              <img src={tony} alt="" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="overflow-online-list">
          <div className="content-info-online-list">
            <div className="wrap-above-info">
              <figure className="navigation-widget-cover liquid onlineListFigure">
                <img src="img/cover/01.jpg" alt="cover-01" />
              </figure>

              <div className="user-short-description relative">
                <div className="image-profile-big user-short-description-avatar user-avatar medium onlineListPosition">
                  <img src="/img/avatar/01.jpg" alt="" />
                </div>
                <p className="public_privatr_group_onlineChat">Private</p>
                <div className="desc_onlineList_group">
                  <p className="group-name-online-list">Developer FrontEnd</p>
                  <p className="desc-name-online-list">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita amet animi quia provident deleniti porro ipsam
                    incidunt exercitationem odio quam.
                  </p>
                </div>
                <p className="absolute top-4 right-6 cursor-pointer" onClick={() => dispatch( setIsMuteModel(true) )}>
                  <FaBell size={20} />
                  {/* <p className="font-semibold">Mute</p> */}
                </p>
              </div>
            </div>
          </div>
          <div className="grid !grid-cols-3 p-3 mb-4 chat-settings-wrapper">
              <div className={`${chatSettings == "about" ? 'active' : ''}`} 
              onClick={ () => setChatSettings("about") }
              >
                <IoIosInformationCircle />
                <p>About</p>
              </div>
              <div className={`${chatSettings == "media" ? 'active' : ''}`} 
                onClick={ () => setChatSettings("media") } >
                <MdPermMedia />
                <p>Media</p>
              </div>
              <div className={`${chatSettings == "options" ? 'active' : ''}`} 
                onClick={ () => setChatSettings("options") } >
                <IoOptionsOutline />
                <p>Options</p>
              </div>
          </div>

          { chatSettings == "about" ? (
            <>
              <div className="wrap-content-onlineList">
                <p className="title-online-list">Admins - 9</p>
                <div className="img-onlineList" onContextMenu={handleRightClick}>
                  <div className="chat-item" onDoubleClick={handleToggleShowBox}>
                    <div className="user-list-item">
                      <div className="profile-image">
                        <div className="profile-image-chat">
                          <img src="/img/avatar/01.jpg" alt="Profile" />
                          <RiVerifiedBadgeFill
                            className="nav-small-verify verify-online-list"
                            color={"#36e9f7"}
                            size={16}
                          />
                          <MdAdminPanelSettings
                            className="nav-small-admin admin-online-list"
                            color={"#d7006a"}
                            size={16}
                          />
                          <div className="badge-container-nav onlineListBadge">
                            <img src="/img/download.png" alt="Padge" />
                            <p className="badge-number-nav">12</p>
                          </div>
                          <div className="online-list">
                            <FaCircle />
                          </div>
                        </div>
                      </div>
                      <div className="user-info">
                        <div className="chat-name">
                          <div className="chat-name-text">Tony Starc</div>
                        </div>
                        <div className="chat-preview">
                          <div className="chat-is-read">
                            Allow Agency | Graphic Designer
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-chat" onClick={handleToggleShowBox}>
                      <IoEllipsisVerticalSharp />
                    </div>
                  </div>
                  <div
                    ref={BoxRef1}
                    className={`box-online-chat-item-info ${
                      isShowBoxOne
                        ? "box-online-chat-item-info-active"
                        : ".box-online-chat-item-info-disactive"
                    } `}
                  >
                    <div className="closeBox" onClick={handleToggleShowBox}>
                      <RiCloseFill />
                    </div>
                    <div className="navigation-widget-info-wrap PositionListChat">
                        <div className="navigation-widget-info flex-onlineChatBox">
                          <UserProfileImage />
                          <div className="infoListChatBox">
                            <p className="navigation-widget-info-title navTitle style-nameBoxOnline">
                              <div className="flex items-center gap-2">
                                Marina Valentine{" "}
                                <MdAdminPanelSettings className="-mt-1" size={20} color={"#d7006a"} />
                              </div>
                            </p>
                            <p className="navigation-widget-info-text navInfo StyleTwo-NameBoxOnline">
                              Marketing Manager
                            </p>
                            <p className="navigation-widget-info-text navInfo StyleTwo-NameBoxOnline">
                              Brandmarks
                            </p>
                          </div>
                        </div>
                    </div>
                    <div className="img-hashtag-chat-item">

                      <div className="icon-chat-item">
                        <p className="hoverHashtag">Edit Profile</p>
                        <FaPen />
                      </div>
                      <div className="icon-hashtag-chat-item">
                        <div className="circle-wrap-hash">
                          <FaHashtag />
                        </div>
                      </div>
                      
                    </div>
                    <div className="content-box-chat-item">
                      <div className="about-me-box-chat">
                        <h4>ABOUT ME</h4>
                        {/* <p className="desc-box-chat">
                          Multi-discipline Marketing and Creating Director,
                          specialized in creating value through brand exprience
                          </p> */}
                        <div className="connection-desc">
                          <div className="businesses-card-flokkers-list grid !grid-cols-2 !gap-0">
                            <div className="fldkker col-span-2">
                              <img
                                src="/img/avatar/01.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker">
                              <img
                                className="w-full h-full"
                                src="/img/avatar/02.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker">
                              <img
                                className="w-full h-full"
                                src="/img/avatar/03.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker">
                              <img
                                className="w-full h-full"
                                src="/img/avatar/04.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker plus h-full">
                              <p className="w-full h-full bg-[#ff57221a] text-[#fd6729] flex items-center justify-center !text-2xl !font-semibold">+19K</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="member-since-box-chat">
                        <h4>Member Since</h4>
                        <div className="wrap-info-date-chat-item">
                          <div className="one-info-date-chat-item">
                            <TbBrandDiscord />
                            <p>Jun 19,2020</p>
                          </div>
                          <div className="two-info-date-chat-item">
                            <FiMapPin />
                            <p>Residence: Cairo - Egypt</p>
                          </div>
                        </div>
                      </div>
                      <div className="role-since-box-chat">
                        <h4>Role</h4>
                        <div className="wrap-role-chat-item">
                          <div className="one-role-chat-item">
                            <FaCircle />
                            <p>ABNCW ADMIN</p>
                          </div>
                          <div className="two-role-chat-item">+</div>
                        </div>
                      </div>
                      <div className="note-since-box-chat">
                        <h4>NOTE</h4>
                        {!isNote ? (
                          <div
                            className="wrap-note-chat-item"
                            onClick={handleToggleNoteBox}
                          >
                            <div className="note-chat-item">
                              Click to add a note
                            </div>
                          </div>
                        ) : (
                          <div className="wrap-note-chat-item-input">
                            <form action="">
                              <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Writa a note"
                              />
                              <button className="btnSubmitNote">
                                <TbMessageCircleShare />
                              </button>
                            </form>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img-onlineList" onContextMenu={handleRightClick}>
                  <div
                    className="chat-item"
                    onDoubleClick={handleTogglesetIsShowBoxTwo}
                  >
                    <div className="user-list-item">
                      <div className="profile-image">
                        <div className="profile-image-chat">
                          <img src="/img/avatar/06.jpg" alt="Profile" />
                          <RiVerifiedBadgeFill
                            className="nav-small-verify verify-online-list"
                            color={"#36e9f7"}
                            size={16}
                          />
                          <MdAdminPanelSettings
                            className="nav-small-admin admin-online-list"
                            color={"#d7006a"}
                            size={16}
                          />
                          <div className="badge-container-nav onlineListBadge">
                            <img src="/img/download.png" alt="Padge" />
                            <p className="badge-number-nav">12</p>
                          </div>
                          <div className="offline-list">
                            <FaCircle />
                          </div>
                        </div>
                      </div>
                      <div className="user-info">
                        <div className="chat-name">
                          <div className="chat-name-text">Tony Starc</div>
                        </div>
                        <div className="chat-preview">
                          <div className="chat-is-read">
                            Allow Agency | Graphic Designer
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="dropdown-chat"
                      onClick={handleTogglesetIsShowBoxTwo}
                    >
                      <IoEllipsisVerticalSharp />
                    </div>
                  </div>
                  <div
                    ref={BoxRef2}
                    className={`box-online-chat-item-info ${
                      isShowBoxTwo
                        ? "box-online-chat-item-info-active"
                        : ".box-online-chat-item-info-disactive"
                    } `}
                  >
                    <div className="bg-online-chat-item-info">
                      <div className="closeBox" onClick={handleToggleCloseBox}>
                        <RiCloseFill />
                      </div>
                      <div className="icon-chat-item">
                        <p className="hoverHashtag">Edit Profile</p>
                        <FaPen />
                      </div>
                    </div>
                    <div className="img-hashtag-chat-item">
                      <div className="navigation-widget-info-wrap PositionListChat">
                        <div className="navigation-widget-info flex-onlineChatBox">
                          <div className="user-avatar small no-outline user-chat user-status-avatar">
                            <img src="/img/avatar/01.jpg" alt="Profile" />
                            <RiVerifiedBadgeFill size={20} color={"#36e9f7"} />
                            <div className="badge-container-nav-mobile">
                              <img src="/img/download.png" alt="Padge" />
                              <p className="badge-number-nav-mobile">12</p>
                            </div>
                          </div>
                          <div className="infoListChatBox">
                            <p className="navigation-widget-info-title navTitle style-nameBoxOnline">
                              <div>
                                Marina Valentine{" "}
                                <MdAdminPanelSettings size={20} color={"#d7006a"} />
                              </div>
                            </p>
                            <p className="navigation-widget-info-text navInfo StyleTwo-NameBoxOnline">
                              Marketing Manager
                            </p>
                            <p className="navigation-widget-info-text navInfo StyleTwo-NameBoxOnline">
                              Brandmarks
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="icon-hashtag-chat-item">
                        <div className="circle-wrap-hash">
                          <FaHashtag />
                        </div>
                      </div>
                    </div>
                    <div className="content-box-chat-item">
                      <div className="about-me-box-chat">
                        <h4>ABOUT ME</h4>
                        {/* <p className="desc-box-chat">
                      Multi-discipline Marketing and Creating Director,
                      specialized in creating value through brand exprience
                    </p> */}
                        <div className="connection-desc">
                          <div className="businesses-card-flokkers-list flex items-center flex-wrap">
                            <div className="fldkker w-full">
                              <img
                                src="/img/avatar/01.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker w-1/2">
                              <img
                                src="/img/avatar/02.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker w-1/2">
                              <img
                                src="/img/avatar/03.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker w-1/2">
                              <img
                                src="/img/avatar/04.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker plus w-1/2 felx items-center justify-center text-lg">
                              <p>+19K</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="member-since-box-chat">
                        <h4>Member Since</h4>
                        <div className="wrap-info-date-chat-item">
                          <div className="one-info-date-chat-item">
                            <TbBrandDiscord />
                            <p>Jun 19,2020</p>
                          </div>
                          <div className="two-info-date-chat-item">
                            <FiMapPin />
                            <p>Residence: Cairo - Egypt</p>
                          </div>
                        </div>
                      </div>
                      <div className="role-since-box-chat">
                        <h4>Role</h4>
                        <div className="wrap-role-chat-item">
                          <div className="one-role-chat-item">
                            <FaCircle />
                            <p>ABNCW ADMIN</p>
                          </div>
                          <div className="two-role-chat-item">+</div>
                        </div>
                      </div>
                      <div className="note-since-box-chat">
                        <h4>NOTE</h4>
                        {!isNote ? (
                          <div
                            className="wrap-note-chat-item"
                            onClick={handleToggleNoteBox}
                          >
                            <div className="note-chat-item">
                              Click to add a note
                            </div>
                          </div>
                        ) : (
                          <div className="wrap-note-chat-item-input">
                            <form action="">
                              <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Writa a note"
                              />
                              <button className="btnSubmitNote">
                                <TbMessageCircleShare />
                              </button>
                            </form>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap-content-onlineList">
                <p className="title-online-list">Moderators - 2</p>
                <div className="img-onlineList" onContextMenu={handleRightClick}>
                  <div className="chat-item"
                    onDoubleClick={handleToggleShowBoxThree}
                  >
                    <div className="user-list-item">
                      <div className="profile-image">
                        <div className="profile-image-chat">
                          <img src="/img/avatar/01.jpg" alt="Profile" />
                          <RiVerifiedBadgeFill
                            className="nav-small-verify verify-online-list"
                            color={"#36e9f7"}
                            size={16}
                          />
                          <MdAdminPanelSettings
                            className="nav-small-admin admin-online-list"
                            color={"#d7006a"}
                            size={16}
                          />
                          <div className="badge-container-nav onlineListBadge">
                            <img src="/img/download.png" alt="Padge" />
                            <p className="badge-number-nav">12</p>
                          </div>
                          <div className=" online-list">
                            <FaCircle />
                          </div>
                        </div>
                      </div>
                      <div className="user-info">
                        <div className="chat-name">
                          <div className="chat-name-text">Tony Starc</div>
                        </div>
                        <div className="chat-preview">
                          <div className="chat-is-read">
                            Allow Agency | Graphic Designer
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="dropdown-chat"
                      onClick={handleToggleShowBoxThree}
                    >
                      <IoEllipsisVerticalSharp />
                    </div>
                  </div>
                  <div
                    ref={BoxRef3}
                    className={`box-online-chat-item-info ${
                      isShowBoxThree
                        ? "box-online-chat-item-info-active"
                        : ".box-online-chat-item-info-disactive"
                    } `}
                  >
                    <div className="bg-online-chat-item-info">
                      <div className="closeBox" onClick={handleToggleCloseBox}>
                        <RiCloseFill />
                      </div>
                      <div className="icon-chat-item">
                        <p className="hoverHashtag">Edit Profile</p>
                        <FaPen />
                      </div>
                    </div>
                    <div className="img-hashtag-chat-item">
                      <div className="navigation-widget-info-wrap PositionListChat">
                        <div className="navigation-widget-info flex-onlineChatBox">
                          <div className="user-avatar small no-outline user-chat user-status-avatar">
                            <img src="/img/avatar/01.jpg" alt="Profile" />
                            <RiVerifiedBadgeFill size={20} color={"#36e9f7"} />
                            <div className="badge-container-nav-mobile">
                              <img src="/img/download.png" alt="Padge" />
                              <p className="badge-number-nav-mobile">12</p>
                            </div>
                          </div>
                          <div className="infoListChatBox">
                            <p className="navigation-widget-info-title navTitle style-nameBoxOnline">
                              <div>
                                Marina Valentine{" "}
                                <MdAdminPanelSettings size={20} color={"#d7006a"} />
                              </div>
                            </p>
                            <p className="navigation-widget-info-text navInfo StyleTwo-NameBoxOnline">
                              Marketing Manager
                            </p>
                            <p className="navigation-widget-info-text navInfo StyleTwo-NameBoxOnline">
                              Brandmarks
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="icon-hashtag-chat-item">
                        <div className="circle-wrap-hash">
                          <FaHashtag />
                        </div>
                      </div>
                    </div>
                    <div className="content-box-chat-item">
                      <div className="about-me-box-chat">
                        <h4>ABOUT ME</h4>
                        {/* <p className="desc-box-chat">
                      Multi-discipline Marketing and Creating Director,
                      specialized in creating value through brand exprience
                    </p> */}
                        <div className="connection-desc">
                          <div className="businesses-card-flokkers-list flex items-center flex-wrap">
                            <div className="fldkker w-full">
                              <img
                                src="/img/avatar/01.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker w-1/2">
                              <img
                                src="/img/avatar/02.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker w-1/2">
                              <img
                                src="/img/avatar/03.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker w-1/2">
                              <img
                                src="/img/avatar/04.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker plus w-1/2 felx items-center justify-center text-lg">
                              <p>+19K</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="member-since-box-chat">
                        <h4>Member Since</h4>
                        <div className="wrap-info-date-chat-item">
                          <div className="one-info-date-chat-item">
                            <TbBrandDiscord />
                            <p>Jun 19,2020</p>
                          </div>
                          <div className="two-info-date-chat-item">
                            <FiMapPin />
                            <p>Residence: Cairo - Egypt</p>
                          </div>
                        </div>
                      </div>
                      <div className="role-since-box-chat">
                        <h4>Role</h4>
                        <div className="wrap-role-chat-item">
                          <div className="one-role-chat-item">
                            <FaCircle />
                            <p>ABNCW Moderator</p>
                          </div>
                          <div className="two-role-chat-item">+</div>
                        </div>
                      </div>
                      <div className="note-since-box-chat">
                        <h4>NOTE</h4>
                        {!isNote ? (
                          <div
                            className="wrap-note-chat-item"
                            onClick={handleToggleNoteBox}
                          >
                            <div className="note-chat-item">
                              Click to add a note
                            </div>
                          </div>
                        ) : (
                          <div className="wrap-note-chat-item-input">
                            <form action="">
                              <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Writa a note"
                              />
                              <button className="btnSubmitNote">
                                <TbMessageCircleShare />
                              </button>
                            </form>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img-onlineList" onContextMenu={handleRightClick7}>
                  <div className="chat-item"
                    onDoubleClick={handleToggleShowBoxBlock}
                  >
                    <div className="user-list-item">
                      <div className="profile-image">
                        <div className="profile-image-chat">
                          <img src="/img/avatar/01.jpg" alt="Profile" />
                          <RiVerifiedBadgeFill
                            className="nav-small-verify verify-online-list"
                            color={"#36e9f7"}
                            size={16}
                          />
                          <MdAdminPanelSettings
                            className="nav-small-admin admin-online-list"
                            color={"#d7006a"}
                            size={16}
                          />
                          <div className="badge-container-nav onlineListBadge">
                            <img src="/img/download.png" alt="Padge" />
                            <p className="badge-number-nav">12</p>
                          </div>
                          <div className="ban-status">
                            <FaMinusCircle />
                          </div>
                        </div>
                      </div>
                      <div className="user-info">
                        <div className="chat-name">
                          <div className="chat-name-text">Tony Starc</div>
                        </div>
                        <div className="chat-preview">
                          <div className="chat-is-read">
                            Allow Agency | Graphic Designer
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="dropdown-chat"
                      onClick={handleToggleShowBoxBlock}
                    >
                      <IoEllipsisVerticalSharp />
                    </div>
                  </div>
                  <div
                    ref={BoxRef7}
                    className={`box-online-chat-item-info ${
                      isShowBoxThree7
                        ? "box-online-chat-item-info-active"
                        : ".box-online-chat-item-info-disactive"
                    } `}
                  >
                    <div className="bg-online-chat-item-info">
                      <div className="closeBox" onClick={handleToggleCloseBox}>
                        <RiCloseFill />
                      </div>
                      {/* <div className="icon-chat-item">
                    <p className="hoverHashtag">Edit Profile</p>
                    <FaPen />
                  </div> */}
                    </div>
                    <div className="img-hashtag-chat-item">
                      <div className="navigation-widget-info-wrap PositionListChat">
                        <div className="navigation-widget-info flex-onlineChatBox">
                          <div className="user-avatar small no-outline user-chat user-status-avatar">
                            <img src="/img/avatar/01.jpg" alt="Profile" />
                            <RiVerifiedBadgeFill size={20} color={"#36e9f7"} />
                            <div className="badge-container-nav-mobile">
                              <img src="/img/download.png" alt="Padge" />
                              <p className="badge-number-nav-mobile">12</p>
                            </div>
                          </div>
                          <div className="infoListChatBox">
                            <p className="navigation-widget-info-title navTitle style-nameBoxOnline">
                              <div>
                                Marina Valentine{" "}
                                <MdAdminPanelSettings size={20} color={"#d7006a"} />
                              </div>
                            </p>
                            <p className="navigation-widget-info-text navInfo StyleTwo-NameBoxOnline">
                              Marketing Manager
                            </p>
                            <p className="navigation-widget-info-text navInfo StyleTwo-NameBoxOnline">
                              Brandmarks
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="icon-hashtag-chat-item">
                        <div className="circle-wrap-hash">
                          <FaHashtag />
                        </div>
                      </div>
                    </div>
                    <div className="content-box-chat-item">
                      <div className="about-me-box-chat">
                        <h4>ABOUT ME</h4>
                        {/* <p className="desc-box-chat">
                      Multi-discipline Marketing and Creating Director,
                      specialized in creating value through brand exprience
                    </p> */}
                        <div className="connection-desc">
                          <div className="businesses-card-flokkers-list flex items-center flex-wrap">
                            <div className="fldkker w-full">
                              <img
                                src="/img/avatar/01.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker w-1/2">
                              <img
                                src="/img/avatar/02.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker w-1/2">
                              <img
                                src="/img/avatar/03.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker w-1/2">
                              <img
                                src="/img/avatar/04.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker plus w-1/2 felx items-center justify-center text-lg">
                              <p>+19K</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="member-since-box-chat">
                        <h4>Member Since</h4>
                        <div className="wrap-info-date-chat-item">
                          <div className="one-info-date-chat-item">
                            <TbBrandDiscord />
                            <p>Jun 19,2020</p>
                          </div>
                          <div className="two-info-date-chat-item">
                            <FiMapPin />
                            <p>Residence: Cairo - Egypt</p>
                          </div>
                        </div>
                      </div>
                      <div className="role-since-box-chat">
                        <h4>Role</h4>
                        <div className="wrap-role-chat-item">
                          <div className="one-role-chat-item">
                            <FaCircle />
                            <p>ABNCW Moderator</p>
                          </div>
                          <div className="two-role-chat-item">+</div>
                        </div>
                      </div>
                      {/* <div className="note-since-box-chat">
                    <h4>NOTE</h4>
                    {!isNote?(
                    <div className="wrap-note-chat-item" onClick={handleToggleNoteBox}>
                      <div className="note-chat-item">Click to add a note</div>
                    </div>
                    ):(
                    <div className="wrap-note-chat-item-input">
                        <form action="">
                        <input type="text" name="" id="" placeholder="Writa a note"/>
                        <button className="btnSubmitNote">
                        <TbMessageCircleShare />
                        </button>
                        </form>
                    </div>
                    )}
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap-content-onlineList">
                <p className="title-online-list">Members - 245,670</p>
                <div className="img-onlineList" onContextMenu={handleRightClick6}>
                  <div className="chat-item" onDoubleClick={handleToggleShowBox6}>
                    <div className="user-list-item">
                      <div className="profile-image">
                        <div className="profile-image-chat">
                          <img src="/img/avatar/01.jpg" alt="Profile" />
                          <RiVerifiedBadgeFill
                            className="nav-small-verify verify-online-list"
                            color={"#36e9f7"}
                            size={16}
                          />
                          <MdAdminPanelSettings
                            className="nav-small-admin admin-online-list"
                            color={"#d7006a"}
                            size={16}
                          />
                          <div className="badge-container-nav onlineListBadge">
                            <img src="/img/download.png" alt="Padge" />
                            <p className="badge-number-nav">12</p>
                          </div>
                          <div className="online-list">
                            <FaCircle />
                          </div>
                        </div>
                      </div>
                      <div className="user-info">
                        <div className="chat-name">
                          <div className="chat-name-text">Tony Starc</div>
                        </div>
                        <div className="chat-preview">
                          <div className="chat-is-read">
                            Allow Agency | Graphic Designer
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-chat" onClick={handleToggleShowBox6}>
                      <IoEllipsisVerticalSharp />
                    </div>
                  </div>
                  <div
                    ref={BoxRef6}
                    className={`box-online-chat-item-info ${
                      isShowBoxTwo6
                        ? "box-online-chat-item-info-active"
                        : ".box-online-chat-item-info-disactive"
                    } `}
                  >
                    <div className="bg-online-chat-item-info">
                      <div className="closeBox" onClick={handleToggleCloseBox}>
                        <RiCloseFill />
                      </div>
                      {/* <div className="icon-chat-item">
                    <p className="hoverHashtag">Edit Profile</p>
                    <FaPen />
                  </div> */}
                    </div>
                    <div className="img-hashtag-chat-item">
                      <div className="navigation-widget-info-wrap PositionListChat">
                        <div className="navigation-widget-info flex-onlineChatBox">
                          <div className="user-avatar small no-outline user-chat user-status-avatar">
                            <img src="/img/avatar/01.jpg" alt="Profile" />
                            <RiVerifiedBadgeFill size={20} color={"#36e9f7"} />
                            <div className="badge-container-nav-mobile">
                              <img src="/img/download.png" alt="Padge" />
                              <p className="badge-number-nav-mobile">12</p>
                            </div>
                          </div>
                          <div className="infoListChatBox">
                            <p className="navigation-widget-info-title navTitle style-nameBoxOnline">
                              <div>
                                Marina Valentine{" "}
                                <MdAdminPanelSettings size={20} color={"#d7006a"} />
                              </div>
                            </p>
                            <p className="navigation-widget-info-text navInfo StyleTwo-NameBoxOnline">
                              Marketing Manager
                            </p>
                            <p className="navigation-widget-info-text navInfo StyleTwo-NameBoxOnline">
                              Brandmarks
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="icon-hashtag-chat-item">
                        <div className="circle-wrap-hash">
                          <FaHashtag />
                        </div>
                      </div>
                    </div>
                    <div className="content-box-chat-item">
                      <div className="about-me-box-chat">
                        <h4>ABOUT ME</h4>
                        {/* <p className="desc-box-chat">
                      Multi-discipline Marketing and Creating Director,
                      specialized in creating value through brand exprience
                    </p> */}
                        <div className="connection-desc">
                          <div className="businesses-card-flokkers-list flex items-center flex-wrap">
                            <div className="fldkker w-full">
                              <img
                                src="/img/avatar/01.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker w-1/2">
                              <img
                                src="/img/avatar/02.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker w-1/2">
                              <img
                                src="/img/avatar/03.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker w-1/2">
                              <img
                                src="/img/avatar/04.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker plus w-1/2 felx items-center justify-center text-lg">
                              <p>+19K</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="member-since-box-chat">
                        <h4>Member Since</h4>
                        <div className="wrap-info-date-chat-item">
                          <div className="one-info-date-chat-item">
                            <TbBrandDiscord />
                            <p>Jun 19,2020</p>
                          </div>
                          <div className="two-info-date-chat-item">
                            <FiMapPin />
                            <p>Residence: Cairo - Egypt</p>
                          </div>
                        </div>
                      </div>
                      <div className="role-since-box-chat">
                        <h4>No Roles</h4>
                        {/* <div className="wrap-role-chat-item">
                      <div className="one-role-chat-item">
                        <FaCircle />
                        <p>ABNCW ADMIN</p>
                      </div>
                      <div className="two-role-chat-item">+</div>
                    </div> */}
                      </div>
                      <div className="note-since-box-chat">
                        <h4>NOTE</h4>
                        {!isNote ? (
                          <div
                            className="wrap-note-chat-item"
                            onClick={handleToggleNoteBox}
                          >
                            <div className="note-chat-item">
                              Click to add a note
                            </div>
                          </div>
                        ) : (
                          <div className="wrap-note-chat-item-input">
                            <form action="">
                              <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Writa a note"
                              />
                              <button className="btnSubmitNote">
                                <TbMessageCircleShare />
                              </button>
                            </form>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img-onlineList" onContextMenu={handleRightClick6}>
                  <div className="chat-item" onDoubleClick={handleToggleShowBox6}>
                    <div className="user-list-item">
                      <div className="profile-image">
                        <div className="profile-image-chat">
                          <img src="/img/avatar/06.jpg" alt="Profile" />
                          <RiVerifiedBadgeFill
                            className="nav-small-verify verify-online-list"
                            color={"#36e9f7"}
                            size={16}
                          />
                          <MdAdminPanelSettings
                            className="nav-small-admin admin-online-list"
                            color={"#d7006a"}
                            size={16}
                          />
                          <div className="badge-container-nav onlineListBadge">
                            <img src="/img/download.png" alt="Padge" />
                            <p className="badge-number-nav">12</p>
                          </div>
                          <div className="night-list">
                            <MdModeNight />
                          </div>
                        </div>
                      </div>
                      <div className="user-info">
                        <div className="chat-name">
                          <div className="chat-name-text">Tony Starc</div>
                        </div>
                        <div className="chat-preview">
                          <div className="chat-is-read">
                            Allow Agency | Graphic Designer
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-chat" onClick={handleToggleShowBox6}>
                      <IoEllipsisVerticalSharp />
                    </div>
                  </div>
                  <div
                    ref={BoxRef6}
                    className={`box-online-chat-item-info ${
                      isShowBoxTwo6
                        ? "box-online-chat-item-info-active"
                        : ".box-online-chat-item-info-disactive"
                    } `}
                  >
                    <div className="bg-online-chat-item-info">
                      <div className="closeBox" onClick={handleToggleCloseBox}>
                        <RiCloseFill />
                      </div>
                      {/* <div className="icon-chat-item">
                    <p className="hoverHashtag">Edit Profile</p>
                    <FaPen />
                  </div> */}
                    </div>
                    <div className="img-hashtag-chat-item">
                      <div className="navigation-widget-info-wrap PositionListChat">
                        <div className="navigation-widget-info flex-onlineChatBox">
                          <div className="user-avatar small no-outline user-chat user-status-avatar">
                            <img src="/img/avatar/01.jpg" alt="Profile" />
                            <RiVerifiedBadgeFill size={20} color={"#36e9f7"} />
                            <div className="badge-container-nav-mobile">
                              <img src="/img/download.png" alt="Padge" />
                              <p className="badge-number-nav-mobile">12</p>
                            </div>
                          </div>
                          <div className="infoListChatBox">
                            <p className="navigation-widget-info-title navTitle style-nameBoxOnline">
                              <div>
                                Marina Valentine{" "}
                                <MdAdminPanelSettings size={20} color={"#d7006a"} />
                              </div>
                            </p>
                            <p className="navigation-widget-info-text navInfo StyleTwo-NameBoxOnline">
                              Marketing Manager
                            </p>
                            <p className="navigation-widget-info-text navInfo StyleTwo-NameBoxOnline">
                              Brandmarks
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="icon-hashtag-chat-item">
                        <div className="circle-wrap-hash">
                          <FaHashtag />
                        </div>
                      </div>
                    </div>
                    <div className="content-box-chat-item">
                      <div className="about-me-box-chat">
                        <h4>ABOUT ME</h4>
                        {/* <p className="desc-box-chat">
                      Multi-discipline Marketing and Creating Director,
                      specialized in creating value through brand exprience
                    </p> */}
                        <div className="connection-desc">
                          <div className="businesses-card-flokkers-list flex items-center flex-wrap">
                            <div className="fldkker w-full">
                              <img
                                src="/img/avatar/01.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker w-1/2">
                              <img
                                src="/img/avatar/02.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker w-1/2">
                              <img
                                src="/img/avatar/03.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker w-1/2">
                              <img
                                src="/img/avatar/04.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>
                            <div className="fldkker plus w-1/2 felx items-center justify-center text-lg">
                              <p>+19K</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="member-since-box-chat">
                        <h4>Member Since</h4>
                        <div className="wrap-info-date-chat-item">
                          <div className="one-info-date-chat-item">
                            <TbBrandDiscord />
                            <p>Jun 19,2020</p>
                          </div>
                          <div className="two-info-date-chat-item">
                            <FiMapPin />
                            <p>Residence: Cairo - Egypt</p>
                          </div>
                        </div>
                      </div>
                      <div className="role-since-box-chat">
                        <h4>No Roles</h4>
                        {/* <div className="wrap-role-chat-item">
                      <div className="one-role-chat-item">
                        <FaCircle />
                        <p>ABNCW ADMIN</p>
                      </div>
                      <div className="two-role-chat-item">+</div>
                    </div> */}
                      </div>
                      <div className="note-since-box-chat">
                        <h4>NOTE</h4>
                        {!isNote ? (
                          <div
                            className="wrap-note-chat-item"
                            onClick={handleToggleNoteBox}
                          >
                            <div className="note-chat-item">
                              Click to add a note
                            </div>
                          </div>
                        ) : (
                          <div className="wrap-note-chat-item-input">
                            <form action="">
                              <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Writa a note"
                              />
                              <button className="btnSubmitNote">
                                <TbMessageCircleShare />
                              </button>
                            </form>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap-content-onlineList">
                <p className="title-online-list">Offline - 245,670</p>
                <div className="img-onlineList" onContextMenu={handleRightClick6}>
                  <div className="chat-item" onDoubleClick={handleToggleShowBox6}>
                    <div className="user-list-item">
                      <div className="profile-image">
                        <div className="profile-image-chat">
                          <img src="/img/avatar/01.jpg" alt="Profile" />
                          {/* <RiVerifiedBadgeFill
                        className="nav-small-verify verify-online-list"
                        color={"#36e9f7"}
                        size={16}
                      />
                      <MdAdminPanelSettings
                        className="nav-small-admin admin-online-list"
                        color={"#d7006a"}
                        size={16}
                      />
                      <div className="badge-container-nav onlineListBadge">
                        <img src="/img/download.png" alt="Padge" />
                        <p className="badge-number-nav">12</p>
                      </div>
                      <div className=" offline-list">
                        <FaCircle />
                      </div> */}
                        </div>
                      </div>
                      <div className="user-info">
                        <div className="chat-name">
                          <div className="chat-name-text-offline">Tony Starc</div>
                        </div>
                        <div className="chat-preview-offline">
                          <div className="chat-is-read">
                            Allow Agency | Graphic Designer
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-chat" onClick={handleToggleShowBox6}>
                      <IoEllipsisVerticalSharp />
                    </div>
                  </div>
                  {/* <div
                ref={BoxRef5}
                className={`box-online-chat-item-info ${
                  isShowBoxOne5
                    ? "box-online-chat-item-info-active"
                    : ".box-online-chat-item-info-disactive"
                } `}
              >
                <div className="bg-online-chat-item-info">
                  <div className="icon-chat-item">
                    <FaPen />
                  </div>
                </div>
                <div className="img-hashtag-chat-item">
                  <div className="img-chat-item-profile">
                    <div className="profile-image-chat profile-img-chat-online-list">
                      <img
                        src="/img/avatar/01.jpg"
                        alt="Profile"
                        className="Member-chat"
                      />
                      <RiVerifiedBadgeFill
                        className="nav-small-verify verify-online-chat-item"
                        color={"#36e9f7"}
                        size={16}
                      />
                      <MdAdminPanelSettings
                        className="nav-small-admin admin-online-list-chat"
                        color={"#d7006a"}
                        size={16}
                      />
                      <div className="badge-container-nav onlineListBadge-chat">
                        <img src="/img/download.png" alt="Padge" />
                        <p className="badge-number-nav">12</p>
                      </div>
                      <div className="online-list chat-list-online">
                        <FaCircle />
                      </div>
                    </div>
                    <p className="view-profile-chat-profile">View Profile</p>
                  </div>
                  <div className="icon-hashtag-chat-item">
                    <div className="circle-wrap-hash">
                      <FaHashtag />
                    </div>
                  </div>
                </div>
                <div className="content-box-chat-item">
                  <div className="info-box-chat-item">
                    <h3>Tony Starc</h3>
                    <p>Tony Starc</p>
                  </div>
                  <div className="about-me-box-chat">
                    <h4>MUTUALS</h4>
                    <div className="mutual-box-chat">
                      <img src="/img/avatar/06.jpg" alt="" />
                      <img src="/img/avatar/06.jpg" alt="" />
                      <img src="/img/avatar/06.jpg" alt="" />
                    </div>
                  </div>
                  <div className="member-since-box-chat">
                    <h4>Member Since</h4>
                    <div className="wrap-info-date-chat-item">
                      <div className="one-info-date-chat-item">
                        <TbBrandDiscord />
                        <p>Jun 19,2020</p>
                      </div>
                      <div className="two-info-date-chat-item">
                        <SiPreact />
                        <p>Jun 16,2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="role-since-box-chat">
                    <h4>No Roles</h4>
                  </div>
                  <div className="note-since-box-chat">
                    <h4>NOTE</h4>
                    <div className="wrap-note-chat-item">
                      <div className="note-chat-item">Click to add a note</div>
                    </div>
                    <input type="text" placeholder="Message @Tony Starc" />
                  </div>
                </div>
              </div> */}
                </div>
                <div className="img-onlineList" onContextMenu={handleRightClick6}>
                  <div className="chat-item" onDoubleClick={handleToggleShowBox6}>
                    <div className="user-list-item">
                      <div className="profile-image">
                        <div className="profile-image-chat">
                          <img src="/img/avatar/01.jpg" alt="Profile" />
                          {/* <RiVerifiedBadgeFill
                        className="nav-small-verify verify-online-list"
                        color={"#36e9f7"}
                        size={16}
                      />
                      <MdAdminPanelSettings
                        className="nav-small-admin admin-online-list"
                        color={"#d7006a"}
                        size={16}
                      />
                      <div className="badge-container-nav onlineListBadge">
                        <img src="/img/download.png" alt="Padge" />
                        <p className="badge-number-nav">12</p>
                      </div>
                      <div className="offline-list">
                        <FaCircle />
                      </div> */}
                        </div>
                      </div>
                      <div className="user-info">
                        <div className="chat-name">
                          <div className="chat-name-text-offline">Tony Starc</div>
                        </div>
                        <div className="chat-preview-offline">
                          <div className="chat-is-read">
                            Allow Agency | Graphic Designer
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-chat" onClick={handleToggleShowBox6}>
                      <IoEllipsisVerticalSharp />
                    </div>
                  </div>
                  <div
                    ref={BoxRef5}
                    className={`box-online-chat-item-info ${
                      isShowBoxOne5
                        ? "box-online-chat-item-info-active"
                        : ".box-online-chat-item-info-disactive"
                    } `}
                  >
                    <div className="bg-online-chat-item-info">
                      {/* <div className="icon-chat-item">
                    <FaPen />
                  </div> */}
                    </div>
                    <div className="img-hashtag-chat-item">
                      <div className="img-chat-item-profile">
                        <div className="profile-image-chat profile-img-chat-online-list">
                          <img
                            src="/img/avatar/01.jpg"
                            alt="Profile"
                            className="Member-chat"
                          />
                          <RiVerifiedBadgeFill
                            className="nav-small-verify verify-online-chat-item"
                            color={"#36e9f7"}
                            size={16}
                          />
                          <MdAdminPanelSettings
                            className="nav-small-admin admin-online-list-chat"
                            color={"#d7006a"}
                            size={16}
                          />
                          <div className="badge-container-nav onlineListBadge-chat">
                            <img src="/img/download.png" alt="Padge" />
                            <p className="badge-number-nav">12</p>
                          </div>
                          <div className="online-list chat-list-online">
                            <FaCircle />
                          </div>
                        </div>
                        <p className="view-profile-chat-profile">View Profile</p>
                      </div>
                      <div className="icon-hashtag-chat-item">
                        <div className="circle-wrap-hash">
                          <FaHashtag />
                        </div>
                      </div>
                    </div>
                    <div className="content-box-chat-item">
                      <div className="info-box-chat-item">
                        <h3>Tony Starc</h3>
                        <p>Tony Starc</p>
                      </div>
                      <div className="about-me-box-chat">
                        <h4>MUTUALS</h4>
                        <div className="mutual-box-chat">
                          <img src="/img/avatar/06.jpg" alt="" />
                          <img src="/img/avatar/06.jpg" alt="" />
                          <img src="/img/avatar/06.jpg" alt="" />
                          <p className="txt-mutual-box-chat">14 Servers</p>
                        </div>
                      </div>
                      <div className="member-since-box-chat">
                        <h4>Member Since</h4>
                        <div className="wrap-info-date-chat-item">
                          <div className="one-info-date-chat-item">
                            <TbBrandDiscord />
                            <p>Jun 19,2020</p>
                          </div>
                          <div className="two-info-date-chat-item">
                            <SiPreact />
                            <p>Jun 16,2023</p>
                          </div>
                        </div>
                      </div>
                      <div className="role-since-box-chat">
                        <h4>No Roles</h4>
                      </div>
                      <div className="note-since-box-chat">
                        <h4>NOTE</h4>
                        <div className="wrap-note-chat-item">
                          <div className="note-chat-item">Click to add a note</div>
                        </div>
                        <input type="text" placeholder="Message @Tony Starc" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) :
          chatSettings == "media" ? (
              <div className="content-files-images-audio-online-chat px-[15px]">
                <Tabs defaultActiveKey="1" items={items} onChange={onTabChange} />
              </div>
            ) : (
              <div className="content-chat-options">
                <p className="title-online-list">Change Theme</p>
                <div className="flex items-center gap-3 px-3 py-[7px]"> 
                <div className="w-[50px] h-[50px] bg-[#f5f5f5] rounded-[50%] p-2 flex items-center justify-center">
                  <span className="bg-[#fd6729] rounded-[50%] block w-[100%] h-[100%] cursor-pointer"
                  onClick={ () => setHex("#fd6729") }
                  >
                  </span>
                </div>
                <div className="w-[50px] h-[50px] bg-[#f5f5f5] rounded-[50%] p-2 flex items-center justify-center">
                  <Wheel width={34} height={34} color={hex}
                    onChange={(color) => {
                      setHex(color.hex);
                    }} />
                </div>
                
                </div>
                <p className="title-online-list">Change Background</p>
                <div className="grid !grid-cols-4 !gap-[10px] px-3 py-[7px] mb-4">
                  <div>
                    <img className="rounded-lg" src="/img/avatar/10.jpg" alt="" />
                  </div>
                  <div>
                    <img className="rounded-lg" src="/img/avatar/11.jpg" alt="" />
                  </div>
                  <div>
                    <img className="rounded-lg" src="/img/avatar/12.jpg" alt="" />
                  </div>
                  <div>
                    <img className="rounded-lg" src="/img/avatar/13.jpg" alt="" />
                  </div>
                </div>
              </div>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default InformationChat;
