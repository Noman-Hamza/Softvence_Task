import express from 'express';
const router = express.Router();
import *as UserController from '../controllers/UsersController.js';
import *as TaskController from '../controllers/ServiceController.js';
import AuthMiddleware from '../middlewares/authMiddleware..js';
import {registerValidation } from '../utility/ValidationHelper.js';
import validateRequest from '../middlewares/validateRequest.js';



///users

router.post("/Registration", registerValidation, validateRequest, UserController.ragister);
router.post("/Login",UserController.login);
router.post("/Logout",UserController.Logout)
router.post("/ResetPassword",UserController.ResetPassword)


///Tasks
router.post("/createTask",AuthMiddleware,TaskController.createTask);
router.get("/readTask",AuthMiddleware,TaskController.ReadTask);
router.post("/updateTask/:TaskID",AuthMiddleware,TaskController.UpdateTask);
router.post("/deleteTask/:TaskID",AuthMiddleware,TaskController.DeleteTask);
export default router;