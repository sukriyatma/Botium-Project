
import './sidebar.css'
import dashboard from './asset/Dashboard-Icon.png'

function Sidebar() {
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
                marginTop: '40px'
            }}>

                <a href="#wadidau" className="btn-menu" style={{
                    fontFamily: 'Poppins',
                    fontWeight: 'normal',
                    fontSize: '1.1vw',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    maxWidth: '15vw',
                    alignItems: 'center',
                    marginBottom: '2vh'
                }}>
                    <img src={dashboard} alt="" style={{marginRight:'1vw', width: '1.5vw', height: '1.5vw'}}/>
                    Dashboard                    
                </a>
                 
            </div>
        </div>
    )
}

export default Sidebar;