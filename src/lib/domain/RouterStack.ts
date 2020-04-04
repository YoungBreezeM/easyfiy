import Layer from "./Layer";

class RouterStack {
    private _routerStack:Array<Layer>|undefined;


    get routerStack(): Array<Layer> | undefined {
        return this._routerStack;
    }

    set routerStack(value: Array<Layer> | undefined) {
        this._routerStack = value;
    }
}
export default RouterStack;