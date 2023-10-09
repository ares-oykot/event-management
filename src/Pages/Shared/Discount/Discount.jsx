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
            <div style={backgroundImg} className="my-5 md:my-7 lg:my-10 py-3 md:py-5 lg:py-0 lg:h-96 rounded md:rounded-md lg:rounded-lg lg:pt-4">
                <h1 className="text-center font-black text-4xl md:text-6xl text-transparent  bg-clip-text bg-gradient-to-r from-sky-400 to-fuchsia-500">OUR CURRENT OFFER</h1>
                <h5 className="text-[10px] md:text-xl my-2 text-emerald-300 text-center font-semibold">We currently have <span className="text-lime-400 font-black">30%</span> discount on these services</h5>
                <div className="grid md:grid-cols-3 md:px-4 gap-2 mx-10 md:mx-0 md:gap-4 md:justify-between">


                    <div data-aos="flip-right" className="flex w-full gap-2 border rounded p-2 md:p-2 lg:p-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 duration-300">
                        <img className="h-24 w-40 md:w-36 lg:w-52 rounded md:h-20 lg:h-36" src="https://i.ibb.co/SQkj4Gs/Trade.jpg" alt="" />
                        <div className="text-black text-sm">
                            <h4 className="text-indigo-600 p-[2px] md:text-[6px] lg:text-base font-medium bg-gradient-to-r from-lime-300 to-orange-300 rounded md:rounded-[1px] md:leading-[12px] lg:rounded leading-4 md:px-[2px] lg:px-1">Trade Shows</h4>
                            <div className="mt-2 text-[9px] leading-[15px] lg:mt-5 italic md:text-[4px] lg:text-sm text-white">
                                <p>Price&nbsp;: <s>$1200.00</s></p>
                                <p>OFF &nbsp;&nbsp;:&nbsp; 30%</p>
                                <p>Save&nbsp;:&nbsp; $360.00</p>
                                <p>Now&nbsp;&nbsp;:&nbsp; $840.00</p>
                            </div>
                        </div>
                    </div>



                    <div data-aos="flip-down" className="flex w-full gap-2 rounded border p-2 md:p-2 lg:p-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 duration-300">
                        <img className="h-24 w-40 md:w-30 lg:w-52 rounded md:h-20 lg:h-36" src="https://i.ibb.co/NTbbg6L/Product-Launches.jpg" alt="" />
                        <div className=" text-sm">
                            <h4 className="text-indigo-600 p-[2px] md:text-[6px] lg:text-base font-medium bg-gradient-to-r from-lime-300 to-orange-300 rounded md:rounded-[1px] md:leading-[12px] lg:rounded leading-4 md:px-[2px] lg:px-1">Product Launches</h4>
                            <div className="mt-2 text-[9px] leading-[15px] lg:mt-5 italic md:text-[4px] lg:text-sm text-white">
                                <p>Price&nbsp;: <s>$1500.00</s></p>
                                <p>OFF &nbsp;&nbsp;:&nbsp; 30%</p>
                                <p>Save&nbsp;:&nbsp; $450.00</p>
                                <p>Now&nbsp;&nbsp;:&nbsp; $1,050.00</p>
                            </div>
                        </div>
                    </div>


                    <div data-aos="flip-left" className="flex w-full gap-2 rounded border p-2 md:p-2 lg:p-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 duration-300">
                        <img className="h-24 w-40 md:w-30 lg:w-52 rounded md:h-20 lg:h-36" src="https://i.ibb.co/3RLjG0X/Award-Ceremonies.jpg" alt="" />
                        <div className=" text-sm">
                            <h4 className="text-indigo-600 p-[2px] md:text-[6px] lg:text-base font-medium bg-gradient-to-r from-lime-300 to-orange-300 rounded md:rounded-[1px] md:leading-[12px] lg:rounded leading-4 md:px-[2px] lg:px-1">Award Ceremonies</h4>
                            <div className="mt-2 text-[9px] leading-[15px] lg:mt-5 italic md:text-[4px] lg:text-sm text-white">
                                <p>Price&nbsp;: <s>$1300.00</s></p>
                                <p>OFF &nbsp;&nbsp;:&nbsp; 30%</p>
                                <p>Save&nbsp;:&nbsp; $390.00</p>
                                <p>Now&nbsp;&nbsp;:&nbsp; $910.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="text-center text-xl md:text-2xl text-emerald-300 font-semibold mt-3 md:mt-6">Do not miss our <span className="text-lime-400">limited offer</span></h3>
            </div>
        </div>
    );
};

export default Discount;