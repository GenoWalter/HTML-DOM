// Định nghĩa key: value cho object
// Định nghĩa method cho object
// Định nghĩa key cho object dưới dạng biến

var name = 'Javascript';
var price = 1000;

var course  = {
    name,
    price
};

console.log(course);

var fieldName = 'new-name';
var fieldPrice = 'price';

const course = {
    name: 'Javascript',
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
};

console.log(course);