
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const CityList = () => {
 const [shopList, setShopList] = useState([])
 useEffect(() =>{
   const fetchData = async () =>{
    try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/shop`)
        const data = await response.json()
        setShopList(data)
    } catch (error) {
      console.log('Error fetching data', error)  
    }
   }
   fetchData()
 },[])
    return (
        <div className="mx-10 my-12">
            <h3 className="text-xl my-5 font-semibold">Find us these cities and many more !</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
               {
                shopList.map((shop) =>
                    <div key={shop.id} className="relative text-center shadow-xl p-5">
                <img src={shop.image} alt="bazar-title" className="rounded-md min-h-48" />
                <span className="absolute bottom-24 bg-white text-black left-8 rounded-xl p-1">{shop.place}</span>
                <Link to='/products' className="text-lime-500 p-3">Shop from this bazar</Link>
            </div>
                )
               }
                
            </div>

        </div>
    );
};

export default CityList;