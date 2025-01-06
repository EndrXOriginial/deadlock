import { Link } from 'react-router';
import './header.css';
import logo from './../../assets/icons/logo.svg';
import { icons } from '../../assets/images/imageFetcher';

// Menu component with manual inputs. Will upgrade to a dynamic menu from the App.js later.
export const Header = () => {

    const toggleMenu = e => {
        const divCountainer = e.currentTarget.parentNode;

        if (divCountainer.classList.contains('closed-nav')) {
            divCountainer.childNodes[0].classList.remove('is-active');
            setTimeout(() => {
            divCountainer.classList.replace('closed-nav', 'none');
            divCountainer.parentNode.classList.remove('none-visible');
            divCountainer.parentNode.childNodes[1].classList.replace('none', 'wrapper');
            }, 100)
            setTimeout(() => {
                let navContent = divCountainer.parentNode.childNodes[1].childNodes[2];

                for (let i = 0; i < navContent.childNodes.length; i++) {
                    let element = navContent.childNodes[i];
                    if (element.childNodes.length != 0) {
                        for (let j = 0; j < element.childNodes.length; j++) {
                            console.log(element.childNodes[j]);
                            element.childNodes[j].classList.add('is-active');
                        }
                    } else {
                        element.classList.add('is-active');
                    }
                }
            }, 550);
        }

        if (divCountainer.classList.contains('wrapper')) {
            let navContent = divCountainer.parentNode.childNodes[1].childNodes[2];

                for (let i = 0; i < navContent.childNodes.length; i++) {
                    let element = navContent.childNodes[i];
                    if (element.childNodes.length != 0) {
                        for (let j = 0; j < element.childNodes.length; j++) {
                            console.log(element.childNodes[j]);
                            element.childNodes[j].classList.remove('is-active');
                        }
                    } else {
                        element.classList.remove('is-active');
                    }
                }
            setTimeout(()=> {
            divCountainer.classList.replace('wrapper', 'none');
            divCountainer.parentNode.classList.add('none-visible');
            }, 300)
            setTimeout(() => {
                divCountainer.parentNode.childNodes[0].classList.replace('none', 'closed-nav');
            }, 400);
            setTimeout(() => {
                divCountainer.parentNode.childNodes[0].childNodes[0].classList.add('is-active');
            }, 550);
            
        }
    }

    return (
        <nav className="nav none-visible">
            <div className="closed-nav">
                <img src={icons['hamb']} alt="hamburg menu" className='is-active' onClick={toggleMenu} data-scrolly='from-top'/>
            </div>

            <div className="none">
            <Link to={'/'} className="logo"><img src={logo} alt="Logo from the game Deadlock" /></Link>
            <img src={icons['x']} alt="X button" className='nav-x' onClick={toggleMenu}/>
            <div className="nav-content">
                <ul className="nav-content-ul">
                    <li className="nav-content-li" data-scrolly='from-left'><Link to="/"><h2>Homepage</h2></Link></li>
                    <li className="nav-content-li" data-scrolly='from-left'><Link to="/heroes"><h2>Heroes</h2></Link></li>
                    <li className="nav-content-li" data-scrolly='from-left'><Link to="/items"><h2>Items</h2></Link></li>
                    <li className="nav-content-li" data-scrolly='from-left'><Link to="/guide"><h2>Guide</h2></Link></li>
                </ul>
                <hr className="separator" data-scrolly='from-left'/>
                <div className="nav-content-policy">
                    <Link to={'/privacy-policy'} data-scrolly='from-left'><p className='p-s'>Privacy Policy</p></Link>
                    <Link to={'/terms-of-services'} data-scrolly='from-left'><p className='p-s'>Terms of Services</p></Link>
                </div>
            </div>
            </div>
        </nav>
    );
}