
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },

    {
        path: "/shop",
        element: <Shop />
    }
])

export default router;