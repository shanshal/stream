import {
    createBrowserRouter,
    RouterProvider,
    // useLocation,
    // useNavigate,
    // useNavigation,
    // useParams
} from 'react-router-dom';
import Login from './components/login/Login';
// import Register from './components/register/Register';
import Root from './components/Root';
import './App.css'
<<<<<<< HEAD
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
=======
import Home from './components/Home.jsx';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/Login",
                    element: <Login/>
                },
                // {
                //     path: "/Register",
                //     element: <Register/>
                // }

                ]
        }]);
    return (
        <>
            <RouterProvider router={router}>
            </RouterProvider>
        </>
    )
>>>>>>> b92eddf84bf9a85dc933374f1341ce21baa61db6
}

export default App
