import realTime from "../../utils/realTime";
/**
 * @namespace 日志管理
 *
 * */
class Logger {
    private _flag:String = "----->";
    constructor() {

    }
    private _style(){
        return "["+realTime()+"]"+"   "+this._flag+"   ";
    }
    public info(message:String):void{
        console.log("\x1B[36m"+this._style()+message);
    }
    public warn(message:String):void{
        console.log("\x1B[33m"+this._style()+message);
    }
    public error(message:String):void{
        console.log("\x1B[31m"+this._style()+message);
    }

    get flag(): String {
        return this._flag;
    }

    set flag(value: String) {
        this._flag = value;
    }
}

export default Logger;