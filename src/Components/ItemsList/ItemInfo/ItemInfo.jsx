import { icons } from '../../../assets/images/imageFetcher';
import './itemInfo.css';

export const ItemInfo = ({selectedItem, closeItemModal}) => {

    return (
        <div className="item-info">
            <div className="item-info-media">
                <img src={selectedItem.image} alt="icon of the item" className='item-info-icon'/>
                <div className="item-info-media-text">
                    <h2>{selectedItem.name}</h2>
                    <div className="cost-div"><img src={icons['souls']} alt="icon of the souls in Deadlock" /><p className='souls-cost'>{selectedItem.cost}</p></div>
                </div>
            </div>
            <div className="item-info-buff">
                {/* {console.log(selectedItem)} */}
                <div className='item-info-state-container'><p className="p-xs">Active</p><div className="active-cooldown"><img src={icons['cooldown']} alt="cooldown icon" />{selectedItem.properties.AbilityCooldown.value}s</div></div>
            </div>
            <div onClick={closeItemModal} className="item-info-x">
                <img src={icons['x']} alt="X to close the modal" className="icon-x"/>
            </div>
        </div>
    )
}