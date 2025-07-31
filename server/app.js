import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import hpp from 'hpp';
import router from "./src/routes/api.js";
import healthRoute from './src/routes/healthChecker.js';
import {notFoundHandler} from './src/middlewares/404Handler.js';
import {MONGODB_CONNECTION,PORT,MAX_JASON_SIZE,URL_ENCODED,WEB_CACHE,REQUEST_LIMIT_NUMBER,REQUEST_LIMIT_TIME} from "./src/config/config.js";






////global application middleware
const app = express();
app.use(cors({credentials: true, origin: ["http://localhost:5174"]}));
app.use(express.json({limit:MAX_JASON_SIZE}));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(hpp())
app.use(helmet())
app.use(cookieParser())



///rate limiter
const limiter=rateLimit({windowMs:REQUEST_LIMIT_TIME,max:REQUEST_LIMIT_NUMBER})
app.use(limiter)



///web caching

app.set('etag',WEB_CACHE)


//MongoDB connecting
mongoose.connect(MONGODB_CONNECTION,{autoIndex:true}).then(()=>{
    console.log('MongoDB Connected');
}).catch(err=>{
    console.log("err connecting to MongoDB");
})



///set api routes

app.use('/api', router);




// Health check route
app.use('/health', healthRoute);

// 404 handler (MUST be last middleware)
app.use(notFoundHandler);


//set application storage

app.use(express.static('storage'))

//Run express backend
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
