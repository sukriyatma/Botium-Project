

function CircleRadialGradient(props) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="200px" height="100" viewBox="0 100 200 100" fill="none" style={{borderRadius: '0px 0px 2px 0px'}}>
            
            <defs>
                <filter id="filter-gradient" x="0.81303" y="-22.187" width="258.374" height="258.374" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="24.0935" result="effect1_foregroundBlur_312_1259"/>
                </filter>
                <radialGradient id={"result-gradient-" + props.color } cx="0.5" cy="0" r="1.5" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 100) rotate(90) scale(130)">
                    <stop stopColor={props.color}/>
                    <stop offset="1" stopColor={props.color} stopOpacity="0"/>
                </radialGradient>
            </defs>
            <circle cx="100" cy="150" r="140" fill={`url(#result-gradient-${props.color})`} fillOpacity="0.25"/>
        </svg>        
    )
}

export default CircleRadialGradient