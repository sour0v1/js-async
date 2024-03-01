// console.log('connected');
const a = false;
console.log('task 1');

// promise
const promise = new Promise(function(resolve, reject) {
    setTimeout(function(){
        if(a){
            resolve('task 2');
        }
        else{
            reject('failed');
        }
    }, 2000);
});
promise
    .then((value)=>{
        console.log(value);
    })
    .catch((err)=>{
        console.log(err);
    })

console.log('task 3');