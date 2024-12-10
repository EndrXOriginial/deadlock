import { Link } from 'react-router';
import './header.css';

// Menu component with manual inputs. Will upgrade to a dynamic menu from the App.js later.
export const Header = () => {
    return (
        <nav className="nav">
            <div className="wrapper nav-content">
                <a href="*" className="logo"><img src="" alt="Logo from the game Deadlock" /></a>
                <ul className="nav-content-ul">
                    <li className="nav-content-li"><Link to="/">Home</Link></li>
                    <li className="nav-content-li"><Link to="/Items">Items</Link></li>
                    <li className="nav-content-li"><Link to="/Heroes">Heroes</Link></li>
                    <li className="nav-content-li"><Link to="/Guide">Guide</Link></li>
                </ul>
            </div>
        </nav>
    );
}