function logger({name, price, ...rest}) {
    console.log(name);
    console.log(price);
    console.log(rest);
}

logger({
    name: 'JavaScript',
    price: 1000,
    description: 'description content'
});


var array1 = ['Javascript', 'Ruby', 'PHP'];
var array2 = ['ReactJS', 'Dart'];
var array3 = [...array1,...array2];
console.log(array3);


var object1 = {
    name: 'Javascript'
};
var object2 = {
    price: 1000
};
var object3 = {
    ...object1,
    ...object2
};
console.log(object3);
