import {Page, Logo, Input, Form, ButtonEnter, TextButton} from "./styleds/styleds";
import { Link, useNavigate } from "react-router-dom";
import Loader from "react-loader-spinner";
import { LoginRequest } from "../Tools/Server";
import { useState, useEffect } from "react";

export default function LoginPage({ setToken }){
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function login(e){
        e.preventDefault();
        setIsLoading(true);
        const infos = {
            email,
            password
        }

            LoginRequest(infos)
                .then(response => {
                    setToken(response.data.token)
                    navigate('/hoje')
                })
                .catch(error => {
                    if (error.response.status === 422 || error.response.status === 401) {
                        alert("Dados Invalidos");
                        return;
                    }
                    alert(error);
                })
                .finally(() => setIsLoading(false));

}    


    return(
        <Page>
            <Logo/>
            <Form onSubmit={login}>
                <Input
                    placeholder="email"
                    type="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    disable={isLoading}
                />
                <Input
                    placeholder="senha"
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    disable={isLoading}
                />
            <ButtonEnter type="submit"> 
            {!isLoading ? "Entrar" : <Loader type="ThreeDots" color="#FFF" height={50} width={80} />} 
            </ButtonEnter>
            </Form>
            <Link to="/cadastro">
                <TextButton fontsize="14px" underline={true}>
                Não tem uma conta? Cadastre-se!
                </TextButton>
            </Link>
        </Page>
    )
}