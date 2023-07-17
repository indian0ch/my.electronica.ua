import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import BodyPage from "./components/BodyPage/BodyPage";
import AboutUs from "./components/Services/AboutUs";
import TermsService from "./components/Services/TermsService";
import RefundInfo from "./components/Services/RefundInfo";
import CartPage from "./components/Cart/CartPage";
import Contact from "./components/Services/ContactUs";
import OrderPage from "./components/OrderPage/OrderPage";
import ItemPage from "./components/ItemPages/ItemPage";
import ItemsListPage from "./components/BodyPage/ItemsListPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/UI/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyPage />,
        children: [
          { index: true, element: <ItemsListPage /> },
          { path: ":itemName", element: <ItemPage /> },
        ],
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/terms-of-service",
        element: <TermsService />,
      },
      {
        path: "/refund-policy",
        element: <RefundInfo />,
      },
      {
        path: "/cart",
        element: <CartPage />,
        children: [
          {
            path: "order",
            element: <OrderPage />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <BodyPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
