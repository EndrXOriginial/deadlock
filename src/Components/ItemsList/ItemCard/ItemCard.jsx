import './itemCard.css';

export const ItemCard = ({item, handleClick}) => {
    const imbueItem = ['Quicksilver Reload', 'Improved Reach', 'Superior Cooldown', 'Superior Duration', 'Surge of Power', 'Mystic Reverb']
    
    return (
        <div className="item" onClick={handleClick} id={item.id}>
            <div className={item.is_active_item ? `item-media ${item.item_slot_type}Active` : `item-media ${item.item_slot_type}`}><img src={item.image} alt={`Logo of the ${item.name} item`} /></div>
            <div className="item-content">
                <p className="item-name">{item.name}</p>
            </div>
            <div className={item.is_active_item ? "active-banner" : "none"}>
                <p className='p-xs'>Active</p>
            </div>
            <div className={imbueItem.includes(item.name) ? "active-banner" : "none"}>
                <p className='p-xs'>Imbue</p>
            </div>
        </div>
    )
}