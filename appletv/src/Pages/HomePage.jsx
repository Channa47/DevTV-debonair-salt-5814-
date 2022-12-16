import WatchPremierForFree from "../Componenets/WatchPremierforFree"
import Navbar from '../Componenets/Navbar';
import MostPopularNow from "../Componenets/MostPopularNow";
import Slider from "../Componenets/Slider";
import CurrentHitandFutureRelease from "../Componenets/CurrentHit&FutureRelease";
import WatchEntireSeasons from "../Componenets/WatchEntireSeasons";
import LatestOriginal from "../Componenets/LatestOriginal";
import { AppleFAQ } from "../Componenets/AppleFAQ";
import RedemptionStories from "../Componenets/RedemptionStories";
import AllDramaSeries from "../Componenets/AllDramaSeries";
import AllComedySeries from "../Componenets/AllComedySeries";

export const HomePage=()=>{
    return (
        <div>
            {/* <Navbar/> */}
            <Slider/>
            <WatchPremierForFree/>
            <MostPopularNow/>
            <CurrentHitandFutureRelease/>
            <WatchEntireSeasons/>
            <LatestOriginal/>
            <RedemptionStories/>
            <AllDramaSeries/>
            <AllComedySeries/>
            <AppleFAQ/>

        </div>
    )
}
