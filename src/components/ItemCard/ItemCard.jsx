import './ItemCard.css'

export default function ItemCard({itemid, name,total, imgUrl}) {
       return (
        <div className='item-card'>
            <span id='item-image'>
                <img src={imgUrl} alt="" style={{width: '90px'}}/>
            </span>
            <p id='item-counter'>{total}</p>
            <p id='item-name'>{`${name} ( ${itemid} )`}</p>
        </div>
    )
}