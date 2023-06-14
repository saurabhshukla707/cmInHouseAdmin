import Dashbord from "../Views/Dashboard";

const routes = [
  { path: "/about-us", element: <Dashbord /> },
  {
    path: "/about-us/:name",
    component: () => <p>"random guy"</p>,
    title: "About random guy",
  }
];

export default routes;