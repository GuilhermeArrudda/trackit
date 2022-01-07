import { HabitS, HabitTitle, WeekDays, ButtonDay } from "./styleds/styleds";
import { TrashOutline } from 'react-ionicons';
import UserContext from "./UserContext";
import { useContext } from "react";
import { postDeleteRequest } from "../Tools/Server";

export default function Habit({ habitData: { id, name, days }, renderAllHabits }) {
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    const {token} = useContext(UserContext);

    function deleteHabit(){
        const pass = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }
        postDeleteRequest(id, pass)
            .then(response => renderAllHabits())
            .catch(error => alert(error))
    }

    return(
        <HabitS>
            <div>
                <HabitTitle>{name}</HabitTitle>
                <WeekDays>
                    {weekdays.map((day, i) => (
                        <ButtonDay isSelected={days.includes(i)}>
                        </ButtonDay>
                    ))}
                </WeekDays>
            </div>
            <TrashOutline
                color={'#666'}
                height="17px"
                width="17px"
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px"
                }}
                onClick={deleteHabit}
            />
        </HabitS>
    )


}