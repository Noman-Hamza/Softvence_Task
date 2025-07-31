import ServicesModel from "../models/ServicesModel.js";
import mongoose from "mongoose";
let ObjectId = mongoose.Types.ObjectId;

export const createTaskService =  async (req, res) => {
    try {
        let user_id=req.headers['user_id'];
        let reqBody=req.body;
        reqBody.user_id=user_id;
        await ServicesModel.create(reqBody);
        return {status:"success","Message":"Task created successfully"};

    }
    catch(err){
        return {status:"error","Message": err.toString()};
    }

}


export const ReadTaskService = async (req,res) => {
    try {
        let data = await ServicesModel.find();
        return {status:"success","Message":"Task reading successfully", data:data };
    }catch(err){
        return {status:"error","Message": err.toString()};
    }
}


export const UpdateTaskService = async (req,res) => {
    try {
        let TaskID=req.params.TaskID;
        let reqBody=req.body;
        let data = await ServicesModel.updateOne({_id:TaskID},{$set:reqBody});
        return {status:"success","Message":"Task updated successfully"};
    }catch(err){
        return {status:"error","Message": err.toString()};
    }
}


export const DeleteTaskService = async (req,res) => {
    try {
        let TaskID=req.params.TaskID;
        let data = await ServicesModel.deleteOne({_id:TaskID});
        return {status:"success","Message":"Task deleted successfully"};

    }catch(err){
        return {status:"error","Message": err.toString()};
    }
}