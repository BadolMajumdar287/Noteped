"use client"

import axios from "axios";
import { useState } from "react";


const Login = () => {

     const [email,setemail] = useState("");
     const [password,setpassword] = useState("");



     async function userLogin() {

    const {data} = await axios.post("http://localhost:5000/auth/login",{email,password,},{
        withCredentials: true
    })
    console.log(data);
}



return(
    <div className="text-center mt-44">
 
 <h1 className="text-center mt-3 text-cyan-800 ">Login page</h1>

      <label htmlFor="email"></label>
      <input
       className="border-2 rounded-2xl ml-5 pl-2 text-cyan-300"
       type="email"
       placeholder="Enter Your email..."
       name="email"
       value={email}
       onChange={(e) => setemail(e.target.value)}
       />

      
      <label htmlFor="password" className="block font-medium mb-5"></label>
      <input
       className="border-2 rounded-2xl pl-2 ml-5 text-cyan-300 "
       type="password"
       placeholder="Enter your password..."
       name="password"
       value={password}
       onChange={(e) => setpassword(e.target.value)}
      />
      
      <br/>
      <button
      className="border-2 rounded-2xl text-xs ml- mt-5 text-cyan-400"
      type="button"
      onClick={userLogin}
      >Submit</button>

    </div>
)

}


export default Login;