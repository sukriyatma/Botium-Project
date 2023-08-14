
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
            selectedBotGeneral : [],
            selectedBotInventory : []
        }

        this.setOnActive = this.setOnActive.bind(this)
        this.changeListBotByStatusCounter = this.changeListBotByStatusCounter.bind(this)
    }
    
    // Function to get data from database
    getData() {

        const data = [
            {
                general : {
                    name: 'BotAsu1', status: 'ONLINE', world2: 'world1', world3: 'world1', world4: 'world1', world5: 'world1', world6: 'world1', world7: 'world1'
                },
                inventory : [
                    {
                        id: 5666,
                        name: 'Laser Grid',
                        total: 6,
                        image: 'https://static.wikia.nocookie.net/growtopia/images/8/8f/ItemSprites.png/revision/latest/window-crop/width/32/x-offset/2304/y-offset/544/window-width/32/window-height/32?format=png&fill=cb-20230727150903'
                    },
                    {
                        id: 5666,
                        name: 'Laser Grid',
                        total: 6,
                        image: 'https://static.wikia.nocookie.net/growtopia/images/8/8f/ItemSprites.png/revision/latest/window-crop/width/32/x-offset/2304/y-offset/544/window-width/32/window-height/32?format=png&fill=cb-20230727150903'
                    }
                ]
            },
            {
                general : {
                    name: 'BotAsu2', status: 'OFFLINE', world2: 'world1', world3: 'world1', world4: 'world1', world5: 'world1', world6: 'world1', world7: 'world1'
                },
                inventory : [
                    
                ]
            },
        ]

        this.listBot = data
        this.setState(
            {list : data}, 
            async () => {
            const {list, status} = this.state
            const stat = status
            Object.values(stat).forEach(v=>(v.total=0))

            list.forEach(bot => (stat[bot.general.status].total++ ))
            this.setState({status: stat})
        })
    }

    setOnActive(index) {
        this.setState({
            idxSelectedBot: index
        }, () => {

            const {list, idxSelectedBot} = this.state
            const selectedBotGeneral = []
            const selectedBotInventory = []

            for (let i=0;i<Object.entries(list[idxSelectedBot].general).length; i+=3) {
                const row = Object.entries(list[idxSelectedBot].general).slice(i, i+3)
                selectedBotGeneral.push(row)
            }

            for (let i=0;i<list[idxSelectedBot].inventory.length; i+=2) {
                const row = list[idxSelectedBot].inventory.slice(i, i+2)
                selectedBotInventory.push(row)
            }
            
            this.setState({
                selectedBotGeneral: selectedBotGeneral,
                selectedBotInventory: selectedBotInventory
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
                        title={'List Bots'} 
                        listData= {
                            this.state.list.map( (r,i) =>
                                (<ListName type={'bot'} name={r.general.name} id={i} currentSelectedIdx={this.state.idxSelectedBot} setOnActive={this.setOnActive} statusColor={this.state.status[r.general.status].color}/>)
                            )
                        }
                        listDataDetails= { 
                            <table style={{width: '100%'}}>
                                <tbody>
                                    {
                                        this.state.selectedBotGeneral.map((row, idxColom) => {
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
                        }
                        listDataMoreDetails= {
                            this.state.selectedBotInventory.length > 0 &&
                            <table style={{width: '100%'}}>
                                <tbody>
                                    {
                                        this.state.selectedBotInventory.map((row, idxColom) => {
                                            return <tr>
                                                {
                                                    row.map((value, idxItem) => {
                                                        return (
                                                            <td width={'11vw'} height={'9vw'} style={{padding: '0.83vw'}}>
                                                                    {<ItemCard key={value.id} itemid={value.id} name={value.name} total={value.total} imgUrl={value.image} />}
                                                            </td>
                                                        )
                                                    })
                                                }    
                                            </tr>
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