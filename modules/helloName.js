exports.helloName = (name) => {
    if(typeof name === 'undefined'){
        return 'Hello World!'
    } else if(name === ''){
        return 'Hello World!'
    } else {
        let first = name.split('')[0].toUpperCase();
        let rest = name.slice(1).toLowerCase();
        return(`Hello ${first}${rest}!`)
    }
}