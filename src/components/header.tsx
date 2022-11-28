export function Header(header: {text: string, username?: string}) {
    return (
    <div className='header'>
        <div className='header__logo'>
            <img src="../logos/logo-smartmed.svg" alt="smartmed" />
        </div>

        <div className="header__user">
            <h1>{header.text}<span>{header.username}</span></h1>
            <img src="../logos/test-img.jpg" alt="" />
        </div>
    </div>
    )
}