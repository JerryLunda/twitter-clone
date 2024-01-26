import "../css/App.css";
import Root from "./Root";

import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Message from "../pages/Message";
import Notification from "../pages/Notification";
import BookMarks from "../pages/BookMarks";
import List from "../pages/List";
import Profile from "../pages/Profile";
import More from "../pages/More";
import Tweets from "../pages/More";


import ErrorPage from "../pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Root/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/home",
          element: <Home/>
        },
        {
          path:"/explore",
          element: <Explore/>
        },
        {
          path:"/notifications",
          element: <Notification/>
        },
        {
          path:"/messages",
          element: <Message/>
        },
        {
          path:"/bookmarks",
          element: <BookMarks/>
        },
        {
          path:"/lists",
          element: <List/>
        },
        {
          path:"/profile",
          element: <Profile/>
        },
        {
          path:"/more",
          element: <More/>
        },
        {
          path:"/tweet",
          element: <Tweets/>
        }
        
      ]
    },
    
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;


