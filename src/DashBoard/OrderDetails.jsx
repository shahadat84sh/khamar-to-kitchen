import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const OrderDetails = () => {
    const axiosPublic = useAxiosPublic()
    const {id} = useParams();
    const [order, setOrder] = useState([])
    useEffect(() =>{
            const fetchOrder = async() =>{
                try {
                    const response = await axiosPublic.get(`/orders/${id}`)
                    console.log(response.data)
                    setOrder(response.data)
                } catch (error) {
                   console.log(error) 
                }
            }
            fetchOrder()
    },[axiosPublic, id])
    return (
        <div>
           
                <ul>
                {order.map((order) =>{
                    <li key={order._id}>{order.email}</li>
                })}
                </ul>
           
           this is order details page 
        </div>
    );
};

export default OrderDetails;