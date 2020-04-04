class Controller {
    private _method: String | undefined;
    private _path: String | undefined;
    private _responseBody:Object | undefined;

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

    get responseBody(): Object | undefined {
        return this._responseBody;
    }

    set responseBody(value: Object | undefined) {
        this._responseBody = value;
    }
}
export default Controller;