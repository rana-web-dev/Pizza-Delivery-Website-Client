import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/home/blog/Blogs";
import ServicesDetails from "../components/home/details/ServicesDetails";
import Home from "../components/home/home/Home";
import AllService from "../components/home/services/AllService";
import Main from "../layout/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/allServices',
                element: <AllService></AllService>
            },
            {
                path: '/details/:id',
                loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`) ,
                element: <ServicesDetails></ServicesDetails>
            }
        ]
    }
    
])


export default router;