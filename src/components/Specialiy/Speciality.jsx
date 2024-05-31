import { BiLeaf } from "react-icons/bi";
import { FaRegSun } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";





const Speciality = () => {
    return (
        <div className="mx-10 my-10 flex flex-wrap justify-between items-center">
            <div className="p-8 rounded-lg shadow-md flex justify-center items-center gap-3">
                <TbTruckDelivery className="text-6xl p-3  rounded-full bg-slate-600 text-white " />
                <div>
                    <h5 className="capitalize text-lg">Free Delivery</h5>
                    <p>On order over $10</p>
                </div>
            </div>
            <div className="p-8 rounded-lg shadow-md flex justify-center items-center gap-3">
                <BiLeaf className="text-6xl p-3  rounded-full bg-slate-600 text-white " />
                <div>
                    <h5 className="capitalize text-lg">Product from</h5>
                    <p>Organic farm</p>
                </div>
            </div>
            <div className="p-8 rounded-lg shadow-md flex justify-center items-center gap-3">
                <SiAdguard
                    className="text-6xl p-3  rounded-full bg-slate-600 text-white " />
                <div>
                    <h5 className="capitalize text-lg">Order protection</h5>
                    <p>Secured information</p>
                </div>
            </div>
            <div className="p-8 rounded-lg shadow-md flex justify-center items-center gap-3">
                <FaRegSun
                    className="text-6xl p-3  rounded-full bg-slate-600 text-white " />
                <div>
                    <h5 className="capitalize text-lg">10% Discount</h5>
                    <p>On All Vegetables</p>
                </div>
            </div>
        </div>
    );
};

export default Speciality;