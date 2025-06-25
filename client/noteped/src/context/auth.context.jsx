"use client"
import ApiManager from "@/config/api.config";
import { useState,createContext,useContext, useEffect } from "react"

const Authcontext = createContext();

export const Authprovider = ({children}) => {

           const [user,setuser] = useState("");
           const [error,seterror] = useState("");
           const [success,setsuccess] = useState(null);
           const [loading,setloading] = useState("");
           
           
          //console.log(success)
         //console.log(setloading)
           const Signup = async (name,email,password) => {

               try {
                   
                 const res = await ApiManager.post("auth/register",{name,email,password});
                  setuser(res.data.user);
                  setsuccess(res.data.message);

               } catch (error) {
                   
                 seterror(error.response.data.error);

               }


          }


        
          const Login = async (email,password) => {

                 try {
                    
                    const res = await ApiManager.post("/auth/login",{email,password});
                     setuser(res.data.user);
                     setsuccess(res.data.message);

                 } catch (error) {
                    
                    seterror(error.response.data.error);

                 }


          }

          const FetchSession = async () => {
           
              try {
            const res = await ApiManager.get('/auth/session');
            setuser(res.data.user);
           } catch {
            setuser(null);
           } finally {
            setloading(false);
           }

           }


          const Logout = async () => {

             try {

                 await ApiManager.get("/auth/logout")
                  setuser(null);

             } catch (error) {
                
                seterror(error.response.data.error)
             }

          }


          useEffect(() => {
              FetchSession();
          },[])

          //  useEffect(() => {
          //  console.log("success updated:", success);
          // }, [success]);


return(
    <Authcontext.Provider value={{user,error,success,loading,Signup,Login,Logout}}>
        {children}
    </Authcontext.Provider>
)


}


export const useAuth = () => useContext(Authcontext);


