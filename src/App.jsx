import { Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import "./App.css";
import "../src/styles/css/styles.css";
import MainPage from "./pages/PagesOutlet/Pages";
import Chat from "./pages/chat/Chat";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();


function App() {
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
      <div className="App">
          <Chat />
        {/* <Routes>
          <Route path="/" element={<Chat />} />
        </Routes> */}
      </div>
    </ConfigProvider>
  );
}

export default App;
