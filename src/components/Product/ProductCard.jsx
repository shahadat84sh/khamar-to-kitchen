import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const ProductCard = ({ searchType }) => {
  const [products, setProducts] = useState([]);
  const axios = useAxiosPublic();

  useEffect(() => {
    axios.get('/products', {
      params: { type: searchType }
    })
      .then(res => {
        setProducts(res.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [axios, searchType]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-5">
      {products.map((product) => (
        <Link key={product._id} to={`/products/${product._id}`}>
          <div className="p-1 shadow-md rounded-md text-center">
            <img src={product.img} alt={product.name} className="h-40 w-full object-cover" />
            <h2 className="text-xl">{product.name}</h2>
            <p className="text-md text-lime-500">{product.weight}</p>
            <span>{product.price} tk</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
