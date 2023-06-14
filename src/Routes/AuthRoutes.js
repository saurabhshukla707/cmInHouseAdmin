import ForgotPassword from "Views/ForgotPassword/Views/ForgotPassword";
import Login from "Views/Login/Views/Login";
import SignUp from "Views/SignUp/Views/SignUp";

export const AUTH_ROUTES = [
  {
    path: "/login",
    component: Login,
    title: "Login",
  },
  {
    path: "/signup",
    component: SignUp,
    title: "Signup",
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    title: "Forgot Password",
  },
];
