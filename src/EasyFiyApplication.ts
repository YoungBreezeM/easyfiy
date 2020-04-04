import Http from "http"
import Logger from "./lib/logger/Logger"
import Listener from "./router/Listener";
import Restful from "./lib/restful/Restful";

import Layer from "./lib/domain/Layer";
import Controller from "./lib/domain/Controller";


let logger = new Logger();
let restful = new Restful();

class EasyFiyApplication{
    private _port: Number = 3000;
    public Start(port?: Number): void {
        console.log(restful.routerStack)
        Http.createServer(new Listener(restful.routerStack).matchRouter)
            .listen(port || this._port, () => {
                logger.info("服务器已经启动");
                logger.info("端口为:" + (port || this._port))
            });
    }

    public registerController(ControllerList:Array<Controller>){
        ControllerList.forEach(controller=>{
            let {method,path,responseBody} = controller;
            logger.info("已注册路由: "+"["+path+"] "+method)
            // @ts-ignore
            restful[method](path,(request,response)=>{
                response.end(JSON.stringify(responseBody))
            });

        })
    }
}



export default EasyFiyApplication;

