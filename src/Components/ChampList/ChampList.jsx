import { ChampCard } from "./ChampCard/ChampCard"
import './champList.css';

export const ChampList = ({champs}) => {

    
    return (
        <section className="champList">
            <div className="champList-content wrapper">
                {
                    champs.map(champ => {
                        return <ChampCard champ={champ} />
                    })
                }
            </div>
        </section>
    )
}