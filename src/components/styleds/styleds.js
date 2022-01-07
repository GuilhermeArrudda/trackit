import styled from "styled-components";
import Logoimg from "../../assets/Logo.svg";

const Page = styled.article`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    background-color: #fff;
    padding: 70px;
    overflow-y: scroll;
`;

const Logo = styled.div`
    margin: 0 0 30px 0;
    width: 180px;
    height: 178px;
    background: url(${Logoimg});
`;

const Input = styled.input`
    width 303px;
    height 45px;
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
    &:disable{
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
    &:disable{
        opacity: 0.4;
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
    align-items: center;
    border-radius: 5px;
    padding: 15px;
    position:relative;
    & ion-icon{
        font-size: 69px;
        margin: 13px;
        color: #8FC549;
    }
`

export {
    Page,
    Logo,
    Input,
    Form,
    ButtonEnter,
    TextButton,
    WeekDays,
    ButtonDay,
    HabitTitle,
    HabitS
}