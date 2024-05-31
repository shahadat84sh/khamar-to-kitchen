import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../hooks/useCart";
import { Helmet } from "react-helmet";

const ProductDetails = () => {
  const { user,token } = useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const axios = useAxiosPublic();
  const {refetch} = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`/products/${id}`)
      .then(res => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id, axios]);

  if (!product) {
    return <div>Product not found</div>;
  }
  
  const handleAddToCart = async (item) => {
    if (user && user.email) {
        const cartItem = {
            userEmail: user.email,
            productId: item,
            name: product.name,
            img: product.img,
            weight: product.weight,
            price: product.price,
            quantity: 1,
        };
        console.log(token)
        try {
            await axios.post('/cartProducts', cartItem, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            console.log("Product added to cart");
            navigate(-1)
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    } else {
        console.error('User not logged in');
    }
};

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <Helmet>
        <title>Khamar 2 Kitchen || Product Details</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-3">{product.name}</h2>
      <img src={product.img} alt={product.name} className="h-64 w-64 object-cover mb-3" />
      <p className="text-md text-center w-1/2 py-2">{product.desc}</p>
      <p className="text-lg mb-2">Weight: {product.weight}</p>
      <p className="text-lg font-semibold">Price: {product.price} tk</p>
      <button className="btn bg-lime-600 text-white p-2 rounded-lg shadow-xl ring-1 py-2" onClick={() => handleAddToCart(product._id)}>Add To cart</button>
    </div>
  );
};

export default ProductDetails;
