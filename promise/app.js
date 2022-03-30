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