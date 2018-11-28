export function createObjFromFormData(fromData){
    var object = {};
    fromData.forEach(function (value, key) {
        object[key] = value;
    });
    return object;
}