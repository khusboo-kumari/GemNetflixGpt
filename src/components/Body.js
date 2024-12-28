import Login from './Login';
// import Header  from './Header'; 
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Body = () => {
  //  const navigate = useNavigate() ; 
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    }
  ]);
 
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body
