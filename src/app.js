import "./styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SingUpPage from "./components/SingUpPage";
import TodayPage from "./components/TodayPage";
import UserContext from "./components/UserContext";
import { useState } from "react";

export default function App() {
    const tokenOnLocalStorage = localStorage.getItem("token");

    const [token, setToken] = useState(tokenOnLocalStorage);

    function setAndPersistToken(token) {
        setToken(token);
        localStorage.setItem("token", token);
    }

    return(
        <UserContext.Provider value ={{token, setToken, setAndPersistToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}></Route>
                    <Route path="/cadastro" element={<SingUpPage/>}></Route>
                    <Route path="/hoje" element={<TodayPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
        
    )
}