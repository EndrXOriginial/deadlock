import './header.css';
import logo from '../../logo.svg';

export const Header = ({menu}) => {

    return (
        <nav>
            <img src={logo} alt="logo of the game Deadlock" />
            <ul>
                {
                    menu.map(page => {
                        return <li><a href={page}>{page}</a></li>
                    })
                }
            </ul>
        </nav>
    );
}