import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/home/Home";
import AllService from "../components/home/services/AllService";
import Main from "../layout/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/allServices',
                element: <AllService></AllService>
            },
        ]
    }
    
])


export default router;