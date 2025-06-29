"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/context/auth.context";
import { toast } from "sonner";
import { useRouter } from "next/navigation";



export default function(){

   const [email,setemail] = useState("");
   const [password,setpassword] = useState("");
  const {Login,error,success} = useAuth();
 const router = useRouter()
  
  async function handleLogin() {

     if(!email) return toast.error("Enter your email address");
      else if(!password) return toast.error("Enter your Password");

     await Login(email,password)
  }

    useEffect(() => {
     if(success){
          toast.success(success)
          router.replace("/note")
       }else if (error){
          toast.error(error)
       }

    },[error,success])

return(
    < div className="border w-70 h-48 bg-blue-900 ml-96 mt-30">
          
  <div>
 <input
  className="text-emerald-300 ml-9 border mt-8 rounded-2xl pl-2 bg-slate-700"
 type="email" placeholder="Enter your  email..." name="email" id="email"
 value={email} onChange={(e) => setemail(e.target.value)}
 />

</div>

  <div>
 <input
 className="text-emerald-300 ml-9 border mt-6 rounded-2xl pl-2 bg-slate-700"
 type="password" placeholder="Enter your password..." name="password" id="password"
 value={password} onChange={(e) => setpassword(e.target.value)}
 />
  </div>

   <button 
   onClick={handleLogin}
   className="border w-15 h-5 mt-5 ml-25 rounded-2xl pb-6 text-orange-600 bg-cyan-100"
   >Login</button>
    <p className="mt-15 ml-7 text-cyan-500 text-xs">{error}</p>
    <p className="mt-15 ml-7 text-blue-500 text-xs" >{success}</p>
    </div>
)

}