import { Page, Form, Input, Logo, ButtonEnter, TextButton } from "./styleds/styleds";
import { Link, useNavigate } from "react-router-dom";
import Loader from "react-loader-spinner";
import { postSingUpRequest } from "../Tools/Server";
import { useState } from "react";

export default function SingUpPage(){
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    function singup(e){
        e.preventDefault();
        setIsLoading(true);
        const infos = {
            email,
            name,
            image,
            password
        }
        postSingUpRequest(infos)
            .then(response => {
                navigate('/')
            })
            .catch(error => {
                if (error.response.status === 409) {
                    alert("Email Já utilizado!")
                    return
                }
                if (error.response.status === 422) {
                    alert("Preencha os campos corretamente!")
                    return
                }
                alert(error)
            })
            .finally(() => setIsLoading(false));

}    
    

    return(
        <Page>
            <Logo/>
            <Form onSubmit={singup}>
                <Input 
                placeholder="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                disabled={isLoading}
                type="email"
                />
                <Input 
                placeholder="nome" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                disabled={isLoading}
                />
                <Input 
                placeholder="foto" 
                value={image} 
                onChange={(e) => setImage(e.target.value)} 
                disabled={isLoading}
                type="url"
                pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)(.jpg|.png)"
                />
                <Input 
                placeholder="senha" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                disabled={isLoading}
                />
                <ButtonEnter type="submit">
                    {!isLoading ? "Cadastrar" : <Loader type="ThreeDots" color="#FFF" height={50} width={80} />}
                </ButtonEnter>
            </Form>    
            <Link to={!isLoading ? "/" : "/cadastro"}>
                <TextButton fontsize="14px" underline={true}>
                Já tenho uma conta? Faça login!
                </TextButton>
            </Link>
            </Page>
    )
}