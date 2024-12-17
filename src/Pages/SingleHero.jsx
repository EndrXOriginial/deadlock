import { useParams } from "react-router"
import { gallery, splashArt } from "../assets/images/imageFetcher"
import { Hero } from "../Components/Hero/Hero"
import { useEffect, useState } from "react";
import { baseURL } from "../index";
import { Abilities } from "../Components/Abilities/Abilities";
import { HeroLore } from "../Components/HeroLore/HeroLore";
import { ChampCard } from "../Components/ChampList/ChampCard/ChampCard";
import { JoinGame } from "../Components/JoinGame/JoinGame";


export const SingleHero = () => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hero, setHero] = useState();

    useEffect(() => {
        fetch(`${baseURL}/heroes/${id}`).then(res => {
            return res.json();
        }).then(data => {
            setHero(data);
            setIsLoading(false);
        })
        .catch(e => {
            console.log(e);
            setError(e);
        });    
    }, []);

    while (isLoading) {
        return (
            <p>loading the data</p>
        )
    }

    return (
        <>
        <Hero title={hero.name} subtitle={hero.description.role} bgImage={gallery['mainMenu']} champImg={splashArt[hero.name]} />
        <Abilities heroId={id} />
        <hr className="wrapper separator" />
        <HeroLore hero={hero} />
        <ChampCard champ={hero} build={true} />
        <JoinGame />
        </>
    )
}