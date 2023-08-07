import React, { useState } from 'react'
import './sidebar.css'
import dashboard from './asset/Dashboard-Icon.png'
// import { Link } from 'react-router-dom'

function Sidebar({sidebarItem, onclick}) {
    
    const clicked = (event) => {
        onclick(event.currentTarget.id)
    }

    return (
        <div className="side-bar-menu">

            <a href='http://localhost:5173/' style={{
                fontSize: '2.2vw', 
                fontFamily: "Ubuntu", 
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer',
                height: '5vw'}
                }>Botium</a>

            <div className="main-menus">
                {
                    Object.entries(sidebarItem).map(([keys, item]) => (
                            <div onClick={clicked} id={keys} className="btn-menu" key={keys}>
                                <img src={dashboard} alt="" style={{marginRight:'1vw', width: '1.5vw', height: '1.5vw'}}/>
                                <p>{item.name}</p>                    
                            </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar;