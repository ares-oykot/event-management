import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import Service from "../Shared/Service/Service";
// import Banner from "../../assets/Banner.png"
const Home = () => {
    const services = useLoaderData();
    return (
        <div className="mx-auto">
            <div className="relative"><Banner></Banner></div>
            <h1 className="text-6xl font-black text-indigo-500 italic text-center mt-8 mb-3">Our Services</h1>
            <div className="grid grid-cols-3 gap-6">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Home;