import { createElement } from 'react';
import { icons } from '../../../assets/images/imageFetcher';
import './itemInfo.css';

export const ItemInfo = ({selectedItem, closeItemModal}) => {
    console.log(selectedItem);

    return (
        <div className="item-info">
            <div className={`item-info-media ${selectedItem.item_slot_type}`}>
                <img src={selectedItem.image} alt="icon of the item" className='item-info-icon'/>
                <div className='item-info-media-text'>
                    <h2>{selectedItem.name}</h2>
                    <div className="cost-div"><img src={icons['souls']} alt="icon of the souls in Deadlock" /><p className='souls-cost'>{selectedItem.cost}</p></div>
                </div>
            </div>

            <div className="item-info-buff">
                <div className="item-info-buff-innate">
                    {  Object.entries(selectedItem.properties).map(property => {
                        if (property[1].tooltip_section == 'innate') {
                            return <p className="p-xs" key={property[0]}>{property[1].value.includes('-') ? '' : '+'}{property[1].value}{property[0].includes('Percent') ? '%' : ''} {}</p>
                        }
                    })  }
                </div>

                {   Object.keys(selectedItem.description).includes('passive') || (Object.keys(selectedItem.description).length > 1 && Object.keys(selectedItem.description).includes('desc')) || (!selectedItem.is_active_item && Object.keys(selectedItem.description).includes('desc')) ? <div className='item-info-state-container'><p className="p-xs">Passive</p>{ selectedItem.properties.AbilityCooldown.value != 0 && !selectedItem.is_active_item ? <div className="active-cooldown"><img src={icons['cooldown']} alt="cooldown icon" />{selectedItem.properties.AbilityCooldown.value}s</div> : <></> }</div> : <></>  }
                <div className="item-info-buff-state">
                    {  Object.keys(selectedItem.description).includes('passive') ? <p className="p-xs" dangerouslySetInnerHTML={{__html: selectedItem.description.passive}} /> : <></>  }
                    {  (Object.keys(selectedItem.description).length > 1 && Object.keys(selectedItem.description).includes('desc')) || (!selectedItem.is_active_item && Object.keys(selectedItem.description).includes('desc')) ? <p className="p-xs" dangerouslySetInnerHTML={{__html: selectedItem.description.desc}} /> : <></>  }
                    <div className="item-info-buff-state-container">
                        {Object.entries(selectedItem.properties).map(property => {
                            if (property[1].tooltip_section == 'passive') {
                                return <p className="p-xs" key={property[0]}>{property[1].value.includes('-') ? '' : '+'}{property[1].value}{property[0].includes('Percent') ? '%' : ''}</p>
                            }
                        })}
                    </div>
                </div>

                {  selectedItem.is_active_item ? <div className='item-info-state-container'><p className="p-xs">Active</p><div className="active-cooldown"><img src={icons['cooldown']} alt="cooldown icon" />{selectedItem.properties.AbilityCooldown.value}s</div></div> : <></>  }
                <div className="item-info-buff-state">
                    <p className="p-xs" dangerouslySetInnerHTML={{__html: selectedItem.description.active}}/>
                    <div className="item-info-buff-state-container">
                    {Object.entries(selectedItem.properties).map(property => {
                            if (property[1].tooltip_section == 'active') {
                                return <p className="p-xs" key={property[0]}>{property[0].includes('Loss') ? '' : '+'}{property[1].value}{property[0].includes('Percent') ? '%' : ''}</p>
                            }
                        })}
                    </div>
                </div>
            </div>

            <div onClick={closeItemModal} className="item-info-x">
                <img src={icons['x']} alt="X to close the modal" className="icon-x"/>
            </div>
        </div>
    )
}