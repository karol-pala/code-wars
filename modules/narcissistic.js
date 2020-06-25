exports.narcissistic = (value) => {
    temp = value.toString().split('');
    let final = 0;
    value.toString().split('').forEach(el => final += Math.pow(parseInt(el), temp.length));
    return (value === final) ? true : false;
}

