"use client"

import { useParams } from "next/navigation"
import { useNote } from "@/context/note.contex"
import { useEffect,useState } from "react";


export default function NoteDetail(){
   
    const [loading,setloading] = useState(true)
    const params = useParams();
    const {noteGetById,note} = useNote();
   
    //console.log(params.id)

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
         
           <div className="mt-44">
              <h1>{note?.title}</h1>
              <p>{note?.content}</p>
           </div>


      </div>
    )

}
    