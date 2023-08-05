import { useState } from "react"

export default function ListName({id,type,name, statusColor, setOnActive, currentSelectedIdx}) { 
    const bgColor = '#232331'

    const [isOnHover, setOnHover] = useState(false)
    const setHover = () => {
        setOnHover(!isOnHover)
    }

    const clicked = () => {
        setOnActive(id)
    }

    // isClicked? bgHoverColor: ''
    // currentSelectedIdx === id? bgActiveColor: ''

    return (
        <li onClick={clicked} onMouseEnter={setHover} onMouseLeave={setHover} className="name" key={id} style={{width: '90%', height: '2.22vw',  display: 'flex', alignItems: 'center',  borderRadius:'0.8vw', cursor: 'pointer',
            backgroundColor: isOnHover || currentSelectedIdx===id? bgColor: '' , marginBottom: '0.05vw'}}>
            {
                (type === 'bot')? 
                <svg xmlns="http://www.w3.org/2000/svg" width="0.5vw" height="0.4vw" viewBox="0 0 7 7" fill="none" style={{marginInline: '0.8vw'}}>
                    <circle cx="3.5" cy="3.5" r="3.5" fill={statusColor}/>
                </svg> 
                : ''
            }
            <p style={{fontFamily: 'Poppins', fontWeight:'400', width: '95%', fontSize:'1vw'}}>{name}</p>
        </li>
    )
}