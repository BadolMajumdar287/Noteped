"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/context/auth.context";
import { toast } from "sonner";

export default function(){
    
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const {Signup,error,success} = useAuth();

   
   async function handlesignup() {
    
         if(!name) return toast.error("Enter your name")
         else if(!email) return toast.error("Enter your email")
        else if(!password) return toast.error("Enter your password")

       await Signup(name,email,password);
     
      
    }

    useEffect(() => {
     
        if(success){
          toast.success(success)
        }else if(error){
          toast.error(error)
        }
        

    },[error,success])
   
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
        <p>{success}</p>
    </div>
         
)

} 