import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import loginBanner from "../../assets/beach.jpg"
import facebook from "../../assets/facebook.png"
import google from "../../assets/google.png"
import twitter from "../../assets/twitter.png"
import github from "../../assets/github.png"
import { useState } from 'react';
import { Link } from "react-router-dom";
const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="bg-sky-100">
            <div className="w-1/2 mx-auto shadow-lg">
                <img src={loginBanner} alt="" />
                <form className="px-8 card-body">
                    <div className="flex items-center justify-between">
                        <div className="text-3xl font-medium">Sign Up</div>
                        <div className="flex gap-5">
                            <img src={facebook} className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" alt="facebook" />
                            <img src={google} className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" alt="google" />
                            <img src={twitter} className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" alt="twitter" />
                            <img src={github} className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" alt="twitter" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter Your Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        
                        <div className="relative">
                            <input className="input border input-bordered w-full" type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="Enter Your Password" required />
                            <span className="absolute right-3 bottom-3 cursor-pointer text-lg" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiFillEye></AiFillEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>Already have an account? Please <Link to="/login" className="text-blue-400">login here</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Registration;