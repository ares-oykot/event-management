import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Background from "../../../assets/background.png"
const backgroundImg = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover"
}
const Discount = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <div style={backgroundImg} className="my-10 h-96 rounded-lg pt-4">
                <h1 className="text-center font-black text-6xl text-transparent  bg-clip-text bg-gradient-to-r from-sky-400 to-fuchsia-500">OUR CURRENT OFFER</h1>
                <h5 className="text-xl my-2 text-emerald-300 text-center font-semibold">We currently have <span className="text-lime-400 font-black">30%</span> discount on these services</h5>
                <div className="flex px-4 gap-4 justify-between">
                    <div data-aos="flip-right" className="flex w-full gap-2 border rounded p-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 duration-300">
                        <img className="w-52 rounded h-36" src="https://i.ibb.co/SQkj4Gs/Trade.jpg" alt="" />
                        <div className="text-black text-sm">
                            <h4 className="text-indigo-600 text-base font-medium bg-gradient-to-r from-lime-300 to-orange-300 rounded px-1">Trade Shows</h4>
                            <div className="mt-5 italic text-white">
                                <p>Price&nbsp;: <s>$1200.00</s></p>
                                <p>OFF &nbsp;&nbsp;:&nbsp; 30%</p>
                                <p>Save&nbsp;:&nbsp; $360.00</p>
                                <p>Now&nbsp;&nbsp;:&nbsp; $840.00</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-down" className="flex w-full gap-2 rounded border p-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 duration-300">
                        <img className="w-52 rounded h-36" src="https://i.ibb.co/NTbbg6L/Product-Launches.jpg" alt="" />
                        <div className=" text-sm">
                            <h4 className="text-base bg-gradient-to-r from-lime-300 to-orange-300 text-indigo-600 px-1 rounded font-medium">Product Launches</h4>
                            <div className="mt-5 italic text-white">
                                <p>Price&nbsp;: <s>$1500.00</s></p>
                                <p>OFF &nbsp;&nbsp;:&nbsp; 30%</p>
                                <p>Save&nbsp;:&nbsp; $450.00</p>
                                <p>Now&nbsp;&nbsp;:&nbsp; $1,050.00</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left" className="flex w-full gap-2 rounded border p-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 duration-300">
                        <img className="w-52 rounded h-36" src="https://i.ibb.co/3RLjG0X/Award-Ceremonies.jpg" alt="" />
                        <div className=" text-sm">
                            <h4 className="text-base bg-gradient-to-r from-lime-300 to-orange-300 text-indigo-600 px-1 rounded font-medium">Award Ceremonies</h4>
                            <div className="mt-5 italic text-white">
                                <p>Price&nbsp;: <s>$1300.00</s></p>
                                <p>OFF &nbsp;&nbsp;:&nbsp; 30%</p>
                                <p>Save&nbsp;:&nbsp; $390.00</p>
                                <p>Now&nbsp;&nbsp;:&nbsp; $910.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="text-center text-2xl text-emerald-300 font-semibold mt-6">Do not miss our <span className="text-lime-400">limited offer</span></h3>
            </div>
        </div>
    );
};

export default Discount;