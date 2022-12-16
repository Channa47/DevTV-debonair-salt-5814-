import WatchPremierForFree from "../Componenets/WatchPremierforFree"
import Navbar from '../Componenets/Navbar';
import MostPopularNow from "../Componenets/MostPopularNow";
import Slider from "../Componenets/Slider";
import MainNavbar from "../Componenets/MainNavbar";

export const HomePage=()=>{
    return (
        <div>
            {/* <Navbar/> */}
            {/* <MainNavbar/> */}
            <Slider/>
            <WatchPremierForFree/>
            <MostPopularNow/>
        </div>
    )
}
