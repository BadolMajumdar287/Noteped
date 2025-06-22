"use client"

import Apimaneger from "@/config/api.config";
import {  createContext,useContext,useEffect,useState } from "react";




const Authcontext = createContext();



export const Authprovider = ({children}) => {

  const [user,setuser] = useState(null);
  const [loading,setloading] = useState(true);
  const [error,seterror] =useState("");

    const Signup = async (name,email,password) => {

        try {

            const res = await Apimaneger.post("/auth/register",{name,email,password});

            setuser(res.data.user);
            
        } catch (error) {
            
            seterror(error.response.data.error);
        }



    };



      const fetchSession = async () => {

         try {

            const res = await Apimaneger.get("/auth/session");
            setuser(res.data.user);
            
         } catch {

            setuser(null);

         } finally{

            setloading(false);

         }


      };

    const login = async (email,password) => {

           try {

            const res = await Apimaneger.post("/auth/login",{email,password});
            setuser(res.data.user);
            
           } catch (error) {

            seterror(error.response.data.error);
            
           }

    };

    useEffect(() => {

        fetchSession();

    },[]);

   
    const logout = async () => {

     await Apimaneger.post("/auth/logout");
     setuser(null);

    }

    return(
        <Authcontext.Provider value={{Signup,login, logout, user, loading, error}}>

           {children}

        </Authcontext.Provider>
    )


}

export const useAuth = () => useContext(Authcontext);