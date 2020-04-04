
import Logger from "../lib/logger/Logger";


import Layer from "../lib/domain/Layer";


import url from "url"
const logger = new Logger();

let routerStack:Array<Layer>|undefined =[];
class Listener {
    constructor(routes:Array<Layer>|undefined) {
        routerStack =routes;
    }
    public  matchRouter(request:any,response:any):void{
        //请求方法
        let requestMethod = request.method;
        //请求路径参数
        let {pathname} = url.parse(request.url);

        request.on("end",()=>{
            logger.info(JSON.stringify({
                url:pathname,
                method:requestMethod,
                status:response.statusCode
            }))
        });

        // @ts-ignore
        for (let i=0;i<routerStack.length;i++){
            // @ts-ignore
            let {method,path,handler} = routerStack[i];
            if(method===requestMethod && path===pathname){
                // @ts-ignore
                return handler(request,response);
            }
        }
        response.writeHead(404);
        response.end(`Cannot ${requestMethod} ${pathname}`)

    }
}

export default Listener;