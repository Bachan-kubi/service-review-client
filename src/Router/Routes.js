import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
// import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import AddServices from "../Pages/Home/Services/AddServices";
import AllServices from "../Pages/Home/Services/AllServices";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Reviews";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element:<Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            // {
            //     path: 'checkout/:id',
            //     element: <PrivateRoute><Checkout /></PrivateRoute>,
            //     loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            // },
            {
                path: 'serviceDetails/:id',
                element: <PrivateRoute><ServiceDetails /></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: 'allServices',
                element: <PrivateRoute><AllServices /></PrivateRoute>,
                // loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: 'reviews',
                element: <PrivateRoute><Orders /></PrivateRoute>
            },
            {
                path: 'add-services',
                element: <PrivateRoute><AddServices /></PrivateRoute>
            },
            {
                path: 'blog',
                element:<Blog />
            }
        ]
    }
]);

export default router; 
