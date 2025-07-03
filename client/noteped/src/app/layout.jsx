import { Toaster } from "sonner";
import "./globals.css";

import { Authprovider } from "@/context/auth.context";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

       
           <Authprovider>
           
              
             {children}
             
             <Toaster richColors/>
            
           </Authprovider>
        
       
        
      </body>
    </html>
  );
}
