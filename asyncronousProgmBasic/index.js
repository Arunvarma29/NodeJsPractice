// here we have seen how node executes asynchronously
/*
let a=10;
let b=0;

setTimeout(()=>{
   b=20
},1000)

console.log(a+b);
*/
// lets learn how can we handle it

let a=10;
let b=0;

let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        b=20
        resolve(b)
    },2000)
})

waitingData.then(()=>{
    console.log(a+b); 
})

console.log(a+b);




