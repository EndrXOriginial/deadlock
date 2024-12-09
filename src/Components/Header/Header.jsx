import './header.css';

// Menu component with manual inputs. Will upgrade to a dynamic menu from the App.js later.
export const Header = () => {
    return (
        <nav className="nav">
            <div className="wrapper nav-content">
                <img src="" alt="Logo from the game Deadlock" />
                <ul className="nav-content-ul">
                    <li className="nav-content-li"><a href="*">Home</a></li>
                    <li className="nav-content-li"><a href="*">Items</a></li>
                    <li className="nav-content-li"><a href="*">Heroes</a></li>
                    <li className="nav-content-li"><a href="*">Guide</a></li>
                </ul>
            </div>
        </nav>
    );
}