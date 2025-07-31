import userModel from "../models/UserModel.js";
import {EncodeToken} from "../utility/tokenUtility.js";
import bcrypt from "bcrypt";






//// Registration
export const RegistrationService = async (req,res) => {
    try{
        let reqBody=req.body;
        let hash=await bcrypt.hash(reqBody.password,13)
        reqBody.password=hash;
        await userModel.create(reqBody,)
        return {status:"success","Message":"User Registration successfully"};

    }catch (err){
        return {status:"error","Message": err.toString()};
    }
}


///Login

export const LoginService = async (req,res) => {
    try {
        let reqBody=req.body;
        let data = await userModel.findOne({ email: reqBody['email'] });

        if(data == null){
            return res.status(401).json({status:"Fail",message:"User not found"});
        } else {



            let isValid = await bcrypt.compare(reqBody['password'], data['password']);
            if(!isValid){
                return res.status(401).json({status:"Fail",message:"wrong password"});
            }


            let token =  EncodeToken(data['email'],data['_id']);

            // Cookies
            let cookieOption = {
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            };

            // Set Cookies With Response
            res.cookie('token', token, cookieOption);

            return res.status(200).json({ status: "success", message: "User Login successfully", token: token });
        }

    } catch (err) {
        return res.status(500).json({ status: "error", message: err.toString() });
    }
}


///Logout

export const LogoutService = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

        return res.status(200).json({ status: "success", message: "User logged out successfully" });
    } catch (err) {
        return res.status(500).json({ status: "error", message: err.toString() });
    }
};



///ResetPassword

export const ResetPasswordService = async (req, res) => {
    try {
        let reqBody = req.body;
        let hash=await bcrypt.hash(reqBody.password,13);
        reqBody.password=hash;
        const user = await userModel.findOne({ email: reqBody['email'] });
        if (!user) {
            return { status: "fail", message: "Email not found" };
        }else {
            await userModel.updateOne({ email: reqBody['email'] }, { password: reqBody['password']});
            return { status: "success", message: "Password changed successfully" };
        }
    } catch (error) {
        return ({ status: "error", message: error.message });
    }
};

