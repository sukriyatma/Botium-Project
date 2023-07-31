
import CircleRadialGradient from "../circle-radial-gradient/circle-radial-gradient";

function StatusCounter(props) {

    return (
        <div className="status-counter" key={props.index} style={{height: 'uh', width: '330px', display: 'flex', marginRight: '25px',
            backgroundColor: `rgba(46,51,90,0.26)`,
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            borderRadius: '2px',
            cursor: 'pointer'}}>

            <div style={{height:'100%', width: '10px', backgroundColor: props.color, borderRadius: '2px 0 0 2px',
                boxShadow: `0px 0px 12px 0px ${props.color}50`}}></div>

            <div style={{display: 'flex', justifyContent: 'space-between',height: '100%', width: '100%', 
                color:'white', fontFamily: 'Poppins',
                }}>
                <div style={{fontSize: 15, marginTop: 10, marginLeft: 20, textAlign: 'start'}}>
                    <p style={{margin: 0}}> {props.name} </p>
                    <p style={{fontWeight:700, fontSize: 45,margin: 0}}> {props.total} </p>
                </div>
                <CircleRadialGradient color= {props.color} />
            </div>
        </div>
    )
}

export default StatusCounter;