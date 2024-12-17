import { Link } from 'react-router';
import { gallery, icons, inGameModel } from '../../../assets/images/imageFetcher';
import './champCard.css';

export const ChampCard = ({champ, build=false}) => {
    const {name, id} = champ;

    return (
        <Link to={build ? `https://mobalytics.gg/deadlock/builds/${name.toLowerCase().replaceAll(' ', '-').replaceAll('&', 'and')}` : `${id}`} className={build ? 'wrapper champCard-link full' : 'champCard-link'} target={build ? '_blank' : ''}>
        <div className="champCard">
            <div className="linear-filter"></div>
            <div className="champCard-media-1-border"></div>
            <div className="champCard-media-1">
                <img src={gallery['mainMenu']} alt={`screenshot of the main menu of the game`} className="champCard-media-img-1" />
            </div>
            <div className={`champCard-media-2 ${name.toLowerCase().replaceAll(" ", "").replaceAll('&', '')}`}><img src={inGameModel[name]} alt={`In game model of ${name}`} className="champCard-media-img-2" /></div>
            <div className="champCard-content">
                <h3 className="champCard-content-name">{name}{build ? <span> Builds</span> : <></> }</h3>
                {build ? <button>
                    <img src={icons['mobalytics']} alt="icon de Mobalytics" />
                    <p>Mobalytics</p>
                </button> : <></>}
            </div>
        </div>
        </Link>
    )
}