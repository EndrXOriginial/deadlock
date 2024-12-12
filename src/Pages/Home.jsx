import { Hero } from "../Components/Hero/Hero";
const { icons } = require('./../assets/images/imageFetcher');

//Page for the home page of the site.
export const Home = () => {
    return (
        <div>
            <Hero content={{title: 'fullLogo', subtitle: 'Invite a friend to join Deadlock'}} />
        </div>
 
    )
}