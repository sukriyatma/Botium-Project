
import './sidebar.css'
import dashboard from './asset/Dashboard-Icon.png'

function Sidebar({onclick}) {

    const clicked = (target) => {
        // onclick()
        console.log(target)
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

            <div className="main-menus" style={{
                display : 'grid',
                marginLeft: '2vw',
                marginTop: '2.2vw'
            }}>

                <a href='/botmonitor' className="btn-menu" style={{
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    fontSize: '1.1vw',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    maxWidth: '15vw',
                    alignItems: 'center',
                    marginBottom: '2vh'
                }}>
                    <img src={dashboard} alt="" style={{marginRight:'1vw', width: '1.5vw', height: '1.5vw'}}/>
                    Bot Monitor                    
                </a>

                <a href="/worldmonitor" className="btn-menu" style={{
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    fontSize: '1.1vw',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    maxWidth: '15vw',
                    alignItems: 'center',
                    marginBottom: '2vh'
                }}>
                    <img src={dashboard} alt="" style={{marginRight:'1vw', width: '1.5vw', height: '1.5vw'}}/>
                    World Monitor                    
                </a>
                 
            </div>
        </div>
    )
}

export default Sidebar;