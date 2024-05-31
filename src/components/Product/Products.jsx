import { BsPlusLg } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import BreadCrumbs from "../BreadCumbs/Breadcumbs";
import ProductCard from "./ProductCard";
import AddedProduct from "./AddedProduct";
import TotalAmount from "./TotalAmount";
import { useContext, useEffect, useState } from "react";
import AddressModal from "./AddressModal";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Sepeciality from "../Specialiy/Speciality.jsx"
import { Helmet } from "react-helmet";

const Products = () => {
  const { cart, refetch, isLoading, isError } = useCart();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [totalAmount, setTotalAmount] = useState(0);
  const [quantities, setQuantities] = useState([]);
  const [address, setAddress] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchType, setSearchType] = useState("");

  useEffect(() => {
    if (cart.length > 0) {
      setQuantities(cart.map(item => item.quantity));
    }
  }, [cart]);

  useEffect(() => {
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price * (quantities[index] || item.quantity);
    });
    setTotalAmount(total);
  }, [cart, quantities]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {isError.message}</div>;

  const handleAddressSave = (addressData) => {
    setAddress(addressData);
    setIsModalOpen(false);
  };

  const handleQuantityChange = (index, change) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + change);
    setQuantities(newQuantities);
  };

  const removeProductFromCart = async (productId) => {
    try {
      await axiosPublic.delete(`/cartProducts/${productId}`);
      refetch();
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchType(event.target.value);
  };

  return (
    <div className="font-PoppinsRegular">
      <Helmet>
        <title>Khamar 2 Kitchen || Products</title>
      </Helmet>
      <BreadCrumbs />
      <div className="grid grid-cols-9 gap-4 py-5 mx-2 md:mx-10">
        <div className="col-span-9 md:col-span-6">
          <div className="flex items-center relative w-full">
            <IoIosSearch className="text-black text-xl absolute left-4" />
            <input type="search" placeholder="Search products" className="w-full border border-gray-300 rounded-md py-2 px-10"
              onChange={handleSearchChange}
              value={searchType}
            />
          </div>
          <ProductCard searchType={searchType} />
        </div>
        <div className="col-span-9 md:col-span-3 px-5">
          <div className="grid grid-cols-1 gap-4">
            <h2 className="text-md font-semibold text-left">Delivery Address</h2>
            <hr />

            {isModalOpen && <AddressModal onSave={handleAddressSave} address={address} onClose={() => setIsModalOpen(false)} />}

            <button onClick={() => setIsModalOpen(true)} className="flex items-center justify-center gap-5 bg-lime-50 rounded-md ring-yellow-100 text-lime-500 p-3">
              <BsPlusLg />
              <span className="text-sm">Add Delivery Address</span>
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 shadow-lg mt-5 rounded-lg">
            <h2 className="text-md p-4">My Order</h2>
            <AddedProduct
              cart={cart}
              quantities={quantities}
              handleQuantityChange={handleQuantityChange}
              removeProductFromCart={removeProductFromCart}
            />
            <TotalAmount totalAmount={totalAmount} />
          </div>
        </div>
      </div>
      <Sepeciality />
    </div>
  );
};

export default Products;
