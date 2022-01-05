import "./styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SingUpPage from "./components/SingUpPage";

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}></Route>
                <Route path="/cadastro" element={<SingUpPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}