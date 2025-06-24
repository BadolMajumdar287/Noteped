import "./globals.css";
import { Authprovider } from "@/context/auth.context";
import { LoginProvider } from "@/context/login.contex";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <LoginProvider>
           <Authprovider>
          {children}
           </Authprovider>
        </LoginProvider>
       
        
      </body>
    </html>
  );
}
