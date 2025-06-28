import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import AllArtifacts from "../pages/AllArtifacts/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts/AddArtifacts";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import LikedArtifacts from "../pages/LikedArtifacts/LikedArtifacts";
import MyArtifacts from "../pages/MyArtifacts/MyArtifacts";

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
      {
        path: "myArtifacts",
        element: <MyArtifacts></MyArtifacts>,
      },
      {
        path: "likedArtifacts",
        element: <LikedArtifacts></LikedArtifacts>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "signUp",
    element: <SignUp></SignUp>,
  },
]);

export default router;
