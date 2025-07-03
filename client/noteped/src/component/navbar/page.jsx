"use client"
import { useAuth } from "@/context/auth.context"
import { LogOut,User } from "lucide-react"


export default function Navbar(){

    const {Logout,user} = useAuth()

      async function hundleLogout(){
           
        await Logout();
      }

    return(
        <div className="border h-10 rounded-2xl border-pink-300 bg-amber-100 justify-end flex">
      <div className="text-black pt-2 pr-5 "><User size={15} className="ml-0.5 " /><div className="text-sm ">{user.name}</div></div>
      <button className="cursor-pointer pr-5  text-black border w-5 h-5 rounded-4xl bg-blue-100 mt-2 mr-5 pl-1 " onClick={hundleLogout}><LogOut size={15 } /></button>
      <div></div>
        </div>
    )
}