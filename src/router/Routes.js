import { createBrowserRouter } from "react-router-dom";
import AddServices from "../components/home/addServices/AddServices";
import AddReview from "../components/home/allReview/AddReview";
import AllReviews from "../components/home/allReview/AllReviews";
import Blogs from "../components/home/blog/Blogs";
import ServicesDetails from "../components/home/details/ServicesDetails";
import Home from "../components/home/home/Home";
import MyReview from "../components/home/myReview/MyReview";
import AllService from "../components/home/services/AllService";
import LogIn from "../components/logIn/LogIn";
import NotFound from "../components/notFound/NotFound";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import SignUp from "../components/signUp/SignUp";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/allServices",
        element: <AllService></AllService>,
      },
      {
        path: "/allReviews",
        loader: () =>
          fetch("https://b6a11-server-rana-web-dev.vercel.app/review"),
        element: <AllReviews></AllReviews>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myReview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/addServices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/addReview",
        loader: () =>
          fetch("https://b6a11-server-rana-web-dev.vercel.app/review"),
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(
            `https://b6a11-server-rana-web-dev.vercel.app/service/${params.id}`
          ),
        element: <ServicesDetails></ServicesDetails>,
      },
    ],
  },
  {
    path:'*',
    element: <NotFound></NotFound>
  }
]);

export default router;
