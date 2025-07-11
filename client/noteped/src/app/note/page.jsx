"use client"
import { useNote } from "@/context/note.contex"
import { useEffect, useState } from "react"
import Link from "next/link";


export default function(){
       const [notetoEdit,setnotetoEdit] = useState(null)
        const [title,settitle] = useState("");
        const [content,setcontent] = useState("");
        const {note,allNote,success,error,CreateNote,noteDelete,noteUpdate} = useNote();
        
        async function handleCreateNote(){

                await CreateNote(title,content);

          }
     

     

      async function hundleupdateNote() {
          
        if(notetoEdit){
            await   noteUpdate(notetoEdit._id,title,content)
            setnotetoEdit(null);
                clearfrom()
        }
        
      }

       async function hundleDelete(id) {
             await noteDelete(id);
      }
         function clearfrom(){
             settitle("")
             setcontent("")
         }
      useEffect(()=> {
        
          if(notetoEdit){
              settitle(notetoEdit.title)
              setcontent(notetoEdit.content);
               
          }else{
            clearfrom()
          }

      },[notetoEdit])

    return(
        <div>
       
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
        notetoEdit && (
              <button onClick={hundleupdateNote} className="text-amber-500">update</button>
        )
       }
        
        {
            allNote.map((item,i) => {
                
                return(
                    <div  key={`note_${i}`} className="ml-28">
                    <Link href={`/note/${item._id}`}>
                    
                    <div className="text-center ">
                        <h1 className="text-emerald-600">{item.title}</h1>
                        <h2 className="text-cyan-400">{item.content}</h2>
                    </div>
                    
                    </Link>
                    <button className="text-red-400" onClick={() => hundleDelete(item._id)}>delete</button>
                    <button className="text-amber-200 pl-5" onClick={() => setnotetoEdit(item)}>edit</button>

                    </div>
                )

            })
        }







        </div>
    )



}  