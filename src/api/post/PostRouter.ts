import { Router } from "express";
import { testPost,listPost,fetchPost,findPostByFilter } from "./PostController";
import { validatePayload,validateParam } from "../../library/payloadValidator";
import { fetchSchema,searchSchema } from "./PostValidator";

const PostRouter = Router();
PostRouter.get("/test",testPost);
PostRouter.get("/list",listPost);
PostRouter.get("/fetch/:postID",validateParam(fetchSchema),fetchPost)
PostRouter.post("/search",validatePayload(searchSchema),findPostByFilter)

export default PostRouter