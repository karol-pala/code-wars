exports.validBraces = (arr) => {
    const open = ['[', '{', '('], close = [']', '}', ')'];
    let depth = 0, graph = [];
    let final = true;
    arr = arr.split('');
    if(close.indexOf(arr[0]) !== -1) return false;
    function isOpening(bracket){
        return (bracket === open[open.indexOf(bracket)])
    }
    function makeGraf(arr, depth, graph){
        if(arr.length > 0){
            if(graph[depth] === undefined){graph.push([])};
            if(isOpening(arr[0])){
                graph[depth].push(arr.shift());
                depth++;
                makeGraf(arr, depth, graph);
            } else {
                depth--;
                graph[depth].push(arr.shift());
                makeGraf(arr, depth, graph);
            }
        }
        check(graph);
    }
    function check(arr){
        arr.forEach((brackets) => {
            brackets.forEach((el, i) => {
                if(i%2===0){
                    if(!(open.indexOf(el) === close.indexOf(brackets[i + 1]))){
                        final = false
                    }
                }
            })
        })
    }
    makeGraf(arr, depth, graph);
    return final;
}

