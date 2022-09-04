import { Request, Response, NextFunction } from "express"
import { getAllPosts, findPostByID } from  "../../repository/PostRepo"
import {listComment} from "../../repository/CommentRepo"
import CustomLog from "../../library/customlog"

export const testPost = async(req:Request, res:Response, next:NextFunction) => {
    res.json({ status:200, message: "post test"}).status(200)
}

export const listPost = async(req:Request, res:Response, next:NextFunction) => {
    try{
       
        const {error:postError, data:posts} = await getAllPosts();
        if(postError) throw postError;
        const {error:commentsError, data:comments}  = await listComment();
        if(commentsError) throw commentsError;
        const data = dataFormulator(posts,comments);
        
        res.json({ status:200, message:"list post successfully", data, error:null}).status(200);
    }catch(error){
        res.json({ status:500, message:"Error list post", data:null, error}).status(500);
    }
}

export const fetchPost = async(req:Request, res:Response, next:NextFunction) => {
    try{
        const {postID} = req.params;
        const {error:postError, data:posts} = await findPostByID(postID);
        if(postError) throw postError;
        const {error:commentsError, data:comments}  = await listComment();
        if(commentsError) throw commentsError;
        const data = dataFormulator(posts,comments);
        res.json({ status:200, message:"find post successfully", data, error:null}).status(200);
    }catch(error){
        res.json({ status:500, message:"Error list post", data:null, error}).status(500);
    }
}

export const findPostByFilter = async(req:Request, res:Response, next:NextFunction) =>{
    try{
        const {post_id,post_title,post_body,total_number_of_comments} = req.body;

        const {error:postError, data:posts} = await getAllPosts();
        if(postError) throw postError;
        const {error:commentsError, data:comments}  = await listComment();
        if(commentsError) throw commentsError;
        let data = dataFormulator(posts,comments);

        if(post_id) data = data.filter(row=> row.post_id == post_id);
        if(post_title) data = data.filter(row=> row.post_title == post_title);
        if(total_number_of_comments) data = data.filter(row=> row.total_number_of_comments == total_number_of_comments);
        if(post_body) {
            const regex = new RegExp(post_body, 'gi');
            data = data.filter(row=>{
                const found = row.post_body.match(regex)
                return found
            });
        };
        
        res.json({ status:200, message:"list post successfully", data, error:null}).status(200);
    }catch(error){
        res.json({ status:500, message:"Error list post", data:null, error}).status(500);
    };
};

const dataFormulator =(posts:Array<any>,comments:Array<any>)=>{
    const data:Array<any> = [];
    let commentCounts:any = {};
    for(const comment of comments){ 
        if(!commentCounts[comment?.postId]){
            commentCounts[comment?.postId] = 1;
        }else{
            commentCounts[comment?.postId]++;
        };
    };
    for(const post of posts){
        data.push({post_id:post.id, post_title:post.title, post_body:post.body,total_number_of_comments:commentCounts[post?.id] });//total_number_of_comments
    };
    return data;
};