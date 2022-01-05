import {Page, Logo, Input, Form, ButtonEnter, TextButton} from "./styleds/styleds";
import { Link } from "react-router-dom";

export default function LoginPage(){
    return(
        <Page>
            <Logo/>
            <Form>
                <Input
                    placeholder="email"
                    type="email"
                />
                <Input
                    placeholder="senha"
                    type="password"
                />
            </Form>
            <ButtonEnter isBig={true}>Entrar</ButtonEnter>
            <Link to="/cadastro">
                <TextButton fontsize="14px" underline={true}>
                Não tem uma conta? Cadastre-se!
                </TextButton>
            </Link>
        </Page>
    )
}