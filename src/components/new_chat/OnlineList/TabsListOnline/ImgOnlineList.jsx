import React, { useEffect, useRef, useState } from 'react';
import { FaCircle, FaHashtag, FaPen } from 'react-icons/fa';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { MdAdminPanelSettings } from 'react-icons/md';
import { RiCloseFill, RiVerifiedBadgeFill } from 'react-icons/ri';
import UserProfileImage from '../../../user-profile-image/UserProfileImage';
import { TbBrandDiscord, TbMessageCircleShare } from 'react-icons/tb';
import { FiMapPin } from 'react-icons/fi';

const ImgOnlineList = () => {
    const BoxRef1 = useRef(null);
    const [isShowBoxOne, setIsShowBoxOne] = useState(false);
    const [isNote, setIsNote] = useState(false);

    const handleToggleNoteBox = () => {
        setIsNote(!isNote);
    };

    const handleToggleShowBox = () => {
        setIsShowBoxOne(!isShowBoxOne);
    };

    const handleToggleCloseBox = () => {
        setIsShowBoxOne(false);
    };

    // const handleClick = () => {
    //     if (screen.width <= 768) {
    //         handleToggleShowBox();
    //     }
    // };

    const handleLeftClick = (event) => {
        if (event.button === 0) {
            setIsShowBoxOne((prev) => !prev);
        }
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (BoxRef1.current && !BoxRef1.current.contains(event.target)) {
                setIsShowBoxOne(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [BoxRef1]);

    return (
        <div className="img-onlineList">
            <div className="chat-item" onClick={handleLeftClick}>
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
                className={`box-online-chat-item-info ${ isShowBoxOne
                        ? "box-online-chat-item-info-active"
                        : "box-online-chat-item-info-disactive"
                    }`}
            >
                <div className="closeBox" onClick={handleToggleCloseBox}>
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
                                        placeholder="Write a note"
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
    );
};

export default ImgOnlineList;
