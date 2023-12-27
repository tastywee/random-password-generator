const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateButton = document.getElementById("generate-button");
let firstField = document.getElementById("first-input");
let secondField = document.getElementById("second-input");

generateButton.addEventListener("click", function() {
    firstField.value = ""
    secondField.value = ""

    for (let i = 0; i < 16; i++) {
        let randomNumberOne = Math.floor(Math.random() * characters.length);
        let randomNumberTwo = Math.floor(Math.random() * characters.length);
        firstField.value += characters[randomNumberOne];
        secondField.value += characters[randomNumberTwo];
    }
    
    console.log("Button clicked!");
});

function copyToClipboard(inputField) {
    inputField.select();
    document.execCommand('copy');
}

firstField.addEventListener("click", function() {
    copyToClipboard(firstField);
    console.log("Text copied to clipboard:", firstField.value);
});

secondField.addEventListener("click", function() {
    copyToClipboard(secondField);
    console.log("Text copied to clipboard:", secondField.value);
});