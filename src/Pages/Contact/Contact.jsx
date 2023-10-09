import { Link } from "react-router-dom";
import contact from "../../assets/depositphotos_52470369-stock-illustration-people-holding-words-contact-us.jpg"
const Contact = () => {
    return (
        <div>
            <div className="">
                <div className="bg-sky-100">
                    <div className="md:w-1/2 mx-auto shadow-lg">
                    <img className="mx-auto w-full lg:h-96" src={contact} alt="" />
                        <form className="px-8 card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>
                            <div className="">
                                <textarea className="w-full p-5" name="" id="" rows="5" placeholder="Write your comments"></textarea>
                            </div>
                            <div className="form-control">
                                <Link to="/"><button className="btn btn-primary w-full">Submit</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;