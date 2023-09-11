
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./page/Home/Home";
import Shop from "./page/Shop/Shop";
import Cart from "./page/Cart/Cart";
import Detail from "./page/Detail/Detail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: ([
            {
                path: '/home',
                element: <Home />
            },
            
            {
                path: "/shop",
                element: <Shop />
            },
            
            {
                path: '/cart',
                element: <Cart />
            },

            {
                path: '/detail',
                element: <Detail />
            }
        ])
    },

])

export default router;