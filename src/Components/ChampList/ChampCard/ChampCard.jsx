import { Link } from 'react-router';
import { gallery, inGameModel } from '../../../assets/images/imageFetcher';
import './champCard.css';

export const ChampCard = ({champ}) => {
    const {name, id} = champ;

    return (
        <Link to={`${id}`} className='champCard-link'>
        <div className="champCard">
            <div className="linear-filter"></div>
            <div className="champCard-media-1-border"></div>
            <div className="champCard-media-1">
                <img src={gallery['mainMenu']} alt={`screenshot of the main menu of the game`} className="champCard-media-img-1" />
            </div>
            <div className={`champCard-media-2 ${name.toLowerCase().replaceAll(" ", "").replaceAll('&', '')}`}><img src={inGameModel[name]} alt={`In game model of ${name}`} className="champCard-media-img-2" /></div>
            <div className="champCard-content">
                <h3 className="champCard-content-name">{name}</h3>
            </div>
        </div>
        </Link>
    )
}