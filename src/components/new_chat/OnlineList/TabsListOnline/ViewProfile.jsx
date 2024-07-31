import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdAdminPanelSettings, MdLocationOn } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { toggleListOnlineListChat } from "../../../../app/feature/ListChatSlice";

import { Tabs } from 'antd';

const items = [
  {
    key: '1',
    label: 'Connections',
    children: (
      <div className="connection-desc">
        <div className="businesses-card-flokkers-list grid !grid-cols-4 !gap-[10px]">

          <div className="fldkker">
            <img
              className="w-full h-full"
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

          <div className="fldkker plus h-full">
            <p className="w-full h-full bg-[#ff57221a] text-[#fd6729] flex items-center justify-center text-2xl font-semibold">
              +19K
            </p>
          </div>

        </div>
      </div>
    ),
  },
  {
    key: '2',
    label: 'Communities',
    children: (
      <div className="connection-desc">
        <div className="businesses-card-flokkers-list grid !grid-cols-4 !gap-[10px]">

          <div className="fldkker">
            <img
              className="w-full h-full"
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

          <div className="fldkker plus h-full">
            <p className="w-full h-full bg-[#ff57221a] text-[#fd6729] flex items-center justify-center text-2xl font-semibold">
              +19K
            </p>
          </div>

        </div>
      </div>
    ),
  },
  {
    key: '3',
    label: 'Affiliation',
    children: (
      <div className="affili-desc">
        <p className="mb-3 text-lg font-medium">
          <span className="text-[20px] font-bold text-[#fd6729]">
            Institute: 
          </span>{" "}
          The American University of Cairo
        </p>
        <p className="mb-3 text-lg font-medium">
          <span className="text-[20px] font-bold text-[#fd6729]">
            Years: 
          </span>{" "}
          1992 - 1995
        </p>
        <p className="mb-3 text-lg font-medium">
          <span className="text-[20px] font-bold text-[#fd6729]">
            Major: 
          </span>{" "}
          Digital Media
        </p>
        <p className="text-lg font-medium">
          <span className="text-[20px] font-bold text-[#fd6729]">
            Faculty: 
          </span>{" "}
          Graphic Design
        </p>
      </div>
    ),
  },
  {
    key: '4',
    label: 'Business',
    children: (
      <div className="bussiness-sec-desc">
        <div className="businesses-images-section grid !grid-cols-4 !gap-[10px]">
          <img className="w-full h-full" src="/img/avatar/13.jpg" alt="Business" />
          <img className="w-full h-full" src="/img/avatar/13.jpg" alt="Business" />
          <img className="w-full h-full" src="/img/avatar/13.jpg" alt="Business" />
          <div className="more-businesses h-full">
            <p className="w-full h-full bg-[#ff57221a] text-[#fd6729] flex items-center justify-center text-2xl font-semibold" >
              +13
            </p>
          </div>
        </div>
        <div className="py-4">
          <p className="mb-3 text-lg font-medium">
            <span className="text-[20px] font-bold text-[#fd6729]">
              Industries:
            </span>{" "}
            Business Administration, Marketing, Advertising, +10 more...
          </p>
          <p className="text-lg font-medium">
            <span className="text-[20px] font-bold text-[#fd6729]">
              Skills:
            </span>{" "}
            Communication, Brand Strategy, Presentation, Powerpoint, Adobe, Strategy, +10 more...
          </p>
        </div>
      </div>
    ),
  },
  {
    key: '5',
    label: 'Personal',
    children: (
      <div className="perso-sec-desc">
        <p className="mb-3 text-lg font-medium">
          <span className="text-[20px] font-bold text-[#fd6729]">
            Residence: 
          </span>{" "}
          Cairo - Egypt
        </p>
        <p className="mb-3 text-lg font-medium">
          <span className="text-[20px] font-bold text-[#fd6729]">
            Nationality: 
          </span>{" "}
          Egyptian
        </p>
        <p className="mb-3 text-lg font-medium">
          <span className="text-[20px] font-bold text-[#fd6729]">
            Age: 
          </span>{" "}
          36
        </p>
        <p className="mb-3 text-lg font-medium">
          <span className="text-[20px] font-bold text-[#fd6729]">
            Status: 
          </span>{" "}
          Single
        </p>
        <p className="mb-3 text-lg font-medium">
          <span className="text-[20px] font-bold text-[#fd6729]">
            Birthday: 
          </span>{" "}
          January 7th 1975
        </p>
        <p className="mb-3 text-lg font-medium">
          <span className="text-[20px] font-bold text-[#fd6729]">
            Gender: 
          </span>{" "}
          Male
        </p>
    </div>
    ),
  },
];



const ViewProfile = ({ direction }) => {
  const [isFriend, setIsFriend] = useState(false);
  const dispatch = useDispatch();
  const handleToggleOnlineList=()=>{
    dispatch(toggleListOnlineListChat())
  }

  return (
    <div className={`ViewProfile ${direction === "right" ? "reverse" : ""}`}>
      <div className="Wrap-Tabs-chat ArchieveChat">
        <div className="people-chat-list viewProfileHeight">
          <div className="user-preview result !shadow-none">
            <div className="closeViewProfile" onClick={handleToggleOnlineList}>
              <IoMdClose />
            </div>
            <div className="user-preview-info">
              <div className="page-one-member page-member-desc">
                  <div className="mb-3">
                    <div className="user-status">
                      <div className="user-chat-profile user-status-avatar user-small-avatar-results-dir">
                        <MdAdminPanelSettings
                          color={"#d7006a"}
                          size={16}
                          className="admin-icon-inside-chat"
                        />
                        <img src="/img/avatar/03.jpg" alt="Profile" />
                        <RiVerifiedBadgeFill
                          color={"#36e9f7"}
                          size={16}
                          className="verify-icon-inside-chat"
                        />
                        <div className="badge-container-chats">
                          <img src="/img/download.png" alt="Padge" />
                          <p className="badge-number-chats">12</p>
                        </div>
                      </div>

                      <p className="user-status-title user-small-text-results-dir page-two-member-name">
                        <span className="bold">NekoBebop</span>
                      </p>

                      <p
                        className="user-status-text user-chat-job small user-small-text-results-dir page-two-member-title"
                        style={{ color: "#adafca" }}
                      >
                        Marketing Manager
                      </p>

                      <p
                        className="user-status-text user-chat-job small user-small-text-results-dir page-two-member-company"
                        style={{ color: "#adafca" }}
                      >
                        Brandmarks
                      </p>
                    </div>
                  </div>
                  <hr/>
                  <div className="user-preview-actions mb-viewProfile">
                    {!isFriend && (
                      <p className="button medium white loginButton !flex items-center justify-center gap-[10px]">
                        <FaPlus size={20} className="plus-sign" /> Connection
                      </p>
                    )}
                    {isFriend && (
                      <p className="button medium white loginButton view-btn">
                        <span className="view-btn-connected">Connected</span>
                        <div
                          style={{
                            marginTop: "6px",
                          }}
                        ></div>
                        <span>View Profile</span>
                      </p>
                    )}

                    <p className="button secondary second-btn">Send Message</p>
                  </div>
                  <div className="page-two-member">
                    <div className="user-preview-stats-slides page-two-desc mb-5"
                      id="user-preview-stats-slides-01">
                      <div className="user-preview-stats-slide tns-item mb-4">
                        <p className="user-preview-text user-result-about">
                          Hello! I'm James Hart, but I go by the name of Destroy Dex
                          on my stream channel. Come to check out the latest gaming
                          news!
                        </p>
                      </div>

                      <div className="user-preview-stats-slide tns-item page-two-desc-numbers">
                        <div className="user-stats">
                          <div className="user-stat">
                            <p className="user-stat-title user-stats-title-result">
                              874
                            </p>

                            <p className="user-stat-text user-stats-number-result">
                              posts
                            </p>
                          </div>

                          <div className="user-stat">
                            <p className="user-stat-title user-stats-title-result">
                              60
                            </p>

                            <p className="user-stat-text user-stats-number-result">
                              Connections
                            </p>
                          </div>

                          <div className="user-stat">
                            <p className="user-stat-title user-stats-title-result">
                              3.9k
                            </p>

                            <p className="user-stat-text user-stats-number-result">
                              Flocks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="page-two-connections">
                      <div className="page-two-connection">
                        <p className="connection-title">Connections in Common</p>
                        <div className="connection-desc">
                          <div className="businesses-card-flokkers-list grid !grid-cols-3 ">

                            <div className="fldkker">
                              <img
                                className="w-full h-full"
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

                            <div className="fldkker plus h-full">
                              <p className="w-full h-full bg-[#ff57221a] text-[#fd6729] flex items-center justify-center text-2xl font-semibold">
                                +19K
                              </p>
                            </div>

                          </div>
                        </div>
                      </div>
                      <div className="page-two-connection">
                        <p className="connection-title">Communities in Common</p>
                        <div className="connection-desc">
                          <div className="businesses-card-flokkers-list">
                            <div className="fldkker">
                              <img
                                src="/img/avatar/01.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>

                            <div className="fldkker">
                              <img
                                src="/img/avatar/02.jpg"
                                alt="fldkker-avatar"
                                loading="lazy"
                              />
                            </div>

                            <div className="fldkker plus">
                              <p>+19K</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  {/* <div className="affili-section">
                    <p className="desc-section-title">
                      <MdLocationOn size={18} color="rgb(67 120 220)" />{" "}
                      Affiliation
                    </p>
                    <div className="affili-desc">
                      <p>
                        <span>Institute: </span>The American University of Cairo
                      </p>
                      <p>
                        <span>Years: </span>1992 - 1995
                      </p>
                      <p>
                        <span>Major: </span>Digital Media
                      </p>
                      <p>
                        <span>Faculty: </span>Graphic Design
                      </p>
                    </div>
                  </div>
                  <div className="busine-section">
                    <p className="desc-section-title">
                      <MdLocationOn size={18} color="rgb(67 120 220)" /> Business
                    </p>
                    <div className="bussiness-sec-desc">
                      <div className="businesses-images-section">
                        <img src="/img/avatar/13.jpg" alt="Business" />
                        <img src="/img/avatar/13.jpg" alt="Business" />
                        <img src="/img/avatar/13.jpg" alt="Business" />
                        <div className="more-businesses">
                          <span>+13</span>
                          <p>MORE</p>
                        </div>
                      </div>
                      <p>
                        <span>Industries:</span> Business Administration,
                        Marketing, Advertising, +10 more...
                      </p>
                      <p>
                        <span>Skills:</span> Communication, Brand Strategy,
                        Presentation, Powerpoint, Adobe, Strategy, +10 more...
                      </p>
                    </div>
                  </div>
                  <div className="personal-section-result">
                    <p className="desc-section-title">
                      <MdLocationOn size={18} color="rgb(67 120 220)" /> Personal
                    </p>
                    <div className="perso-sec-desc">
                      <p>
                        <span>Residence: </span>Cairo - Egypt
                      </p>
                      <p>
                        <span>Nationality: </span>Egyptian
                      </p>
                      <p>
                        <span>Age: </span>36
                      </p>
                      <p>
                        <span>Status: </span>Single
                      </p>
                      <p>
                        <span>Birthday: </span>January 7th 1975
                      </p>
                      <p>
                        <span>Gender: </span>Male
                      </p>
                    </div>
                  </div> */}
                  <Tabs defaultActiveKey="1" items={items} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
