import React from "react";
import TableList from '../../../components/table-list/table-list';
import DetailBot from '../../../components/detail-bot/detail-bot';
import SearchBox from '../../../components/SearchBox/SearchBox';
import Profile from '../../../components/Profile/Profile';
import ItemCard from '../../../components/ItemCard/ItemCard';
import ListName from "../../../components/list-name/list-name";

export default class WorldMonitor extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list : [],
            idxSelectedWorld : null,
            selectedWorldDetails : []
        }

        this.setOnActive = this.setOnActive.bind(this)
    }

    getData() {

        const data = [
            {
                name: 'WORLDAUTO1',
                items: [
                    {
                        id: 5666,
                        name: 'Laser Grid',
                        total: 6,
                        image: 'https://static.wikia.nocookie.net/growtopia/images/8/8f/ItemSprites.png/revision/latest/window-crop/width/32/x-offset/2304/y-offset/544/window-width/32/window-height/32?format=png&fill=cb-20230727150903'
                    },
                    {
                        id: 1631,
                        name: 'World Lock',
                        total: 34,
                        image: 'https://static.wikia.nocookie.net/growtopia/images/8/8f/ItemSprites.png/revision/latest/window-crop/width/32/x-offset/3296/y-offset/1024/window-width/32/window-height/32?format=png&fill=cb-20230727150903'
                    },
                    {
                        id: 1631,
                        name: 'World Lock',
                        total: 34,
                        image: 'https://static.wikia.nocookie.net/growtopia/images/8/8f/ItemSprites.png/revision/latest/window-crop/width/32/x-offset/3296/y-offset/1024/window-width/32/window-height/32?format=png&fill=cb-20230727150903'
                    },
                    {
                        id: 1631,
                        name: 'World Lock',
                        total: 34,
                        image: 'https://static.wikia.nocookie.net/growtopia/images/8/8f/ItemSprites.png/revision/latest/window-crop/width/32/x-offset/3296/y-offset/1024/window-width/32/window-height/32?format=png&fill=cb-20230727150903'
                    },
                    {
                        id: 1631,
                        name: 'World Lock',
                        total: 34,
                        image: 'https://static.wikia.nocookie.net/growtopia/images/8/8f/ItemSprites.png/revision/latest/window-crop/width/32/x-offset/3296/y-offset/1024/window-width/32/window-height/32?format=png&fill=cb-20230727150903'
                    },
                    {
                        id: 1631,
                        name: 'World Lock',
                        total: 34,
                        image: 'https://static.wikia.nocookie.net/growtopia/images/8/8f/ItemSprites.png/revision/latest/window-crop/width/32/x-offset/3296/y-offset/1024/window-width/32/window-height/32?format=png&fill=cb-20230727150903'
                    },
                    {
                        id: 1631,
                        name: 'World Lock',
                        total: 34,
                        image: 'https://static.wikia.nocookie.net/growtopia/images/8/8f/ItemSprites.png/revision/latest/window-crop/width/32/x-offset/3296/y-offset/1024/window-width/32/window-height/32?format=png&fill=cb-20230727150903'
                    }
                ] 
            }
        ]
        this.setState({list : data})
    }

    setOnActive(index) {
        this.setState({
            idxSelectedWorld: index
        }, () => {

            const {list, idxSelectedWorld} = this.state
            const selectedWorldDetails = []

            for (let i=0;i<Object.entries(list[idxSelectedWorld].items).length; i+=2) {
                const row = Object.entries(list[idxSelectedWorld].items).slice(i, i+2)
                selectedWorldDetails.push(row)
            }
            
            this.setState({
                selectedWorldDetails: selectedWorldDetails
            })
            
        })
    }

    componentDidMount() {
        this.getData()
    }

    render(){
        return (
            <div style={{ width: '80%', justifyContent: 'start', display: 'flex', flexDirection: 'column', alignItems: 'center', gridColumn: '3', marginTop: '3.8vw'}}>
                <div style={{display: 'flex', flexDirection: 'row', width: '90%'}}>
                    <SearchBox/>
                    <Profile userName={'sukriyatma'}/>
                </div>
                <p style={{fontFamily: 'Poppins', fontWeight: 500, fontSize: '1.4vw', marginTop: '3.9vw', width:'90%', textAlign: 'left'}}>WORLDS Monitor</p>
                <div style={{width: '90%', marginTop: '1.6vw'}}>
                    <TableList
                        title={'List World'} 
                        listData= {
                            this.state.list.map( (r,i) =>
                                (<ListName type={'world'} name={r.name} id={i} currentSelectedIdx={this.state.idxSelectedWorld} setOnActive={this.setOnActive}/>)
                            )
                        }
                        listDataDetails= { 
                            <table style={{width: '100%'}}>
                                <tbody>
                                    {
                                        this.state.selectedWorldDetails.map((row, idxColom) => {
                                            return (
                                                <tr key={idxColom}>
                                                    {
                                                        row.map(([key, value], idxItem) => {
                                                            return (
                                                                <td width={'200px'} height={'75px'} style={{verticalAlign: 'center'}}>
                                                                    {
                                                                        <ItemCard key={value.id} itemid={value.id} name={value.name} total={value.total} imgUrl={value.image} />
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