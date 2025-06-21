"use client"

import axios from "axios";
import Link from "next/link";
import { useState } from "react";


const Notes = () => {

   const [title,settitle] = useState("");
   const [content,setcontent] = useState("");

async function createNotes() {
    
    const {data} = await axios.post("http://localhost:5000/note/create",{title,content},{
        withCredentials:true
    })

    console.log(data);
}


return(
    <div>
      <Link href= "/" className="border text-pink-300">go to home page</Link>
      
    <h1 className="text-center mt-3">Notes Write</h1>
 
     <input 
     className="ml-5 text-pink-300 border-0 w-7xl pl-3"
     type="title"
     placeholder="title.."
     name="title"
     value={title}
     onChange={(e) => settitle(e.target.value)}
     />

     <br/>
     <input
      className="ml-5 mt-5 text-pink-300 border w-7xl h-96 pb-80 pl-3"
      type="content"
      placeholder="your content..."
      name="content"
      value={content}
      onChange={(e) => setcontent(e.target.value)}
     />

     <br/>
     <button
     className="border h-7 w-11 rounded-2xl mt-7 ml-3 text-pink-300"
     type="button"
     onClick={createNotes}
     >save</button>
    
    </div>
)


}
export default Notes;