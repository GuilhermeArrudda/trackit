import { TextButton, WeekDays, ButtonDay, Input, ButtonSave } from "./styleds/styleds";
import { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "./UserContext";
import TodayContext from "./TodayContext";
import { postHabit } from "../Tools/Server";
import Loader from "react-loader-spinner";
import dayjs from "dayjs";

export default function NewHabito ({renderAllHabits, setNewHabitsVisible, newHabitsVisible}) {
    const {userData} = useContext(UserContext);
    const {todayData, setTodayData} = useContext(TodayContext);
    const [weekdays, setWeekdays] = useState([
        {
            name: "D",
            isSelected: false
        },
        {
            name: "S",
            isSelected: false
        },
        {
            name: "T",
            isSelected: false
        },
        {
            name: "Q",
            isSelected: false
        },
        {
            name: "Q",
            isSelected: false
        },
        {
            name: "S",
            isSelected: false
        },
        {
            name: "S",
            isSelected: false
        }
    ])

    const [habitName, setHabitName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function varSelect(i){
        let newList = [...weekdays];
        newList[i].isSelected = !weekdays[i].isSelected;
        setWeekdays(newList);
    }

    function saveHabit(){
        if (weekdays.map((day, i) => day.isSelected ? i : -1).filter((index) => index >= 0 ).length === 0){
            alert("Preencha todas as informações")
            return;
        }

        setIsLoading(true);
        const infos = {
            name: habitName,
            days: weekdays.map((day, i) => day.isSelected ? i : -1).filter((index) => index >= 0 )
        }

        const pass = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }

        postHabit(infos, pass)
            .then(response => {
                if(response.data.days.includes(dayjs().$W)){
                    setTodayData([...todayData, response.data]);
                }
                setHabitName("");
                setWeekdays(weekdays.map((day) => {
                    return {...day, isSelected: false};
                }));
                renderAllHabits();
                setNewHabitsVisible(false);
            })
            .catch(error => {
                if (error.response.status === 422){
                    alert("Preencha so campos corretamente");
                    return;
                }
                alert(error)
            })
            .finally(() => setIsLoading(false));

    }

    return(
        <NewHabit hidden={!newHabitsVisible}>
            <Input
                placeholder="Qual o hábito"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
                disabled={isLoading}
            />
            <WeekDays>
                {weekdays.map((day, i) => (
                    <ButtonDay 
                    key={i}
                    isSelected={day.isSelected} 
                    onClick={() => varSelect(i)}
                    disabled={isLoading}
                    >
                        {day.name}
                    </ButtonDay>
                ))}
            </WeekDays>
            <Buttonsbox>
                <TextButton onClick={() => isLoading ? "" : setNewHabitsVisible(false)}>Cancelar</TextButton>
                <ButtonSave onClick={saveHabit} disabled={isLoading}>
                    {isLoading ? <Loader type="ThreeDots" color="#FFF" height={35} width={50} /> : "Salvar"}
                </ButtonSave>
            </Buttonsbox>
        </NewHabit>
    )
}

const NewHabit = styled.div`
    margin: 28px 0 10px 0;
    width: 100%;
    height: 180px;
    padding: 18px;
    background-color: #fff;
    ${props => props.hidden ? "display: none;": ""}
`;

const Buttonsbox = styled.div`
    width: 176px;
    height: 35px;
    margin: 36px 0 0 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

