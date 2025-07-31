import dotenv from 'dotenv';
dotenv.config();



export const MONGODB_CONNECTION = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRATION_TIME = 60*60*24*100;




export const MAX_JASON_SIZE="50mb";
export const URL_ENCODED = true;

export const REQUEST_LIMIT_TIME=15*60*24*1000;
export const REQUEST_LIMIT_NUMBER=3000;

export const WEB_CACHE=false;






export const PORT=process.env.PORT;