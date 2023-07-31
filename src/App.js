import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from '../src/Ui/RootLayout'
import Services from './pages/Services';
import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }, {
        path: '/services',
        element: <Services />
      }
      , {
        path: '/works',
        element: <Works />
      }
      , {
        path: '/about',
        element: <About />
      }
      , {
        path: '/blog',
        element: <Blog />
      }
      , {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App;
