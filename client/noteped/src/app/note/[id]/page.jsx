"use client"

import { useParams } from "next/navigation"
import { useNote } from "@/context/note.contex"
import { useEffect,useState } from "react";


export default function NoteDetail(){
   
    const [loading,setloading] = useState(true)
    const params = useParams();
    const {noteGetById,note,noteUpdate} = useNote();
   const [titleEdit,settitleEdit] = useState(note?.title || "")
   const [contentEdit,setcontentEdit] = useState(note?.content || "");
    //console.log(params.id)

      async function hundleNoteUpdate(id,title,content) {
           
        await noteUpdate(id,title,content)
      }

    useEffect(() => {
             async function load() {
               await noteGetById(params.id)
               setloading(false)
             }
             load()
    }, [params.id,noteGetById])


  if(loading){
    return(
      <div>loading...</div>
    )
  }

    return(
      <div>
  
           <div className="mt-10">
                  <input className="text-amber-300 border" value={titleEdit} onChange={(e) => settitleEdit(e.target.value)}/>
                  <input className="text-amber-300 border" value={contentEdit} onChange={(e) => setcontentEdit(e.target.value)} />
                  <button onClick={() => hundleNoteUpdate(params.id,titleEdit,contentEdit)}>save</button>
           </div>
         
           <div className="mt-44">
              <h1>{note?.title}</h1>
              <p>{note?.content}</p>
           </div>


      </div>
    )

}
    