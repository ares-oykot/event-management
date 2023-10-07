import { NavLink, Link } from "react-router-dom";
import Logo from "../../../assets/logo-removebg-preview.png"
import { useContext} from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import profile from "../../../assets/user.png"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/registration">Registration</NavLink></li>
    </>
    return (
        <div>
            <div>
                <div className="navbar bg-sky-300">
                    <div className="navbar-start">
                        <img className="h-14 hidden lg:inline" src={Logo} alt="" />
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                    </div>
                    <div className="md:mr-12 lg:hidden">
                        <img className="h-10 md:h-14 lg:hidden" src={Logo} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? <button onClick={handleSignOut} className=" bg-black text-white px-6 py-2 rounded-sm">Sign Out</button>
                                :
                                <Link to="/login"><button className=" bg-black text-white px-6 py-2 rounded-sm">Login</button></Link>
                        }
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user?.photoURL ? <img src={user?.photoURL} /> :
                                    <img src={profile} />
                                }
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;