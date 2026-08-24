import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import { UseAppContext } from "./context/AppContext.jsx";
import Login from "./components/Login.jsx";
import CategoriesPage from "./pages/CategoriesPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import BestSeller from "./components/BestSeller.jsx";



const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const {showUserLogin} = UseAppContext()

  return (
    <>
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}

      <Toaster />

      <div className={isSellerPath ? "" : "px-6 md:px-12 lg:px-24 rounded-xl"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<Products />} />
           <Route path="/product/:category" element={<CategoriesPage/>} />
           <Route path="/product/:category/:id" element={<ProductDetails/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {!isSellerPath && <Footer />}
    </>
  );
};

export default App;
