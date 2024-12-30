import { useState } from 'react';
import { icons } from '../../../assets/images/imageFetcher';
import { ItemCard } from '../ItemCard/ItemCard';
import { ItemInfo } from '../ItemInfo/ItemInfo';
import './itemTier.css';

export const ItemTier = ({tier, handleClick}) => {
    return (
        <div className="items-tier-container">
            <div className="cost-div">
                <img src={icons['souls']} alt="icon of the souls in Deadlock" />
                <p className='souls-cost'>{tier[0].cost}</p>
            </div>
            <div className="item-list">
                {
                    tier.map(item => <ItemCard key={item.id} item={item} handleClick={handleClick} />)
                }
            </div>
        </div>
    )
}