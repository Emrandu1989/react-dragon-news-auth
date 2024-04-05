import {
    createBrowserRouter,
   
  } from "react-router-dom";

import MainLayOut from "../layOut/MainLayOut";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut />,
      children:[
        {
            path:'/',
            element:<Home />,
            loader: () => fetch('/news.json')
        },
        {
            path:'/news/:id',
            element: <PrivateRoutes><NewsDetails/></PrivateRoutes>
           

        },
        {
            path:'/login',
            element:<Login /> 
        },
        {
            path:'/register',
            element:<Register /> 
        },
      ]
    },
  ]);

  export default router