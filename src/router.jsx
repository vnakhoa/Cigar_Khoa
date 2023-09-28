
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./page/Home/Home";
import Shop from "./page/Shop/Shop";
import Cart from "./page/Cart/Cart";
import Detail from "./page/Detail/Detail";
import Dashboard from "./page/Dashboard/Dashboard";
import Login from "./page/Login/Login";
import Checkout from "./page/Checkout/Checkout";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: ([
            {
                path: '/',
                element: <Home />
            },

            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/shop/:id",
                element: <Shop />
            },

            {
                path: '/cart',
                element: <Cart />
            },

            {
                path: '/detail',
                element: <Detail />
            },

            {
                path: '/detail/:id',
                element: <Detail />
            },

            {
                path: '/checkout',
                element: <Checkout />
            }
        ])
    },

    {
        path: '/dashboard',
        element: <Dashboard />,
    },

    {
        path: '/login',
        element: <Login />,
    }
])

export default router;