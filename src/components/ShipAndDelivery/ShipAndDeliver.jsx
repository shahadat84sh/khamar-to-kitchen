import Accordion from "../Accordion/Accordion";
import BreadCrumbs from "../BreadCumbs/Breadcumbs";


const ShipAndDeliver = () => {
    return (
        <>
         <BreadCrumbs/> 
         <div className="m-12">
            <div className="w-5/6 m-auto bg-slate-50 rounded-md p-5 shadow-lg">
            <h1 className="font-PoppinsRegular text-lg">We have our own delivery system and we have our trained delivery personnel with bikes who are dedicated to delivering any type of goods to your doorsteps.</h1>  
            <Accordion/>  
            </div>    
        </div>  
        </>
    );
};

export default ShipAndDeliver;