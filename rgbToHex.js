
function rgbToHex(r, g, b){
    let rgb = [r, g, b];
    let nr = "";
    rgb.forEach((el) => {
        if(el < 0){
            nr += "00"
        } else if( el > 255){
            nr += "ff"
        } else {
            el = el.toString(16);
            nr += (el.length === 1) ? "0" + el : el;
        }
    })
    return nr.toUpperCase();
}

console.log(rgbToHex(-10, 270, 250))