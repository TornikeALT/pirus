import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from '../src/Ui/RootLayout'
import ServicesPage from './pages/ServicesPage';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ServiceOne from './components/ServiceOne';
import ServiceTwo from './components/ServiceTwo';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }, {
        path: '/services',
        element: <ServicesPage />
      }
      , {
        path: '/works',
        element: <WorksPage />
      }
      , {
        path: '/about',
        element: <AboutPage />
      }
      , {
        path: '/blog',
        element: <BlogPage />
      }
      , {
        path: '/contact',
        element: <ContactPage />
      }
      , {
        path: '/service1',
        element: <ServiceOne />
      }
      , {
        path: '/service2',
        element: <ServiceTwo />
      }
    ]
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App;
