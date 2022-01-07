import Topo from "./Topo";
import Menu from "./Menu";
import NewHabit from "./NewHabitPage";
import Habit from "./Habit";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "./UserContext";
import { useNavigate } from "react-router";
import { Page } from "./styleds/styleds";
import { getHabitsList } from "../Tools/Server";

export default function HabitsPage(){
    const {token} = useContext(UserContext);
    const [habits, SetHabits] = useState([]);
    const [newHabitsVisible, setNewHabitsVisible ] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        renderAllHabits();
    }, [])


    function renderAllHabits(){
        const pass = {
            headers: {
                Authorization: `Bearer ${token.token}`
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
                {newHabitsVisible ? (<NewHabit
                    renderAllHabits={renderAllHabits}
                    setNewHabitsVisible={setNewHabitsVisible}
                    />) : ""}
                {habits.length === 0 ? (<p>
                    Você não tem nenhum hábito cadastrado ainda. 
                    Adicione um hábito para começar a trackear!
                    </p>) : habits.map((habitData) => <Habit habitData={habitData} renderAllHabits={renderAllHabits}/>)}
            </Habits>
            <Menu/>

        </Page>
    )
}

const Habits = styled.div`
    margin-top: 30px;
    padding: 0 18px;
    width: 100vw;
    font-size: 18px;
    p {
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

const ButtonAdd = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 27px;
`;