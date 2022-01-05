import { Page, Form, Input, Logo, ButtonEnter, TextButton } from "./styleds/styleds";
import { Link } from "react-router-dom";

export default function SingUpPage(){
    return(
        <Page>
            <Logo/>
            <Form>
                <Input placeholder="email"/>
                <Input placeholder="senha"/>
                <Input placeholder="nome"/>
                <Input placeholder="foto"/>
            </Form>    
            <ButtonEnter isBig={true}>Cadastrar</ButtonEnter>
            <Link to="/">
                <TextButton fontsize="14px" underline={true}>
                Já tenho uma conta? Faça login!
                </TextButton>
            </Link>
            </Page>
    )
}