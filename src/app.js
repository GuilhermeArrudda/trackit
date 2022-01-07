import "./styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SingUpPage from "./components/SingUpPage";
import TodayPage from "./components/TodayPage";
import HabitsPage from "./components/HabitsPage";
import HistoryPage from "./components/HistoryPage";
import UserContext from "./components/UserContext";
import { useState } from "react";
import TodayContext from "./components/TodayContext";

export default function App() {

    const [userData, setUserData] = useState("");
    const [todayData, setTodayData] = useState([])

    return(
        <UserContext.Provider value ={{userData, setUserData}}>
            <TodayContext.Provider value = {{ todayData, setTodayData }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}></Route>
                        <Route path="/cadastro" element={<SingUpPage/>}></Route>
                        <Route path="/hoje" element={<TodayPage/>}></Route>
                        <Route path="/habitos" element={<HabitsPage/>}></Route>
                        <Route path="/historico" element={<HistoryPage/>}></Route>
                    </Routes>
                </BrowserRouter>
            </TodayContext.Provider>   
        </UserContext.Provider>
        
    )
}