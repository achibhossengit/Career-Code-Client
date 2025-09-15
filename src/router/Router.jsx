import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoutes from "./PrivateRoutes";
import ApplyJob from "../pages/ApplyJob/ApplyJob";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewJobApplications from "../pages/ViewJobApplications/ViewJobApplications";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "register", Component: Register },
      { path: "sign-in", Component: SignIn },
      {
        path: "jobs/:id",
        Component: JobDetails,
        hydrateFallbackElement: <div className="text-center">Loading...</div>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "apply-job/:id",
        element: (
          <PrivateRoutes>
            <ApplyJob />
          </PrivateRoutes>
        ),
      },
      {
        path: "my-applications",
        element: (
          <PrivateRoutes>
            <MyApplications />
          </PrivateRoutes>
        ),
      },
      {
        path: "my-jobs",
        element: (
          <PrivateRoutes>
            <MyPostedJobs />
          </PrivateRoutes>
        ),
      },
      {
        path: "job-applications/:job_id",
        element: (
          <PrivateRoutes>
            <ViewJobApplications />
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <div>Loading applications....</div>,
        loader: ({ params }) =>
          axios
            .get(`http://localhost:3000/applications?job_id=${params.job_id}`)
            .then((res) => res.data),
      },
      {
        path: "add-job",
        element: (
          <PrivateRoutes>
            <AddJob />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
