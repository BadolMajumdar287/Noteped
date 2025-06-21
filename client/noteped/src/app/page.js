"use client"

import axios from "axios";
import Link from "next/link"
import { useState } from "react"

const Home = () => {

  const [notes,setnotes] = useState([]);

  

async function allNotesget() {

  const {data} = await axios.get("http://localhost:5000/note/get")

  setnotes( data.notes)
  

}


  return(
    <div>
    
    
    <Link href= "/notes" className="text-teal-400 border rounded-2xl text-xs ml-10 mt-5 " >Note</Link>
     <button
     className="border text-teal-400 ml-8 rounded-2xl "
     type="button"
     onClick={allNotesget}
     >getallnote</button>  
      
      {
        notes.map((item,i) => {
          return(
            <div key={i}>
              <h1>{item.title}</h1>
              <h2>{item.content}</h2>

            </div>
          )
        })
      }

       
   
    </div>
  )

}

export default Home;