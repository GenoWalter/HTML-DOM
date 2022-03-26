

var btn = document.getElementById('btn');

function viec1() {
    console.log('Viec 1');
}

function viec2() {
    console.log('Viec 2');
}

btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);

setTimeout(function() {
    btn.removeEventListener('click', viec1)
}, 3000);
