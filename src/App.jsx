import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <>
      {isSellerPath ? null : <Navbar />}

      <Toaster />

      <div className={isSellerPath ? "" : "px-6 md:px-12 lg:px-24 rounded-xl"}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      {!isSellerPath && <Footer />}
    </>
  );
};

export default App;
