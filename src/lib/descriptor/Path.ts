import Listener from "../../router/Listener";
import Logger from "../logger/Logger";


function Path(url:String) {
    return (target:any)=>{
        target.prototype.path = url;
        // console.log(target.prototype)
    }
}
export default Path;