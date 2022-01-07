import { Habits, HabitsHeader, Page } from "./styleds/styleds";
import Menu from "./Menu";
import Topo from "./Topo";

export default function HistoryPage() {

    return(
        <Page>
            <Topo/>
            <Habits>
                <HabitsHeader>
                    Histórico
                </HabitsHeader>
                <p>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </p>
            </Habits>
            <Menu/>
        </Page>
    )
}