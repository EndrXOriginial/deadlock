import './itemsList.css';
import { gallery, icons } from '../../assets/images/imageFetcher';
import { ItemCard } from './ItemCard/ItemCard';
import { ItemType } from './ItemType/ItemType';

export const Itemslist = ({weaponItems, vitalityItems, spiritItems, handleClick}) => {

    return (
        <section className="items">
            <div className="wrapper">
                <ItemType type={weaponItems} handleClick={handleClick} />
                <hr className="line" />
                <ItemType type={vitalityItems} handleClick={handleClick} />
                <hr className="line" />
                <ItemType type={spiritItems} handleClick={handleClick} />
            </div>
        </section>
    )
}