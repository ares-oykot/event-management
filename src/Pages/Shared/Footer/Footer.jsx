import facebook from "../../../assets/facebook.png"
import google from "../../../assets/google.png"
import twitter from "../../../assets/twitter.png"
import github from "../../../assets/github.png"
const Footer = () => {
    return (
        <div>
            <footer className=" footer-center py-8 bg-primary text-white">
                <h2 className="text-4xl font-black">Find Us On</h2>
                <nav className="my-5">
                    <div className="flex gap-10 justify-center my-2">
                        <a href="">
                            <img className="w-10 h-10" src={facebook} alt="" />
                        </a>
                        <a href="">
                            <img className="w-10 h-10" src={google} alt="" />
                        </a>
                        <a href="">
                            <img className="w-10 h-10" src={github} alt="" />
                        </a>
                        <a href="">
                            <img className="w-10 h-10" src={twitter} alt="" />
                        </a>
                    </div>
                </nav>
                <p className="">Event Management Ltd.</p>
                <br />
                <span className="">Providing reliable tech since 1969</span>
                <p className="my-4">Copyright © 2023 - All right reserved</p>
            </footer>
        </div>
    );
};

export default Footer;