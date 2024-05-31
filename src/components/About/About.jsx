
import BreadCrumbs from '../BreadCumbs/Breadcumbs';
import choice from "../../assets/chose.png"
import payment from "../../assets/payment.png"
import delivery from "../../assets/delivery.png"
import History from '../History/History';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <>
        <Helmet>
            <title>Khamar 2 Kitchen || About us</title>
        </Helmet>
         <BreadCrumbs/>   
         <div className='mx-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-16 font-PoppinsLight'>
            <div className='flex justify-center items-center text-center flex-col'>
                <img src={choice} alt="" className='w-16 h-16' />
                <h3 className='pt-5 text-lg font-PoppinsRegular'>Choose product</h3>
                <p className='text-sm p-3'>If you are going to use a passage of you need to be sure there isn't anything emc barrassing hidden in the middle</p>
            </div>
            <div className='flex justify-center items-center text-center flex-col '>
                <img src={payment} alt="" className='w-16 h-16' />
                <h3 className='pt-5 text-lg font-PoppinsRegular'>Make your Payment</h3>
                <p className='text-sm p-3'>Experience hassle-free online shopping with our service! Simply choose the product you want</p>
            </div>
            <div className='flex justify-center text-center items-center flex-col '>
                <img src={delivery} alt="" className='w-16 h-16' />
                <h3  className='pt-5 text-lg font-PoppinsRegular'>Fast Delivery</h3>
                <p className='text-sm p-3'>Experience hassle-free online shopping with our service! Simply choose the product you want</p>
            </div>
         </div>
         <History/>
        </>
    );
};

export default About;