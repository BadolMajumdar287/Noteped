"use client"
import { useState,createContext,useContext } from "react"
import ApiManager from "@/config/api.config";

const Logincontext = createContext();

export const LoginProvider = ({children}) => {
  
           const [user,setuser] = useState("");
           const [error,seterror] = useState("");
            //console.log(user);
            //console.log(error)
           const Login = async(email,password) =>{

                    try {

                           const res = await ApiManager.post("/auth/login",{email,password});
         
                           setuser(res.data.messsage);
                            

                        
                    } catch (error) {
                        
                          seterror(error.response.data.error);
                           
                    }

           }


    return(
        <Logincontext.Provider value = {{user,error,Login}}>
            {children}
        </Logincontext.Provider>
    )

}

export const useLogin = () => useContext(Logincontext)