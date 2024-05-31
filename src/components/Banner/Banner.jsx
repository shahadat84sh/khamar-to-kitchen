import banner from "../../assets/bannerimg.png";

const Banner = () => {
    return (
        <div className="h-[474px] bg-gradient-to-r from-[#D0EEC0] via-[#EAF0E6] to-[#D0EEC0]">
            <div className="container mx-auto px-4 md:flex justify-between items-center pt-14">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                    <h3 className="font-medium text-2xl md:text-3xl mb-4 text-center md:text-left">Your Nearby, Bazar</h3>
                    <div className="flex justify-center items-center py-2 w-full md:w-3/4 bg-white rounded-lg mx-auto md:mx-0">
                        <input type="search" className="px-10 py-2 ring-1 rounded-md ring-lime-500 focus:outline-none w-1/2 md:w-auto" placeholder="Search ..." />
                        <button className="bg-lime-500 p-2 rounded-lg text-white ml-2" type="submit">Find Bazar</button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 mt-8 md:mt-0">
                    <img src={banner} className="mx-auto w-full h-auto" alt="A Basket" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
