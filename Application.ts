
import EasyFiyApplication from "./src/EasyFiyApplication";
import UserController from "./src/Controller/UserController";


const application = new EasyFiyApplication();


//路由中心
application.registerController([
    UserController
]);


//服务器启动器
application.Start(8080);

