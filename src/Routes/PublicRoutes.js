
import { Link } from "react-router-dom";
import AboutUs from "Views/AboutUs/Views/AboutUs";

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: () => (
      <>
        <Link to="/wishlist">see wishlist</Link>
        <p>"WElcome"</p>
      </>
    ),
    title: "Homepage",
    exact: true,
  },
  {
    path: "/about-us/divyan",
    component: () => <p>"divyan"</p>,
    title: "About Divyan",
  },
  {
    path: "/about-us",
    component: AboutUs,
    title: "About Us",
    exact: true,
  },
  {
    path: "/about-us/:name",
    component: () => <p>"random guy"</p>,
    title: "About random guy",
  },
];
