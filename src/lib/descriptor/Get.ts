function Get() {
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        target.method = "GET";
        target.responseBody = descriptor.value();
    }
}

export default Get;