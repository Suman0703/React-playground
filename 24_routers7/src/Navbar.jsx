import { Link } from "react-router";
import'./Header.css'


export default function NavBar() {
    return (
        <div className="Header">
            <div>
                <Link className="link"><h2>Logo</h2></Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link className="link" to="/login">Login</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link className="link" to="/about">About</Link>
                    </li>
                </ul>
                 <ul>
                    <li>
                        <Link className="link" to="/college">College</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}