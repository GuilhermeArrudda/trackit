import Menu from "./Menu";
import Topo from "./Topo";
import UserContext from "./UserContext";
import styled from "styled-components";
import Calendar from "react-calendar";
import { useContext } from "react";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { getHistory } from "../Tools/Server";


export default function HistoryPage() {
    const {userData} = useContext(UserContext);
    const [historyData, setHistoryData] = useState([])

    useEffect(() => {
        renderHistory()
        // eslint-disable-next-line
    },[]);

    function renderHistory(){
        const pass = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        };
        getHistory(pass)
            .then(response => setHistoryData(daysArray(response.data)))
            .catch(error => {
                alert(error);
            })
    }

    function daysArray(array) {
        let arrayPost = []
        for (let i = 0; i < array.length; i++) {
            let total = array[i].habits.length
            let numbCompletedHabits = 0
            for (let j=0; j < total; j++) {
                if (array[i].habits[j].done === true) {
                    numbCompletedHabits++
                }
            }
            if (numbCompletedHabits / total === 1) {
                arrayPost.push({date: array[i].habits[0].date, className: "day-done"})
            } else {
                arrayPost.push({date: array[i].habits[0].date, className: "day-not-done"})
            }
        }
        return (arrayPost)
    }


    function setClass(date) {
        const dateobj = 
            historyData.find((x) => {
                return (
                    date.getDay() === new Date(x.date).getDay() &&
                    date.getMonth() === new Date(x.date).getMonth() &&
                    date.getDate() === new Date(x.date).getDate()
                )
            })
        return dateobj ? dateobj.className : "";
    }

    return(
        <PageHistory>
            <Topo/>
                <TitleHistoryPage>
                    <h1>Histórico</h1>
                </TitleHistoryPage>
            <CalendarWrapper>
                <Calendar

                calendarType="US"

                formatDay={(locale, date) => dayjs(date).format("DD")}
                tileClassName={({ activeStartDate, date, view}) => setClass(date)}

                />
            </CalendarWrapper>
            <Menu/>
        </PageHistory>
    )
}

const PageHistory = styled.article `
    width: 100vw;
    height: 100vh;
    padding: 77px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.white? "#ffffff": "#f2f2f2"};

    .react-calendar {
    width: 335px;
    max-width: 100vw;
    height: 100vh;
    background: white;
    font-family: 'Lexend Deca', sans-serif;
    line-height: 1.125em;
    border-radius: 10px;
    }
    .react-calendar--doubleView {
    width: 700px;
    }
    .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
    }
    .react-calendar--doubleView .react-calendar__viewContainer>* {
    width: 50%;
    margin: 0.5em;
    }
    .react-calendar,
    .react-calendar *,
    .react-calendar *:before,
    .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    }
    .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
    }
    .react-calendar button:enabled:hover {
    cursor: pointer;
    }
    .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
    font-size: 0.9em;
    }
    .react-calendar__navigation button {
    min-width: 44px;
    background: none;
    }
    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
    }
    .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
    }
    .react-calendar__month-view{
    background-color: transparent;
    }
    .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
    
    }
    .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
    }
    .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
    padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
    
    }
    .react-calendar__month-view__days__day {
    font-size: 0.9em;
    }
    .react-calendar__month-view__days__day--weekend {
    color: #d10000;
    }
    .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
    }
    .react-calendar__year-view .react-calendar__tile,
    .react-calendar__decade-view .react-calendar__tile,
    .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
    }
    .react-calendar__tile {
    width: 45px !important;
    height: 45px !important;
    text-align: center;
    padding: 0.75em 0.5em;
    background: none;
    }
    .react-calendar__tile:disabled {
    background-color: #f0f0f0;
    }
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
    }
    .react-calendar__tile--now {
    background: #ffff76 !important;
    &::after {
        content: "";
        background-color: transparent !important;
    }
    }
    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
    background: #ffffa9;
    }
    .react-calendar__tile--hasActive {
    background: #76baff;
    }
    .react-calendar__tile--hasActive:enabled:hover,
    .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
    }
    .react-calendar__tile--active {
    background: #126BA5 !important;
    color: black !important;
    }
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
    background: #1087ff;
    }
    .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
    }
    .day-done{
    position: relative;
    background: transparent;
    z-index:10;
    &::after {
        content: "";
        position: absolute;
        width: 2.5em;
        height: 2.5em;
        left: 0.38em;
        top: 0.35em;
        border-radius:100%;
        background-color: #8FC549;;
        z-index: -1; 
    }
    }
    .day-not-done{
    position: relative;
    background: transparent;
    z-index:10;
    &::after {
        content: "";
        position: absolute;
        width: 2.5em;
        height: 2.5em;
        left: 0.38em;
        top: 0.35em;
        border-radius:100%;
        background-color: #E75766;;
        z-index: -1; 
    }
    }
`

const CalendarWrapper = styled.div`
    width:100%;
    height: 404px;
    padding: 0px 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TitleHistoryPage = styled.div`
width:100%;
height: 75px;
display: flex;
flex-direction:column;
align-items: left;
justify-content:flex-start;
padding: 24px 18px;
h1{
  font-style: normal;
font-weight: normal;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
}
p{
font-style: normal;
font-weight: normal;
font-size: 17.976px;
line-height: 22px;
color: #BABABA;
}
mark{
  all: unset;
  color: #8FC549
}
`
