import './hero.css';
import corni from '../../assets/images/corni.jpg';

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-media"><img src={corni} alt="background of the hero" className="hero-media-img" /></div>
            <div className="hero-content">
                <h1 className="hero-content-title">Pickled</h1>
                <p className="hero-content-subtitle">Il aime quand on y mange le pickle</p>
            </div>
        </div>
    );
}