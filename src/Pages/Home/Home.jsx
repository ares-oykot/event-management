import Banner from "../../assets/Banner.png"
const Home = () => {
    return (
        <div className="relative mx-auto">
            <div className="">
                <img style={{ maxHeight: "28rem" }} className="w-full" src={Banner} alt="banner" />
            </div>
            <div className=" text-white">
                <h5 className="absolute text-base font-medium left-32 text-blue-300 top-8 italic">Event <br /> Solution</h5>
                <h1 className="absolute left-14 top-20 text-7xl font-poppins font-semibold">YOUR VISION <br /><span className="text-blue-300"> OUR <br /> EXECUTION</span></h1>
                <h5 className="absolute text-2xl bottom-20 italic left-14 text-blue-300">Enjoy every moment of your event <br /> Beautifully</h5>
            </div>
        </div>
    );
};

export default Home;