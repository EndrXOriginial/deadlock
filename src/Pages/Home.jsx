import { Hero } from "../Components/Hero/Hero";
const { icons, gallery } = require('./../assets/images/imageFetcher');

//Page for the home page of the site.
export const Home = () => {
    return (
        <div>
            <Hero title={'fullLogo'} subtitle={'Invite a friend to join Deadlock'} bgImage={gallery['midSunset']} />
        </div>
 
    )
}