import { Express,Request,Response,NextFunction,Router } from "express";
import PostRouter from "./post/PostRouter";


export const routeBinder = (app:Express) => {
    const publicRouter = Router();
    publicRouter.get("/",HealthCheck)
    app.use("/",publicRouter)

    app.use("/post",PostRouter);

}

const HealthCheck = (req:Request,res:Response,next:NextFunction) => {
    res.json({status:200, message:"API is up and runing"});
}