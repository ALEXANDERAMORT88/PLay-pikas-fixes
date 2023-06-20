// create random number (secret)
function numberRandom() {
    let number = [];
    const numberDigits = 3;

    for (let i = 0; i < numberDigits; i++) {
        let digit = Math.floor(Math.random()*10);
        number += (digit)
    };
    // console.log("This is the  number aguess", number);
    return number
};
// numberRandom();

//Compare the input number with the number guess
function compare(numberGuess, numberEntered) {
    let fixes = 0;
    let pikas = 0;
    let digitFixes = [];
    let digitPikas = [];

    for (let i = 0; i < numberGuess.length ; i++) {
        if (numberGuess[i] === numberEntered[i]) {
            fixes++
            digitFixes += numberEntered[i]
        } else {
            if (numberGuess.includes(numberEntered[i])) {
                pikas++
                digitPikas += numberEntered[i]
            };
        };
    };
    console.log("Fixes: ", digitFixes, "Pikas: ", digitPikas);
    return {fixes, pikas};
};

//make the game work
function playFixesPikas() {
    let numberGuess = numberRandom();
    let attempts = 0;

    while (true) {
        let numberEntered = prompt("To guess you have to enter 3 digits:");

        if (numberEntered.length !== 3 || isNaN(numberEntered)){
            alert("You have ti enter the 3 digits, which are numbers");
            continue;
        };
        attempts++;
        console.log("attempts", attempts);
        let compareNumbers = compare(numberGuess, numberEntered);

        if (compareNumbers.fixes === 3) {
            alert("Congratulations you WIN");
        };
        if (attempts === 3) {
            alert("You have only one chance to win");
            continue;
        }else if (attempts === 4) {
            alert("You lost, another time");
            break;
        };
    };
};
playFixesPikas();