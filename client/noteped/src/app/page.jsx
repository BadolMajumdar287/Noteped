"use client"
import { useAuth } from "@/context/auth.context"
 
export default function Home() {
      const {Logout,user} = useAuth();

      async function handleLogout(){
          await Logout()
      }

return(
  <div className="text-center text-4xl text-blue-800">
    <button 
    className="border text-xs w-15 h-5 rounded-2xl text-pink-500 bg-cyan-700"
     onClick={handleLogout}>Logout</button>
     <h3 className="">{`Name: ${user.name}`}</h3>
     <h3>{`Email: ${user.email}`}</h3>
   
  </div>
)

}
