import { Link } from 'react-router';
import './header.css';
import logo from './../../assets/icons/logo.svg';
import { icons } from '../../assets/images/imageFetcher';

// Menu component with manual inputs. Will upgrade to a dynamic menu from the App.js later.
export const Header = () => {

    const toggleMenu = e => {
        console.log(e.currentTarget.parentNode);
        const divCountainer = e.currentTarget.parentNode;

        if (divCountainer.classList.contains('closed-nav')) {  
            divCountainer.classList.replace('closed-nav', 'none');
            divCountainer.parentNode.classList.remove('none-visible');
            divCountainer.parentNode.childNodes[1].classList.replace('none', 'wrapper');
        }

        if (divCountainer.classList.contains('wrapper')) {
            divCountainer.classList.replace('wrapper', 'none');
            divCountainer.parentNode.classList.add('none-visible');
            divCountainer.parentNode.childNodes[0].classList.replace('none', 'closed-nav');
        }
    }

    return (
        <nav className="nav none-visible">
            <div className="closed-nav">
                <img src={icons['hamb']} alt="hamburg menu" onClick={toggleMenu} />
            </div>

            <div className="none">
            <Link to={'/'} className="logo"><img src={logo} alt="Logo from the game Deadlock" /></Link>
            <img src={icons['x']} alt="X button" className='nav-x' onClick={toggleMenu}/>
            <div className="nav-content">
                <ul className="nav-content-ul">
                    <li className="nav-content-li"><Link to="/"><h2>Homepage</h2></Link></li>
                    <li className="nav-content-li"><Link to="/heroes"><h2>Heroes</h2></Link></li>
                    <li className="nav-content-li"><Link to="/items"><h2>Items</h2></Link></li>
                    <li className="nav-content-li"><Link to="/guide"><h2>Guide</h2></Link></li>
                </ul>
                <hr className="separator" />
                <div className="nav-content-policy">
                    <Link to={'/privacy-policy'}><p className='p-s'>Privacy Policy</p></Link>
                    <Link to={'/terms-of-services'}><p className='p-s'>Terms of Services</p></Link>
                </div>
            </div>
            </div>
        </nav>
    );
}