import { BiTimer } from "react-icons/bi";
import deliver from "../../assets/deliver.png";


const NewsLetter = () => {
    return (
        <div className="px-16 bg-lime-600">
            <div className="flex justify-center gap-96 items-center pt-14 pb-16 relative">
                <div>
                    <h1 className="text-3xl text-white mb-5">Subscribe To Our NewsLetter</h1>
                    <div className="bg-white p-2 rounded-lg">
                        <input type="email" placeholder="Write your Email Here" className="px-14 text-sm focus:outline-none" />
                        <button className="text-white ring-1 bg-lime-500 p-1 rounded-lg">Subscribe</button>
                    </div>
                </div>
                <div className="absolute right-1/4 top-24">
                    <div className="bg-white flex justify-center items-center p-3 rounded-full me-16">
                        <BiTimer className="text-4xl text-orange-500" />
                        <p>100 % fresh <br /> Super fast delivery</p>
                    </div>
                </div>
                <div className="bg-white p-10 w-72  rounded-br-full  rounded-tr-full">
                    <img src={deliver} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;