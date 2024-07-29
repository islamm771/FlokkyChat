import { useSelector } from "react-redux";
import ContentMessageDm from "./ContentMessage";
import NavigationDm from "./Navigation";
import VideoCall from "./VideoCall";
import ContentMessage from "./group/ContentMessage";
import Navigation from "./group/Navigation";
import { selectGlobal } from "../../../app/feature/ListChatSlice";

const MainChat = () => {
  const { isGroupChat } = useSelector(selectGlobal);
  return (
    <div className="flex-main-chat-wrap">
      <VideoCall />
      {isGroupChat ? (
        <div className="contListChatt">
          <Navigation />
          <ContentMessage />
        </div>
      ) : (
        <div className="contListChatt">
          <NavigationDm />
          <ContentMessageDm />
        </div>
      )}
    </div>
  );
};

export default MainChat;
