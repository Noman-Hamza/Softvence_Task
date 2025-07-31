import {createTaskService, DeleteTaskService, ReadTaskService, UpdateTaskService} from "../service/ServicesService.js";

///Create Task

export const createTask = async (req, res) => {
    let result = await createTaskService(req)
    return res.status(200).json(result);

}


///Read Task

export const ReadTask = async (req, res) => {
    let result = await ReadTaskService(req)
    return res.status(200).json(result);
}


///UpdateTask
export const UpdateTask = async (req,res)=>{
    let result=await UpdateTaskService(req);
    return res.status(200).json(result);
}

//DeleteTask
export const DeleteTask = async (req,res)=>{
    let result=await DeleteTaskService(req)
    return res.status(200).json(result);
}