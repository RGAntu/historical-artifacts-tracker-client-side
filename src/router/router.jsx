import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import AllArtifacts from "../pages/AllArtifacts/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts/AddArtifacts";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

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
  {
    path: "signUp",
    element: <SignUp></SignUp>
  }
]);

export default router;
