"use client"
import { useAuth } from "@/context/auth.context"
import { useNote } from "@/context/note.contex";
 
export default function Home() {
      const {Logout,user} = useAuth();
      const {GetAllNote,note} = useNote();
   // console.log(note)
      async function handleLogout(){
          await Logout()
      }

      async function handleAllNote() {
         await GetAllNote();
      }

return(
  <div className="text-center text-4xl text-blue-800">

    <button 

    className="border text-xs w-15 h-5 rounded-2xl text-pink-500 bg-cyan-700 ml-96"

     onClick={handleLogout}>Logout</button>

     <button

     className="border text-fuchsia-500 text-xl mr-86"

      onClick={handleAllNote}>GetNote</button>

     <h3 className="">{`Name: ${user.name}`}</h3>

     <h3>{`Email: ${user.email}`}</h3>


     {
      note.map((item,i) => {

             return(
                 
                <div key={i}>
                    
                    <div>
                       <h3>{item.title}</h3>
                    </div>
                      
                      <div>
                       
                         <h2>{item.content}</h2>

                      </div>
                </div>

             )

      })
     }
  
  </div>
)

}
