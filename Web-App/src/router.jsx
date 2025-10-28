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
import Home from "./components/pages/Home"; // ✅ Correct import

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This includes NavBar + Footer
    children: [
      { path: "/", element: <Home /> },
      { path: "blog", element: <BlogPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "contactUs", element: <ContactUs /> }, // ✅ Keep only this
      { path: "products", element: <ProductSection /> },
      { path: "services", element: <ServicesSection /> },
      { path: "team", element: <TeamPages /> },
      { path: "testimonial", element: <TesTimonial /> },
      { path: "work", element: <WorkPage /> },
    ],
  },
]);

export default router;
