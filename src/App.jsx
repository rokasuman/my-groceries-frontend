import { Route, Routes, useLocation } from "react-router-dom"

import Navbar from "./components/Navbar.jsx"
import { Home } from "./pages/Home.jsx"
import { Toaster } from "react-hot-toast";


const App = () => {
const isSellerPath = useLocation().pathname.includes("seller");
  return (
    <>
    {isSellerPath ? "" : <Navbar/>}
    <Toaster/>
   <div className={`${isSellerPath}?"":px-6 md:px-12 lg:px-24 rounded-xl`}>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
   </div>
   
    </>
  )
}

export default App