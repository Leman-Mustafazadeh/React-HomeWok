import About from "../pages/User/About";
import Home from "../pages/User/Home";
import UserCountryDetail from "../pages/User/UserCountryDetail";
import AdminRouter from "../pages/Admin/AdminRouter";
import Dashboard from "../pages/Admin/Dashboard";
import Countries from "../pages/Admin/Countries";
import CountryDetail from "../pages/Admin/CountryDetail";
import Login from "../pages/Admin/Login";
import AddCountry from "../pages/Admin/AddCountry";
import UserRouter from "../pages/User/UserRouter";
import UserCountries from "../pages/User/UserCountries";
import Contact from "../pages/User/Contact";
export const ROUTES = [
  {
    path: "/",
    element: <UserRouter />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "usercountries",
        element: <UserCountries />,
      },
      {
        path: "usercountrydetail/:id",
        element: <UserCountryDetail />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminRouter />,
    children: [
      {
       index:true,
        element: <Dashboard />,
      },
      {
        path: "countries",
        element: <Countries />,
      },
      {
        path: "countrydetail/:id",
        element: <CountryDetail />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "addcountry",
        element: <AddCountry />,
      },
    ],
  },
];
