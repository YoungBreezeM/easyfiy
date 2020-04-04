import Layer from "../lib/domain/Layer";
import Path from "../lib/descriptor/Path";
import Get from "../lib/descriptor/Get";
import Controller from "../lib/domain/Controller";

@Path('/')
class UserController extends Controller{
    @Get()
    public userList(){
        return {name:"yqf"}
    }
}


export default new UserController();
