

// multer form data ko parse krta hai
import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';

import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;

const PASSWORD = process.env.DB_PASSWORD;


const storage = new GridFsStorage({
    url:`mongodb://${USERNAME}:${PASSWORD}@ac-0zpsgws-shard-00-00.bfaxjyq.mongodb.net:27017,ac-0zpsgws-shard-00-01.bfaxjyq.mongodb.net:27017,ac-0zpsgws-shard-00-02.bfaxjyq.mongodb.net:27017/?ssl=true&replicaSet=atlas-xhmaa2-shard-0&authSource=admin&retryWrites=true&w=majority`,
    //purane wala parser depricate ho gy to use naya wala
    options: {useUnifiedTopology:true,useNewUrlParser:true},

    file: (request,file) =>{
        const match = ["image/png","image/jpg"];
        if(match.indexOf(file.memeType) === -1) 
           return`${Date.now()}-blog-${file.originalname}`;
        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});
export default multer({storage});