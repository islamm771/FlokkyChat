import { Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import "./App.css";
import "../src/styles/css/styles.css";
import Chat from "./pages/chat/Chat";
import { useEffect, useRef } from "react";

function App() {
  const appRef = useRef(null);

  const enterFullscreen = () => {
    if (appRef.current.requestFullscreen) {
      appRef.current.requestFullscreen();
    } else if (appRef.current.mozRequestFullScreen) { // Firefox
      appRef.current.mozRequestFullScreen();
    } else if (appRef.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
      appRef.current.webkitRequestFullscreen();
    } else if (appRef.current.msRequestFullscreen) { // IE/Edge
      appRef.current.msRequestFullscreen();
    }
  };

  useEffect(() => {
    if (screen.width <= 768) {
      
    }
  }, []);

  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            handleActiveColor: "#fd6729",
            dotBorderColor: "#fd6729",
            handleColor: "#fd6729",
            trackBg: "#fd6729",
            trackHoverBg: "#fd6729",
          },
          Input: {
            hoverBorderColor: "#fd6729",
            activeBorderColor: "#fd6729",
            activeShadow: "none",
          },
        },
      }}
    >
      <div className="App" ref={appRef}>
        <button className="block md:hidden" id="fullscreenButton" onClick={enterFullscreen}>
          Enter Fullscreen
        </button>
        <Chat />
        {/* <Routes>
          <Route path="/" element={<Chat />} />
        </Routes> */}
      </div>
    </ConfigProvider>
  );
}

export default App;
