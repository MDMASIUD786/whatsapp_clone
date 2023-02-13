import express from "express";
import { addUser,getUsers } from '../controller/user-controller.js';
import { newConversation,getConversation } from "../controller/conversation-controller.js";

import { newMessage,getMessages } from "../controller/message-controller.js";
import { uploadFile,getImage} from "../controller/image-controller.js";

import upload from '../utils/upload.js';


const route = express.Router();


//add end point jb call hoga to kya krna hai
route.post('/add', addUser);
route.get('/users',getUsers);

route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);

route.post('/message/add',newMessage);
// .id call ho rha hai
route.get('/message/get/:id',getMessages);

// file middleware hai uske bad function call hoga
// middle ware ka kaam hota actual api calling se age phle kuch krna hai to

route.post('/file/upload',upload.single("file"), uploadFile);
route.get('/file/:filename',getImage);
export default route;
