function makeArray(){
    let elements = [];
    for (let i = 1; i <= 118; i++){
        elements.push(`el${i}`);
    }
    return elements
}
function validate(){
    document.getElementById("hint").innerHTML = "you gessued it!";
}
function playGame(){
    let elements = makeArray();
    let randomIndex = Math.floor(Math.random() * 118);
    let randomElement = document.getElementById(elements[randomIndex]);
    let secert = randomElement;
    console.log(secert);
    secert.addEventListener('click', validate);
}
let playBtn = document.getElementById("play");
playBtn.addEventListener("click", playGame)
