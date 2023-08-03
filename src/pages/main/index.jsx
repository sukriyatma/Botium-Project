import SideBarMenu from "../../components/sidebarmenu/sidebar.jsx";
import BotMonitor from "./bot-monitor/bot-monitor.jsx";

import {Component} from 'react'

export default class MainApp extends Component {

    render() {
        return (
            <>
                <SideBarMenu/>
                <BotMonitor userName={'Sukriyatma'}/>
            </>
        )
    }
}

