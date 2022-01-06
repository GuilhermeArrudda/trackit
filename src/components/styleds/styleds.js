import styled from "styled-components";
import Logoimg from "../../assets/Logo.svg";

const Page = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
`;

const Logo = styled.div`
    margin: 70px 0 30px 0;
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

export {
    Page,
    Logo,
    Input,
    Form,
    ButtonEnter,
    TextButton
}