console.time("tribonacci")

function tribonacci(signature, n){
    let final = [];
    if(n > 3){
        console.log("n > 1")
        for(let i = 0; i < n - 3; i++){signature.push(signature[i] + signature[i + 1] + signature[i + 2])};
        return signature;
    } else if(n > 0) {
        console.log("n > 0");
        if( n === 1){
            final.push(signature[0]);
        } else if( n === 2 ) {
            final.push(signature[0]);
            final.push(signature[1]);
        } else {
            final = signature;
        }
        return final;
    } else {
        console.log("else")
        return [];
    }
}

console.timeEnd("tribonacci")

console.log(tribonacci([0.5, 0.5, 0.5], 30))

