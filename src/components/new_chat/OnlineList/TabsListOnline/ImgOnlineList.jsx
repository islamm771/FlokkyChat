import React from 'react';
import { FaCircle, FaHashtag, FaMinusCircle, FaPen } from 'react-icons/fa';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { MdAdminPanelSettings, MdModeNight } from 'react-icons/md';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { setActiveTabOnline } from '../../../../app/feature/TabOnlineList';
import { useDispatch } from 'react-redux';

const ImgOnlineList = ({ status }) => {
    const dispatch = useDispatch()

    const handleLeftClick = (event) => {
        if (event.button === 0) {
            dispatch(setActiveTabOnline(5))
        }
    };

    // const handlePersonInfo = () => {
    //     dispatch( setActiveTabOnline(5) )
    // };

    return (
        <div className="img-onlineList">
            <div className="chat-item" onClick={handleLeftClick}>
                <div className="user-list-item">
                    <div className="profile-image">
                        <div className="profile-image-chat">
                            <img src="/img/avatar/01.jpg" alt="Profile" />
                            {status != "offline" && (
                                <>
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
                                </>
                            )}
                            {status == "online" && (
                                <div className="online-list">
                                    <FaCircle />
                                </div>
                            )}
                            {status == "ban" && (
                                <div className="ban-status">
                                    <FaMinusCircle />
                                </div>
                            )}
                            {status == "night" && (
                                <div className="night-list">
                                    <MdModeNight />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="user-info">
                        <div className="chat-name">
                            <div className={`chat-name-text${status == "offline" ? "-offline" : ""}`}>Tony Starc</div>
                        </div>
                        <div className={`chat-preview${status == "offline" ? "-offline" : ""}`} >
                            <div className="chat-is-read">
                                Allow Agency | Graphic Designer
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="dropdown-chat" onClick={handlePersonInfo}>
                    <IoEllipsisVerticalSharp />
                </div> */}
            </div>
        </div>
    );
};

export default ImgOnlineList;
