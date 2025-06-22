"use client"


import { useState } from "react";
import { useAuth} from "@/context/auth.context";





const Login = () => {

  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const {login} = useAuth() ;

  async function onLogin() {
    
    await login(email,password);
           console.log(email,password)
  }




  return(
     
    <div className="ml-96 mt-64">
    
<div className="border text-blue-300 w-48 rounded-2xl pl-2">
    
    <input
     type="email"
     placeholder="Enter your email..."
     id="email"
     name="email"
     value={email}
     onChange={(e) => setemail(e.target.value)}
     />

</div>

<div className="border text-blue-300 w-48 rounded-2xl pl-2 mt-2.5">
    <input
    type="password"
    name="password"
    placeholder="Enter Your password..."
    value={password}
    onChange={(e) => setpassword(e.target.value)}
     />
</div>
  
    <button onClick={onLogin} className="border w-20 rounded-2xl mt-3 ml-10 text-blue-300">Login</button>

    </div>
  )

}



export default Login; 