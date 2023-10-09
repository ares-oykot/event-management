import Marquee from "react-fast-marquee";
import elon from "../../../assets/elon-musk3.jpg"
import luis from "../../../assets/LUIS-FONSI5894-scaled.jpg"
import anne from "../../../assets/original.jpg"
import daddy from "../../../assets/M7IEEAJEDFDH5IHDXMHC2Z5F3M.jpg"
import jhon from "../../../assets/john-cena-workout-and-diet-plan.jpg"
import weeknd from "../../../assets/the-weeknd-gives-huge-boost-to-columbia-economy-with-sold-out-tour-stop-1200x675.jpg"
const Team = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-lime-500 text-indigo-600 pt-8 pb-1 rounded mb-10">
            <h2 className="text-5xl text-center font-black outline-2 hover:outline-4  text-transparent  bg-clip-text bg-gradient-to-r from-red-200  to-violet-700">Our Team</h2>
            <h3 className="text-3xl font-semibold text-center">We try our best to manage your event properly.</h3>
            <Marquee pauseOnHover={true} speed={50} className="flex mb-10 mt-3 text-white text-center h-60">
                <div className="w-40 mr-20">
                    <img className="mx-auto w-36 h-36 hover:w-40 hover:h-40 duration-300 rounded-full" src={elon} alt="" />
                    <h4 className="text-xl text-blue-800">William</h4>
                    <p className="text-xs text-amber-400">He is the owner of this company.</p>
                </div>
                <div className="w-40 mr-20">
                    <img className="mx-auto w-36 h-36 hover:w-40 hover:h-40 duration-300 rounded-full" src={luis} alt="" />
                    <h4 className="text-xl text-blue-800">Henry</h4>
                    <p className="text-xs text-amber-400">He is engaged during trade show events.</p>
                </div>
                <div className="w-40 mr-20">
                    <img className="mx-auto w-36 h-36 hover:w-40 hover:h-40 duration-300 rounded-full" src={anne} alt="" />
                    <h4 className="text-xl text-blue-800">John</h4>
                    <p className="text-xs text-amber-400">He manages sound system related work.</p>
                </div>
                <div className="w-40 mr-20">
                    <img className="mx-auto w-36 h-36 hover:w-40 hover:h-40 duration-300 rounded-full" src={daddy} alt="" />
                    <h4 className="text-xl text-blue-800">Michael</h4>
                    <p className="text-xs text-amber-400">He is the electrician of this company.</p>
                </div>
                <div className="w-40 mr-20">
                    <img className="mx-auto w-36 h-36 hover:w-40 hover:h-40 duration-300 rounded-full" src={jhon} alt="" />
                    <h4 className="text-xl text-blue-800">Joseph</h4>
                    <p className="text-xs text-amber-400">He is a doctor, he treats people.</p>
                </div>
                <div className="w-40 mr-20">
                    <img className="mx-auto w-36 h-36 hover:w-40 hover:h-40 duration-300 rounded-full" src={weeknd} alt="" />
                    <h4 className="text-xl text-blue-800">Anthony</h4>
                    <p className="text-xs text-amber-400">he is the manager of our company.</p>
                </div>
            </Marquee>
        </div>
    );
};

export default Team;