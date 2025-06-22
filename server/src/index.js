import express from "express"
import cookieParser from 'cookie-parser'
import cors from "cors"
import {config} from "dotenv"
import { DatabaseConfig } from "./config/mongoose.config.js";
import { AuthRouter } from "./router/auth.router.js";
import { NoteRouter } from "./router/note.roter.js";
import { userRouter } from "./router/user.router.js";

config();
const PORT = process.env.PORT || 4000;


const app = express();


app.use(cors({

origin:["http://localhost:3000"],
methods:["GET","POST","PUT","PATCH","DELETE"],
credentials:true,

}));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/auth",AuthRouter);
app.use("/note",NoteRouter);
app.use("/user",userRouter);


DatabaseConfig();


  

 
app.listen(PORT, () => {
    console.log(`SERVER IS RUN PORT ${PORT}`);
})