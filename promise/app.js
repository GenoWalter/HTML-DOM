// 1. Promise 
//      -Sync
//      -Async 
//      -Nỗi đau
//      -Lý thuyết, cách thực hành
//      -Thực hành, ví dụ

// Sync /Async 

//  setTimeOut, SetInterval, fetch, XMLHttpRequest, file reding, request animation frame

// callback

// sleep

setTimeOut(function() {
    console.log(1);
},1000);



console.log(2);

// callback hell

SetTimeOut(function(){
    console.log(1); //viec1
    SetTimeOut(function(){
        console.log(1);//viec 2
        SetTimeOut(function(){
            console.log(1);//viec3
            SetTimeOut(function(){
                console.log(1);//viec4
                SetTimeOut(function(){
                    console.log(1);//viec5
                    
                },1000);
            },1000);
        },1000);
    },1000);
    
},1000);


// Pyramid of doom 

// Memory leak

// 1. Pendding
// 2. Fulfilled
// 3. Rejected

// Promise là 1 khái niệm sinh ra để xử lý các thao tác bất đồng bộ. Trước khi có promise thì chúng ta thường xử dungj callback nhưng
// nó sẽ xảy ra 1 vấn đề là call back hell làm code khó hiểu  

var promise = new promise(
    // Excutor
    function(resolve, reject) {
        // logic
        // Thành công: resolve()
        // Thất bại: reject()
        resolve();
    }
);

promise 
    .then(function() {
        console.log('successuly')
    })
    .catch(function() {
        console.log('Failure')
    })
    .finally(function() {
        console.log('Done')
    })


// 1, promise.resolve
// 2. promise.reject
// 3. promise.all

//  Thư viện: output luôn là một promise

var promise = promise.resolve('Success!');

promise
    .then( function (result) {
        console.log('result: ', result);
    })
    .catch(function(err){
        console.log('err: ', err);
    })

var promise1 = new Promise(function(resolve) {
        setTimeOut(function () {
            resolve([1]);
        }, 2000); 
});



var promise2 = new Promise(function(resolve) {
    setTimeOut(function () {
        resolve([2, 3]);
    }, 5000); 
});



Promise.all([promise1, promise2])
    .then(function(result) {
            var result1 = result[0];
            var result2 = result[1];

            console.log(result1.concat(result2));
    });


