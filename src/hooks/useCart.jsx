import { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    const axios = useAxiosPublic();
    const token = localStorage.getItem('access-token');

    const { refetch, data: cart = [], isLoading, isError } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !!user && !loading, 
        queryFn: async () => {
            const res = await axios.get(`/cartProducts?email=${user.email}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return res.data;
        },
    });

    // Refetch the cart items once the user becomes available
    useEffect(() => {
        if (user && !loading) {
            refetch();
        }
    }, [user, loading, refetch]);

    return { cart, refetch, isLoading, isError };
};

export default useCart;
