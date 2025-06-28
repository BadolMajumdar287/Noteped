import { UserModel } from "../model/user.model.js";
import { sendResponse } from "../lib/response.js";





export async function authMiddleware(req,res,next) {
    
     try {

        const sessionKey = req.cookies["session"] || req.headers["session"];
           
         if(!sessionKey) return sendResponse(res,403,{error: "Session Is Not Valied"});

         const user = await UserModel.findById(sessionKey);
                 
         
         if(!user) return sendResponse(res,403,{error: "Session Is Not Valied"});

          req.user = user;
          
         next();
        
     } catch (error) {
        

      console.error(error);
      sendResponse(res,500,{error: "Internal Servar Error"});

     }


}