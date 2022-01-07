import { TextButton, WeekDays, ButtonDay, Input } from "./styleds/styleds";
import { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "./UserContext";
import { postHabit } from "../Tools/Server";

export default function NewHabito ({renderAllHabits, setNewHabitsVisible}) {
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
    const {token} = useContext(UserContext);

    function varSelect(i){
        let newList = [...weekdays];
        newList[i].isSelected = !weekdays[i].isSelected;
        setWeekdays(newList);
    }

    function saveHabit(){
        setIsLoading(true)
        const infos = {
            name: habitName,
            days: weekdays.map((day, i) => day.isSelected ? i : -1).filter((index) => index >= 0)
        }

        const pass = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }

        postHabit(infos, pass)
            .then(response => {
                renderAllHabits();
                setNewHabitsVisible(false);
            })
            .catch(error => alert(error))
            .finally(setIsLoading(false));

    }

    return(
        <NewHabit>
            <Input
                placeholder="Qual o hábito"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
            />
            <WeekDays>
                {weekdays.map((day, i) => (
                    <ButtonDay 
                    isSelected={day.isSelected} onClick={() => varSelect(i)}>
                    {day.name}
                    </ButtonDay>
                ))}
            </WeekDays>
            <Buttonsbox>
                <TextButton onClick={() => setNewHabitsVisible(false)}>Cancelar</TextButton>
                <ButtonSave onClick={saveHabit}>Salvar</ButtonSave>
            </Buttonsbox>
        </NewHabit>
    )
}

const NewHabit = styled.div`
    margin-top: 28px;
    width: 100%;
    height: 180px;
    padding: 18px;
    background-color: #fff;
`;

const Buttonsbox = styled.div`
    width: 176px;
    height: 35px;
    margin: 36px 0 0 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
        opacity: 0.7;
    }
`