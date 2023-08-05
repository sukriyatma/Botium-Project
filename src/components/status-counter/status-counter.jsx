
import CircleRadialGradient from "../circle-radial-gradient/circle-radial-gradient";

function StatusCounter({index, id, color, total, name, changeListBotByStatusCounter}) {

    const onclick = () => {
        changeListBotByStatusCounter(id)
    }
    
    return (
        <div className="status-counter" onClick={onclick} key={index} id={id} style={{height: '5.2vw', width: '18vw', display: 'flex',
            backgroundColor: `rgba(46,51,90,0.26)`,
            boxShadow: '0px 0.2vw 0.2vw 0px rgba(0, 0, 0, 0.25)',
            borderRadius: '0.1vw',
            cursor: 'pointer'}}>

            <div style={{height:'100%', width: '0.6vw', backgroundColor: color, borderRadius: '0.1vw 0 0 0.1vw',
                boxShadow: `0px 0px 0.6vw 0px ${color}50`}}></div>

            <div style={{display: 'flex', justifyContent: 'space-between',height: '100%', width: '100%', 
                color:'white', fontFamily: 'Poppins',
                }}>
                <div style={{fontSize: '0.8vw', marginTop: '0.5vw', marginLeft: '1.1vw', textAlign: 'start'}}>
                    <p style={{margin: 0}}> {name} </p>
                    <p style={{fontWeight:700, fontSize: '2.3vw',margin: 0}}> {total} </p>
                </div>
                <CircleRadialGradient color= {color} />
            </div>
        </div>
    )
}

export default StatusCounter;