/**
 * 
 * 
 * 
 * 
 */
import { NoteModel } from "../model/note.model.js";
import { sendResponse } from "../lib/response.js";

export class NoteController {
      
      async  create(req,res) {
            
        try {
               
            const userId = req.user._id;

            const {title,content} = req.body;

                if(!title || !content) return sendResponse(res,401,{error: "Missing Required Params."});

           const note = await NoteModel.create({userId,title,content});
                
               if(!note) return sendResponse(res,403,{error: "Note Not Create"});

            return sendResponse(res,201,{message: " Noted crated",note});
            
        } catch (error) {
            console.error(error)
            return sendResponse(res,500,{error: "Internal Server Error"});
        }

      }


    async  getAllNote(req,res) {
            
        try {
       
              const userId = req.user._id;
              
             const allNote = await NoteModel.find({userId});

             if(!allNote) return sendResponse(res,404,{error: "Your Note Is Not Avalable"});

             return sendResponse(res,200,{message: "All Note Fached",allNote});

              
        } catch (error) {
            console.error(error)
            return sendResponse(res,500,{error: "Internal Server Error"});
        }

      }



      async  getByNoteId(req,res) {
            
        try {
        
            const id  = req.params.id;

            const note = await NoteModel.findById(id);

            if(!note) return sendResponse(res,404,{error: "Note Not Found"});

            return sendResponse(res,200,{message: "Note Feched By Id", note});

            
        } catch (error) {
            console.error(error)
            return sendResponse(res,500,{error: "Internal Server Error"});
        }

      }

    

      async  delete(req,res) {
            
        try {
              
            const id = req.params.id;
              
            const noteDelete = await NoteModel.findByIdAndDelete(id);
              
            if(!noteDelete) return sendResponse(res,401,{error: "Note Not Delete"});

             return sendResponse(res,200,{message: "Note Delete",noteDelete});

        } catch (error) {
            console.error(error)
            return sendResponse(res,500,{error: "Internal Server Error"});
        }

      }



      async  update(req,res) {
            
        try {
       
            const id = req.params.id
            const {title,content} = req.body;

            if(!title || !content) return sendResponse(res,401,{error: " Missing Required Params"});
            
            const noteUpdate = await NoteModel.findByIdAndUpdate(id,{$set: {title,content},},{new:true});

             if(!noteUpdate) return sendResponse(res,401,{error: "Note Not Update"});

        return  sendResponse(res,200,{message: "Noted Updated",noteUpdate});

        } catch (error) {
            console.error(error)
            return sendResponse(res,500,{error: "Internal Server Error"});
        }

      }

       
}