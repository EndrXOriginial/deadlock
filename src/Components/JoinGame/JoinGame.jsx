import { gallery, icons } from "../../assets/images/imageFetcher";
import './joinGame.css';


export const JoinGame = () => {
    return (
        <section className="joinGame">
            <div className="radial-filter"></div>
            <div className="joinGame-media"><img src={gallery['mainMenu']} alt="Background with the main menu of the game" /></div>
            <div className="joinGame-content">
                <p className="joinGame-content-title">Join Beta Test</p>
                <p className="joinGame-content-subtitle">Invite a friend to join Deadlock</p>
                <a href="https://store.steampowered.com/app/1422450/Deadlock/" className="joinGame-content-link">
                    <p>Add to wishlist</p>
                    <img src={icons['steamLogo']} alt="Steam logo" />
                </a>
            </div>
        </section>
    );
}