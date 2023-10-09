import BannerImg from "../../../assets/Banner.png"
const Banner = () => {
    return (
        <div>
            <div className="">
                <img style={{ maxHeight: "28rem" }} className="w-full" src={BannerImg} alt="banner" />
            </div>
            <div className=" text-white">
                <h5 className="absolute text-xs md:text-base font-medium left-12  md:left-20 lg:left-32 top-3 md:top-8 lg:top-8 text-blue-300 italic">Event <br /> Solution</h5>
                <h1 className="absolute left-8 md:left-14 top-10 md:top-20 text-3xl  md:text-6xl lg:text-7xl font-poppins font-semibold">YOUR VISION <br /><span className="text-blue-300"> OUR <br /> EXECUTION</span></h1>
                <h5 className="absolute text-xs md:text-xl lg:text-2xl bottom-14 md:bottom-24 lg:bottom-20 italic left-8 md:left-14 text-blue-300">Enjoy every moment of your event <br /> Beautifully</h5>
            </div>
        </div>
    );
};

export default Banner;