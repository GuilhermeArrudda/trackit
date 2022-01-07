import Topo from "./Topo"
import Menu from "./Menu";
import { Page } from "./styleds/styleds"
import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { getTodayTasks } from "../Tools/Server";
import TodayTasks from "./TodayTasks";


export default function TodayPage(){
    const {token} = useContext(UserContext);
    const [todayTasks, setTodayTasks] = useState([]);
    
    useEffect(() => {
        const pass = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }
        getTodayTasks(pass)
        .then(response => setTodayTasks(response.data))
        .catch(error => alert(error))
    }, [])

    return (
        <Page>
            <Topo/>
                {todayTasks.map(taskData => <TodayTasks taskData={taskData}/>)}
            <Menu/>
        </Page>
    )
}