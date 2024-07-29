import { useEffect, useRef, useState } from "react";
import { FaArrowsAltH, FaInfo, FaLink, FaRegStar, FaSearch } from "react-icons/fa"
import { FaBell } from "react-icons/fa6";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoInformationSharp } from "react-icons/io5"
import { MdOutlineArchive } from "react-icons/md"
import { setIsMuteModel } from "../../../../app/feature/ListChatSlice";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput } from "../../../../app/feature/outletSlice";

const Header = ({
  handleToggleOnlineList,
  handleTextCoppied,
  handleTabClick,
  }) => {
  
  const dispatch = useDispatch()
  const [isSetting, setIsSetting] = useState(false);
  const [isChatOptions, setIsChatOptions] = useState(false);
  const searchInput = useSelector((state) => state.outlet.searchInput);
  const [focused , setFocused] = useState(false)

  const handleFocus = () => {
		setFocused(true);
	};

	const handleBlur = (e) => {
		if (!e.target.value) {
			setFocused(false);
		}
	};
  
  const dropDown_ChatOptions = useRef(null);
  const dropDown_DownList = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropDown_DownList.current &&
        !dropDown_DownList.current.contains(event.target)
      ) {
        setIsSetting(false);
      }
      if (
        dropDown_ChatOptions.current &&
        !dropDown_ChatOptions.current.contains(event.target)
      ) {
        setIsChatOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDown_DownList,dropDown_ChatOptions]);

  return (
    <header>
    <div className="header-OnlineList-page">
      
      <div className="icons-footer-main-chat">

        <div className="hidden md:block lg:hidden" onClick={handleToggleOnlineList}>
          <FaArrowsAltH />
        </div>
        
        <div className="header-chat-options" ref={dropDown_ChatOptions}>

          <div onClick={ () => setIsChatOptions( prev => !prev ) }>
            <HiMiniSquares2X2 />
          </div>

          <div
            className="dropdown-navigation chat-option-dropdown !w-[250px] absolute z-[9999] top-[64px] right-[22px]"
            style={{
              opacity: `${isChatOptions ? "1" : "0"}`,
              visibility: `${isChatOptions ? "visible" : "hidden"}`,
              transform: `translate(0px, ${isChatOptions ? "0px" : "-40px"})`,
              transition:
                "transform 0.4s ease-in-out 0s, opacity 0.4s ease-in-out 0s, visibility 0.4s ease-in-out 0s",
            }}
            >
            <p className="flex items-center cursor-pointer mb-3" onClick={() => dispatch( setIsMuteModel(true) )}>
              {/* <FaSearch /> */}
              <FaBell />
              <p className="font-semibold">Mute</p>
            </p>

            <div className="wrap-chat-link mb-3 flex items-center cursor-pointer" onClick={handleTextCoppied}>
              <FaLink color="#3e3f5e" />
              <p className="txt-invite-via-link font-semibold">Invite via link</p>
            </div>
            <p className="flex items-center cursor-pointer mb-3" onClick={() => handleTabClick(3)}>
              <MdOutlineArchive  />
              <p className="font-semibold">Archived Chats</p>
              </p>
            <p className="flex items-center cursor-pointer mb-3" onClick={() => handleTabClick(1)}>
              {/* <IoInformationSharp className="!m-0" size={30} onClick={() => handleTabClick(1)} /> */}
              <FaInfo />
              <p className="font-semibold">About</p>
            </p>
            <p className="flex items-center cursor-pointer" onClick={() => handleTabClick(2)}>
              <FaRegStar />
              <p className="font-semibold">Star Messages</p>
              </p>
          </div>

        </div>
        
        <div className="header-settings-dropdown-wrapper mr-auto" ref={dropDown_DownList}>
          <div
            className="action-item dark header-settings-dropdown-trigger"
            onClick={() => setIsSetting(!isSetting)}
          >
            <svg className="action-item-icon icon-settings">
              <use xlinkHref="#svg-settings"></use>
            </svg>
          </div>

          <div
            className="dropdown-navigation header-settings-dropdown setHeight-online-list"
            style={{
              position: "absolute",
              zIndex: "9999",
              top: "64px",
              right: "22px",
              opacity: `${isSetting ? "1" : "0"}`,
              visibility: `${isSetting ? "visible" : "hidden"}`,
              transform: `translate(0px, ${isSetting ? "0px" : "-40px"})`,
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

            <a className="dropdown-navigation-link" href="hub-profile-info.html">
              Profile Info
            </a>

            <a className="dropdown-navigation-link" href="hub-profile-social.html">
              Social &amp; Stream
            </a>

            <a
              className="dropdown-navigation-link"
              href="hub-profile-notifications.html"
            >
              Notifications
            </a>

            <a
              className="dropdown-navigation-link"
              href="hub-profile-messages.html"
            >
              Messages
            </a>

            <a
              className="dropdown-navigation-link"
              href="hub-profile-requests.html"
            >
              Friend Requests
            </a>

            <p className="dropdown-navigation-category">Account</p>

            <a className="dropdown-navigation-link" href="hub-account-info.html">
              Account Info
            </a>

            <a
              className="dropdown-navigation-link"
              href="hub-account-password.html"
            >
              Change Password
            </a>

            <a
              className="dropdown-navigation-link"
              href="hub-account-settings.html"
            >
              General Settings
            </a>

            <p className="dropdown-navigation-category">Groups</p>

            <a
              className="dropdown-navigation-link"
              href="hub-group-management.html"
            >
              Manage Groups
            </a>

            <a
              className="dropdown-navigation-link"
              href="hub-group-invitations.html"
            >
              Invitations
            </a>

            <p className="dropdown-navigation-category">My Store</p>

            <a className="dropdown-navigation-link" href="hub-store-account.html">
              My Account <span className="highlighted">$250,32</span>
            </a>

            <a className="dropdown-navigation-link" href="hub-store-statement.html">
              Sales Statement
            </a>

            <a className="dropdown-navigation-link" href="hub-store-items.html">
              Manage Items
            </a>

            <a className="dropdown-navigation-link" href="hub-store-downloads.html">
              Downloads
            </a>

            <p className="dropdown-navigation-button button small secondary">
              Logout
            </p>
          </div>

        </div>

        <div className="header-actions search-bar"
          style={{ position: "relative",transition:"0.5s" , width: focused ? "80%" : "45px"  }} >
          <div className={`interactive-input dark !block !h-[45px] ${
              searchInput !== "" ? "active" : ""
            }`}
          >
            <input
              type="text"
              id="search-main"
              name="search_main"
              style={{paddingRight: focused ? "50px" : "27px"}}
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
            style={{right: focused ? "0px" : "-7px" }}
            >
              <svg className="interactive-input-icon icon-magnifying-glass !m-0">
                <use xlinkHref="#svg-magnifying-glass"></use>
              </svg>
            </div>

            <div
              className="interactive-input-action"
              onClick={() => dispatch(setSearchInput({ value: "" }))}
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
              opacity: `${searchInput === "" ? "0" : "1"}`,
              visibility: `${searchInput === "" ? "hidden" : "visible"}`,
              transform: `translate(0px, ${
                searchInput !== "" ? "0px" : "-40px"
              })`,
              transition:
                "transform 0.4s ease-in-out 0s, opacity 0.4s ease-in-out 0s, visibility 0.4s ease-in-out 0s",
            }}
          >
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur
              </p>
          </div>
        </div>

      </div>
    </div>
  </header>
  )
}

export default Header