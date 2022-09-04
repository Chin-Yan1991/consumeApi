
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