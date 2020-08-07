exports.solve = (n) => {
    n = n.toString().split('');
    n = n.map(x => parseInt(x));
    let arr = [];
    let highest = {
        sum: 0
    };
    arr.push({
        nr: n.join(''),
        sum: sumArr(n)
    })
    n.slice(1).forEach((x, i) => {
        arr.push({
            nr: parseInt(toNines(n, i + 1)),
            sum: sumArr(parseInt(toNines(n, i + 1)).toString().split('').map(x => parseInt(x)))
        })
    })
    arr.forEach(x => {
        highest = compare(highest, x)
    })
    return parseInt(highest.nr)
}

function sumArr(arr){
    let final = 0;
    arr.forEach(x => {
        final += x
    })
    return final
}

function toNines(arr, i){
    console.log('======ToNines=======')
    let final = arr.slice(0, i).join('');
    console.log('final:', final)
    final += (parseInt(arr[i] - 1) === 0 && arr[i + 1] && arr[i + 1] !== 0) ? parseInt(arr[i]) : parseInt(arr[i] - 1);
    console.log('final:', final)
    final += (arr[i] - 1 ===0) ? '9' : '8';
    console.log('final:', final)
    arr.slice(i + 1).forEach(() => {
        final += 9
    })
    console.log('final:', final)
    return final
}

function compare(prev, next){
    return((prev.sum < next.sum) ? next : prev)
}