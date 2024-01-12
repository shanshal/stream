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
}

export default App
