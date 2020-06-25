exports.longestSlideDown = (arr) => {
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i - 1]){
            for(let j = 0; j < arr[i].length; j++){
                if(arr[i][j + 1]){
                    if(arr[i][j] + arr[i - 1][j] > arr[i][j + 1] + arr[i - 1][j]){
                        arr[i - 1][j] = arr[i][j] + arr[i - 1][j]
                    } else {
                        arr[i - 1][j] = arr[i][j + 1] + arr[i - 1][j]
                    }
                }
            }
        }
    }
    return arr[0][0];
}


