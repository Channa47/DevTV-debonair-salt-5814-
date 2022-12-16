import WatchPremierForFree from "../Componenets/WatchPremierforFree"
import Navbar from '../Componenets/Navbar';
import MostPopularNow from "../Componenets/MostPopularNow";
import Slider from "../Componenets/Slider";

export const HomePage=()=>{
    return (
        <div>
            <Navbar/>
            <Slider/>
            <WatchPremierForFree/>
            <MostPopularNow/>

        </div>
    )
}
