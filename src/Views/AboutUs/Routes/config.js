import AboutUs from "../Views/AboutUs";

const routes = [
  { path: "/about-us", element: <AboutUs /> },
  {
    path: "/about-us/:name",
    component: () => <p>"random guy"</p>,
    title: "About random guy",
  },
  {
    path: "/about-us/divyan",
    component: () => <p>"divyan"</p>,
    title: "About Divyan",
  }
];

export default routes;