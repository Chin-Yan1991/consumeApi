import axios from 'axios';
import CustomLog from '../library/customlog';
import "dotenv/config";

export const findPostByID = async(postID:string)=>{
    try{
        const { data, status } = await axios.get(`${process.env.SERVICE_URL}posts/${postID}`, {headers: { Accept: 'application/json'} })
        // CustomLog.Magenta(JSON.stringify(data, null, 4));
        // CustomLog.Yellow('response status is: ', status);
       
        return {data:[data], error:null};
    }catch(error){
        if (axios.isAxiosError(error)) {
            CustomLog.Red('error message: ', error.message);
            return {error:error.message, data:[]};
          } else {
            CustomLog.Red('unexpected error: ', error);
            return  {error:'An unexpected error occurred', data:[]};
          }
    }

} 

export const getAllPosts = async()=>{
    try{
        const { data, status } = await axios.get(`${process.env.SERVICE_URL}posts`, {headers: { Accept: 'application/json'} })
        //CustomLog.Magenta(JSON.stringify(data, null, 4));
        //CustomLog.Yellow('response status is: ', status);
        return {data, error:null};
    }catch(error){
        if (axios.isAxiosError(error)) {
            CustomLog.Red('error message: ', error.message);
            return {error:error.message, data:[]};
          } else {
            CustomLog.Red('unexpected error: ', error);
            return {error:'An unexpected error occurred', data:[]};
          }
    }
} 