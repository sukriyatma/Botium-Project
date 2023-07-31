import './SearchBox.css'

export default function SearchBox(props) {

    return (
        <div style={{width: '75%', borderRadius: '13px', backgroundColor: '#161623', height: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: '20px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g opacity="0.5" clip-path="url(#clip0_266_1280)">
                    <path d="M8.195 0C12.722 0 16.391 3.62 16.391 8.084C16.3924 10.0213 15.6898 11.8931 14.414 13.351L19.802 18.824C19.8662 18.8889 19.9169 18.9659 19.9509 19.0506C19.985 19.1353 20.0018 19.2259 20.0004 19.3172C19.999 19.4084 19.9794 19.4985 19.9428 19.5821C19.9061 19.6657 19.8532 19.7411 19.787 19.804C19.6525 19.9319 19.4733 20.0021 19.2876 19.9995C19.102 19.9969 18.9248 19.9217 18.794 19.79L13.411 14.32C11.9379 15.5199 10.095 16.1732 8.195 16.169C3.67 16.169 0 12.549 0 8.084C0 3.62 3.67 0 8.195 0ZM8.195 1.386C4.445 1.386 1.405 4.385 1.405 8.084C1.405 11.784 4.445 14.783 8.195 14.783C11.945 14.783 14.986 11.783 14.986 8.084C14.986 4.384 11.946 1.386 8.196 1.386H8.195Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_266_1280">
                        <rect width="20" height="20" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <input type="text" placeholder="Search" spellCheck='false' style={{width: '100%', height: '95%', borderRadius: '13px', backgroundColor: '#161623', border: 'none', fontFamily: 'Poppins', fontWeight: 500 }}/>
        </div>
    )
    
}