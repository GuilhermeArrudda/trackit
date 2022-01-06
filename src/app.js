import "./styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SingUpPage from "./components/SingUpPage";
import TodayPage from "./components/TodayPage";
import { useState } from "react";

export default function App() {
    const [token, setToken] = useState('')

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage setToken={setToken}/>}></Route>
                <Route path="/cadastro" element={<SingUpPage/>}></Route>
                <Route path="/hoje" element={<TodayPage token={token}/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}