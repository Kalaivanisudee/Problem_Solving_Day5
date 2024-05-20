console.log(Math.ceil(3.1))
console.log(Math.ceil(3.6))
console.log(Math.ceil(-25.1))
console.log(Math.ceil(-84.3))

function ceil(num){
return num -num%1 +(num<0?0 : 1);
}

console.log(ceil(5.6))
console.log(ceil(48.2))
console.log(ceil(-84.3))
console.log(ceil(-48.15878454))