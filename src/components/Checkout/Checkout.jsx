import BreadCrumbs from "../BreadCumbs/Breadcumbs";
import { GrNotes } from "react-icons/gr";
import AddedProduct from "../Product/AddedProduct";
import TotalAmount from "../Product/TotalAmount";
import Speciality from "../Specialiy/Speciality";
import AddressModal from "../Product/AddressModal";
import { useContext, useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import React Toastify styles
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Helmet } from "react-helmet";

const Checkout = () => {
  const { cart, refetch, isLoading, isError } = useCart();
  const { user,token } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [totalAmount, setTotalAmount] = useState(0);
  const [quantities, setQuantities] = useState([]);
  const [address, setAddress] = useState({});
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCheckoutEnabled, setIsCheckoutEnabled] = useState(false);

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

  const handleSaveClick = (e) => {
    e.preventDefault();
    const form = e.target;
    const f_name = form.f_name.value;
    const l_name = form.l_name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const city = form.city.value;
    const post = form.p_code.value;
    const info = form.info.value;
    setIsCheckoutEnabled(true);
    const formAddress = {
      firstName: f_name,
      lastName: l_name,
      email,
      phone,
      city,
      postCode: post,
      info,
    };
    setAddress(formAddress);
    form.reset();
  };

  const handleCheckout = async () => {
    if (user && user.email) {
      const orderItem = {
        userId: user.uid,
        items: cart,
        address,
        status: true,
        total: totalAmount,
      };

      try {
        const response = await axiosPublic.post('/orders', orderItem, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        console.log('Order placed:', response.data);

        toast.success('Order placed successfully!');

        // Delete all products from cart after successful order placement


        navigate('/');
      } catch (error) {
        if (error.response) {
          if (error.response.status === 409) {
            console.error('Duplicate order error:', error.response.data);
            toast.error('Order already placed. Please check your orders.');
          } else {
            console.error('Response error:', error.response.data);
            toast.error('Failed to place order. Please try again.');
          }
        } else if (error.request) {
          console.error('Request error:', error.request);
          toast.error('Network error. Please check your connection.');
        } else {
          console.error('Error:', error.message);
          toast.error('An error occurred. Please try again.');
        }
      }
    }
  };

  const deleteAllProductsFromCart = async () => {
    if (!user || !token) {
      toast.error('User not authenticated');
      return;
    }

    try {
      const response = await axiosPublic.delete('/cartProducts', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        toast.success('All products removed successfully');
      } else {
        toast.error('Failed to remove products');
      }
    } catch (error) {
      console.log(error)
    }
  };

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
      refetch(); // Refetch the cart data after removing the product
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <div className="font-PoppinsRegular">
      <Helmet>
        <title>Khamar 2 Kitchen || checkout</title>
      </Helmet>
      <BreadCrumbs />
      <div className="grid grid-cols-9 gap-4 py-5 mx-10">
        <div className="col-span-9 md:col-span-6 mt-6">
          <div className="flex items-center p-2 rounded-md bg-slate-200">
            <GrNotes />
            <h2 className="ms-1 font-PoppinsRegular">Billing Details</h2>
          </div>
          <form className="ms-1 mt-5 space-y-2" onSubmit={handleSaveClick}>
            <div className="flex justify-between items-center gap-2">
              <input type="text" className="bg-slate-100 w-full p-2 rounded-md" placeholder="First Name*" name="f_name" />
              <input type="text" className="bg-slate-100 w-full p-2 rounded-md" placeholder="Last Name*" name="l_name" />
            </div>
            <div className="flex justify-between items-center gap-2">
              <input type="email" className="bg-slate-100 w-full p-2 rounded-md" placeholder="Email*" name="email" />
              <input type="number" className="bg-slate-100 w-full p-2 rounded-md" placeholder="Phone*" name="phone" />
            </div>
            <div className="flex justify-between items-center gap-2">
              <input type="text" className="bg-slate-100 w-full p-2 rounded-md" placeholder="Address*" name="addr_1" />
              <input type="text" className="bg-slate-100 w-full p-2 rounded-md" placeholder="Address 2" name="addr_2" />
            </div>
            <div className="flex justify-between items-center gap-2">
              <input type="text" className="bg-slate-100 w-full p-2 rounded-md" placeholder="City /Town" name="city" />
              <input type="text" className="bg-slate-100 w-full p-2 rounded-md" placeholder="Post Code" name="p_code" />
            </div>
            <textarea placeholder="Additional information" className="w-full h-10 bg-slate-100 p-2 rounded-md" minLength='20' maxLength="500" name="info" />
            <label>Save to checkout:</label>
            <hr />
            <button type="submit" className="bg-lime-500 text-white p-2 rounded-lg shadow-md">Save</button>
          </form>
        </div>
        <div className="col-span-9 md:col-span-3 px-5">
          <h2 className="text-lg bg-slate-50 p-2 rounded-sm ms-2">Order Summary</h2>
          {isModalOpen && <AddressModal onSave={handleAddressSave} address={address} onClose={() => setIsModalOpen(false)} />}
          <AddedProduct
            cart={cart}
            handleQuantityChange={handleQuantityChange}
            quantities={quantities}
            removeProductFromCart={removeProductFromCart}
          />
          <TotalAmount totalAmount={totalAmount} handleCheckout={handleCheckout} isCheckoutEnabled={isCheckoutEnabled} />
        </div>
      </div>
      <Speciality />
    </div>
  );
};

export default Checkout;
