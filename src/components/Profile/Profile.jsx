

export default function Profile({userName}) {

    return (
        <div style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2.7vw" height="2.7vw" viewBox="0 0 71 71" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M47.3332 26.625C47.3332 29.7634 46.0864 32.7732 43.8673 34.9924C41.6481 37.2116 38.6382 38.4583 35.4998 38.4583C32.3614 38.4583 29.3516 37.2116 27.1324 34.9924C24.9132 32.7732 23.6665 29.7634 23.6665 26.625C23.6665 23.4866 24.9132 20.4767 27.1324 18.2575C29.3516 16.0383 32.3614 14.7916 35.4998 14.7916C38.6382 14.7916 41.6481 16.0383 43.8673 18.2575C46.0864 20.4767 47.3332 23.4866 47.3332 26.625ZM41.4165 26.625C41.4165 28.1942 40.7931 29.6991 39.6836 30.8087C38.574 31.9183 37.069 32.5416 35.4998 32.5416C33.9306 32.5416 32.4257 31.9183 31.3161 30.8087C30.2065 29.6991 29.5832 28.1942 29.5832 26.625C29.5832 25.0558 30.2065 23.5508 31.3161 22.4412C32.4257 21.3317 33.9306 20.7083 35.4998 20.7083C37.069 20.7083 38.574 21.3317 39.6836 22.4412C40.7931 23.5508 41.4165 25.0558 41.4165 26.625Z" fill="#555555"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.4999 2.95831C17.528 2.95831 2.95825 17.5281 2.95825 35.5C2.95825 53.4719 17.528 68.0416 35.4999 68.0416C53.4718 68.0416 68.0416 53.4719 68.0416 35.5C68.0416 17.5281 53.4718 2.95831 35.4999 2.95831ZM8.87492 35.5C8.87492 41.6829 10.9842 47.3747 14.5194 51.8951C17.0021 48.6347 20.205 45.9924 23.8779 44.1747C27.5508 42.357 31.5942 41.4131 35.6922 41.4166C39.7372 41.4128 43.7298 42.3323 47.3656 44.1051C51.0014 45.8779 54.1846 48.4573 56.6727 51.6466C59.236 48.2847 60.9618 44.3608 61.7075 40.1996C62.4532 36.0383 62.1972 31.7593 60.9608 27.7166C59.7244 23.6738 57.5431 19.9837 54.5974 16.9513C51.6517 13.919 48.0262 11.6317 44.0211 10.2787C40.0159 8.92574 35.746 8.54593 31.5649 9.17073C27.3838 9.79554 23.4116 11.407 19.9769 13.8718C16.5422 16.3365 13.7438 19.5838 11.8132 23.3448C9.88267 27.1058 8.87545 31.2724 8.87492 35.5ZM35.4999 62.125C29.3879 62.1342 23.4603 60.0315 18.7203 56.1728C20.6282 53.4415 23.1676 51.2115 26.1226 49.6724C29.0775 48.1334 32.3605 47.3309 35.6922 47.3333C38.9824 47.3307 42.2257 48.1131 45.1527 49.6154C48.0798 51.1178 50.6063 53.2969 52.5222 55.9716C47.7453 59.9556 41.7201 62.1337 35.4999 62.125Z" fill="#555555"/>
            </svg>
            <p style={{fontFamily: 'Poppins', fontWeight: 500, fontSize: '1vw', marginLeft: '0.6vw'}}>{userName}</p>
        </div>
    )
    
}