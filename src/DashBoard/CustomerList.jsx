import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axiosPublic.get('/users');
        setCustomers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCustomers();
  }, [axiosPublic]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">Serial</th>
            <th className="px-4 py-2 border-b text-left">Name</th>
            <th className="px-4 py-2 border-b text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer._id} className="text-left">
              <td className="px-4 py-2 border-b">{index + 1}</td>
              <td className="px-4 py-2 border-b">{customer.name}</td>
              <td className="px-4 py-2 border-b">{customer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
