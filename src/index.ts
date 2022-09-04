import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { routeBinder } from "./api/routers";
import CustomLog,{customMorgan} from "./library/customlog";
import cors from "cors";

//Init express
const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(customMorgan());

//Routes
routeBinder(app);

//Listen on port
const PORT = process.env.SERVER_PORT;


app.listen( PORT, ()=> { CustomLog.Cyan(`Server started at port ${PORT}`)} );