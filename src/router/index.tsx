import { createBrowserRouter , createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import LearnLayout from "../pages/Learn/Layout";
import QuickStart from "../pages/Learn";
import Login from "../pages/auth/Login";
// import ProtectedRoute from "./ProtectedRoute";
import About from "../pages/About";
import Service from "../pages/Service";
import Chat from "../pages/Chat";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={ <RootLayout /> }>
                {/* <Route index element={ <ProtectedRoute path="/login"> <Home /> </ProtectedRoute> } /> */}
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Service />} />
                <Route path="contribute" element={<h3>Contribute Page</h3>} />
                {/* <Route path="login" element={ <ProtectedRoute path="/"> <Login /> </ProtectedRoute> } /> */}
                <Route path="login" element={<Login />} />
            </Route>

            <Route path="/learn" element={<LearnLayout />}>
                <Route index element={<QuickStart />} />
                <Route path="thinking-in-react" element={<div> <h1>Thinking in react</h1> </div>} />
                <Route path="installation" element={<div> <h1>Installation</h1> </div>} />
            </Route>

            <Route path="/chat" element={<Chat />} />
        </>
    )
)