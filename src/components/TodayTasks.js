import { HabitS } from "./styleds/styleds";

export default function TodayTasks({ taskData }) {

    return(
        <HabitS>
            <div>
                <h4>{taskData.name}</h4>
                <p>Sequência atual: {taskData.currentSequence} dias</p>
                <p>Seu recorde: {taskData.highestSequence} dias</p>
            </div>
            <ion-icon name="checkbox"></ion-icon>
        </HabitS>
    )
}