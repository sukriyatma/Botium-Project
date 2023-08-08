
import './rightsidebutton.css'

export default function RightSideButton({id, imageUrl, onclick}) {

    const clicked = (event) => {
        onclick(event.currentTarget.id)
    }

    return (
        <div onClick={clicked} className='right-side-button' id={id}>
            <img src={imageUrl} alt={id} />
        </div>
    )
    
}