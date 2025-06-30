import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import AllArtifacts from "../pages/AllArtifacts/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts/AddArtifacts";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import LikedArtifacts from "../pages/LikedArtifacts/LikedArtifacts";
import MyArtifacts from "../pages/MyArtifacts/MyArtifacts";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import ArtifactsDetails from "../pages/ArtifactsDetails/ArtifactsDetails";
import UpdateArtifacts from "../pages/UpdateArtifacts/UpdateArtifacts";

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
        element: (
          <PrivateRoute>
            {" "}
            <AddArtifacts> </AddArtifacts>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "myArtifacts",
        element: (
          <PrivateRoute>
            <MyArtifacts></MyArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "likedArtifacts",
        element: (
          <PrivateRoute>
            <LikedArtifacts></LikedArtifacts>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/artifact/:id",
    element: (
      <PrivateRoute>
        <ArtifactsDetails />
      </PrivateRoute>
    ),
  },
  {
    path: "/update-artifact/:id",
    element: (
      <PrivateRoute>
        <UpdateArtifacts />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`http://localhost:3000/artifacts/${params.id}`),
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
