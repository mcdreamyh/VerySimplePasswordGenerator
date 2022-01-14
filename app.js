//Assigning bunch of variables
let letters = [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let symbols = ["!", "@", "#", "$", "%", "&", "/", "(", ")", "=", "?"]
let randomChar, x, y, z;
let password = "";
let btn = document.getElementById("submit").addEventListener("click", createPassword)
let printPw = document.getElementById("pw");

//Function to choose random character
function chooseCharacter() {
    let rng = Math.random();
    //Choose letter
    if (rng <= 0.33) {
        //Pick upper or lowercase randomly
        if (rng <= 0.165) {
            x = Math.floor(rng * letters[0].length);
            randomChar = letters[0][x];
        } else {
            x = Math.floor(rng * letters[0].length);
            randomChar = letters[1][x];
        }
        //Choose number
    } else if (rng <= 0.66) {
        y = Math.floor(rng * numbers.length);
        randomChar = numbers[y];
        //Choose symbol
    } else {
        z = Math.floor(rng * symbols.length);
        randomChar = symbols[z];
    }
}

function createPassword() {
    //Store pw length from input
    let pwLength = document.getElementById("length").value;
    //Run choosing function as many times as characters needed
    for (i = 0; i < pwLength; i++) {
        chooseCharacter()
            //Add new character everytime
        password = password += randomChar;
    }
    //Print password for the user
    printPw.innerHTML = password;
    //Reset password before new click
    password = "";
}