import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Orders from "./components/Orders";

function App() {
  return (
    <div className=" container d-flex flex-column min-vh-100  ">
      {/* Flexbox yapısını ekledik */}
      <BrowserRouter>
        <Banner />
        <Nav />

        {/* Ana içerik */}
        <main className="flex-grow-1 ">
          {/* İçeriği büyütecek */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
