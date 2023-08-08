
import './rightsidebutton.css'

export default function RightSideButton({id, imageUrl}) {

    return (
        <div className='right-side-button' id={id}>
            <img src={imageUrl} alt={id} />
        </div>
    )
    
}