// router.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ContactUs from "./components/allPages/ContactUs";
import BlogPage from "./components/pages/BlogPage";
import ContactPage from "./components/pages/ContactPage";
import ProductSection from "./components/pages/ProductSection";
import ServicesSection from "./components/pages/ServicesSection";
import TeamPages from "./components/pages/TeamPages";
import TesTimonial from "./components/pages/TesTimonial";
import WorkPage from "./components/pages/WorkPage";
import Home from "./components/pages/Home";
import AboutUs from "./components/allPages/AboutUs";
import SerOsInstallation from "./components/allPages/SerOsInstallation"
import SerDataRecPage from "./components/allPages/SerDataRecPage"
import SerComputerRec from "./components/allPages/SerComputerRec"
import SerHardwareRecPage from "./components/allPages/SerHardwareRecPage"
import SerVirusRecPage from "./components/allPages/SerVirusRecPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This includes NavBar + Footer
    children: [
      { path: "", element: <Home /> },
      { path: "blog", element: <BlogPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "contactUs", element: <ContactUs /> }, // ✅ Keep only this
      { path: "products", element: <ProductSection /> },
      { path: "services", element: <ServicesSection /> },
      { path: "team", element: <TeamPages /> },
      { path: "testimonial", element: <TesTimonial /> },
      { path: "work", element: <WorkPage /> },
      { path: "aboutUs", element: <AboutUs /> },
      { path: "osInstallation", element: <SerOsInstallation /> },
      { path: "serdataRec", element: <SerDataRecPage /> },
      { path: "sercomputerRec", element: <SerComputerRec /> },
      { path: "serHardware", element: <SerHardwareRecPage /> },
      { path: "serVirusRec", element: <SerVirusRecPage /> },
      // { path: "osInstallation", element: <SerOsInstallation /> },

      


    ],
    
  },
]);

export default router;
