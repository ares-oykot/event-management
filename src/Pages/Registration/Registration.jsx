import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import loginBanner from "../../assets/beach.jpg"
import facebook from "../../assets/facebook.png"
import google from "../../assets/google.png"
import twitter from "../../assets/twitter.png"
import github from "../../assets/github.png"
import { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { AuthContext } from '../../Providers/AuthProviders';
import { updateProfile } from "firebase/auth";

const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, googleSignIn, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const url = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;

        if (password.length < 6) {
            swal("Oops!!", "Password should be at least 6 characters", "error");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            swal("Oops!!", "Your password should have at last one upper case characters", "error");
            return;
        }
        else if (!accepted) {
            swal("Oops!!", "Please accepted our terms and conditions", "error");
            return;
        }

        createUser(email, password)
            .then((result) => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: url,
                })
                    .then(() => {

                    })
                    .catch(() => {

                    });
                swal("Nice!!", "User registration is successful", "success");
                navigate("/");
            })
            .catch(error => {
                swal("Oops!!", `${error.message}`, "error");
            });


    }
    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(() => {
                swal("Nice!!", "User registration is successful", "success");
                navigate("/");
            })
            .catch(error => {
                swal("Oops!!", `${error.message}`, "error");
            });
    };
    const handleGithubSignUp = () => {
        githubLogin()
            .then(() => {
                swal("Nice!!", "User registration is successful", "success");
                navigate("/");
            })
            .catch(error => {
                swal("Oops!!", `${error.message}`, "error");
            });
    };
    return (
        <div className="bg-sky-100">
            <div className="w-1/2 mx-auto shadow-xl">
                <img src={loginBanner} alt="" />
                <form onSubmit={handleSignUp} className="px-8 card-body">
                    <div className="flex items-center justify-between">
                        <div className="text-3xl font-medium">Sign Up</div>
                        <div className="flex gap-5">
                            <span><img src={facebook} className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" alt="facebook" /></span>
                            <span onClick={handleGoogleSignUp}><img src={google} className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" alt="google" /></span>
                            <img src={twitter} className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" alt="twitter" />
                            <span onClick={handleGithubSignUp}><img src={github} className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" alt="twitter" /></span>
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
                        <div className="ml-1 my-2">
                            <input type="checkbox" name="terms" id="terms" />
                            <label className="ml-3" htmlFor="terms">Accept our <a className="text-blue-400 cursor-pointer hover:underline">Terms and Conditions</a></label>
                        </div>
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