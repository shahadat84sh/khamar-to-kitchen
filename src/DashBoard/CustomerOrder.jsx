import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const CustomerOrder = () => {
  const [orders, setOrders] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosPublic.get('/orders');
        setOrders(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };

    fetchOrders();
  }, [axiosPublic]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">Serial</th>
            <th className="px-4 py-2 border-b text-left">Email</th>
            <th className="px-4 py-2 border-b text-left">Order Date</th>
            <th className="px-4 py-2 border-b text-left">Total Amount</th>
            <th className="px-4 py-2 border-b text-left">Status</th>
            <th className="px-4 py-2 border-b text-left">detail</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order,index) => (
            <tr key={order._id} className="text-left">
              <td className="px-4 py-2 border-b">{index + 1}</td>
              <td className="px-4 py-2 border-b">{order.address.email}</td>
              <td className="px-4 py-2 border-b">{new Date(order.createdAt).toLocaleDateString()}</td>
              <td className="px-4 py-2 border-b">{order.total}</td>
              <td className="px-4 py-2 border-b">Pending</td>
              <Link to={`/dashboard/orders/${order._id}`}>
              <td className="px-4 py-2 border-b"><FaEye className="text-lime-500"/></td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerOrder;
