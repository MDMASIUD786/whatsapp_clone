import mongoose from "mongoose";


const conversationSchema = new mongoose.Schema({
    members:{
        type: Array
    },
    message:{
        type: String
    }
    },
    {
        timestamps :true //jis time api hit hoga us time timestamp dikh rha
    }
);

const conversation = mongoose.model('Conversation',conversationSchema);

export default conversation;