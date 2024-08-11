import { FaBell, FaCircle, FaMinusCircle, FaPen, FaPoll } from "react-icons/fa";
import "../../OnlineList/OnlineList.css";
import { MdAdminPanelSettings, MdModeNight, MdPermMedia } from "react-icons/md";
import { IoEllipsisVerticalSharp, IoOptionsOutline, IoStatsChart } from "react-icons/io5";
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
import ImgOnlineList from "./ImgOnlineList";
import { FaMusic, FaPlay } from "react-icons/fa6";
import { BsFiletypeCsv, BsFiletypeDoc, BsFiletypePdf, BsFiletypePpt, BsFiletypeTxt, BsFiletypeXls } from "react-icons/bs";
import { Link } from "react-router-dom";

const items = [
  {
    key: '1',
    label: 'Images',
    children: (
      <div className="content-tabs-online-chat-info">
        <div className="grid !grid-cols-4">
          <img className="rounded-xl" src="/img/avatar/10.jpg" alt="" />
          <img className="rounded-xl" src="/img/avatar/11.jpg" alt="" />
          <img className="rounded-xl" src="/img/avatar/12.jpg" alt="" />
          <img className="rounded-xl" src="/img/avatar/13.jpg" alt="" />
          <img className="rounded-xl" src="/img/avatar/14.jpg" alt="" />
          <img className="rounded-xl" src="/img/avatar/15.jpg" alt="" />
          <img className="rounded-xl" src="/img/avatar/16.jpg" alt="" />
          <img className="rounded-xl" src="/img/avatar/17.jpg" alt="" />
          <img className="rounded-xl" src="/img/avatar/18.jpg" alt="" />
          <img className="rounded-xl" src="/img/avatar/19.jpg" alt="" />
          <img className="rounded-xl" src="/img/avatar/20.jpg" alt="" />
          <img className="rounded-xl" src="/img/avatar/21.jpg" alt="" />
          <img className="rounded-xl" src="/img/avatar/22.jpg" alt="" />
          <div className="EndMoreImageChat">
            <img className="rounded-xl" src="/img/avatar/30.jpg" alt="" />
            <div className="numberMoreImageChat">+61</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: '2',
    label: 'Videos',
    children: (
      <div className="content-tabs-online-chat-info">
        <div className="grid !grid-cols-4">
          <div className="relative">
            <img className="rounded-[12px]" src="/img/avatar/10.jpg" alt="" />
            <div className="video-overlay bg-[#00000045] text-white absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[12px] cursor-pointer">
              <FaPlay size={25} />
            </div>
          </div>
          <div className="relative">
            <img className="rounded-[12px]" src="/img/avatar/11.jpg" alt="" />
            <div className="video-overlay bg-[#00000045] text-white absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[12px] cursor-pointer">
              <FaPlay size={25} />
            </div>
          </div>
          <div className="relative">
            <img className="rounded-[12px]" src="/img/avatar/12.jpg" alt="" />
            <div className="video-overlay bg-[#00000045] text-white absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[12px] cursor-pointer">
              <FaPlay size={25} />
            </div>
          </div>
          <div className="relative">
            <img className="rounded-[12px]" src="/img/avatar/12.jpg" alt="" />
            <div className="video-overlay bg-[#00000045] text-white absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[12px] cursor-pointer">
              <FaPlay size={25} />
            </div>
          </div>
          <div className="relative">
            <img className="rounded-[12px]" src="/img/avatar/13.jpg" alt="" />
            <div className="video-overlay bg-[#00000045] text-white absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[12px] cursor-pointer">
              <FaPlay size={25} />
            </div>
          </div>
          <div className="relative">
            <img className="rounded-[12px]" src="/img/avatar/14.jpg" alt="" />
            <div className="video-overlay bg-[#00000045] text-white absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[12px] cursor-pointer">
              <FaPlay size={25} />
            </div>
          </div>
          <div className="relative">
            <img className="rounded-[12px]" src="/img/avatar/15.jpg" alt="" />
            <div className="video-overlay bg-[#00000045] text-white absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[12px] cursor-pointer">
              <FaPlay size={25} />
            </div>
          </div>
          <div className="relative">
            <img className="rounded-[12px]" src="/img/avatar/16.jpg" alt="" />
            <div className="video-overlay bg-[#00000045] text-white absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[12px] cursor-pointer">
              <FaPlay size={25} />
            </div>
          </div>
          <div className="relative">
            <img className="rounded-[12px]" src="/img/avatar/17.jpg" alt="" />
            <div className="video-overlay bg-[#00000045] text-white absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[12px] cursor-pointer">
              <FaPlay size={25} />
            </div>
          </div>
          <div className="relative">
            <img className="rounded-[12px]" src="/img/avatar/18.jpg" alt="" />
            <div className="video-overlay bg-[#00000045] text-white absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[12px] cursor-pointer">
              <FaPlay size={25} />
            </div>
          </div>
          <div className="relative">
            <img className="rounded-[12px]" src="/img/avatar/19.jpg" alt="" />
            <div className="video-overlay bg-[#00000045] text-white absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[12px] cursor-pointer">
              <FaPlay size={25} />
            </div>
          </div>
          <div className="relative">
            <img className="rounded-[12px]" src="/img/avatar/20.jpg" alt="" />
            <div className="video-overlay bg-[#00000045] text-white absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[12px] cursor-pointer">
              <FaPlay size={25} />
            </div>
          </div>
          <div className="relative">
            <img className="rounded-[12px]" src="/img/avatar/21.jpg" alt="" />
            <div className="video-overlay bg-[#00000045] text-white absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[12px] cursor-pointer">
              <FaPlay size={25} />
            </div>
          </div>
          <div className="relative">
            <img className="rounded-[12px]" src="/img/avatar/22.jpg" alt="" />
            <div className="video-overlay bg-[#00000045] text-white absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[12px] cursor-pointer">
              <FaPlay size={25} />
            </div>
          </div>
          <div className="EndMoreImageChat">
            <img className="rounded-[12px]" src="/img/avatar/30.jpg" alt="" />
            <div className="numberMoreImageChat">+61</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: '3',
    label: 'Audios',
    children: (
      <div className="content-tabs-online-chat-info">
        <div className="audio-content-container flex flex-col gap-4">
          <div className="flex items-center gap-[8px]">
            <div className="bg-[#fd67291a] text-[#fd6729] p-[12px] rounded-lg">
              <FaMusic size={20} />
            </div>
            <div>
              <p className="font-semibold mb-[5px]">Rolling to the deep</p>
              <p>2.5 mb</p>
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="bg-[#fd67291a] text-[#fd6729] p-[12px] rounded-lg">
              <FaMusic size={20} />
            </div>
            <div>
              <p className="font-semibold mb-[5px]">Save your tears</p>
              <p>2.5 mb</p>
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="bg-[#fd67291a] text-[#fd6729] p-[12px] rounded-lg">
              <FaMusic size={20} />
            </div>
            <div>
              <p className="font-semibold mb-[5px]">Thunder</p>
              <p>2.5 mb</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: '4',
    label: 'Files',
    children: (
      <div className="content-tabs-online-chat-info">
        <div className="audio-content-container flex flex-col gap-4">
          <div className="flex items-center gap-[8px]">
            <div className="bg-[#fd67291a] text-[#fd6729] p-[12px] rounded-lg">
              <BsFiletypeTxt size={20} />
            </div>
            <div>
              <p className="font-semibold mb-[5px]">Readme.txt</p>
              <p>2.5 mb</p>
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="bg-[#fd67291a] text-[#fd6729] p-[12px] rounded-lg">
              <BsFiletypePdf size={20} />
            </div>
            <div>
              <p className="font-semibold mb-[5px]">Readme.pdf</p>
              <p>2.5 mb</p>
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="bg-[#fd67291a] text-[#fd6729] p-[12px] rounded-lg">
              <BsFiletypeCsv size={20} />
            </div>
            <div>
              <p className="font-semibold mb-[5px]">Readme.csv</p>
              <p>2.5 mb</p>
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="bg-[#fd67291a] text-[#fd6729] p-[12px] rounded-lg">
              <BsFiletypeDoc size={20} />
            </div>
            <div>
              <p className="font-semibold mb-[5px]">Readme.doc</p>
              <p>2.5 mb</p>
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="bg-[#fd67291a] text-[#fd6729] p-[12px] rounded-lg">
              <BsFiletypePpt size={20} />
            </div>
            <div>
              <p className="font-semibold mb-[5px]">Readme.ppt</p>
              <p>2.5 mb</p>
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="bg-[#fd67291a] text-[#fd6729] p-[12px] rounded-lg">
              <BsFiletypeXls size={20} />
            </div>
            <div>
              <p className="font-semibold mb-[5px]">Readme.xls</p>
              <p>2.5 mb</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: '5',
    label: 'Contacts',
    children: (
      <div className="content-tabs-online-chat-info">
        <div className="contacts-content-container flex flex-col gap-3">
          <div className="user-status">
            <div className="user-status-avatar">
              <Link to={"#"}> <UserProfileImage /> </Link>
            </div>
            <p class="user-status-title"><Link class="bold" to={"#"}>Marina Valentine</Link></p>
            <p class="user-status-text small">Marketing - Brandmarks</p>
            <p class="user-status-text small">Cambridge</p>
          </div>
          <div className="user-status">
            <div className="user-status-avatar">
              <Link to={"#"}> <UserProfileImage /> </Link>
            </div>
            <p class="user-status-title"><Link class="bold" to={"#"}>Marina Valentine</Link></p>
            <p class="user-status-text small">Marketing - Brandmarks</p>
            <p class="user-status-text small">Cambridge</p>
          </div>
          <div className="user-status">
            <div className="user-status-avatar">
              <Link to={"#"}> <UserProfileImage /> </Link>
            </div>
            <p class="user-status-title"><Link class="bold" to={"#"}>Marina Valentine</Link></p>
            <p class="user-status-text small">Marketing - Brandmarks</p>
            <p class="user-status-text small">Cambridge</p>
          </div>
          <div className="user-status">
            <div className="user-status-avatar">
              <Link to={"#"}> <UserProfileImage /> </Link>
            </div>
            <p class="user-status-title"><Link class="bold" to={"#"}>Marina Valentine</Link></p>
            <p class="user-status-text small">Marketing - Brandmarks</p>
            <p class="user-status-text small">Cambridge</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: '6',
    label: 'Polls',
    children: (
      <div className="content-tabs-online-chat-info">
        <div className="polls-content-container flex flex-col gap-4">
          <div className="flex items-center gap-[12px]">
            <div className="bg-[#fd67291a] text-[#fd6729] p-[12px] rounded-lg">
              <IoStatsChart size={20} />
            </div>
            <div>
              <p className="font-bold mb-[5px]">What do you wanna see in my upcoming videos?</p>
              <div className="meta-line">
                <div className="meta-line-list user-avatar-list">
                  <div className="user-avatar micro no-stats">
                    <div className="user-avatar-content ">
                      <img
                        src="/img/avatar/13.jpg"
                        alt="user-img"
                        className="people-react-img rounded-full"
                      />
                    </div>
                  </div>

                  <div className="user-avatar micro no-stats">
                    <div className="user-avatar-content">
                      <img
                        src="/img/avatar/12.jpg"
                        alt="user-img"
                        className="people-react-img rounded-full"
                      />
                    </div>
                  </div>

                  <div className="user-avatar micro no-stats">
                    <div className="user-avatar-content">
                      <img
                        src="/img/avatar/11.jpg"
                        alt="user-img"
                        className="people-react-img rounded-full"
                      />
                    </div>
                  </div>

                  <div className="user-avatar micro no-stats">
                    <div className="user-avatar-content">
                      <img
                        src="/img/avatar/03.jpg"
                        alt="user-img"
                        className="people-react-img rounded-full"
                      />
                    </div>
                  </div>

                  <div className="user-avatar micro no-stats">
                    <div className="user-avatar-content">
                      <img
                        src="/img/avatar/04.jpg"
                        alt="user-img"
                        className="people-react-img rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <p className="meta-line-text">
                  17 Participants
                </p>

                {/* { !isMobile && (
                    <div className={`simple-dropdown poll-drop-personList`}>
                      <h3 className="!text-[#fd6729]">
                        <FaStar className="inline mb-[3px]" size={14} />{" "}
                        17 Votes : Retro Games
                      </h3>
                      <p className="poll-person-item">
                        <div class="user-status !pl-[60px] !pr-0">
                          <Link
                            className="user-status-avatar"
                            to="/user-profile-page"
                          >
                            <UserProfileImage />
                          </Link>

                          <p className="user-status-title !text-[16px]">
                            <span className="bold">Neko Bebop </span>
                          </p>

                          <p
                            className="user-status-text small"
                            style={{ color: "#adafca" }}
                          >
                            Marketing Manager - Brandmarks
                          </p>
                        </div>
                        <div className="poll-person-date">
                          <p className="day">2d</p>
                          <p className="time">19:55</p>
                        </div>
                      </p>
                      <p className="poll-person-item">
                        <div class="user-status !pl-[60px] !pr-0">
                          <Link
                            className="user-status-avatar"
                            to="/user-profile-page"
                          >
                            <UserProfileImage />
                          </Link>

                          <p className="user-status-title !text-[16px]">
                            <span className="bold">Neko Bebop </span>
                          </p>

                          <p
                            className="user-status-text small"
                            style={{ color: "#adafca" }}
                          >
                            Marketing Manager - Brandmarks
                          </p>
                        </div>
                        <div className="poll-person-date">
                          <p className="day">2d</p>
                          <p className="time">19:55</p>
                        </div>
                      </p>
                      <p className="poll-person-item">
                        <div class="user-status !pl-[60px] !pr-0">
                          <Link
                            className="user-status-avatar"
                            to="/user-profile-page"
                          >
                            <UserProfileImage />
                          </Link>

                          <p className="user-status-title !text-[16px]">
                            <span className="bold">Neko Bebop </span>
                          </p>

                          <p
                            className="user-status-text small"
                            style={{ color: "#adafca" }}
                          >
                            Marketing Manager - Brandmarks
                          </p>
                        </div>
                        <div className="poll-person-date">
                          <p className="day">2d</p>
                          <p className="time">19:55</p>
                        </div>
                      </p>
                      <p className="poll-person-item">
                        <div class="user-status !pl-[60px] !pr-0">
                          <Link
                            className="user-status-avatar"
                            to="/user-profile-page"
                          >
                            <UserProfileImage />
                          </Link>

                          <p className="user-status-title !text-[16px]">
                            <span className="bold">Neko Bebop </span>
                          </p>

                          <p
                            className="user-status-text small"
                            style={{ color: "#adafca" }}
                          >
                            Marketing Manager - Brandmarks
                          </p>
                        </div>
                        <div className="poll-person-date">
                          <p className="day">2d</p>
                          <p className="time">19:55</p>
                        </div>
                      </p>
                    </div>
                  )} */}

              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: '7',
    label: 'Products',
    children: (
      <div className="content-tabs-online-chat-info">
        <div className="products-content-container flex flex-col gap-4">
          <div className="flex items-center gap-[8px]">
            <div>
              <img className="w-[45px] h-[45px] rounded-lg" src="/img/cover/04.jpg" alt="" />
            </div>
            <div>
              <p className="font-semibold mb-[5px]">BMW x6</p>
              <p>7,550,00 EGP</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: '8',
    label: 'Services',
    children: (
      <div className="content-tabs-online-chat-info">
        <div className="services-content-container flex flex-col gap-4">
          <div className="flex items-center gap-[8px]">
            <div>
              <img className="w-[45px] h-[45px] rounded-lg" src="/img/cover/04.jpg" alt="" />
            </div>
            <div>
              <p className="font-semibold mb-[5px]">Service 1</p>
              {/* <p>7,550,00 EGP</p> */}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: '9',
    label: 'Jobs',
    children: (
      <div className="content-tabs-online-chat-info">
        <div className="jobs-content-container flex flex-col gap-4">
          <div className="flex items-center gap-[8px]">
            <div>
              <img className="w-[45px] h-[45px] rounded-lg" src="/img/cover/04.jpg" alt="" />
            </div>
            <div>
              <p className="font-semibold mb-[5px]">Frontend Developer</p>
              <p>DigiTech Solutions</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];


const InformationChat = ({ direction, scrollDivRef }) => {
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
  const [chatSettings, setChatSettings] = useState("about")


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
        <div className="overflow-online-list" ref={scrollDivRef}>
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
                <p className="absolute top-4 right-6 cursor-pointer" onClick={() => dispatch(setIsMuteModel(true))}>
                  <FaBell size={20} />
                  {/* <p className="font-semibold">Mute</p> */}
                </p>
              </div>
            </div>
          </div>
          <div className="grid !grid-cols-3 p-3 mb-4 chat-settings-wrapper">
            <div className={`${chatSettings == "about" ? 'active' : ''}`}
              onClick={() => setChatSettings("about")}
            >
              <IoIosInformationCircle />
              <p>About</p>
            </div>
            <div className={`${chatSettings == "media" ? 'active' : ''}`}
              onClick={() => setChatSettings("media")} >
              <MdPermMedia />
              <p>Media</p>
            </div>
            <div className={`${chatSettings == "options" ? 'active' : ''}`}
              onClick={() => setChatSettings("options")} >
              <IoOptionsOutline />
              <p>Options</p>
            </div>
          </div>

          {chatSettings == "about" ? (
            <>
              <div className="wrap-content-onlineList">
                <p className="title-online-list">Admins - 9</p>
                <ImgOnlineList status={"online"} />
                <ImgOnlineList status={"online"} />
              </div>
              <div className="wrap-content-onlineList">
                <p className="title-online-list">Moderators - 2</p>
                <ImgOnlineList status={"online"} />
                <ImgOnlineList status={"ban"} />
              </div>
              <div className="wrap-content-onlineList">
                <p className="title-online-list">Members - 245,670</p>
                <ImgOnlineList status={"online"} />
                <ImgOnlineList status={"night"} />
              </div>
              <div className="wrap-content-onlineList">
                <p className="title-online-list">Offline - 245,670</p>
                <ImgOnlineList status={"offline"} />
              </div>
            </>
          ) :
            chatSettings == "media" ? (
              <div className="content-files-images-audio-online-chat px-[15px]">
                <Tabs defaultActiveKey="1" items={items} />
              </div>
            ) : (
              <div className="content-chat-options">
                <p className="title-online-list">Change Theme</p>
                <div className="flex items-center gap-3 px-3 py-[7px]">
                  <div className="w-[50px] h-[50px] bg-[#f5f5f5] rounded-[50%] p-2 flex items-center justify-center">
                    <span className="bg-[#fd6729] rounded-[50%] block w-[100%] h-[100%] cursor-pointer"
                      onClick={() => setHex("#fd6729")}
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
