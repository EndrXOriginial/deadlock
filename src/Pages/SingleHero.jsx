import { useParams } from "react-router"
import { gallery, splashArt } from "../assets/images/imageFetcher"
import { Hero } from "../Components/Hero/Hero"
import { useState } from "react";
import { baseURL } from "../index";
import { Abilities } from "../Components/Abilities/Abilities";


export const SingleHero = () => {
    const {id} = useParams();
    const [heroName, setHeroName] = useState();
    const [heroDesc, setHeroDesc] = useState();

    fetch(`${baseURL}/heroes/${id}`).then(res => {
        return res.json();
    }).then(data => {
        setHeroName(data.name);
        setHeroDesc(data.description.role);
    })

    return (
        <>
        <Hero title={heroName} subtitle={heroDesc} bgImage={gallery['mainMenu']} champImg={splashArt[heroName]} />
        <Abilities heroId={id} />
        </>
    )
}