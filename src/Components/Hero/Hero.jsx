import './hero.css';
import corni from '../../assets/images/corni.jpg';
const { splashArt, gallery, icons } = require('../../assets/images/imageFetcher');

export const Hero = ({content}) => {
    console.log(gallery['midSunset'])
    return (
        <div className="hero">
            <div className="hero-media">
                <div className="hero-media-filter"></div>
                <img src={gallery['midSunset']} alt="background of the hero" className="hero-media-img" />
            </div>
            <div className="hero-content">
                {
                    content.title === 'fullLogo' || content.title === 'logo' ? <img src={icons[content.title]} alt='Logo of the game' /> : <h1 className="hero-content-title">{content.title}</h1>
                }
                <p className="hero-content-subtitle">{content.subtitle}</p>
            </div>
        </div>
    );
}