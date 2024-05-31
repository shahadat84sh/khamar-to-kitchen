import shipAndDeliver from "../../assets/ship-and -deli.png"
const History = () => {
    return (
        <div className='my-5 mx-10 grid grid-cols-12 gap-4 py-5'>
            <div className="col-span-5 bg-slate-50">
                <img src={shipAndDeliver} alt="" className="p-3 w-full pb-5" />
            </div>
            <div className="col-span-7">
                <h2 className="text-xl font-PoppinsRegular text-left">"Discover the Story Behind K2K: Nourishing Communities, One Bite at a Time"</h2>
                <p className="text-sm font-PoppinsLight pt-3">At K2K, we're more than just a grocery store. We're your partner in nourishing your family, supporting local farmers, and building a community around wholesome food.
                Founded in [Year], [Your Grocery Website Name] began with a simple vision: to provide fresh, high-quality groceries to families while championing sustainability and community engagement. What started as a small local market has grown into a trusted online destination for discerning shoppers seeking the best in both taste and values.
                Our mission is to make it easy and convenient for you to access the freshest produce, pantry staples, and specialty items while supporting sustainable farming practices and local producers. We believe that everyone deserves access to healthy, delicious food, and we're committed to making that a reality for our customers.</p>
            </div>

        </div>
    );
};

export default History;