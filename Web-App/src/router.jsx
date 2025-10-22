// Correct
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ContactUs from "./components/allPages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "contactUs", element: <ContactUs /> },
    ],
  }
]);

export default router;