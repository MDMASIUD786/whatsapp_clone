import mongoose from "mongoose"; 
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;

const PASSWORD = process.env.DB_PASSWORD;


const Connection = async () =>{
     //error handling as mongodb on cloud
     const URL =`mongodb://${USERNAME}:${PASSWORD}@ac-0zpsgws-shard-00-00.bfaxjyq.mongodb.net:27017,ac-0zpsgws-shard-00-01.bfaxjyq.mongodb.net:27017,ac-0zpsgws-shard-00-02.bfaxjyq.mongodb.net:27017/?ssl=true&replicaSet=atlas-xhmaa2-shard-0&authSource=admin&retryWrites=true&w=majority`;
     try{
            // mongoose se connect URL and how u want mongosdb to behave
            await mongoose.connect(URL,{useUnifiedTopology:true});
            console.log('Database Connected Successfully');
     }
    catch(error){

         console.log('Eroor while connecting with the database',error.message);
    }

}

export default Connection