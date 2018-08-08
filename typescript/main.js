var myString = 'some string content';
// myString = 5345;
var num = 234234;
var array = [999, 'cat', 'dog', 'horse'];
array.push('string');
array.push(3234);
array.push(true);
var first = array[0];
function isString(value) {
    return typeof value === 'string';
}
if (isString(first)) {
    first.toUpperCase();
}
var backpack = {
    items: []
};
backpack.items.push('compass');
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
