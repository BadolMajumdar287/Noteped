"use client"
import { useState } from "react";
import { useAuth } from "@/context/auth.context";

const Signup = () => {
   
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const {usersignup} = useAuth();

  async function userRegister() {
    
    await usersignup(name,email,password);
    console.log(name,email,password);

  }


return(
    <div className="ml-96 mt-40">

        <label className="block font-medium mb-1" htmlFor="name"></label>
        <input
         className="text-2xl border-2 mt-5 ml-5 rounded-2xl pl-2 c text-sky-500 "
         type="name"
         placeholder="Enter your name..."
         name="name"
         value={name}
         onChange={(e) => setname(e.target.value)}
        />
    

       <label className="block font-medium mb-1" htmlFor="email"></label>
       <input
       className="text-2xl border-2 mt-5 ml-5 rounded-2xl pl-2 c text-sky-500"
       type="email"
       placeholder="Enter your email..."
       name="email"
       value={email}
       onChange={(e) => setemail(e.target.value)}
       />


       <label className="block font-medium mb-1" htmlFor="password"></label>
       <input
       className="text-2xl border-2 mt-5 ml-5 rounded-2xl pl-2 c  text-sky-500"
       type="password"
       placeholder="Enter your password..."
       name="password"
       value={password}
       onChange={(e) => setpassword(e.target.value)}
       autoComplete="current-password"
       />
       
    <br/>
    <button 
    className="ml-30 mt-11 border-2 rounded-2xl text-xs text-pink-500 bg-cyan-100"
    type="button"
    onClick={userRegister}
    >Submit</button>
    
       
    
    </div>
)


}

export default Signup;