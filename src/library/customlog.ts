import morgan from "morgan";
export default class CustomLog{
    static Red(...text:any){
        console.log("\x1b[31m%s\x1b[0m",...text);
    }
    static Green(...text:any){
        console.log("\x1b[32m%s\x1b[0m", ...text);
    }
    static Yellow(...text:any){
        console.log("\x1b[33m%s\x1b[0m", ...text);
    }
    static Blue(...text:any){
        console.log("\x1b[34m%s\x1b[0m", ...text);
    }
    static Magenta(...text:any){
        console.log("\x1b[35m%s\x1b[0m", ...text);
    }
    static Cyan(...text:any){
        console.log("\x1b[36m%s\x1b[0m", ...text);
    }
}

export const customMorgan = () => {
    let config = "";
    config +=  "\x1b[33m :method \x1b[0m ";
    config += "\x1b[36m :url \x1b[0m ";
    config +=  "\x1b[32m :status \x1b[0m ";
    config += "\x1b[34m :res[content-length] - :response-time ms \x1b[0m ";
    return morgan(config);
}

