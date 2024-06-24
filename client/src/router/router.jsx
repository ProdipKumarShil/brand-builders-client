import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import AboutUs from "../pages/AboutUs/AboutUs";
import Portfolio from "../pages/Portfolio/Portfolio";
import ServicesPage from "../pages/ServicesPage/ServicesPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <p>This is error page</p>,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'about-us',
        element: <AboutUs />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'services',
        element: <ServicesPage />
      }
    ]
  }
])