import "./styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}