
function makeArray(){
    let elements = [];
    for (let i = 1; i <= 118; i++){
        elements.push(`el${i}`);
    }
    return elements
}
let elements = makeArray();
console.log(elements);