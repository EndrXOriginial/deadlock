import { createElement } from 'react';
import { icons } from '../../../assets/images/imageFetcher';
import './itemInfo.css';

export const ItemInfo = ({selectedItem, closeItemModal}) => {
    console.log(selectedItem);

    const buffName = {
        BonusHealth: 'Bonus Health',
        BonusHealthRegen: 'Health Regen',
        BaseAttackDamagePercent: 'Weapon Damage',
        NonPlayerBonusWeaponPower: 'Weapon Damage vs. NPCs',
        CloseRangeBonusWeaponPower: 'Weapon Damage (Conditional)',
        NonPlayerBulletResist: 'Bullet Resist vs. NPCs',
        BulletResist: 'Bullet Resist',
        BonusAttackDamagePercent: 'Weapon Damage',
        BonusClipSizePercent: 'Ammo',
        CloseRangeBonusDamageRange: 'Close Range',
        BonusBulletSpeedPercent: 'Bullet Velocity',
        BulletShieldMaxHealth: 'Bullet Shield Health',
        TechShieldMaxHealth: 'Spirit Shield Health',
        TechPower: 'Spirit Power',
        BonusFireRate: 'Fire Rate',
        BonusSprintSpeed: 'Sprint Speed',
        BonusClipSize: 'Ammo',
        HeadShotBonusDamage: 'Head Shot Bonus Damage',
        AbilityDuration: 'Duration',
        BulletLifestealPercent: 'Bullet Lifesteal (Conditional)',
        LongRangeBonusWeaponPower: 'Weapon Damage (Conditional)',
        LongRangeBonusWeaponPowerMinRange: 'Min. Distance',
        BonusHeavyMeleeDamage: 'Bonus Heavy Damage',
        MeleeDistanceScale: 'Heavy Melee Distance',
        SpiritPower: 'Spirit Power',
        SlowDuration: 'Slow Duration',
        SlowPercent: 'Movement Slow (Conditional)',
        AbilityLifestealPercentHero: 'Spirit Lifesteal (Conditional)',
        DebuffDuration: 'Debuff Duration',
        ShreddersTechAmp: 'Spirit Amp (Conditional)',
        LocalBulletArmorReduction: 'Bullet Resist',
        SlideScale: 'Slide Distance',
        AbilityDuration: 'Duration',
        ActiveBonusMoveSpeed: 'Move Speed (onditional)',
        BonusClipSizePercent: 'Ammo',
        SlowResistancePercent: 'Movement Slow Resist',
        BulletResistDuration: 'Stack Duration',
        BulletResistPerStack: 'Bullet Resist Per Stack',
        MaxArmorStacks: 'Max Bullet Resist',
        BonusMoveSpeed: 'Move Speed (Conditional)',
        HealPercentPerHeadshot: 'Heal per Headshot',
        MovementSpeedBonusDuration: 'Move Speed Duration',
        BulletArmorReduction: 'Bullet Resist (Conditional)',
        FireRateSlow: 'Fire Rate Slow (Conditional)',
        Radius: 'Radius',
        ShootDurationForMax: 'Time for Max Damage',
        BaseAttackDamagePercentAtMaxDuration: 'Max Weapon Damage (Conditional)',
        MeleeResistPercent: 'Melee Resist',
        Stamina: 'Stamina',
        TechResist: 'Spirit Resist',
        BaseAttackDamagePercentBonus: 'Weapon Damage (Conditional)',
        BonusAttackRangePercent: 'Weapon Fall-off Range',
        BonusZoomPercent: 'Weapon Zoom',
        ReloadSpeedMultipler: 'Reload Time',
        BonusAmpPerHeadshot: 'Spirit Amp Per Headshot',
        MaxStacks: 'Max Stacks',
        ProcCooldown: 'Max Frequency',
        BonusPerChain: 'Damage on Jump',
        ChainCount: 'Max Jumps',
        ChainRadius: 'Jump Radius',
        ChainTickRate: 'Proc Time',
        DamagePerChain: 'Shock Damage',
        ProcChance: 'Proc Chance',
        BonusBaseWeaponDamageTaken: 'Weapon Damage',
        DPS: 'DPS',
        DPSMax: 'Max DPS',
        ActiveRadius: 'Active Radius',
        AbilityCastRange: 'Teleport Range',
        CasterBuffDuration: 'Buff Duration',
        BulletResistReduction: 'Bullet Resist Reduction',
        MagicResistReduction: 'Spirit Resist Reduction',
        FervorBulletResist: 'Bullet Resist (Conditional)',
        FervorFireRate: 'Fire Rate (Conditional)',
        FervorMovespeed: 'Move Speed (Conditional)',
        MaxHealthLossPercent: 'Max Health',
        WeaponPowerPerKill: 'Weapon Damage per Kill (Conditional)',
        BuildUpPerShot: 'Buildup per Shot',
        ImmunityDuration: 'After effect Immunity',
        SilenceDuration: 'Silence Duration',
        TechDamageReduction: 'Spirit Damage Reduction',
        CooldownReduction: 'Cooldown Reduction',
        BonusSpirit: 'Spirit Power',
        ActiveBonusFireRate: 'Fire Rate',
        ActiveBonusLifesteal: 'Bullet Lifesteal',
        ActiveReloadPercent: 'Ammo',
        AmbushBonusFireRate: 'Ambush Fire Rate',
        AmbushBonusTechPower: 'Ambush Spirit Power',
        AmbushDuration: 'Ambush Duration',
        SpottedRadius: 'Spot Radius',
    }

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
                            return <p className="p-xs" key={property[0]}>{property[1].value.includes('-') ? '' : '+'}{property[1].value}{property[0].includes('Percent') ? '%' : ''} {buffName[property[0]]}</p>
                        }
                    })  }
                </div>

                {   Object.keys(selectedItem.description).includes('passive') || (Object.keys(selectedItem.description).length > 1 && Object.keys(selectedItem.description).includes('desc')) || (!selectedItem.is_active_item && Object.keys(selectedItem.description).includes('desc')) ? <div className='item-info-state-container'><p className="p-xs">Passive</p>{ selectedItem.properties.AbilityCooldown.value != 0 && !selectedItem.is_active_item ? <div className="active-cooldown"><img src={icons['cooldown']} alt="cooldown icon" />{selectedItem.properties.AbilityCooldown.value}s</div> : <></> }</div> : <></>  }
                { Object.keys(selectedItem.description).includes('passive') || (Object.keys(selectedItem.description).length > 1 && Object.keys(selectedItem.description).includes('desc')) || (!selectedItem.is_active_item && Object.keys(selectedItem.description).includes('desc')) ? <div className="item-info-buff-state">
                    {  Object.keys(selectedItem.description).includes('passive') ? <p className="p-xs" dangerouslySetInnerHTML={{__html: selectedItem.description.passive}} /> : <></>  }
                    {  (Object.keys(selectedItem.description).length > 1 && Object.keys(selectedItem.description).includes('desc')) || (!selectedItem.is_active_item && Object.keys(selectedItem.description).includes('desc')) ? <p className="p-xs" dangerouslySetInnerHTML={{__html: selectedItem.description.desc}} /> : <></>  }
                    <div className="item-info-buff-state-container">
                        {Object.entries(selectedItem.properties).map(property => {
                            if (property[1].tooltip_section == 'passive') {
                                let num = property[1].value;
                                if (property[0] === 'AbilityCooldown') {return;}
                                return <p className="p-xs" key={property[0]}>{num.includes('-') ? '' : '+'}{num}{property[0].includes('Percent') ? '%' : ''} {buffName[property[0]]}</p>
                            }
                        })}
                    </div>
                </div> : <></>}

                {  selectedItem.is_active_item ? <div className='item-info-state-container'><p className="p-xs">Active</p><div className="active-cooldown"><img src={icons['cooldown']} alt="cooldown icon" />{selectedItem.properties.AbilityCooldown.value}s</div></div> : <></>  }
                { selectedItem.is_active_item ?  <div className="item-info-buff-state">
                    <p className="p-xs" dangerouslySetInnerHTML={{__html: selectedItem.description.active}}/>
                    <div className="item-info-buff-state-container">
                    {Object.entries(selectedItem.properties).map(property => {
                            if (property[1].tooltip_section == 'active') {
                                let num = property[1].value;
                                if (property[0] === 'AbilityCooldown') {return;}
                                return <p className="p-xs" key={property[0]}>{property[0].includes('Loss') ? '' : '+'}{num}{property[0].includes('Percent') ? '%' : ''} {buffName[property[0]]}</p>
                            }
                        })}
                    </div>
                </div> : <></>}
            </div>

            <div onClick={closeItemModal} className="item-info-x">
                <img src={icons['x']} alt="X to close the modal" className="icon-x"/>
            </div>
        </div>
    )
}