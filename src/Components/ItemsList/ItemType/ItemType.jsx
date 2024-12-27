import { icons } from '../../../assets/images/imageFetcher';
import { ItemTier } from '../ItemTier/ItemTier';
import './itemType.css';

export const ItemType = ({type, handleClick}) => {

    return (
        <div className="items-type">
            <div className="items-type-title">
                <h2 className="items-type-name">{type.type_name}</h2>
            </div>
            <ItemTier tier={type.t1} handleClick={handleClick} />
            <ItemTier tier={type.t2} handleClick={handleClick} />
            <ItemTier tier={type.t3} handleClick={handleClick} />
            <ItemTier tier={type.t4} handleClick={handleClick} />
        </div>
    )
}