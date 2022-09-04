import { Schema } from "joi"
import { Request,Response,NextFunction } from "express"
import CustomLog from "./customlog"

const payloadValidator = (schema:Schema,payload:any) => {
    const {error, value} = schema.validate(payload)
    if(error) {
        CustomLog.Red(error.details[0].message)
        return {error:error.details[0].message, validatedPayload:null}
    }else{
         return {error:null, validatedPayload:value}
    }
}

export const validatePayload =(schema:Schema) =>{
    return (req:Request,res:Response,next:NextFunction)=>{
        const payload = req.body;
        const {error, validatedPayload} = payloadValidator(schema,payload)
        if(error){ 
            res.json({status:400, error:error, data:null}).status(400)
        }else{
            next()
        }
    }
}

export const validateParam =(schema:Schema) =>{
    return (req:Request,res:Response,next:NextFunction)=>{
        const payload = req.params;
        const {error, validatedPayload} = payloadValidator(schema,payload)
        if(error){ 
            res.json({status:400, error:error, data:null}).status(400)
        }else{
            next()
        }
    }
}

export const validateQuery=(schema:Schema) =>{
    return (req:Request,res:Response,next:NextFunction)=>{
        const payload = req.query;
        const {error, validatedPayload} = payloadValidator(schema,payload)
        if(error){ 
            res.json({status:400, error:error, data:null}).status(400)
        }else{
            next()
        }
    }
}