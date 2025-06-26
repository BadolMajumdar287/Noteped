"use client"

import { useState,useEffect,createContext,useContext } from "react"
import ApiManager from "@/config/api.config";

const Notecontext = createContext();

export const NoteProvider = ({children}) =>{

    const [note,setnote] = useState([]);
    const [error,seterror] = useState("");
    const [success,setsuccess] = useState("");

   // console.log(note)
   // console.log(error);
   // console.log(success)
   const CreateNote = async (title,content) => {

            try {

                const res = await ApiManager.post("note/create",{title,content});
                 setnote(res.data.allNote);
                 setsuccess(res.data.message);
                
            } catch (error) {
                  
                seterror(error.response.data.error);

            }

   }
      
    const  GetAllNote = async () =>{
       
          try {

            const res = await ApiManager.get("note/get")
            setnote(res.data.allNote)
            setsuccess(res.data.message)
          } catch (error) {
              seterror(error.response.data.error)
          }

    }

    useEffect(() =>{
     CreateNote();
    },[])

    useEffect(() =>{
        GetAllNote()
    },[]);


return(
    <Notecontext.Provider value={{note,error,success,CreateNote,GetAllNote}}>
        {children}
    </Notecontext.Provider>
)



}

export const useNote = () => useContext(Notecontext);