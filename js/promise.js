// console.log('promise connected');
const payment = true;
const marks = 70;

// enroll
function enroll(){
    console.log('Enrollment is in progress');
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(payment){
                resolve();
            }
            else{
                reject('Payment fail');
            }
        },2000)
    })
    return promise;

}
function progress(){
    console.log('Course on progress');
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(marks >= 80){
                resolve();
            }
            else{
                reject('You could not get enough marks to get the certificate');
            }
        },2000)
    })
    return promise;
}
function getCertificate(){
    console.log('Preparing certificate..');
    const promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Congrats! You got the certificate');
        },2000)
    })
    return promise;
}
enroll()
    .then(progress)
    .then(getCertificate)
    .then((value)=>{
        console.log(value);
    })
    .catch((value)=>{
        console.log(value);
    })
