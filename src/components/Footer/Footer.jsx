import { BsFacebook } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { TfiLinkedin } from "react-icons/tfi";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <div className="bg-black py-10">
            <div className="mx-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3 text-white">
                <div>
                    <img src={logo} alt="logo" />
                    <p className="text-sm  my-2 text-white">The most advanced & popular self-run shipping protection platform.</p>
                    <div className="flex gap-3">
                        <BsFacebook className="bg-white w-6 h-6 p-1 rounded-full text-black" />
                        <FaTwitter className="bg-white w-6 h-6 p-1 text-black rounded-full" />
                        <TfiLinkedin className="bg-white w-6 h-6 p-1 text-black rounded-full" />
                        <FaInstagram className="bg-white w-6 h-6 p-1  text-black rounded-full" />
                    </div>
                </div>
                <div>
                    <h2 className="text-lg mb-3">K2K Bazar</h2>
                    <Link to='/about-us'><p className="mb-2">About us</p></Link>
                    <Link to='/shipping-And-Delivery'><p className="text-lime-400">Shipping and delivery</p></Link>
                </div>
                <div>
                    <h2 className="text-lg">Help Center</h2>
                    <p className="text-sm mt-2">frequently ask question</p>
                    <p className="text-sm mt-2">Terms amd condition</p>
                    <p className="text-sm mt-2">Privacy and Policy</p>
                </div>
                <div className="space-y-1">
                    <h2 className="text-lg">Contact Us</h2>
                    <div className="flex justify-center gap-1">
                        <CiLocationOn className="text-4xl" />
                        <p className="text-sm">House 44, Road 16, 27(Old Dhanmondi) Dhaka , 1208, Bang;adesh </p>
                    </div>
                    <div className="flex  gap-1">
                        <IoMailOutline
                            className="text-base" />
                        <p className="text-sm">info@k2k.com</p>
                    </div>
                    <div className="flex  gap-1">
                        <FaPhoneAlt
                            className="text-base" />
                        <p className="text-sm">+880356786789</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;