import './table-list.css'

export default function TableList(props) {

    return (
    
        <>
            <div style={{width: '100%', backgroundColor: '#14141A', borderRadius: '0.8vw', border: '0.05vw solid #1F1F2B'}}>
                <p style={{height: '5%', paddingLeft: '2vw', padding:'0.5vw', textAlign: 'left', fontFamily: 'Poppins', fontWeight: '600', fontSize: '1vw'}}>List Bots</p>
                <div className="table-list-main" style={{display: 'flex', height: '95%'}}>
                    <div className="list-name" style={{width: '35%', height: '100%'}}>
                        <p style={{border: '0.05vw solid #1F1F2B', borderLeft: 'none', fontFamily: 'Poppins', fontWeight: '500',fontSize: '1.1vw'}}>Name</p>
                        <ul className="list-data" style={{borderRight: '0.05vw solid #1F1F2B', height: '11.1vw', padding: '0.5vw', paddingLeft: '1.66vw', margin: '0', overflow: 'auto'}}>
                            {props.listData}
                        </ul>
                    </div>

                    <div className="list-details" style={{width: '65%', }}>
                        <p style={{borderTop: '0.05vw solid #1F1F2B', borderBottom:'0.05vw solid #1F1F2B', fontFamily: 'Poppins', fontWeight: '500', fontSize: '1.1vw'}}>Details</p>
                        <div className="list-data-details" style={{ height: '11.66vw', overflow: 'auto'}}>
                            { props.listDataDetails }
                        </div>
                    </div>

                </div>

            </div>
        </>

        
    )
}
