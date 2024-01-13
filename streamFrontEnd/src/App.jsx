
import { createBrowserRouter,RouterProvider, useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom';

import './App.css'
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import StreamPage from "./components/StreamPage.jsx";


function App() {
  const router=createBrowserRouter([
    {
     path:"/",
     element:<Root/>,
     children:[
       {
         path:"/",
         element:<Home/>
       },
       {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/Register",
        element:<Register/>
      },
         {
             path:"/StreamPage",
             element:<StreamPage/>
         }
      
      
      ]}]);
  return (
    <>
  <RouterProvider router={router}>
  
  </RouterProvider>
    </>
  )
}

export default App
