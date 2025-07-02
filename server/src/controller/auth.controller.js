/**
 * 
 */

import { sendResponse } from "../lib/response.js";
import { UserModel } from "../model/user.model.js";
import { hashPassword,comparePassword } from "../lib/hash.js";
import { clearSessionCookie, setSessionCookie } from "../lib/cookie.js";

export class AuthContrller{
   
      async register(req,res) {
           
        try {
               
          const {name,email,password} = req.body;

          if(!name || !email || !password) return sendResponse(res,401,{error: "Missing Required Params"});

          const exiextUser = await UserModel.findOne({email});

          if(exiextUser) return sendResponse(res,403,{error: "Email All Ready Use"});
       
          const user = await UserModel.create({name,email,password: hashPassword(password)});
        
          return sendResponse(res,201,{message: "Register Succesfully", user});

        } catch (error) {
           console.error(error);
            return sendResponse(res,500,{error: "Internal Server Error"});
        }

      }



       async login(req,res) {
           
        try {

       const {email,password} = req.body;

        if(!email || !password) return sendResponse(res,401,{error: "Missing Required Params"});

       const user = await UserModel.findOne({email});

       if(!user) return sendResponse(res,404,{error: "Invalied Credentials"});

        const isValied = comparePassword(password,user.password);

        if(!isValied) return sendResponse(res,404,{error: "Invalied Credentials"});
         
          setSessionCookie(res,user._id.toString());

        return sendResponse(res,200,{message: "User Login Succesfully",},);
        
        
        } catch (error) {
           console.error(error);
            return sendResponse(res,500,{error: "Internal Server Error"});
        }

      }
     

      async session(req,res) {
           
        try {
           
          
          const user = req.user;
             
          if(!user) return sendResponse(res,401,{error: "User Not found"});
            
             sendResponse(res, 200, { message: "Valid Session", user });
        } catch (error) {
           console.error(error);
            return sendResponse(res,500,{error: "Internal Server Error"});
        }

      }






       async logout(req,res) {
           
        try {

          clearSessionCookie(res);

          return sendResponse(res,200,{error: "Logout Succesfully"});
            
        } catch (error) {
           console.error(error);
            return sendResponse(res,500,{error: "Internal Server Error"});
        }
      
      }

        
      
      

}





