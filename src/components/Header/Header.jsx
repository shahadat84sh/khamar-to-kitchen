import { useContext, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../hooks/useCart";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showSearch, setShowSearch] = useState(false);
  const {cart} = useCart()
  const isAdmin = true;



  const handleSignOut = () => {
    logOut();
  };

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header className="flex flex-wrap justify-between items-center gap-10 p-2 mx-10 m-auto font-PoppinsRegular">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="k2k_logo" />
        </div>
      </Link>
      <div className="flex items-center rounded-md p-4 h-9 gap-1 bg-[#ecffec]">
        <CiLocationOn width="30px" height="30px" />
        <div className="text-base">
          <p>
            Location <span className="text-sm text-[#FC7C16]">Mirpur 2</span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 relative">
        {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="absolute right-20 w-48 p-2 rounded-md bg-white border border-gray-300"
          />
        )}
        <GoSearch
          className="text-xl text-[#43A81C] cursor-pointer z-50"
          onClick={handleSearchToggle}
        />
        {
          user? (<button onClick={handleSignOut} className="bg-lime-500 px-3 py-1 text-white rounded-lg shadow-lg">Logout</button>):(<Link to='/login'className="bg-lime-500 px-3 py-1 text-white rounded-lg shadow-lg">Sign In</Link>)
        }
        <Link to='/dashboard/orders'><FaCartShopping className="text-xl text-rose-400 relative"/>{
          cart.length > 0 &&<span className="absolute bottom-4 -right-2 text-lime-700 text-sm" >{cart.length}</span>
        }
        </Link>
      </div>
    </header>
  );
};

export default Header;
