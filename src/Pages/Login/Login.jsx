import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import loginBanner from "../../assets/beach1.jpg"
import facebook from "../../assets/facebook.png"
import google from "../../assets/google.png"
import twitter from "../../assets/twitter.png"
import github from "../../assets/github.png"
import { useContext, useState} from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            swal("Oops!!", "Password should be at least 6 characters", "error");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            swal("Oops!!", "Your password should have at last one upper case characters", "error");
            return;
        }

        signIn(email, password)
            .then(() => {
                swal("Nice!!", "User sign in successful", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                swal("Oops!!", `${error.message}`, "error");
            });
    };
    return (
        <div>
            <div className="bg-sky-100">
                <div className="w-1/2 mx-auto shadow-lg">
                    <img src={loginBanner} alt="" />
                    <form onSubmit={handleLogin} className="px-8 card-body">
                        <div className="flex items-center justify-between">
                            <div className="text-3xl font-medium">Sign In</div>
                            <div className="flex gap-5">
                                <img src={facebook} className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" alt="facebook" />
                                <img src={google} className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" alt="google" />
                                <img src={twitter} className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" alt="twitter" />
                                <img src={github} className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" alt="twitter" />
                            </div>
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
                        <p>New to this website? Please <Link to="/registration" className="text-blue-400">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;