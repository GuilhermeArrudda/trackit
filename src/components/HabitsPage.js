import Topo from "./Topo";
import Menu from "./Menu";
import NewHabit from "./NewHabitPage";
import Habit from "./Habit";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "./UserContext";
import { useNavigate } from "react-router";
import { Page, HabitsHeader, Habits } from "./styleds/styleds";
import { getHabitsList } from "../Tools/Server";

export default function HabitsPage(){
    const {userData} = useContext(UserContext);
    const [habits, SetHabits] = useState([]);
    const [newHabitsVisible, setNewHabitsVisible ] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        renderAllHabits();
    }, [])


    function renderAllHabits(){
        
        const pass = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }
        getHabitsList(pass)
            .then(response => SetHabits(response.data))
            .catch(error => {
                alert(error);
                navigate("/")
            })
    }

    return(
        <Page>
            <Topo/>
            <Habits>
                <HabitsHeader>
                    Meus Hábitos
                    <ButtonAdd onClick={() => setNewHabitsVisible(true)}>+</ButtonAdd>
                </HabitsHeader>
                <NewHabit
                    renderAllHabits={renderAllHabits}
                    setNewHabitsVisible={setNewHabitsVisible}
                    newHabitsVisible={newHabitsVisible}
                />
                {habits.length === 0 ? (<p>
                    Você não tem nenhum hábito cadastrado ainda. 
                    Adicione um hábito para começar a trackear!
                    </p>) : habits.map((habitData) => <Habit habitData={habitData} renderAllHabits={renderAllHabits}/>)}
            </Habits>
            <Menu/>

        </Page>
    )
}

const ButtonAdd = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 27px;
    &:hover {
        filter: brightness(0.9);
    } 
`;