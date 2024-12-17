import { useEffect, useState } from 'react';
import './abilities.css';
import { baseURL } from '../..';
import { icons } from '../../assets/images/imageFetcher';

export const Abilities = ({heroId}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [abilities, setAbilities] = useState([]);
    const [activeAbility, setActiveAbility] = useState();

    useEffect(() => {
        fetch(`${baseURL}/items/by-hero-id/${heroId}`)
            .then(res => res.json())
            .then(data => {
                let filteredData = data.filter(ability => ability.ability_type === 'signature' || ability.ability_type === 'ultimate');
                filteredData.sort((a, b) => {
                    if (a.ability_type > b.ability_type) {
                        return 1;
                    } else if (a.ability_type !== 'ultimate' ||  a.class_name < b.class_name) {
                        return -1;
                    }
                });
                setAbilities(filteredData);
                setActiveAbility(filteredData[0]);
                setIsLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setIsLoading(false);
            });
    }, []);

    const onClickHandler = e => {
        let theCurrentAbility;
        abilities.forEach(ability => {
            if (e.currentTarget.id === ability.id.toString()) {
                theCurrentAbility = ability;
            }
        });
        // console.log(theCurrentAbility);
        setActiveAbility(theCurrentAbility);

    };

    while (isLoading) {
        return (
            <div className="isLoading">
                <p>Data be loading boy. Wait a damn minute.... UwU</p>
            </div>
        )
    }

    return (
        <section className="abilities">
            <div className="wrapper">
                {
                    activeAbility && 'videos' in activeAbility ? <div className="abilities-video"><video className='abilities-video-vid' src={activeAbility.videos.mp4} loop={true} autoPlay={true} /></div> : <></>
                }
            <div className="abilities-list">
                {
                    abilities.map(ability => {
                        return <div onClick={onClickHandler} className="abilities-list-icon" id={ability.id}>
                            <img src={`${ability['image']}`} alt={`Icon of the ${ability.name} ability`} />
                            </div>;
                    })
                }
            </div>
            {
                activeAbility ? <div className="abilities-content">
                <div className="abilities-content-header">
                    <div className="abilities-content-header-1">
                        <h2 className="abilities-content-name">{activeAbility.name}</h2>
                        {  activeAbility.properties.AbilityCooldown.value === '0' ? <p className="abilities-content-state">Passive</p> : <></> }
                    </div>
                    <div className="abilities-content-header-2">
                        {  !('Radius' in activeAbility.properties) ? <></> : <div className="abilities-info"><img src={icons['radius']} alt="Icon for the radius" /><p>{activeAbility.properties.Radius.value}</p></div>  }
                        {  !('ImpactRadius' in activeAbility.properties) ? <></> : <div className="abilities-info"><img src={icons['radius']} alt="Icon for the radius" /><p>{activeAbility.properties.ImpactRadius.value}</p></div>  }
                        {  activeAbility.properties.AbilityDuration.value === '0' ? <></> : <div className="abilities-info"><img src={icons['duration']} alt="Icon for the duration" /><p>{activeAbility.properties.AbilityDuration.value}s</p></div>  }
                        {  activeAbility.properties.AbilityCooldown.value === '0' ? <></> : <div className="abilities-info"><img src={icons['cooldown']} alt="Icon for the cooldown" /><p>{activeAbility.properties.AbilityCooldown.value}s</p></div>  }
                    </div>
                </div>
                <div className="abilities-content-desc">
                    <p>{activeAbility.description.quip}.</p>
                </div>
            </div> : <></>
            }
            </div>
        </section>
    )
}