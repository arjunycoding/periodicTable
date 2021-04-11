function makeArray(){
    let elements = [];
    for (let i = 1; i <= 118; i++){
        elements.push(`el${i}`);
    }
    return elements
}
function validate(){
    document.getElementById("hint").innerHTML = `You guesses it! The answer was  ${secert.title}`;
}
let elements = makeArray();
let randomIndex = Math.floor(Math.random() * 118);
let randomElement = document.getElementById(elements[randomIndex]);
let secert = randomElement;
console.log(secert.title);
secert.addEventListener('click', validate);
