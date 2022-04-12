var array = ['Javascript', 'PHP', 'Ruby'];

var [a, b, ...rest] = array;

console.log(a);
console.log(rest);

var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    description: 'description value',
    children: {
        name: 'Reactjs'
    }
};

var {name: parentName, children: {name}, description = 'default description' ,...rest} = course;

console.log(parentName);
console.log(name);
console.log(rest);
console.log(description);