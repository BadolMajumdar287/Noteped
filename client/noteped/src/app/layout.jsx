import { Toaster } from "sonner";
import "./globals.css";
import { Authprovider } from "@/context/auth.context";
import { NoteProvider } from "@/context/note.contex";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

       
           <Authprovider>
             <NoteProvider>
              
             {children}
             
             <Toaster richColors/>
             </NoteProvider>
           </Authprovider>
        
       
        
      </body>
    </html>
  );
}
