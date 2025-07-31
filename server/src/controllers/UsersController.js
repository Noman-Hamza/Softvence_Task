import {LoginService, LogoutService, RegistrationService, ResetPasswordService} from "../service/UserService.js";


//// Registration
export const ragister=async(req,res)=>{
    let result=await RegistrationService(req);
    return res.status(200).json(result);
}

//// Login
export const login=async(req,res)=>{

        let result=await LoginService(req, res)

}

////Logout
export const Logout=async(req,res)=>{

    try {
        await LogoutService(req, res);
    } catch (error) {
        return res.status(500).json({status:"fail",message: error.toString() });
    }
}


////ResetPassword

export const ResetPassword = async (req,res)=>{
    let result=await ResetPasswordService(req);
    return res.status(200).clearCookie("token").json(result);
}


