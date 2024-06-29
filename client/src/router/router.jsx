import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import AboutUs from "../pages/AboutUs/AboutUs";
import Portfolio from "../pages/Portfolio/Portfolio";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import DServicePage from "../pages/DServicesPage/DServicePage";
import Dashboard from "../pages/Dashboard/Dashboard";

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
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'services',
        element: <DServicePage />
      }
    ]
  }
])