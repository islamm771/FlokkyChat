import { useEffect, useRef, useState } from "react";
import { FaArrowsAltH, FaInfo, FaLink, FaRegStar, FaSearch } from "react-icons/fa"
import { FaBell } from "react-icons/fa6";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoInformationSharp } from "react-icons/io5"
import { MdAdminPanelSettings, MdOutlineArchive } from "react-icons/md"
import { selectGlobal, setChatSearch, setIsMuteModel } from "../../../../app/feature/ListChatSlice";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartVisible, setIsFriendsVisible, setIsMessagesVisible, setIsNotificationsVisible, setIsSettingsVisible, setSearchInput } from "../../../../app/feature/outletSlice";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import UserProfileImage from "../../../user-profile-image/UserProfileImage";

const Header = ({
  handleToggleOnlineList,
  handleTextCoppied,
  handleTabClick,
}) => {

  const dispatch = useDispatch()
  const [isSetting, setIsSetting] = useState(false);
  const [isChatOptions, setIsChatOptions] = useState(false);
  const { chatSearch} = useSelector(selectGlobal);
  const activeTab = useSelector((state) => state.tabs.activeTab);
  const inputRef = useRef()

  const [focused, setFocused] = useState(false)

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setFocused(false);
    }
  };

  const dropDown_ChatOptions = useRef(null);

  const isMessagesVisible = useSelector(
    (state) => state.outlet.isMessagesVisible
  );
  const isNotificationsVisible = useSelector(
    (state) => state.outlet.isNotificationsVisible
  );
  const isSettingsVisible = useSelector(
    (state) => state.outlet.isSettingsVisible
  );


  const notificationsDropRef = useRef(null)
  const messagesDropRef = useRef(null)
  const settingsDropRef = useRef(null)


  const handleClickOutside = (event) => {
    if (notificationsDropRef.current && !notificationsDropRef.current.contains(event.target)) {
      dispatch(setIsNotificationsVisible({ value: false }));
    }
    if (messagesDropRef.current && !messagesDropRef.current.contains(event.target)) {
      dispatch(setIsMessagesVisible({ value: false }));
    }
    if (settingsDropRef.current && !settingsDropRef.current.contains(event.target)) {
      dispatch(setIsSettingsVisible({ value: false }));
    }
    if (dropDown_ChatOptions.current && !dropDown_ChatOptions.current.contains(event.target)) {
      setIsChatOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header>
      <div className="header-OnlineList-page">

        <div className="icons-footer-main-chat">

          <div className="hidden md:block lg:hidden" onClick={handleToggleOnlineList}>
            <FaArrowsAltH />
          </div>

          <div className="header-actions search-bar"
            style={{ position: "relative", transition: "0.5s", width: focused ? "80%" : "45px" }} >
            <div className={`interactive-input dark !block !h-[45px] ${chatSearch !== "" ? "active" : ""
              }`}
            >
              <input
                ref={inputRef}
                type="text"
                id="search-main"
                name="search_main"
                style={{ paddingRight: focused ? "50px" : "27px" }}
                placeholder="Search here in chats and media"
                value={chatSearch}
                onChange={(e) => {
                  dispatch(setChatSearch(e.target.value));
                }}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={(e) => {
                  if (e.keyCode === 27) {
                    dispatch(setChatSearch(""));
                  }
                }}
              />
              <div className="interactive-input-icon-wrap"
                style={{ right: focused ? "0px" : "-7px" }}
              >
                <svg className="interactive-input-icon icon-magnifying-glass !m-0">
                  <use xlinkHref="#svg-magnifying-glass"></use>
                </svg>
              </div>

              <div
                className="interactive-input-action"
                onClick={() => {
                  dispatch(setChatSearch(""));
                  inputRef?.current?.focus();
                }}
              >
                <svg className="interactive-input-action-icon icon-cross-thin !m-0">
                  <use xlinkHref="#svg-cross-thin"></use>
                </svg>
              </div>
            </div>

            <div
              className="dropdown-box padding-bottom-small header-search-dropdown"
              style={{
                position: "absolute",
                zIndex: 9999,
                top: "57px",
                left: "translate(50%, 50%)",
                maxWidth: "100%",
                opacity: `${chatSearch === "" ? "0" : "1"}`,
                visibility: `${chatSearch === "" ? "hidden" : "visible"}`,
                transform: `translate(0px, ${chatSearch !== "" ? "0px" : "-40px"
                  })`,
                transition:
                  "transform 0.4s ease-in-out 0s, opacity 0.4s ease-in-out 0s, visibility 0.4s ease-in-out 0s",
              }}
            >
              {activeTab == 1 && (
                <>
                  <div className="dropdown-box-category">
                    <p className="dropdown-box-category-title">Connections</p>
                  </div>

                  <div className="dropdown-box-list small no-scroll">
                    <a className="dropdown-box-list-item" href="profile-timeline.html">
                      <div className="user-status">
                        <div className="user-status-avatar">
                          <UserProfileImage />
                        </div>
                        <p className="user-status-title">
                          <span className="bold">Neko Bebop</span>
                        </p>
                        <p className="user-status-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                      </div>
                    </a>

                    <a className="dropdown-box-list-item" href="profile-timeline.html">
                      <div className="user-status">
                        <div className="user-status-avatar">
                          <UserProfileImage />
                        </div>
                        <p className="user-status-title">
                          <span className="bold">Tim Rogers</span>
                        </p>
                        <p className="user-status-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                      </div>
                    </a>
                  </div>
                  <div className="dropdown-box-category">
                    <p className="dropdown-box-category-title">Messages</p>
                  </div>

                  <div className="dropdown-box-list small no-scroll">
                    <a className="dropdown-box-list-item" href="profile-timeline.html">
                      <div className="user-status">
                        <div className="user-status-avatar">
                          <UserProfileImage />
                        </div>
                        <p className="user-status-title">
                          <span className="bold">Neko Bebop</span>
                        </p>
                        <p className="user-status-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                      </div>
                    </a>

                    <a className="dropdown-box-list-item" href="profile-timeline.html">
                      <div className="user-status">
                        <div className="user-status-avatar">
                          <UserProfileImage />
                        </div>
                        <p className="user-status-title">
                          <span className="bold">Tim Rogers</span>
                        </p>
                        <p className="user-status-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                      </div>
                    </a>
                  </div>
                </>
              )}
              {activeTab == 2 && (
                <>
                  <div className="dropdown-box-category">
                    <p className="dropdown-box-category-title">Messages</p>
                  </div>

                  <div className="dropdown-box-list small no-scroll">
                    <a className="dropdown-box-list-item" href="profile-timeline.html">
                      <div className="user-status">
                        <div className="user-status-avatar">
                          <UserProfileImage />
                        </div>
                        <p className="user-status-title">
                          <span className="bold">Neko Bebop</span>
                        </p>
                        <p className="user-status-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                      </div>
                    </a>

                    <a className="dropdown-box-list-item" href="profile-timeline.html">
                      <div className="user-status">
                        <div className="user-status-avatar">
                          <UserProfileImage />
                        </div>
                        <p className="user-status-title">
                          <span className="bold">Tim Rogers</span>
                        </p>
                        <p className="user-status-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                      </div>
                    </a>
                  </div>
                </>
              )}
              { activeTab == 3 && (
                  <>
                    <div className="dropdown-box-category">
                      <p className="dropdown-box-category-title">Messages</p>
                    </div>

                    <div className="dropdown-box-list small no-scroll">
                      <a className="dropdown-box-list-item" href="profile-timeline.html">
                        <div className="user-status">
                          <div className="user-status-avatar">
                            <UserProfileImage />
                          </div>
                          <p className="user-status-title">
                            <span className="bold">Neko Bebop</span>
                          </p>
                          <p className="user-status-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                      </a>

                      <a className="dropdown-box-list-item" href="profile-timeline.html">
                        <div className="user-status">
                          <div className="user-status-avatar">
                            <UserProfileImage />
                          </div>
                          <p className="user-status-title">
                            <span className="bold">Tim Rogers</span>
                          </p>
                          <p className="user-status-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                      </a>
                    </div>
                  </>
              )}
              { activeTab == 4 && (
                  <>
                    <div className="dropdown-box-category">
                      <p className="dropdown-box-category-title">Messages</p>
                    </div>

                    <div className="dropdown-box-list small no-scroll">
                      <a className="dropdown-box-list-item" href="profile-timeline.html">
                        <div className="user-status">
                          <div className="user-status-avatar">
                            <UserProfileImage />
                          </div>
                          <p className="user-status-title">
                            <span className="bold">Neko Bebop</span>
                          </p>
                          <p className="user-status-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                      </a>

                      <a className="dropdown-box-list-item" href="profile-timeline.html">
                        <div className="user-status">
                          <div className="user-status-avatar">
                            <UserProfileImage />
                          </div>
                          <p className="user-status-title">
                            <span className="bold">Tim Rogers</span>
                          </p>
                          <p className="user-status-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                      </a>
                    </div>
                  </>
              )}
              { activeTab == 5 && (
                  <>
                    <div className="dropdown-box-category">
                      <p className="dropdown-box-category-title">Messages</p>
                    </div>

                    <div className="dropdown-box-list small no-scroll">
                      <a className="dropdown-box-list-item" href="profile-timeline.html">
                        <div className="user-status">
                          <div className="user-status-avatar">
                            <UserProfileImage />
                          </div>
                          <p className="user-status-title">
                            <span className="bold">Neko Bebop</span>
                          </p>
                          <p className="user-status-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                      </a>

                      <a className="dropdown-box-list-item" href="profile-timeline.html">
                        <div className="user-status">
                          <div className="user-status-avatar">
                            <UserProfileImage />
                          </div>
                          <p className="user-status-title">
                            <span className="bold">Tim Rogers</span>
                          </p>
                          <p className="user-status-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                      </a>
                    </div>

                  </>
              )}
              { activeTab == 6 && (
                  <>
                    <div className="dropdown-box-category">
                      <p className="dropdown-box-category-title">Messages</p>
                    </div>

                    <div className="dropdown-box-list small no-scroll">
                      <a className="dropdown-box-list-item" href="profile-timeline.html">
                        <div className="user-status">
                          <div className="user-status-avatar">
                            <UserProfileImage />
                          </div>
                          <p className="user-status-title">
                            <span className="bold">Neko Bebop</span>
                          </p>
                          <p className="user-status-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                      </a>

                      <a className="dropdown-box-list-item" href="profile-timeline.html">
                        <div className="user-status">
                          <div className="user-status-avatar">
                            <UserProfileImage />
                          </div>
                          <p className="user-status-title">
                            <span className="bold">Tim Rogers</span>
                          </p>
                          <p className="user-status-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                      </a>
                    </div>
                  </>
              )}
            </div>
          </div>

          <div className="action-list-item-wrap ml-auto" ref={messagesDropRef}>
            <div
              className={`action-list-item header-dropdown-trigger ${isMessagesVisible ? "active" : ""
                }`}

              onClick={() => {
                dispatch(setIsMessagesVisible({ value: !isMessagesVisible }));
              }}
            >
              <Link>
                <svg className="action-list-item-icon icon-messages">
                  <use xlinkHref="#svg-messages"></use>
                </svg>
              </Link>
            </div>

            <div
              className="dropdown-box header-dropdown"
              style={{
                position: "absolute",
                zIndex: "9999",
                top: "64px",
                right: "6px",
                opacity: `${isMessagesVisible ? "1" : "0"}`,
                visibility: `${isMessagesVisible ? "visible" : "hidden"}`,
                transform: `translate(0px, ${isMessagesVisible ? "0px" : "-40px"
                  })`,
                transition:
                  "transform 0.4s ease-in-out 0s, opacity 0.4s ease-in-out 0s, visibility 0.4s ease-in-out 0s",
              }}
            >
              <div className="dropdown-box-header">
                <p className="dropdown-box-header-title">Messages</p>

                <div className="dropdown-box-header-actions">
                  <p className="dropdown-box-header-action">Mark all as Read</p>

                  <p className="dropdown-box-header-action">Settings</p>
                </div>
              </div>

              <div className="dropdown-box-list medium" data-simplebar>
                <a
                  className="dropdown-box-list-item"
                  href="hub-profile-messages.html"
                >
                  <div className="user-status">
                    <div className="user-chat-profile user-status-avatar !top-[5px]">
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

                    <p className="user-status-title">
                      <span className="bold">Bearded Wonder</span>
                    </p>

                    <p className="user-status-text">
                      Great! Then will meet with them at the party...
                    </p>

                    <p className="user-status-timestamp floaty">29 mins ago</p>
                  </div>
                </a>

                <a
                  className="dropdown-box-list-item"
                  href="hub-profile-messages.html"
                >
                  <div className="user-status">
                    <div className="user-chat-profile user-status-avatar !top-[5px]">
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

                    <p className="user-status-title">
                      <span className="bold">Neko Bebop</span>
                    </p>

                    <p className="user-status-text">
                      Awesome! I'll see you there!
                    </p>

                    <p className="user-status-timestamp floaty">54 mins ago</p>
                  </div>
                </a>

                <a
                  className="dropdown-box-list-item"
                  href="hub-profile-messages.html"
                >
                  <div className="user-status">
                    <div className="user-chat-profile user-status-avatar !top-[5px]">
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

                    <p className="user-status-title">
                      <span className="bold">Nick Grissom</span>
                    </p>

                    <p className="user-status-text">
                      Can you stream that new game?
                    </p>

                    <p className="user-status-timestamp floaty">2 hours ago</p>
                  </div>
                </a>

                <a
                  className="dropdown-box-list-item"
                  href="hub-profile-messages.html"
                >
                  <div className="user-status">
                    <div className="user-chat-profile user-status-avatar !top-[5px]">
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

                    <p className="user-status-title">
                      <span className="bold">Sarah Diamond</span>
                    </p>

                    <p className="user-status-text">
                      I'm sending you the latest news of the release...
                    </p>

                    <p className="user-status-timestamp floaty">16 hours ago</p>
                  </div>
                </a>

                <a
                  className="dropdown-box-list-item"
                  href="hub-profile-messages.html"
                >
                  <div className="user-status">
                    <div className="user-chat-profile user-status-avatar !top-[5px]">
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

                    <p className="user-status-title">
                      <span className="bold">James Murdock</span>
                    </p>

                    <p className="user-status-text">
                      Great! Then will meet with them at the party...
                    </p>

                    <p className="user-status-timestamp floaty">7 days ago</p>
                  </div>
                </a>

                <a
                  className="dropdown-box-list-item"
                  href="hub-profile-messages.html"
                >
                  <div className="user-status">
                    <div className="user-chat-profile user-status-avatar !top-[5px]">
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

                    <p className="user-status-title">
                      <span className="bold">The Green Goo</span>
                    </p>

                    <p className="user-status-text">
                      Can you stream that new game?
                    </p>

                    <p className="user-status-timestamp floaty">10 days ago</p>
                  </div>
                </a>
              </div>

              <Link className="dropdown-box-button primary" to={"https://chat.flokky.app/"}>
                View all Messages
              </Link>
            </div>
          </div>

          <div className="action-list-item-wrap" ref={notificationsDropRef}>
            <div
              className={`action-list-item header-dropdown-trigger ${isNotificationsVisible ? "active" : ""
                }`}
              onClick={() => {
                dispatch(
                  setIsNotificationsVisible({ value: !isNotificationsVisible })
                );
              }}
            >
              <svg className="action-list-item-icon icon-notification">
                <use xlinkHref="#svg-notification"></use>
              </svg>
            </div>

            <div
              className="dropdown-box header-dropdown"
              style={{
                position: "absolute",
                zIndex: "9999",
                top: "64px",
                right: "6px",
                opacity: `${isNotificationsVisible ? "1" : "0"}`,
                visibility: `${isNotificationsVisible ? "visible" : "hidden"}`,
                transform: `translate(0px, ${isNotificationsVisible ? "0px" : "-40px"
                  })`,
                transition:
                  "transform 0.4s ease-in-out 0s, opacity 0.4s ease-in-out 0s, visibility 0.4s ease-in-out 0s",
              }}
            >
              <div className="dropdown-box-header">
                <p className="dropdown-box-header-title">Notifications</p>

                <div className="dropdown-box-header-actions">
                  <p className="dropdown-box-header-action">Mark all as Read</p>

                  <a href="https://main.flokky.app/user-dashboard" className="dropdown-box-header-action">Settings</a>
                </div>
              </div>

              <div className="dropdown-box-list" data-simplebar>
                <div className="dropdown-box-list-item unread">
                  <div className="user-status notification">
                    <div className="user-chat-profile user-status-avatar !top-[5px]">
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

                    <p className="user-status-title">
                      <a className="bold" href="profile-timeline.html">
                        Nick Grissom
                      </a>{" "}
                      posted a comment on your{" "}
                      <a className="highlighted" href="profile-timeline.html">
                        status update
                      </a>
                    </p>

                    <p className="user-status-timestamp">2 minutes ago</p>

                  </div>
                </div>

                <div className="dropdown-box-list-item">
                  <div className="user-status notification">
                    <div className="user-chat-profile user-status-avatar !top-[5px]">
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

                    <p className="user-status-title">
                      <a className="bold" href="profile-timeline.html">
                        Sarah Diamond
                      </a>{" "}
                      left a like{" "}
                      <img
                        className="reaction"
                        src="img/reaction/like.png"
                        alt="reaction-like"
                      />{" "}
                      reaction on your{" "}
                      <a className="highlighted" href="profile-timeline.html">
                        status update
                      </a>
                    </p>

                    <p className="user-status-timestamp">17 minutes ago</p>

                  </div>
                </div>

                <div className="dropdown-box-list-item">
                  <div className="user-status notification">
                    <div className="user-chat-profile user-status-avatar !top-[5px]">
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

                    <p className="user-status-title">
                      <a className="bold" href="profile-timeline.html">
                        Destroy Dex
                      </a>{" "}
                      posted a comment on your{" "}
                      <a className="highlighted" href="profile-photos.html">
                        photo
                      </a>
                    </p>

                    <p className="user-status-timestamp">31 minutes ago</p>

                  </div>
                </div>

                <div className="dropdown-box-list-item">
                  <div className="user-status notification">
                    <div className="user-chat-profile user-status-avatar !top-[5px]">
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

                    <p className="user-status-title">
                      <a className="bold" href="profile-timeline.html">
                        The Green Goo
                      </a>{" "}
                      left a love{" "}
                      <img
                        className="reaction"
                        src="img/reaction/love.png"
                        alt="reaction-love"
                      />{" "}
                      reaction on your{" "}
                      <a className="highlighted" href="profile-timeline.html">
                        status update
                      </a>
                    </p>

                    <p className="user-status-timestamp">2 hours ago</p>

                  </div>
                </div>

                <div className="dropdown-box-list-item">
                  <div className="user-status notification">
                    <div className="user-chat-profile user-status-avatar !top-[5px]">
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

                    <p className="user-status-title">
                      <a className="bold" href="profile-timeline.html">
                        Neko Bebop
                      </a>{" "}
                      posted a comment on your{" "}
                      <a className="highlighted" href="profile-timeline.html">
                        status update
                      </a>
                    </p>

                    <p className="user-status-timestamp">3 hours ago</p>

                  </div>
                </div>
              </div>

              <a
                className="dropdown-box-button primary"
                href="hub-profile-notifications.html"
              >
                View all Notifications
              </a>
            </div>
          </div>

          <div className="header-chat-options relative" ref={dropDown_ChatOptions}>

            <div onClick={() => setIsChatOptions(prev => !prev)}>
              <HiMiniSquares2X2 />
            </div>

            <div
              className="dropdown-navigation chat-option-dropdown !w-[250px] absolute z-[9999] top-[33px] -right-[15px]"
              style={{
                opacity: `${isChatOptions ? "1" : "0"}`,
                visibility: `${isChatOptions ? "visible" : "hidden"}`,
                transform: `translate(0px, ${isChatOptions ? "0px" : "-40px"})`,
                transition:
                  "transform 0.4s ease-in-out 0s, opacity 0.4s ease-in-out 0s, visibility 0.4s ease-in-out 0s",
              }}
            >

              <div className="wrap-chat-link mb-3 flex items-center cursor-pointer" onClick={handleTextCoppied}>
                <FaLink color="#3e3f5e" />
                <p className="txt-invite-via-link font-semibold">Invite via link</p>
              </div>
              <p className="flex items-center cursor-pointer mb-3" onClick={() => handleTabClick(1)}>
                {/* <IoInformationSharp className="!m-0" size={30} onClick={() => handleTabClick(1)} /> */}
                <FaInfo />
                <p className="font-semibold">About</p>
              </p>
              <p className="flex items-center cursor-pointer mb-3" onClick={() => handleTabClick(2)}>
                <FaRegStar />
                <p className="font-semibold">Star Messages</p>
              </p>
              <p className="flex items-center cursor-pointer" onClick={() => handleTabClick(3)}>
                <MdOutlineArchive />
                <p className="font-semibold">Archived Chats</p>
              </p>
            </div>

          </div>

          <div className="action-item-wrap" ref={settingsDropRef}>
            <div
              className={`action-item dark header-settings-dropdown-trigger ${isSettingsVisible ? "active" : ""
                }`}
              onClick={() => {
                dispatch(setIsFriendsVisible({ value: false }));
                dispatch(setIsMessagesVisible({ value: false }));
                dispatch(setIsNotificationsVisible({ value: false }));
                dispatch(setIsSettingsVisible({ value: !isSettingsVisible }));
                dispatch(setIsCartVisible({ value: false }));
              }}
            >
              <svg className="action-item-icon icon-settings">
                <use xlinkHref="#svg-settings"></use>
              </svg>
            </div>

            <div
              className="dropdown-navigation header-settings-dropdown"
              style={{
                position: "absolute",
                zIndex: "9999",
                top: "64px",
                right: "22px",
                opacity: `${isSettingsVisible ? "1" : "0"}`,
                visibility: `${isSettingsVisible ? "visible" : "hidden"}`,
                transform: `translate(0px, ${isSettingsVisible ? "0px" : "-40px"
                  })`,
                transition:
                  "transform 0.4s ease-in-out 0s, opacity 0.4s ease-in-out 0s, visibility 0.4s ease-in-out 0s",
              }}
            >
              <div className="dropdown-navigation-header">
                <div className="user-status">
                  <div className="user-chat-profile user-status-avatar">
                    <img src="/img/avatar/01.jpg" alt="Profile" />
                  </div>

                  <p className="user-status-title">
                    <span className="bold">Hi Marina!</span>
                  </p>

                  <p className="user-status-text small">
                    <a href="profile-timeline.html">@marinavalentine</a>
                  </p>
                </div>
              </div>

              <p className="dropdown-navigation-category">My Profile</p>

              <a
                className="dropdown-navigation-link"
                href="/user-dashboard"
              >
                Profile Info
              </a>

              <a className="dropdown-navigation-link" href="/affiliations">
                Affiliations
              </a>

              <p className="dropdown-navigation-category">Account</p>

              <a
                className="dropdown-navigation-link"
                href="hub-account-info.html"
              >
                Advertising
              </a>

              <a
                className="dropdown-navigation-link"
                href="hub-account-password.html"
              >
                Wallet
              </a>

              <a
                className="dropdown-navigation-link"
                href="hub-account-settings.html"
              >
                Privacy
              </a>

              <p className="dropdown-navigation-category">Groups</p>

              <a
                className="dropdown-navigation-link"
                href="/user-dashboard"
              >
                Manage Groups
              </a>

              <p className="dropdown-navigation-category">Businesses</p>

              <a
                className="dropdown-navigation-link"
                href="hub-store-account.html"
              >
                Manage Businesses
              </a>

              <p className="dropdown-navigation-button button small secondary">
                Dark mood
              </p>
              <p className="dropdown-navigation-button button small secondary">
                Logout
              </p>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header