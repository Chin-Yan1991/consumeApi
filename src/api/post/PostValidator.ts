import Joi from "joi";

export const searchSchema = Joi.object().keys({
    post_id:Joi.number().optional(),
    post_title:Joi.string().optional(),
    post_body:Joi.string().optional(),
    total_number_of_comments:Joi.number().optional()
}).oxor("post_id","post_title","post_body","total_number_of_comments").required();

export const fetchSchema = Joi.object().keys({
    postID: Joi.number().required()
}).required();