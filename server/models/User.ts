import mongoose from "mongoose";
import Phrases from "./Phrase"
const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    //the progress is gonna be an array of the finished phrases 
    koreanprogress:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Phrases"
    }],
    japaneseprogress:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Phrases"
    }],
    turkishprogress:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Phrases"
    }],
    
})
const Users=mongoose.model("Users",usersSchema)
export default Users;