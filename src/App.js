import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import HeaderMenu from "./components/Header/HeaderMenu";
import HeaderDescription from "./components/Header/HeaderDescription";
import BodyPage from "./components/BodyPage/BodyPage";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{ path: "/", element: <BodyPage /> }]);

function App() {
  return (
    <Fragment>
      <header>
        <HeaderMenu />
        <HeaderDescription />
      </header>
      <BodyPage />
      <Footer />
    </Fragment>
  );
}

export default App;
