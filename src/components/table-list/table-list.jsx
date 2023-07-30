import './table-list.css'

export default function TableList(props) {

    return (
    
        <>
            <div style={{width: '100%', backgroundColor: '#14141A', borderRadius: '15px', border: '1px solid #1F1F2B'}}>
                <p style={{height: '5%', paddingLeft: '1.961vw',padding:'10px', textAlign: 'left', fontFamily: 'Poppins', fontWeight: '600', fontSize: '17px'}}>List Bots</p>
                <div className="table-list-main" style={{display: 'flex', height: '95%'}}>
                    <div className="list-name" style={{width: '35%', height: '100%'}}>
                        <p style={{border: '1px solid #1F1F2B', borderLeft: 'none', fontFamily: 'Poppins', fontWeight: '500'}}>Name</p>
                        <ul className="list-data" style={{borderRight: '1px solid #1F1F2B', height: '250px', padding: '10px', paddingLeft: '30px', margin: '0', overflow: 'auto'}}>
                            {props.listData}
                        </ul>
                    </div>

                    <div className="list-details" style={{width: '65%', }}>
                        <p style={{borderTop: '1px solid #1F1F2B', borderBottom:'1px solid #1F1F2B', fontFamily: 'Poppins', fontWeight: '500'}}>Details</p>
                        <div className="list-data-details" style={{ height: 'auto', alignItems: 'center'}}>
                            { props.listDataDetails }
                        </div>
                    </div>

                </div>

            </div>
        
            {/* <table className='table-list' width={'100%'}>
                <tr><td colSpan={2}><p style={{height: '5%', paddingLeft: '1.961vw',padding:'10px', textAlign: 'left', fontFamily: 'Poppins', fontWeight: '600', fontSize: '17px'}}>List Bots</p></td></tr>
                
                <tr>
                    <td className='table-data' width={'35%'}>Name</td>
                    <td className='table-data' width={'65%'}>Details</td>
                </tr>

                <tr>
                    <td className='table-data'>
                        <ul className="list-data" style={{ height: '250px', padding: '10px', paddingLeft: '30px', margin: '0', overflow: 'auto'}}>
                            {props.listData}
                        </ul>
                    </td>

                    <td className='table-data'>
                        <div className="list-data-details" style={{ height: 'auto', alignContent: 'center'}}>
                            { props.listDataDetails }
                        </div>
                    </td>
                </tr>
            
            </table> */}
        </>

        
    )
}
