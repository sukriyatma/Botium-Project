import SideBarMenu from "../../components/sidebarmenu/sidebar.jsx";
import WorldMonitor from "./WorldMonitor/WorldMonitor.jsx";
import BotMonitor from "./bot-monitor/bot-monitor.jsx";

import {Component} from 'react'

export default class MainApp extends Component {

    menu = {
        botmonitor : <BotMonitor userName={'Sukriyatma'}/>,
        worldmonitor : <WorldMonitor userName={'Sukriyatma'}/>
    }

    constructor(props) {
        super(props)
        this.state = {
            activeMenu: 'botmonitor'
        }
        this.changeMenu = this.changeMenu.bind(this)
    }

    changeMenu(menu) {
        this.setState({activeMenu:menu})
    }

    render() {
        return (
            <>
                <SideBarMenu onclick={this.changeMenu}/>
                {
                    this.menu[this.state.activeMenu]
                }
            </>
        )
    }
}

