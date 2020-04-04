


class Layer {
    private _method: String | undefined;
    private _path: String | undefined;
    private _handler: Function | undefined;


    constructor(method: String | undefined, path: String | undefined, handler: Function | undefined) {
        this._method = method;
        this._path = path;
        this._handler = handler;
    }

    get method(): String | undefined {
        return this._method;
    }

    set method(value: String | undefined) {
        this._method = value;
    }

    get path(): String | undefined {
        return this._path;
    }

    set path(value: String | undefined) {
        this._path = value;
    }

    get handler(): Function | undefined {
        return this._handler;
    }

    set handler(value: Function | undefined) {
        this._handler = value;
    }
}

export default Layer;