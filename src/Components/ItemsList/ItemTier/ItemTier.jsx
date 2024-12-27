import { useState } from 'react';
import { icons } from '../../../assets/images/imageFetcher';
import { ItemCard } from '../ItemCard/ItemCard';
import { ItemInfo } from '../ItemInfo/ItemInfo';
import './itemTier.css';

export const ItemTier = ({tier, handleClick}) => {
    return (
        <div className="items-tier-container">
            <div className="items-tier-cost">
                <img src={icons['souls']} alt="icon of the souls in Deadlock" />
                <p>{tier[0].cost}</p>
            </div>
            <div className="item-list">
                {
                    tier.map(item => <ItemCard key={item.id} item={item} handleClick={handleClick} />)
                }
            </div>
        </div>
    )
}