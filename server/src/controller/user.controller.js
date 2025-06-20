/**
 * 
 * 
 * 
 * 
 */
import { UserModel } from "../model/user.model.js";
import { sendResponse } from "../lib/response.js";
import { hashPassword } from "../lib/hash.js";


export class userController {
    
       async  userUpdateName(req,res) {
            
               try {

                const userId = req.user._id;

                const {name} = req.body;

                if(!name) return sendResponse(res,401,{error: "Missing Required Params"});

                 const userNameUpdate = await UserModel.findByIdAndUpdate(userId,{$set: {name},},{new:true}); 
                 
               if(!userNameUpdate) return sendResponse(res,403,{error: "Name Not Updated"});

                 
               return sendResponse(res,200,{message: "User Name Update",userNameUpdate});
                  

               } catch (error) {
                  
                console.error(error);
                return sendResponse(res,500,{error: "Internal Server Error"});

               }

       }

       async  userUpdateEmail(req,res) {
            
               try {

                const userId = req.user._id;
               // console.log(userId);

                const {email} = req.body;

                if(!email) return sendResponse(res,401,{error: "Missing Required params"});

                const userEmailUpdate = await UserModel.findByIdAndUpdate(userId,{$set:{email},},{new:true});

                if(!userEmailUpdate) return sendResponse(res,403,{error: "Email Not Update"});

                return sendResponse(res,200,{error: "User Email Update",userEmailUpdate});


                
               } catch (error) {
                  
                console.error(error);
                return sendResponse(res,500,{error: "Internal Server Error"});

               }

       }



       async  userUpdatePassword(req,res) {
            
               try {

                const userId = req.user._id;
                
                const {password} = req.body;

                if(!password) return sendResponse(res,401,{error: "Missing Required Params"});

                const userUpdatePasswordhash = hashPassword(password);

                const userPasswordUpdate = await UserModel.findByIdAndUpdate(userId,{$set: {password:userUpdatePasswordhash},}, {new:true});
                
                if(!userPasswordUpdate) return sendResponse(res,403,{error: "Password Not Update"});
               
                return sendResponse(res,200,{message: "User Password Update",userPasswordUpdate});


               } catch (error) {
                  
                console.error(error);
                return sendResponse(res,500,{error: "Internal Server Error"});

               }

       }


       
}