import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import HeaderMenu from "./components/Header/HeaderMenu";
import HeaderDescription from "./components/Header/HeaderDescription";
import BodyPage from "./components/BodyPage/BodyPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <header>
        <HeaderMenu />
      </header>
      <HeaderDescription />
      <BodyPage />
      <Footer />
    </Fragment>
  );
}

export default App;
