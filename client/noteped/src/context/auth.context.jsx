"use client"
import ApiManager from "@/config/api.config";
import { useState,useEffect,createContext,useContext } from "react"

const Authcontext = createContext();

export const Authprovider = ({children}) => {

         const [user,setuser] = useState("");
         const [error,seterror] = useState(null);
         const [loading,setloading] = useState(null);
         const [succesfully,setsuccesfully] = useState("")
        
           // console.log(user.name)
           //console.log(error)
           //console.log(error)
         
           console.log(user)
        
          const Signup =  async (name,email,password) => {
            try {
                const res =  await ApiManager.post("/auth/register",{name,email,password}) 
                setuser(res.data.user);
                
                setsuccesfully(res.data.message)
                //console.log(res.data.message)
                return res
            } catch (error) {
              // console.log(error)
                const errorMsg =  (error.response.data.error)
                   seterror(errorMsg);
                   throw error
            }
          }

return(
    <Authcontext.Provider value={{Signup,user,error,succesfully}}>
        {children}
    </Authcontext.Provider>
)


}


export const useAuth = () => useContext(Authcontext);


