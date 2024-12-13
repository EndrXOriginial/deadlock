import { gallery, weaponItems } from "../assets/images/imageFetcher"
import { Hero } from "../Components/Hero/Hero"

export const Items = () => {
    return (
        <>
        <Hero mid={true} title={'Items'} bgImage={gallery['spawnShop']} />
        </>
    )
}