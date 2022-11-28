import { footerIcons } from "./footer-icons";
import { Link } from 'react-router-dom'

export function Footer () {
    return (
        <div className="footer">
            {footerIcons.map((e, index) => (
                <Link to={`${e.link}`} key={index}>
                    <img src={`./logos/${e.src}`} />
                    <p>{e.name}</p>
                </Link>
            ))}
        </div>
    )
}