
import { createRoot } from 'react-dom/client'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './component/about/About.jsx';
import Cars from './component/cars/Cars.jsx';
import Home from './component/home/Home.jsx';
import Navbar from './component/navbar/Navbar.jsx';
import Work from './component/work/Work.jsx';
import CarDetails from './component/carDetails/CarDetails.jsx';


  

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <>
            {/* <Navbar/>
            <Home />
            <About /> */}
            <Work/>
          </>
        ),
      },
      {
        path: "cars",
        element: <Cars />,
       
      },
      {
        path:"car/:id",
        element:<CarDetails/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(

   <RouterProvider router={router} />
)
