
import CircleRadialGradient from "../circle-radial-gradient/circle-radial-gradient";

function StatusCounter({index, id, color, total, name, changeListBotByStatusCounter}) {

    const onclick = () => {
        changeListBotByStatusCounter(id)
    }
    
    return (
        <div className="status-counter" onClick={onclick} key={index} id={id} style={{height: 'uh', width: '330px', display: 'flex', marginRight: '25px',
            backgroundColor: `rgba(46,51,90,0.26)`,
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            borderRadius: '2px',
            cursor: 'pointer'}}>

            <div style={{height:'100%', width: '10px', backgroundColor: color, borderRadius: '2px 0 0 2px',
                boxShadow: `0px 0px 12px 0px ${color}50`}}></div>

            <div style={{display: 'flex', justifyContent: 'space-between',height: '100%', width: '100%', 
                color:'white', fontFamily: 'Poppins',
                }}>
                <div style={{fontSize: 15, marginTop: 10, marginLeft: 20, textAlign: 'start'}}>
                    <p style={{margin: 0}}> {name} </p>
                    <p style={{fontWeight:700, fontSize: 45,margin: 0}}> {total} </p>
                </div>
                <CircleRadialGradient color= {color} />
            </div>
        </div>
    )
}

export default StatusCounter;