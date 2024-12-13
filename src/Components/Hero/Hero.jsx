import './hero.css';
const {icons} = require('./../../assets/images/imageFetcher');

// The parent component should give the Hero component a 'title' props, a 'subtitle' props.
// For the bg image, simply put the desired image.
// If you want the logo use 'fullLogo' or 'logo' in the title.
export const Hero = ({title, subtitle, bgImage, mid=false}) => {
    return (
        <div className="hero">
            <div className="hero-media">
                <div className="hero-media-filter"></div>
                <img src={bgImage} alt="background of the hero" className="hero-media-img" />

            </div>
            <div className={mid ? 'hero-content mid' : 'hero-content'}>
                {
                    title === 'fullLogo' || title === 'logo' ? <img src={icons[title]} alt='Logo of the game' /> : <h1 className="hero-content-title">{title}</h1>
                }
                <p className="hero-content-subtitle">{subtitle}</p>
            </div>
        </div>
    );
}