"use client"
import { useNote } from "@/context/note.contex"
import { useAuth } from "@/context/auth.context";
import { useState } from "react"

export default function(){
        const [title,settitle] = useState("");
        const [content,setcontent] = useState("");
        const {note,allNote,success,error,CreateNote} = useNote();
        const {user} = useAuth();
        async function handleCreateNote(){

                await CreateNote(title,content);

          }
        
 

    return(
        <div>
        <p className="text-center text-blue-600">{user.name}</p>
   <h1 className="text-center text-4xl text-pink-400">Note</h1>
      <div className="text-center">
        <div className="mt-5" >
           <input 
            className="border pl-2 text-blue-300 rounded-2xl"
            placeholder="title..." name="title"
            value={title} onChange={(e) => settitle(e.target.value)}
           />
        </div>

        <div className="mt-5">
         <input 
         className="border pl-2 rounded-2xl text-blue-300 "
         placeholder="Your content..." name="content"
         value={content} onChange={(e) => setcontent(e.target.value)}
         />
        </div>
       </div>
        <button className="border text-cyan-500 w-25 h-6 rounded-2xl ml-96" onClick={handleCreateNote}>CreateNote</button>
       
        


        {
            allNote.map((item,i) => {

                return(
                    < div key={i} className="text-center ">
                      
                      <h4 className="text-fuchsia-500">{item.title}</h4>
                      <h5>{item.content}</h5>


                    </div>
                )
            })
        }
        </div>
    )



} 