import { mapIcon } from '../../assets/images/imageFetcher';
import './heroLore.css';

export const HeroLore = ({hero}) => {
    return (
        <section className="lore">
            <div className="wrapper">
            <div className="lore-header">
                <img src={mapIcon[hero.name]} alt={`Map icon of ${hero.name}`} />
                <h2>{hero.name}'s Background</h2>
            </div>
            <div className="lore-content">
                <p className="lore-content-text">{hero.description.lore}</p>
            </div>
            </div>
        </section>
    )
}