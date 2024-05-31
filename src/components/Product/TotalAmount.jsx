import { Link, useLocation } from 'react-router-dom';

const TotalAmount = ({ totalAmount, handleCheckout, isCheckoutEnabled }) => {
  const location = useLocation()
  return (
    <div className="mt-10 shadow-lg rounded-md p-10">
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>৳{totalAmount}</p>
      </div>
      <div className="flex justify-between">
        <p>Delivery Charge</p>
        <p>Free</p>
      </div>
      <p className="py-5 text-lg">--------------------------</p>
      <div className="flex justify-between">
        <h3>Total Amount</h3>
        <h3>৳{totalAmount}</h3>
      </div>
      {
        location.pathname == '/products' ?(
          <Link to='/checkout'>
      <button className="text-xl text-white bg-lime-500 items-center w-full rounded-full my-2 p-2">
        Continue your Order
      </button>
      </Link>
        ):(
      <button className="text-xl text-white bg-lime-500 items-center w-full rounded-full my-2 p-2 disabled:bg-slate-100" onClick={handleCheckout} disabled={!isCheckoutEnabled}>
        Checkout
      </button>
        )
      }
      
    </div>
  );
};

export default TotalAmount;
