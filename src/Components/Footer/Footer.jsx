import './footer.css';
import { Link } from 'react-router';
import { Home } from '../../Pages/Home';

export const Footer = () => {
    const {icons} = require('./../../assets/images/imageFetcher')
    return (
        <footer className="footer">
            <div className="wrapper footer-content">
                <div className='link-wrapper'>
                    <img src={icons['fullLogo']} className='logo'></img>
                    <Link className='link' to='/'>Homepage</Link>
                    <Link className='link' to='/heroes'>Heroes</Link>
                    <Link className='link' to='/items'>Items</Link>
                    <Link className='link' to='/guide'>Guide</Link>
                    <hr className='line'/>
                    <Link className='link' to='/privacy'>Privacy and Policy</Link>
                    <Link className='link' to='/privacy'>Terms of services</Link>   
                </div>
               
            
                <div className='footerText p-xs'>                
                    <p>This project is a personal collaboration between friends to showcase our skills. 
                        All content is inspired by the websites <a href='https://deadlocked.wiki/'>Deadlock Wiki</a> and <a href='https://mobalytics.gg/deadlock'>Mobalytics Deadlock.</a> We do not 
                        claim ownership or rights to any logos or images used, which are included solely for illustrative purposes.
                        All trademarks and copyrights belong to their respective owners.</p>
                </div>
            </div> 
        </footer>
    )
}