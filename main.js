
//ClassList property

// add
// contains
// remove
// toggle

var boxElenment =
    document.querySelector('.box');

    // boxElenment.classList.add('red');

    setInterval(() => {
        boxElenment.classList.toggle('red');
    }, 3000);