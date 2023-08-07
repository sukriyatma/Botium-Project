
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from "react";
import SideBarMenu from "../../components/sidebarmenu/sidebar.jsx";
// import ChildRoutes from '../../routes.jsx'
import BotMonitor from "./bot-monitor/bot-monitor.jsx";
import WorldMonitor from "./WorldMonitor/WorldMonitor.jsx";

export default function Layout() {
    
    const [details, setDetails] = useState('botmonitor')
    const sidebarItem = {
        botmonitor : {
            name: 'Bots Monitor',
            comp: () => (<BotMonitor/>),
        },
        worldmonitor : {
            name: 'Worlds Monitor',
            comp: () => (<WorldMonitor/>)
        }
    }

    const changeDetails = (id) => {
        setDetails(id)
    }

    return (
        <div style={{display: 'flex', width: '100vw', height: '100vh'}}>
            <SideBarMenu sidebarItem={sidebarItem} onclick={changeDetails}/>
            {sidebarItem[details] && sidebarItem[details].comp()}
        </div>
    )

}

