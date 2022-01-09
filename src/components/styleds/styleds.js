import styled from "styled-components";
import Logoimg from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

const Page = styled.article`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.white? "#ffffff": "#f2f2f2"};
    padding: 70px 0;
    overflow-y: scroll;
`;

const Logo = styled.div`
    margin: 0 0 30px 0;
    width: 180px;
    height: 178px;
    background: url(${Logoimg});
`;

const Input = styled.input`
    width: 303px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    padding: 0 11px;
    color: #666666;
    margin-bottom: 6px;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    &::placeholder{
        font-size: 20px;
        line-height: 25px;
        font-family: 'Lexend Deca', sans-serif;
        color: #DBDBDB;
    }
    &:hover{
        filter: brightness(0.9);
    }
    &:disabled{
        background-color: #F2F2F2;
        color: #AFAFAF;
    }
    &:focus{
        outline: none;
    }
`

const Form = styled.form`
    width: 303px;
`

const ButtonEnter = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    background-color: #52B6FF;
    color: #FFF;
    width: 303px;
    height: 45px;
    margin-bottom: 25px;
    border-radius: 5px;
    border: none;
    font-size: 21px;
    &:disabled{
        opacity: 0.4;
    }
    &:hover {
        filter: brightness(0.9);
    } 
`;

const TextButton = styled.span`
    color: #52B6FF;
    font-size: ${props => props.fontsize};
    text-decoration: ${props => props.underline ? "underline" : "none"};
`;

const WeekDays = styled.div`
    display: flex;
`;

const ButtonDay = styled.button`
    margin-right: 4px;
    background: ${props => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
    color: ${props => props.isSelected ? "#FFFFFF" : "#DBDBDB"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    font-size: 20px;
    &:hover {
        filter: brightness(0.9);
    } 
`;

const HabitTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 8px;
`;

const HabitS = styled.div`
    width: 90vw;
    height: 94px;
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 0 0 0 15px;
    position:relative;
    p{
        font-size: 13px;
    }
`;

const Habits = styled.div`
    margin: 30px 0;
    padding: 0 18px;
    width: 100vw;
    font-size: 18px;
    & > p {
        margin-top: 28px;
    }
`;

const HabitsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 23px;
    color: #126BA5;
    margin-bottom: 20px;
`;

const ButtonSave = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    background-color: #52B6FF;
    color: #fff;
    width: 84px;
    height: 35px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    &:disabled{
        opacity: 0.4;
    }
    &:hover {
        filter: brightness(0.9);
    } 
`;

const GreenText = styled.span`
    color: ${props => props.isGreen ? "#8FC549" : "inherit"};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    &:hover {
        filter: brightness(0.9);
    } 
    &:focus, &:visited, &:link, &:active {
    text-decoration: none;
}
`

export {
    Page,
    Logo,
    TextButton,
    GreenText,
    Input,
    Form,
    HabitS,
    WeekDays,
    ButtonEnter,
    ButtonDay,
    ButtonSave,
    Habits,
    HabitsHeader,
    HabitTitle,
    StyledLink,
}