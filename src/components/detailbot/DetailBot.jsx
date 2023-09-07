

export default function DetailBot({title, value, statusColor}) {
    return (
        <div>
            <p style={{fontFamily: 'Poppins', fontWeight: '400', color: '#818287', fontSize: '0.6vw'}}>{title}</p>
            <p style={{fontFamily: 'Poppins', fontWeight: '700', color: statusColor? statusColor:'', fontSize: '1.1vw'}}>{value}</p>
        </div>
    )

}