
// DOM Events

// 1. preventDefault
// 2. stopPropagation

document.querySelector('div').onclick =
    function() {
        console.log('DIV')
    }

document.querySelector('button').onClick =
    function(e) {
        e.stopPropagation();
        console.log('Click me!')
    }
