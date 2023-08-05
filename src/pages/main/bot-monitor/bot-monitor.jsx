
import React from 'react';
import StatusCounter from '../../../components/status-counter/status-counter';
import TableList from '../../../components/table-list/table-list';
import ListName from '../../../components/list-name/list-name';
import DetailBot from '../../../components/detail-bot/detail-bot';
import SearchBox from '../../../components/SearchBox/SearchBox';
import Profile from '../../../components/Profile/Profile';
import ItemCard from '../../../components/ItemCard/ItemCard';

class BotMonitor extends React.Component {  

    listBot = []

    constructor(props) {
        super(props)
        this.state = {
            status : {
                'ONLINE' : { name: "Online", color: "#7FD362", total : 0},
                'OFFLINE' :{ name: "Offline", color: "#C1C1C1", total : 0},
                'BAN' : { name: "Banned", color: "#E75858", total : 0}},
                
            list : [],
            idxSelectedBot : null,
            selectedBotDetails : []
        }

        this.setOnActive = this.setOnActive.bind(this)
        this.changeListBotByStatusCounter = this.changeListBotByStatusCounter.bind(this)
    }
    
    // Function to get data from database
    getData() {

        const data = [
            {name: 'BotAsu1', status: 'ONLINE', world2: 'world1', world3: 'world1', world4: 'world1', world5: 'world1', world6: 'world1', world7: 'world1'},
            {name: 'BotPemadam5', status: 'OFFLINE', world2: 'world111', world3: 'world1', world4: 'world1', world5: 'world1'},
            {name: 'Botasli', status: 'BAN', world2: 'world111', world3: 'world1', world4: 'world1', world5: 'world1'},
            {name: 'BotPemadam5', status: 'BAN', world2: 'world111', world3: 'world1', world4: 'world1', world5: 'world1'},
            {name: 'Botasli', status: 'BAN', world2: 'world111', world3: 'world1', world4: 'world1', world5: 'world1'},
            {name: 'BotPemadam5', status: 'BAN', world2: 'world111', world3: 'world1', world4: 'world1', world5: 'world1'},
            {name: 'BotOnline', status: 'ONLINE', world2: 'world1', world3: 'world1', world4: 'world1'},
        ]

        this.listBot = data
        this.setState(
            {list : data}, 
            async () => {
            const {list, status} = this.state
            const stat = status
            Object.values(stat).forEach(v=>(v.total=0))

            list.forEach(bot => (stat[bot.status].total++ ))
            this.setState({status: stat})
        })
    }

    setOnActive(index) {
        this.setState({
            idxSelectedBot: index
        }, () => {

            const {list, idxSelectedBot} = this.state
            const selectedBotDetails = []

            for (let i=0;i<Object.entries(list[idxSelectedBot]).length; i+=3) {
                const row = Object.entries(list[idxSelectedBot]).slice(i, i+3)
                selectedBotDetails.push(row)
            }
            
            this.setState({
                selectedBotDetails: selectedBotDetails
            })
            
        })
    }

    changeListBotByStatusCounter(status) {
        const botByStatusCounter = []
        for (let list of this.listBot) {
            if (list.status === status) {
                botByStatusCounter.push(list)
            }
        }

        this.setState({list:botByStatusCounter})
    }

    componentDidMount() {
        this.getData()
    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevState.idxSelectedBot)
    // }

    render () {

        return (
            <div style={{ width: '80%', justifyContent: 'start', display: 'flex', flexDirection: 'column', alignItems: 'center', gridColumn: '3', marginTop: '3.8vw'}}>

                <div style={{display: 'flex', flexDirection: 'row', width: '90%'}}>
                    <SearchBox/>
                    <Profile userName={this.props.userName}/>
                </div>

                <p style={{fontFamily: 'Poppins', fontWeight: 500, fontSize: '1.4vw', marginTop: '3.9vw', width:'90%', textAlign: 'left'}}>BOTS Monitor</p>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(20vw, 1fr))',marginTop: '0.5vw', width: '90%'}} name="status-bot">
                    {
                        Object.entries(this.state.status).map(([key,value], idxStatus) => {
                                return <StatusCounter index={idxStatus} id={key} name={value.name} color={value.color} total={value.total} changeListBotByStatusCounter={this.changeListBotByStatusCounter}/>
                        })
                    }
                </div>

                <div style={{width: '90%', marginTop: '1.6vw'}}>
                    <TableList 
                        listData= {
                            this.state.list.map( (r,i) =>
                                (<ListName type={'bot'} name={r.name} id={i} currentSelectedIdx={this.state.idxSelectedBot} setOnActive={this.setOnActive} statusColor={this.state.status[r.status].color}/>)
                            )
                        }
                        listDataDetails= { 
                            <table style={{width: '100%'}}>
                                <tbody>
                                    {
                                        this.state.selectedBotDetails.map((row, idxColom) => {
                                            return (
                                                <tr key={idxColom}>
                                                    {
                                                        row.map(([key, value], idxItem) => {
                                                            return (
                                                                <td width={'200px'} height={'75px'}>
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

                <ItemCard imgUrl={'https://static.wikia.nocookie.net/growtopia/images/8/8f/ItemSprites.png/revision/latest/window-crop/width/32/x-offset/2304/y-offset/544/window-width/32/window-height/32?format=png&fill=cb-20230727150903'}/>
                <ItemCard imgUrl={'https://static.wikia.nocookie.net/growtopia/images/8/8f/ItemSprites.png/revision/latest/window-crop/width/32/x-offset/3296/y-offset/1024/window-width/32/window-height/32?format=png&fill=cb-20230727150903'}/>
            </div>
        )
    }
}

export default BotMonitor