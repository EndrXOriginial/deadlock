import { baseURL } from "../index";
import { Hero } from "../Components/Hero/Hero"


export const Heroes = () => {
    fetch(`${baseURL}/heroes?only_active=true`).then(res => {
        if (!res.ok) {
            console.log('there was an error in calling the API');
        }
        return res.json();
    }).then(data => {
        console.log(data);
    }).catch(e => {
        console.error('Error:', e);
    })

    return (
        <>
        Heroes page! yay
        </>
    )
}