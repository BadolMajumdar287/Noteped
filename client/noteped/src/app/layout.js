
import "./globals.css";
import { Authprovider } from "@/context/auth.context";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Authprovider>
           {children}
        </Authprovider>
          
        
      </body>
    </html>
  );
}
 