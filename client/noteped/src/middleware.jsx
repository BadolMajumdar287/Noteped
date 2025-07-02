import { NextResponse} from "next/server";
import { cookies } from "next/headers";

export default async function middleware(request) {
 
 try {

       const pathName = request.nextUrl.pathname
       
        const _cookies = await cookies()
        const sessionKey = _cookies.get('session')?.value
      
   

const url = `${process.env.NEXT_PUBLIC_API_BASE}/auth/session`

  const res = await fetch(url, {
            method: "GET",
            headers: {
                "session": sessionKey,
                "Content-Type": "application/json",
            },
        });
        const { user } = await res.json();
                       
      
        // if (user && (pathName === "/auth/login" || pathName === "/auth/signup")) {
        //     return NextResponse.redirect(new URL(`/notes`, req.nextUrl))
        // }


        if (user && pathName.startsWith('/auth')) {
            return NextResponse.redirect(new URL(`/note`, request.nextUrl.origin))
        }

        if (!user && pathName.startsWith('/note')) {
            return NextResponse.redirect(new URL(`/auth/login`, request.nextUrl.origin))
        }
        return NextResponse.next();
  
 } catch (error) {
  
       console.error('[Middleware Error]', error.message)
        return NextResponse.next();

 }
   
   
   
 
}

export const config = {
  matcher: [ "/note/:path*","/auth/:path*"],
};








