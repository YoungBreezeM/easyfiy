
import Layer from "../domain/Layer";

import RestfulIF from "./RestfulIF";
import RestMethod from "../descriptor/RestMethod";
import Routes from "../descriptor/Routes";
import RouterStack from "../domain/RouterStack";



class Restful extends RouterStack implements RestfulIF{

    ACL(path: String, handler: Function): void {
    }

    BIND(path: String, handler: Function): void {
    }

    CHECKOUT(path: String, handler: Function): void {
    }

    CONNECT(path: String, handler: Function): void {
    }

    COPY(path: String, handler: Function): void {
    }

    DELETE(path: String, handler: Function): void {
    }
    @RestMethod()
    GET(path: String, handler: Function): void {
    }

    HEAD(path: String, handler: Function): void {
    }

    LINK(path: String, handler: Function): void {
    }

    LOCK(path: String, handler: Function): void {
    }

    MERGE(path: String, handler: Function): void {
    }

    MKACTIVITY(path: String, handler: Function): void {
    }

    MKCALENDAR(path: String, handler: Function): void {
    }

    MKCOL(path: String, handler: Function): void {
    }

    MOVE(path: String, handler: Function): void {
    }

    NOTIFY(path: String, handler: Function): void {
    }

    OPTIONS(path: String, handler: Function): void {
    }

    PATCH(path: String, handler: Function): void {
    }

    POST(path: String, handler: Function): void {
    }

    PROPFIND(path: String, handler: Function): void {
    }

    PROPPATCH(path: String, handler: Function): void {
    }

    PURGE(path: String, handler: Function): void {
    }

    PUT(path: String, handler: Function): void {
    }

    REBIND(path: String, handler: Function): void {
    }

    REPORT(path: String, handler: Function): void {
    }

    SEARCH(path: String, handler: Function): void {
    }

    SOURCE(path: String, handler: Function): void {
    }

    SUBSCRIBE(path: String, handler: Function): void {
    }

    TRACE(path: String, handler: Function): void {
    }

    UNBIND(path: String, handler: Function): void {
    }

    UNLINK(path: String, handler: Function): void {
    }

    UNLOCK(path: String, handler: Function): void {
    }

    UNSUBSCRIBE(path: String, handler: Function): void {
    }

}

export default Restful;