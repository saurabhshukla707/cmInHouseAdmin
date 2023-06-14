import { AboutRoutes } from "Views/AboutUs";
import Dashboard from "Views/Dashboard/Views/Dashboard";
import { LoginRoutes } from "Views/Login";
import { SignUpRoutes } from "Views/SignUp";
import {ForgotPasswordRoutes} from 'Views/ForgotPassword'
import { Link, Navigate } from "react-router-dom";
import { ExampleRtkRoutes } from "Views/ExampleRtk";

const DEFAULT_AUTHENTICATED_ROUTE = "/dashboard";
const DEFAULT_GUEST_ROUTE = "/";

export const guestRoutes = [
  {
    path: DEFAULT_GUEST_ROUTE,
    element:  <>
    <Link to="/wishlist">see wishlist</Link>
    <p>"WElcome"</p>
    <div><Link to="/exampleRtk">Example of RTK Query</Link></div>
    </>,
    },
    {
      path:'*',
     element:<Navigate to={DEFAULT_GUEST_ROUTE} />
    },
    ...AboutRoutes,
    ...LoginRoutes,
    ...SignUpRoutes,
    ...ForgotPasswordRoutes,
    ...ExampleRtkRoutes
];

export const authenticatedRoutes = [
    {
      path:DEFAULT_AUTHENTICATED_ROUTE,
      element: <Dashboard />,
    },
    {
      path: "/wishlist",
      component: () => "Your wishlist here",
      title: "Dashboard",
    },
    {
      path:'*',
     element:<Navigate to={DEFAULT_AUTHENTICATED_ROUTE} />
    },
    ...AboutRoutes
  ];

