import http from "http"
import {Runtime} from "inspector";
import Layer from "../domain/Layer";



function RestMethod(){
    return (target:any, propertyKey: string, descriptor:any)=>{
        target.routerStack = [];
        descriptor.value = function (path:String,handler:Function) {
            target.routerStack.push(new Layer(
                propertyKey,
                path,
                handler
            ))
        }
    }
}

export default RestMethod;