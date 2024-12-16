import { useEffect, useState } from 'react';
import './abilities.css';
import { baseURL } from '../..';

export const Abilities = ({heroId}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [abilities, setAbilities] = useState([]);
    const [abilityName, setAbilityName] = useState('');
    const [abilityState, setAbilitiesState] = useState('');
    const [abilityDesc, setAbilitiesDesc] = useState('');

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
                console.log(filteredData);
                setAbilities(filteredData);
                setIsLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setIsLoading(false);
            });
    }, []);

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
            <div className="abilities-video">
                {/* VIDEO */}
            </div>
            <div className="abilities-list">
                {
                    abilities.map(ability => {
                        console.log(ability);
                        return <div className="abilities-list-icon" key={abilities.id}><img src={`${ability['image']}`} alt={`Icon of the ${ability.name} ability`} /></div>;
                    })
                }
            </div>
            <div className="abilities-content">
                <div className="abilities-content-header">
                    <h2 className="abilities-content-name">{abilityName}</h2>
                    <p className="abilities-content-state">{abilityState} Temp Title</p>
                </div>
                <div className="abilities-content-desc">
                    <p>{abilityDesc} Temp Desc</p>
                </div>
            </div>
            </div>
        </section>
    )
}