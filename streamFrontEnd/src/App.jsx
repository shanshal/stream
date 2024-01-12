import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter,RouterProvider, useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom';

import './App.css'
import Login from './components/login/Login';
import Register from './components/register/Regirster';
import Root from './components/Root';

function App() {
  const router=createBrowserRouter([
    {
     path:"/",
     element:<Root/>,
     children:[
       {
         path:"/",
         element:<MainPage/>

       },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        
        path:"Register",
        element:<Register/>
      },
      ]}]);
  return (
    <>
  <RouterProvider router={router}>
  
  </RouterProvider>
    </>
  )
}

export default App
