import { useState } from "react"

export default function ListName({id,type,name, statusColor,setOnActive}) { 
    const [bgHoverColor, setbgHoverColor] = useState('')
    const isHoverLeave = () => {
        setbgHoverColor('')
    }

    const isHoverEnter = () => {
        setbgHoverColor('#232331')
    }

    const isClicked = () => {
        setOnActive(id)
    }

    return (
        <li onClick={isClicked} onMouseEnter={isHoverEnter} onMouseLeave={isHoverLeave} className="name" key={id} style={{width: '90%', height: '2.22vw',  display: 'flex', alignItems: 'center',  borderRadius:'0.8vw', cursor: 'pointer',
            backgroundColor: bgHoverColor, marginBottom: '1px'}}>
            {
                (type === 'bot')? 
                <svg xmlns="http://www.w3.org/2000/svg" width="0.5vw" height="0.4vw" viewBox="0 0 7 7" fill="none" style={{marginInline: '15px'}}>
                    <circle cx="3.5" cy="3.5" r="3.5" fill={statusColor}/>
                </svg> 
                : ''
            }
            <p style={{fontFamily: 'Poppins', fontWeight:'400', width: '95%'}}>{name}</p>
        </li>
    )
}