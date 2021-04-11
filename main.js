function makeArray(){
    let elements = [];
    for (let i = 1; i <= 118; i++){
        elements.push(`el${i}`);
    }
    return elements
}
function validate(){
    $("#hint").innerHTML = `You guessed it! The answer was  ${secert.title}, element ${secert.id.slice(2)}`;
}

function playGame(){
    $("#hint").innerHTML = "";
    let elements = makeArray();
    let randomIndex = Math.floor(Math.random() * 118);
    let randomElement = $(elements[randomIndex]);
    let secert = randomElement;
    console.log(secert);
    secert.addEventListener('click', function(){
        $("#hint").innerHTML = `You guessed it! The answer was  ${secert.title}, element ${secert.id.slice(2)}`;
    });
}
playGame();
let playBtn = $("#play");
playBtn.on("click", playGame);
