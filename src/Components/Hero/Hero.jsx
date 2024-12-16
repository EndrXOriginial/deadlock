import './hero.css';
import svgArrow from '../../assets/icons/arrowDown.svg';
const {icons, splashArt} = require('./../../assets/images/imageFetcher');

// The parent component should give the Hero component a 'title' props, a 'subtitle' props.
// For the bg image, simply put the desired image.
// The mid prop is if you want the text in the middle of the hero and not at the bottom.
// If you want the logo use 'fullLogo' or 'logo' in the title.
export const Hero = ({title, subtitle, bgImage, mid=false, champImg=''}) => {

    return (
        <div className="hero">
            <div className="hero-media">
                <div className="hero-media-filter"></div>
                <img src={bgImage} alt="background of the hero" className="hero-media-img" />
                {
                    champImg === '' ? <></> : <div className="hero-media-champ"><img className='hero-media-champ-img' src={`${champImg}`} alt={`Splash of ${title}`} /></div>
                }
            </div>
            <div className={mid ? 'hero-content mid' : 'hero-content'}>
                {
                    title === 'fullLogo' || title === 'logo' ? <img src={icons[title]} alt='Logo of the game' /> : <h1 className="hero-content-title">{title}</h1>
                }
                <p className="hero-content-subtitle">{subtitle}</p>
                {
                    !mid ? <div className="arrow-down"><img src={svgArrow} alt="Arrow pointing down" /></div> : <></>
                }
            </div>
        </div>
    );
}