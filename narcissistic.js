function narcissistic(value){
    temp = value.toString().split('');
    let final = 0;
    value.toString().split('').forEach(el => final += Math.pow(parseInt(el), temp.length));
    return (value === final) ? true : false;
}

console.log(narcissistic(7));
console.log(narcissistic(371));
console.log(narcissistic(999));