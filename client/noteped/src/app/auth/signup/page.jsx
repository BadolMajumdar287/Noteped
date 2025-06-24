"use client"

import { useState } from "react"
import { useAuth } from "@/context/auth.context";


export default function(){
    
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
  const {Signup,error,user,succesfully} = useAuth();
   // console.log({name,email,password})

   
   async function handlesignup() {
    
      try {

        // console.log(succes)
          const res = await Signup(name,email,password);
         // console.log(res.data.user)
          
      } catch (error) {
            console.log(error.response.data.error)
      }
     
     
      
    }
   
return(

    <div className="text-center ml-96 mt-40 text-cyan-400 border h-45 w-60 bg-blue-950">
        
        <div>
           <input 
           className="border rounded-2xl pl-2 mt-5 bg-emerald-600   text-fuchsia-500" 
           type="name" placeholder="Enter your Name..." name="name" value={name} onChange={(e) => setname(e.target.value)}/>
        </div>

        <div>
           <input className="mt-5 border rounded-2xl pl-2 bg-emerald-600  text-fuchsia-500" 
           type="email" placeholder="Enter your email..." name="email" value={email} onChange={(e) => setemail(e.target.value)}/>
        </div>

        <div>
           <input className="mt-5 border rounded-2xl pl-2 bg-emerald-600 text-fuchsia-500" 
           type="password" placeholder="Enter your password..." name="password" value={password} onChange={(e) => setpassword(e.target.value)}/>
        </div>
        
        <button className="border mt-3 text-teal-500  text-sm w-15 rounded-2xl"
          onClick={handlesignup}
        >Signup</button>
        <p className="mt-7">{error}</p>
        <p>{succesfully}</p>
    </div>
         
)

} 