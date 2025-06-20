import { connect } from "mongoose";
import { config } from "dotenv";


export const DatabaseConfig = async () => {

 try {
    
config();
const MONGODB_URL = process.env.MONGODB_URL;

const connection = await connect(MONGODB_URL);


const db = connection.connection;

const {host,port,name} = db;


console.log(`✓  MongoDB connected\n   ↳ Database: ${name}\n   ↳ Hostname: ${host}\n   ↳Portname:${port}`);

    
 } catch (error) {
   
    console.error(error);
    process.exit(1);
     

 }


} 