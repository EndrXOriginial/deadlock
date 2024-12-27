import { icons } from '../../../assets/images/imageFetcher';
import './itemInfo.css';

export const ItemInfo = ({selectedItem}) => {

    return (
        <div className="item-info">
            <div className="item-info-media">
                <img src={selectedItem.image} alt="icon of the item" />
                <h2>{selectedItem.name}</h2>
                <div className="price"><img src={icons['souls']} alt="icon of the souls in Deadlock" /></div>
            </div>
            <div className="item-info-buff">

            </div>
        </div>
    )
}