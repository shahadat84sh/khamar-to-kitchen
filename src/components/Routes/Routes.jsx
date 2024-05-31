import { createBrowserRouter } from "react-router-dom"
import Home from "../Home/Home"
import Main from "../Layout/Main"
import Products from "../Product/Products"
import ProductDetails from "../Product/ProductDetails"
import Checkout from "../Checkout/Checkout"
import About from "../About/About"
import ShipAndDeliver from "../ShipAndDelivery/ShipAndDeliver"
import Login from "../Login/Login"
import SignUp from "../SignUp/SignUp"
import PrivateRoute from "./PrivateRoute"
import DashBoard from "../dahsboard/Dashboard"
import CustomerOrder from "../../DashBoard/CustomerOrder"
import CustomerList from "../../DashBoard/CustomerList"
import OrderDetails from "../../DashBoard/OrderDetails"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/products/:id',
                element: <PrivateRoute><ProductDetails /></PrivateRoute>,
              },
              
            {
                path:'/checkout',
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path:'/about-us',
                element:<About></About>
            },
            {
                path:'/shipping-And-Delivery',
                element:<ShipAndDeliver></ShipAndDeliver>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/dashboard',
                element:<DashBoard></DashBoard>,
                children:[
                    {
                        path:'/dashboard/orders',
                        element:<CustomerOrder></CustomerOrder>
                    },
                    {
                        path:'/dashboard/users',
                        element:<CustomerList></CustomerList>
                    },
                    {
                        path:'/dashboard/orders/:id',
                        element:<OrderDetails></OrderDetails>
                    }
                ]
            }
        ]
    }
])