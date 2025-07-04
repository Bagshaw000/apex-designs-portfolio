import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider} from "react-router";
import Services from "./pages/Services.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App ,
    
  },
  {
    path: "/portfolio",
    element: <>Portfolio</>
  },
  {
    path:"/services",
    Component: Services,
  },
  {
    path:"/contact",
    element: <>Contact</>
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
