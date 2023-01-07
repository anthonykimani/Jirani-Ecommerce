import Dashboard from "../components/Dashboard";
import DealSlideshow from "../components/DealSlideshow";
import Navbar from "../components/Navbar";

const Home = () => {
    return ( 
        <div className="flex flex-col bg-zinc-100">
            <Navbar />
            <div className="flex">
                <div>
                    <Dashboard />
                </div>
                <div>
                    <DealSlideshow />
                </div>
            </div>
        </div>
     );
}
 
export default Home;