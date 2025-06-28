"use client"

import { useState,useEffect,createContext,useContext } from "react"
import ApiManager from "@/config/api.config";

const Notecontext = createContext();

export const NoteProvider = ({children}) =>{

    const [note,setnote] = useState("");
    const [error,seterror] = useState("");
    const [success,setsuccess] = useState("");
    const [allNote,setallNote] = useState([])

   // console.log(note)
   // console.log(error);
   // console.log(success)
   const CreateNote = async (title,content) => {

            try {

                const res = await ApiManager.post("note/create",{title,content});
                 setnote(res.data?.allNote);
                 setsuccess(res.data?.message);
                
            } catch (error) {
                  
                seterror(error.response?.data?.error);

            }

   }
      
    const  GetAllNote = async () =>{
       
          try {

            const res = await ApiManager.get("note/get")
            setallNote(res.data?.allNote)
            setsuccess(res.data?.message)
          } catch (error) {
              seterror(error.response?.data?.error)
          }

    }

    

    useEffect(() =>{
     GetAllNote()
    },[note]);


   const noteGetById = async (id) => {

    try {

        const res = await ApiManager.get(`/note/get/${id}`);
        setnote(res.data?.note);
        setsuccess(res.data?.message);
        
    } catch (error) {
        seterror(res.response?.data?.error)
    }


   }



   const noteUpdate = async (id,title,content) => {

              try {

                const res = await ApiManager.put(`/note/update/${id}`,{title,content})
                 setnote(res.data?.noteUpdate)
                 setsuccess(res.data?.message)
              } catch (error) {
                seterror(error.response?.data?.error);
              }

   }



   const noteDelete = async (id,title,content) => {

               try {

                const res = await ApiManager.delete(`/note/delete/${id}`)
                setnote(res.data?.noteDelete);
                setsuccess(res.data?.message);
                
               } catch (error) {
                  seterror(error.response?.data?.error);
               }


   }

return(
    <Notecontext.Provider value={{note,error,success,allNote,CreateNote,GetAllNote,noteUpdate,noteDelete}}>
        {children}
    </Notecontext.Provider>
)



}

export const useNote = () => useContext(Notecontext);