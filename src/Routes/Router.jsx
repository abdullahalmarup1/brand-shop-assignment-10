import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import AddCar from "../Pages/AddCar/AddCar";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Register from "../Authentication/Register/Register";
import Login from "../Authentication/Login/Login";
import GoogleLogin from "../Authentication/GoogleLogin/GoogleLogin";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyCart from "../Pages/MyCart/MyCart";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(' https://brand-shop-server-assignment-10-qok2u6qwf.vercel.app/brands')
            },

            {
                path: '/brand_name/:brandName',
                element: <BrandProducts></BrandProducts>,
                loader: ({ params }) =>
                    fetch(` https://brand-shop-server-assignment-10-qok2u6qwf.vercel.app/products?brand_name=${params.brandName}`),
            },
            {
                path: "/myCart",
                element: <PrivateRoute>
                    <MyCart></MyCart>
                </PrivateRoute>,
                // loader: ({ params }) =>
                //     fetch(` https://brand-shop-server-assignment-10-qok2u6qwf.vercel.app/product/${params.id}`)
            },
            {
                path: "/ addCar",
                element: <AddCar></AddCar>,
            },

            {
                path: "/product-details/:id",
                element: <PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>,
                loader: ({ params }) =>
                    fetch(` https://brand-shop-server-assignment-10-qok2u6qwf.vercel.app/product/${params.id}`)
            },


            {
                path: "/update-product/:id",
                element: <PrivateRoute>
                    <UpdateProduct></UpdateProduct>
                </PrivateRoute>,
                loader: ({ params }) =>
                    fetch(` https://brand-shop-server-assignment-10-qok2u6qwf.vercel.app/product/${params.id}`)
            },

            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/googleLogin',
                element: <GoogleLogin></GoogleLogin>
            },
        ]
    },
]);

export default router;
