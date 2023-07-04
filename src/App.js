import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import HeaderMenu from "./components/Header/HeaderMenu";
import HeaderDescription from "./components/Header/HeaderDescription";
import BodyPage from "./components/BodyPage/BodyPage";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/Services/AboutUs";
import TermsService from "./components/Services/TermsService";
import RefundInfo from "./components/Services/RefundInfo";
import CartPage from "./components/Cart/CartPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// const router = createBrowserRouter([{ path: "/", element: <BodyPage /> }]);

function App() {
  return (
    <Router>
      <header>
        <HeaderMenu fixed='top' color='light' light='true' expand='md' container='fluid'/>
        <HeaderDescription />
      </header>
      <Routes>
        <Route path="/" element={<BodyPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/terms-of-service" element={<TermsService />} />
        <Route path="/refund-policy" element={<RefundInfo />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
