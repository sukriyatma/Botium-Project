
import React, { Fragment } from 'react';
import StatusCounter from '../../../components/status-counter/status-counter';
import TableList from '../../../components/table-list/table-list';
import ListName from '../../../components/list-name/list-name';
import DetailBot from '../../../components/detail-bot/detail-bot';
import SearchBox from '../../../components/SearchBox/SearchBox';
import Profile from '../../../components/Profile/Profile';

class BotMonitor extends React.Component {  

    constructor(props) {
        super(props)
        this.state = {
            status : {
                'ONLINE' : { name: "Online", color: "#7FD362", total : 0},
                'OFFLINE' :{ name: "Offline", color: "#C1C1C1", total : 0},
                'BAN' : { name: "Banned", color: "#E75858", total : 0}},
            list : [],
            activeData : null,
            rows: []
        }

        this.setOnActive = this.setOnActive.bind(this)
    }
    
    // Function to get data from database
    getData() {
        this.setState({
            list : [
                {name: 'BotAsu1', status: 'ONLINE', world2: 'world1', world3: 'world1', world4: 'world1'},
                {name: 'BotPemadam5', status: 'OFFLINE', world2: 'world111', world3: 'world1', world4: 'world1', world5: 'world1'},
                {name: 'Botasli', status: 'BAN', world2: 'world111', world3: 'world1', world4: 'world1', world5: 'world1'},
                {name: 'BotPemadam5', status: 'BAN', world2: 'world111', world3: 'world1', world4: 'world1', world5: 'world1'},
                {name: 'Botasli', status: 'BAN', world2: 'world111', world3: 'world1', world4: 'world1', world5: 'world1'},
                {name: 'BotPemadam5', status: 'BAN', world2: 'world111', world3: 'world1', world4: 'world1', world5: 'world1'},
                
            ] 
        }, async () => {
            const {list, status} = this.state
            const stat = status
            Object.values(stat).forEach(v=>(v.total=0))

            list.forEach(bot => (stat[bot.status].total++ ))
            this.setState({status: stat})
        })
    }

    setOnActive(index) {
        this.setState({
            activeData: index
        }, () => {

            const {list, activeData} = this.state
            const rows = []

            for (let i=0;i<Object.entries(list[activeData]).length; i+=3) {
                const row = Object.entries(list[activeData]).slice(i, i+3)
                rows.push(row)
            }
            
            this.setState({
                rows: rows
            })
            
        })
    }

    componentDidMount() {
        this.getData()
    }

    render () {

        return (
            <div style={{ width: '80vw', justifyContent: 'start', display: 'flex', flexDirection: 'column', alignItems: 'center', gridColumn: '3', marginTop: '70px'}}>

                <div style={{display: 'flex', flexDirection: 'row',width: '90%'}}>
                    <SearchBox/>
                    <Profile />
                </div>

                <p style={{fontFamily: 'Poppins', fontWeight: 500, fontSize: '25px', marginTop: '70px'}}>BOTS Monitor</p>

                <div style={{display: 'flex',marginTop: '10px', width: '90%'}} name="status-bot">
                    {
                        Object.entries(this.state.status).map(([key,value], idxStatus) => {
                                return <StatusCounter index={idxStatus} name={value.name} color={value.color} total={value.total}/>
                        })
                    }
                </div>

                <div style={{width: '90%', marginTop: '30px'}}>
                    <TableList 
                        listData= {
                            this.state.list.map( (r,i) =>
                                (<ListName type={'bot'} name={r.name} id={i} setOnActive={this.setOnActive} statusColor={this.state.status[r.status].color}/>)
                            )
                        }
                        listDataDetails= { 
                            <table style={{width: '100%'}}>
                                <tbody>
                                    {
                                        this.state.rows.map((row, idxColom) => {
                                            return (
                                                <tr key={idxColom}>
                                                    {
                                                        row.map(([key, value], idxItem) => {
                                                            return (
                                                                <td width={'200'} height={'75'}>
                                                                    {
                                                                        key==='status'? <DetailBot key={idxItem} title={key} value={value} statusColor={this.state.status[value].color} />
                                                                        : <DetailBot key={idxItem} title={key} value={value} /> 
                                                                    }
                                                                </td>
                                                            )
                                                        })   
                                                    }
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>  
                        }/>
                </div>

            </div>
        )
    }
}

export default BotMonitor