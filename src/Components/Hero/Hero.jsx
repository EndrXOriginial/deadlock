import './hero.css';

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-media"><img src="" alt="Backgroun image of the hero" className="hero-media-img" /></div>
            <div className="hero-content">
                <h1 className="hero-content-title">Title</h1>
                <p className="hero-content-subtitle">The subtitle of the page</p>
            </div>
        </div>
    );
}