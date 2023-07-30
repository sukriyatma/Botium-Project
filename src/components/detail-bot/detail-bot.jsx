

export default function DetailBot({title, value, statusColor}) {
    return (
        <div>
            <p style={{fontFamily: 'Poppins', fontWeight: '400', color: '#818287', fontSize: '12px'}}>{title}</p>
            <p style={{fontFamily: 'Poppins', fontWeight: '700', color: statusColor? statusColor:'', fontSize: '20px'}}>{value}</p>
        </div>
    )

}