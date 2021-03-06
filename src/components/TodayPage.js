import Topo from "./Topo"
import Menu from "./Menu";
import { Page, HabitsHeader, Habits, GreenText } from "./styleds/styleds"
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "./UserContext";
import TodayContext from "./TodayContext";
import { getTodayData } from "../Tools/Server";
import TodayTasks from "./TodayTasks";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'
import styled from "styled-components";


export default function TodayPage(){
    const [reload, setReload] = useState(false)
    const {userData} = useContext(UserContext);
    const {todayData, setTodayData} = useContext(TodayContext);
    let navigate = useNavigate();
    
    useEffect(() => {
        setReload(false)
        
        renderAllTodayHabits();
        // eslint-disable-next-line
    }, [reload])

    function renderAllTodayHabits() {
        const pass = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }
        getTodayData(pass)
            .then(response => {
                setTodayData(response.data)
            })
            .catch(error => {
                alert("Você já está logando");
                navigate("/")
            })
    }


    function calcPercent() {
        const numberOfHabits = todayData.length;
        const numberOfDones = todayData.filter((habit) => habit.done).length;
        return ((numberOfDones * 100) / numberOfHabits).toFixed(0);
    }

    return (
        <Page white={false}>
            <Topo/>
            <Habits>
                <HabitsHeader>

                    <div>
                        <h2>{dayjs().locale('pt-br').format('dddd, DD/MM')}</h2>
                        <GreySubtitle>
                            <GreenText isGreen={calcPercent() > 0}>
                                {calcPercent() > 0 ? `${calcPercent()}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}
                            </GreenText>
                        </GreySubtitle>
                    </div>

                </HabitsHeader>
                {todayData.map((taskData, id) => <TodayTasks key={id} taskData={taskData} renderAllTodayHabits={renderAllTodayHabits}/>)}
            </Habits>
            <Menu/>
        </Page>
    )
}


const GreySubtitle = styled.p`
    font-size: 18px;
    line-height: 23px;
    color: #BABABA;
` 