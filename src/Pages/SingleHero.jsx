import { splashArt } from "../assets/images/imageFetcher"
import { Hero } from "../Components/Hero/Hero"


export const SingleHero = () => {
    return (
        <>
        <Hero title={heroName} subtitle={heroCaption} bgImage={splashArt[heroName]} />
        </>
    )
}