import { IoListOutline } from "react-icons/io5";
import "../ListPeople/PeopleChat.css";
import { useDispatch, useSelector } from "react-redux";
import Communities from "../TabsChat/Communities";
import footer_peple_chat from "../../../assests/chat/footer-people-list.jpg";
import Connections from "../TabsChat/Connections";
import Jobs from "../TabsChat/Jobs";
import MarketPlace from "../TabsChat/MarketPlace";
import bfs from "../../../assests/chat/bf4.jpg"
import Fav from "../TabsChat/Fav";
import {
  toggleChatRoom,
  toggleWrapgroupPeopleChat,
} from "../../../app/feature/ListChatSlice";
import { FaArrowsAltH, FaPlus } from "react-icons/fa";
import {
  setIsLargeHidden,
  setIsMobileNavOpen,
  setIsOverlayVisible,
  setSearchInput,
} from "../../../app/feature/outletSlice";
import { useEffect, useRef, useState } from "react";
import Flokkancing from "../TabsChat/Flokkancing";
import UserProfileImage from "../../user-profile-image/UserProfileImage";
const PeopleChat = () => {
  const dispatch = useDispatch();
  const isLargeHidden = useSelector((state) => state.outlet.isLargeHidden);
  const activeTab = useSelector((state) => state.tabs.activeTab);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 680);
  const searchInput = useSelector((state) => state.outlet.searchInput);
  const [focused, setFocused] = useState(false)

  const inputRef=useRef()

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setFocused(false);
    }
  };

  const handleToggleChatList = () => {
    dispatch(toggleChatRoom());
  };

  const handleToggleListPeople = () => {
    dispatch(toggleWrapgroupPeopleChat());
  };

  const handleMobileMenuClick = () => {
    dispatch(setIsOverlayVisible({ value: true }));
    dispatch(setIsMobileNavOpen({ value: true }));
  };

  const handleSideMenuClick = () => {
    dispatch(setIsLargeHidden({ value: !isLargeHidden }));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 680);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div>
      <header>
        <div className="header-people-chat">
          {isMobileView ? (
            <div className="sidemenu-trigger navigation-widget-trigger cursor-pointer"
              onClick={handleMobileMenuClick} >
              <svg className="icon-grid">
                <use xlinkHref="#svg-grid"></use>
              </svg>
            </div>
          ) : (
            <div className="sidemenu-trigger navigation-widget-trigger cursor-pointer"
              onClick={handleSideMenuClick} >
              <svg className="icon-grid">
                <use xlinkHref="#svg-grid"></use>
              </svg>
            </div>
          )}
          {/* <div className="tabs-toggle-peopla-chat">
            <FaPlus
              onClick={handleToggleChatList}
              className="chat-list-model"
            />
            <div className="iconSm-people" onClick={handleToggleListPeople}>
              <FaArrowsAltH />
            </div>
          </div> */}

          <div className="header-actions search-bar"
            style={{ position: "relative", transition: "0.5s", width: focused ? "80%" : "45px" }} >
            <div className={`interactive-input dark !block !h-[45px]  ${searchInput !== "" ? "active" : ""
              }`}
            >
              <input
                ref={inputRef}
                type="text"
                id="search-main"
                name="search_main"
                style={{ paddingRight: focused ? "50px" : "27px" }}
                placeholder="Search here in chats and media"
                value={searchInput}
                onChange={(e) => {
                  dispatch(setSearchInput({ value: e.target.value }));
                }}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={(e) => {
                  if (e.keyCode === 27) {
                    dispatch(setSearchInput({ value: "" }));
                  }
                }}
              />
              <div className="interactive-input-icon-wrap"
                style={{ right: focused ? "0px" : "-7px" }}
              >
                <svg className="interactive-input-icon icon-magnifying-glass">
                  <use xlinkHref="#svg-magnifying-glass"></use>
                </svg>
              </div>

              <div
                className="interactive-input-action"
                onClick={() => {
                  dispatch(setSearchInput({ value: "" }))
                  inputRef?.current?.focus();
                }}
              >
                <svg className="interactive-input-action-icon icon-cross-thin">
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
                // maxWidth: "100%",
                opacity: `${searchInput === "" ? "0" : "1"}`,
                visibility: `${searchInput === "" ? "hidden" : "visible"}`,
                transform: `translate(0px, ${searchInput !== "" ? "0px" : "-40px"
                  })`,
                transition:
                  "transform 0.4s ease-in-out 0s, opacity 0.4s ease-in-out 0s, visibility 0.4s ease-in-out 0s",
              }}
            >
              { activeTab == 1 && (
                  <>
                    <div className="dropdown-box-category">
                      <p className="dropdown-box-category-title">Communities</p>
                    </div>

                    <div className="dropdown-box-list small no-scroll">
                      <a className="dropdown-box-list-item" href="profile-timeline.html">
                        <div className="user-status">
                          <div className="user-status-avatar">
                            {/* <UserProfileImage /> */}
                            <img className="w-[45px] h-[45px] rounded-full" src={bfs} alt="" />
                          </div>
                          <p className="user-status-title">
                            <span className="bold">Marketing</span>
                          </p>
                          <p className="user-status-text">139 Members</p>
                        </div>
                      </a>

                      <a className="dropdown-box-list-item" href="profile-timeline.html">
                        <div className="user-status">
                          <div className="user-status-avatar">
                            <img className="w-[45px] h-[45px] rounded-full" src={bfs} alt="" />
                          </div>
                          <p className="user-status-title">
                            <span className="bold">Marketing</span>
                          </p>
                          <p className="user-status-text">139 Members</p>
                        </div>
                      </a>
                    </div>
                  </>
              )}
              { activeTab == 2 && (
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
                  </>
              )}
              { activeTab == 3 && (
                  <>
                    <div className="dropdown-box-category">
                      <p className="dropdown-box-category-title">Vacancies</p>
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
                      <p className="dropdown-box-category-title">Marketplace</p>
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
                      <p className="dropdown-box-category-title">Communities</p>
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
                      <p className="dropdown-box-category-title">Flokkacing</p>
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
        </div>
      </header>
      <div className="Wrap-Tabs-chat">
        {activeTab === 1 && <Communities />}
        {activeTab === 2 && <Connections />}
        {activeTab === 3 && <Jobs />}
        {activeTab === 4 && <MarketPlace />}
        {activeTab === 5 && <Fav />}
        {activeTab === 6 && <Flokkancing />}
      </div>
      <footer className="footer-people-chat">
        <img src={footer_peple_chat} alt="" />
      </footer>
    </div>
  );
};

export default PeopleChat;
