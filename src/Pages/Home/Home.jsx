import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import Service from "../Shared/Service/Service";
import Footer from "../Shared/Footer/Footer";
import Discount from "../Shared/Discount/Discount";
import Team from "../Shared/Team/Team";



const Home = () => {
    const services = useLoaderData();
    return (
        <div className="mx-auto">
            <div className="relative"><Banner></Banner></div>
            <h1 className="text-center font-black text-5xl md:text-6xl text-transparent  bg-clip-text bg-gradient-to-r from-sky-400 to-fuchsia-500 mt-5 md:mt-8 mb-3 shadow-xl pb-2">Our Services</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            <Discount></Discount>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;