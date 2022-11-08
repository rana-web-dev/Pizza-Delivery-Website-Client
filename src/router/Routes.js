import { createBrowserRouter } from "react-router-dom";
import AllReviews from "../components/home/allReview/AllReviews";
import Blogs from "../components/home/blog/Blogs";
import ServicesDetails from "../components/home/details/ServicesDetails";
import Home from "../components/home/home/Home";
import AllService from "../components/home/services/AllService";
import LogIn from "../components/logIn/LogIn";
import SignUp from "../components/signUp/SignUp";
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
                path: '/allReviews',
                element: <AllReviews></AllReviews>
            },
            {
                path: '/logIn',
                element: <LogIn></LogIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
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