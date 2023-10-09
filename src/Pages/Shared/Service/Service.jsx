import PropTypes from 'prop-types';
import { PiCurrencyDollarBold } from 'react-icons/pi';
import { Link } from "react-router-dom";
const Service = ({ service }) => {
    const { id, title, image, price, short_description } = service || {};
    return (
        <div>
            <div className="p-6 rounded-md bg-sky-200 h-full flex flex-col justify-around shadow-xl">
                <div className="">
                    <img className="w-full h-[220px] rounded-md" src={image} alt="" />
                </div>
                <h3 className="text-[8px] md:text-[10px] lg:text-lg font-semibold  lg:pt-2">{title}</h3>
                <p className="text-[6px] md:text-[8px] lg:text-sm text-[#1C1B1B99]">
                    <span>{short_description}</span>
                </p>
                <div className="">
                    <div className="">
                        <div className="flex md:items-center">
                            <span className="text-[7px] md:text-[9px] lg:text-base"> Price : {price}</span>
                            <PiCurrencyDollarBold></PiCurrencyDollarBold>
                        </div>
                    </div>
                </div>
                <Link to={`/details/${id}`}>
                    <button

                        className="w-full text-white py-[2px] md:py-1 lg:py-2 text-[7px] md:text-[8px] lg:text-base rounded-sm  md:rounded lg:rounded-md md:mt-1 lg:mt-2 bg-[#2F80ED] hover:bg-[#3445ff] duration-200"
                    >
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object
}
export default Service;