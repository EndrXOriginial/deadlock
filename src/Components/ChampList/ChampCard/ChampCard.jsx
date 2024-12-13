import { Link } from 'react-router';
import { cards } from '../../../assets/images/imageFetcher';
import './champCard.css';

export const ChampCard = ({champ}) => {
    const {name, id} = champ;

    return (
        <Link to={`${id}`} className='champCard-link'>
        <div className="champCard">
            <div className="champCard-media"><img src={cards[`${name} Mobile`]} alt={`screenshot of the main menu of the game`} className="champCard-media-img" /></div>
            <div className="champCard-content">
                <h3 className="champCard-content-name">{name}</h3>
            </div>
        </div>
        </Link>
    )
}