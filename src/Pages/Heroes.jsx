import { baseURL } from "../index";
import { useEffect, useState } from "react";
import { Hero } from "../Components/Hero/Hero";
import { ChampList } from "../Components/ChampList/ChampList";
import { gallery } from "../assets/images/imageFetcher";
import { JoinGame } from "../Components/JoinGame/JoinGame";


export const Heroes = () => {
    const [champs, setChamps] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${baseURL}/heroes?only_active=true`)
            .then(res => res.json())
            .then(json => {
                const playableChamp = json.filter(champ => !champ.in_development);
                playableChamp.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    } else if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                })
                setChamps(playableChamp);
                setIsLoading(false);
            })
            .catch(e => {
                setError(e);
                setIsLoading(false);
                console.error(error);
            });
    }, []);

    while (isLoading) {
        return (
            <div className="isLoading">
                <h1>The data is loading!</h1>
            </div>
        )
    }

    return (
        <>
        <Hero bgImage={gallery['midBuilding']} title='Heroes' mid={true}/>
        <ChampList champs={champs} />
        <JoinGame />
        </>
    )
}