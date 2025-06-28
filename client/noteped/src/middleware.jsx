import { NextResponse,NextRequest } from "next/server";
import { cookies } from "next/headers";

export default async function middleware(request) {
 
 try {

       const pathName = await request.nextUrl.pathname
        const _cookies = await cookies()
        const sessionKey = _cookies.get('session')?.value
      
        
   console.log(sessionKey)

   

const url = `${process.env.NEXT_PUBLIC_API_BASE}/auth/session`

  const res = await fetch(url, {
            method: "GET",
            headers: {
                "session": sessionKey,
                "Content-Type": "application/json",
            },
        });
        const { users } = await res.json();

    console.log(users);
        //console.log(users)
sa
  //  if (users && pathName.startsWith('/auth')) {
  //           return NextResponse.redirect(new URL(`/notes`, req.nextUrl))
  //       }

  //       if (!user && pathName.startsWith('/notes')) {
  //           return NextResponse.redirect(new URL(`/auth/login`, req.nextUrl))
  //       }
        return NextResponse.next();
  
 } catch (error) {
  
       console.error('[Middleware Error]', error.message)
        return NextResponse.next();

 }
   
   
   
 
}

export const config = {
  matcher: ["/about/:path*", "/note/:path*","/auth/:path*"],
};








