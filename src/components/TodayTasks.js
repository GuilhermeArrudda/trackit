import { HabitS, HabitTitle, GreenText } from "./styleds/styleds";
import { Checkbox } from "react-ionicons";
import UserContext from "./UserContext";
import { useContext, useState } from "react";
import { postUndoneRequest, postDoneRequest } from "../Tools/Server";

export default function TodayTasks({ taskData: { id, name, currentSequence, highestSequence, done }, renderAllTodayHabits }) {

    const { userData } = useContext(UserContext);
    const [fastDone, setFastDone] = useState(done);
    const [isLoading, setIsloading] = useState(false);

    function varDone() {
        setIsloading(true)
        const pass = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }
        if(done){
            setFastDone(false);
            postUndoneRequest(id, pass)
                .then(response => renderAllTodayHabits())
                .catch(error => alert(error))
                .finally(() => setTimeout(() => {
                    setIsloading(false)
                }, 500))
        }else {
            setFastDone(true);
            postDoneRequest(id, pass)
                .then(response => renderAllTodayHabits())
                .catch(error => alert(error))
                .finally(() => setTimeout(() => {
                    setIsloading(false)
                }, 500))
        }
    }

    return(
        <HabitS>
            <div>
                <HabitTitle>{name}</HabitTitle>
                <p>Sequência atual: <GreenText isGreen={fastDone}>{`${currentSequence} dias`}</GreenText></p>
                <p>Seu recorde: <GreenText isGreen={fastDone && currentSequence === highestSequence}>
                    {`${highestSequence} dias`}
                </GreenText></p>    
            </div>
            <Checkbox
                color={fastDone ? "#8FC549" : "#EBEBEB"}
                height="90px"
                width="90px"
                onClick={() => isLoading ? "" : varDone()}
            />
        </HabitS>
    )
}

