
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
  const isAdmin = true
  return (
    <div className="grid grid-cols-8 gap-4 min-h-screen p-4">
      {/* Sidebar */}
      <div className="col-span-2 bg-slate-300 rounded-md shadow-stone-300 p-4">
        <h2 className="text-xl font-bold mb-4">Navigation</h2>
        <ul>
          {isAdmin ? (
            <>
            <li className="mb-2">
            <Link to="/dashboard/orders" className="text-gray-700">
              Orders
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/users" className="text-gray-700">
              Customers
            </Link>
          </li>
            </>
          ):(
            <>
            <li className="mb-2">
            <Link to="/dashboard/profile" className="text-gray-700">
              My Profile
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/myorder" className="text-gray-700">
             Orders
            </Link>
          </li>
            </>
          )}
          
        </ul>
      </div>
      {/* Main Content */}
      <div className="col-span-6 bg-white p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
