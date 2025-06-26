"use client"
import { useNote } from "@/context/note.contex"
import { useState,useEffect } from "react"

export default function(){
        const [title,settitle] = useState("");
        const [content,setcontent] = useState("");
        const {note,success,error,CreateNote} = useNote();

        async function handleCreateNote(){

                await CreateNote(title,content) 

          }
     
    return(
        <div>
 
   <h1 className="text-center text-4xl text-pink-400">Create Note</h1>

        <div>
           <input 
            className="border"
            placeholder="title" name="title"
            value={title} onChange={(e) => settitle(e.target.value)}
           />
        </div>

        <div>
         <input 
         className="border"
         placeholder="Your content" name="content"
         value={content} onChange={(e) => setcontent(e.target.value)}
         />
        </div>

        <button className="border text-cyan-500" onClick={handleCreateNote}>CreateNote</button>
        <p>{success}</p>
        <p>{error}</p>
        </div>
    )



} 