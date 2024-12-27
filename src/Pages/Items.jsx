import { useState, useEffect } from "react";
import { gallery, weaponItems } from "../assets/images/imageFetcher";
import { Hero } from "../Components/Hero/Hero";
import { Itemslist } from "../Components/ItemsList/ItemsList";
import {baseURL} from '../index';
import { ItemInfo } from "../Components/ItemsList/ItemInfo/ItemInfo";

export const Items = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(true);
    const [weaponItems, setWeaponItems] = useState(null);
    const [vitalityItems, setVitalityItems] = useState(null);
    const [spiritItems, setSpiritItems] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = e => {
        let id = e.currentTarget.id;

        fetch(`${baseURL}/items/${id}`)
            .then(res => res.json())
            .then(data => {
                setSelectedItem(data)
            })
            .catch(e => {
                console.log(e);
                setError(e);
            })
    };

    // The function is used to sort the tier by name and puts the Active Items at the end
    const sortTier = tier => {
        tier.sort(a => {
            if (a.is_active_item) {
                return 1;
            } else {
                return -1;
            }
        });

        tier.sort((a, b) => {
            if (a.name < b.name && !a.is_active_item) {
                return -1;
            } else if (a.name > b.name && !a.is_active_item) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    // Orders the items in a certain Type into an object with 4 different tiers
    const orderData = itemsArr => {
        let t1 = itemsArr.filter(item => item.item_tier == 1);
        let t2 = itemsArr.filter(item => item.item_tier == 2);
        let t3 = itemsArr.filter(item => item.item_tier == 3);
        let t4 = itemsArr.filter(item => item.item_tier == 4);

        sortTier(t1);
        sortTier(t2);
        sortTier(t3);
        sortTier(t4);

        let dataTypeObj = {
            type_name: t1[0].item_slot_type,
            t1: t1,
            t2: t2,
            t3: t3,
            t4: t4,
        }

        return dataTypeObj;
    };

    // Fetches the shop items
    useEffect(() => {
        fetch(`${baseURL}/items/by-type/upgrade`)
            .then(res => res.json())
            .then(data => {
                const activeItems = data.filter(item => item.disabled != true);

                const noneOrderedWeaponItems = activeItems.filter(item => item.item_slot_type == 'weapon');
                const noneOrderedVitalityItems = activeItems.filter(item => item.item_slot_type == 'vitality');
                const noneOrderedSpiritItems = activeItems.filter(item => item.item_slot_type == 'spirit');

                let orderedWeaponItems = orderData(noneOrderedWeaponItems);
                let orderedVitalityItems = orderData(noneOrderedVitalityItems);
                let orderedSpiritItems = orderData(noneOrderedSpiritItems);

                setWeaponItems(orderedWeaponItems);
                setVitalityItems(orderedVitalityItems);
                setSpiritItems(orderedSpiritItems);

                setIsLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setIsLoading(false);
            })
    }, []);

    while(isLoading) {
        return (
            <div className="isLoading"><p>It's loading boy</p></div>
        )
    }

    return (
        <>
        <Hero mid={true} title={'Items'} bgImage={gallery['spawnShop']} />
        <Itemslist weaponItems={weaponItems} vitalityItems={vitalityItems} spiritItems={spiritItems} handleClick={handleClick} />
        {
            selectedItem ? <ItemInfo selectedItem={selectedItem} /> : <></>
        }
        </>
    )
}