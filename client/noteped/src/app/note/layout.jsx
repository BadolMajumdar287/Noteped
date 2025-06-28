
import { NoteProvider } from "@/context/note.contex"


export default function layout({children}){

 return (
    <NoteProvider>
        {children}
    </NoteProvider>
 )

}