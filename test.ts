
//
// class Test {
//     public  _name:String | undefined = "yqf";
//     public  start(name?:String):void{
//         this._name = name;
//     }
//
// }
//
// new Test().start("haha");
//
// console.log(new Test()._name);

// function Path(path:String) {
//     return function (target:any) {
//         target.router=["heh"]
//     }
// }
//
//  function Get(path?:String) {
//     return function (target:any,prototypeKey:String){
//         // @ts-ignore
//         target[prototypeKey].method = "GET"
//     }
// }
//
//  function Params(target:any) {
//     console.log(target)
// }
//
// @Path("/home")
// class Controller {
//     public routers:Array<any> =[]
//     constructor() {
//         console.log(this.routers)
//     }
//
//
// }
// console.log(new Controller())

class Test {
    get(path:any,handler:any){

    }
}

class C extends Test{

}

new C().get("/","s")