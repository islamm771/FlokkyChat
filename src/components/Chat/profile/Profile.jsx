import ContentDm from "./Content";
import Navigation from "./Navigation";
import Notification from "./Notification";
import { useSelector } from "react-redux";
import { selectGlobal } from "../../../app/feature/ListChatSlice";
import Search from "./Search";
import Content from "./group/Content";

const Profile = () => {
  const { isNotification, isSearch, isProfile, isGroupChat } =
    useSelector(selectGlobal);

  return (
    <>
      {isGroupChat ? (
        <div
          className={`contListProfile ${
            isProfile ? "activeProfile" : "disabledProfile"
          }`}
        >
          <Navigation />
          {isNotification ? (
            <Notification />
          ) : isSearch ? (
            <Search />
          ) : (
            <Content />
          )}
        </div>
      ) : (
        <div
          className={`contListProfile ${
            isProfile ? "activeProfile" : "disabledProfile"
          }`}
        >
          <Navigation />
          {isNotification ? (
            <Notification />
          ) : isSearch ? (
            <Search />
          ) : (
            <ContentDm />
          )}
        </div>
      )}
    </>
  );
};

export default Profile;
