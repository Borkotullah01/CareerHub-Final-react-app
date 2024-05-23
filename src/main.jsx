import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// React Router import
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import AppliedJobs from './Components/AppliedJobs';
import JobDetails from './Components/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "job/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('/jobs.json')
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('/jobs.json')
      },
      {
        path: "/applied/:jobId",
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('/jobs.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
