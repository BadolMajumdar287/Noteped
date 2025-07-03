
import { NoteProvider } from "@/context/note.contex"
import Navbar from "@/component/navbar/page"

export default function layout({children}){

 return (
    <NoteProvider>
        <Navbar/>
        {children}
    </NoteProvider>
 )

}