import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import AllArtifacts from "../pages/AllArtifacts/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts/AddArtifacts";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "allArtifacts",
        element: <AllArtifacts></AllArtifacts>,
      },
      {
        path: "addArtifacts",
        element: <AddArtifacts></AddArtifacts>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);

export default router;
