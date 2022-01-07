import { TextButton } from "./styleds/styleds";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";

export default function Menu() {
    const percent = 30;

    return (
        <Footer>
            <Link to='/habitos'>
                <TextButton>Hábitos</TextButton>
            </Link>
            <Link to="/hoje">
                <ButtonToday>
                    <CircularProgressbar
                        value={percent}
                        background
                        backgroundPadding={6}
                        strokeWidth={10}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff"
                        })}
                    />
                    <Txt>Hoje</Txt>
                </ButtonToday>
            </Link>
            <Link to="/historico">
                <TextButton>Histórico</TextButton>
            </Link>
        </Footer>
    )
}

const Footer = styled.footer`
    width: 100vw;
    height: 70px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    display:flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
`;

const ButtonToday = styled.div`
    width: 91px;
    margin-bottom: 35px;
    position: relative;
`;

const Txt = styled.span`
    color: #fff;
    position: absolute;
    left: 25%;
    top: 35%;
`