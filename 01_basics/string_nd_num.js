let username="prshotm"
const address="Jammu and Kashmir";
console.log(`This is ${username} and I am from ${address}`);

let num=99.66;
console.log(num.toPrecision(3));//precise three digits after round off

let num2=18690.99;
console.log(num2.toPrecision(3));//precise three digits value and other in exponential

let num3=345093.66;
console.log(num3.toFixed(3));//no of value after decimal

let num4=100000000;
console.log(num4.toLocaleString());//apply commas according to US number system

let num5=100000000;
console.log(num5.toLocaleString('en-IN'));//apply commas according to Indian number system

console.log(Math.random([4]));

//otp generator
function generateOtp(){
let digits='0123456789';
let otp='';
let len=digits.length;
for(let i=0;i<5;i++){
    otp+=digits[Math.floor(Math.random()*len)];
}
return otp;
}

console.log("Generated otp is:" + generateOtp());

let date=new Date();
console.log(date+date.getFullYear());
