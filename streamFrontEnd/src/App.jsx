
import { createBrowserRouter,RouterProvider, useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom';
import AuthProvider from "./provider/authProvider.jsx";
import './App.css'
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import StreamPage from "./components/StreamPage.jsx";
import Featured from "./components/Featured.jsx";
import Profile from "./components/profile/Profile.jsx";



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
         },
         {
             path:"/Featured",
             element:<Featured/>
         },
         {
             path:"/Profile",
             element:<Profile/>
         }
      
      
      ]}]);
  return (
    <>

        <AuthProvider>
            <RouterProvider router={router}>
            </RouterProvider>
        </AuthProvider>

    </>
  )
}

export default App
