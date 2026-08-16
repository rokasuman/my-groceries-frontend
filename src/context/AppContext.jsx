import { createContext, useContext, useState } from "react";
import { useNavigate} from "react-router-dom"
export const  AppContext = createContext()

//creating a provider 
export const AppContextProvder = ({children}) =>{
    

   const navigate = useNavigate();
   
   //creating a state for user and the admin 
   const [user, setUser] = useState(true)
   const [seller, setIsSeller] = useState(false)
   const [showUserLogin, setShowUserLogin] = useState(false)

   const value = {
    user,
    setUser,
    seller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    navigate,
   }

    return<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}

//using the constext
export const UseAppContext = () =>{
    return useContext(AppContext)
}
