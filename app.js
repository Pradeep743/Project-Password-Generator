const characterAmountNumber = document.getElementById('characterAmountNumber');
const characterAmountRange = document.getElementById('characterAmountRange');

const form = document.getElementById('passwordGeneratorForm');

const includeUppercaseElement = document.getElementById('includeUppercase');
const includeNumberElement = document.getElementById('includeNumber');
const includeSymbolsElement = document.getElementById('includeSymbols');

const passwordDisplay = document.getElementById('passwordDisplay');


// sync both the inputs
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
    const value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}



// Making array of character codes
const Uppercase_Char_Codes = arrayFromLowToHigh(65, 90);
const Lowercase_Char_Codes = arrayFromLowToHigh(97, 122);
const Number_Char_Codes = arrayFromLowToHigh(48, 57);
const Symbol_Char_Codes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array;
}




// Submitting the form
form.addEventListener('submit', e => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumber = includeNumberElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const password = passwordGenerator(characterAmount, includeUppercase, includeNumber, includeSymbols);
    passwordDisplay.innerText = password
})

function passwordGenerator(characterAmount, includeUppercase, includeNumber, includeSymbols) {
    let charCodes = Lowercase_Char_Codes;
    if (includeUppercase) charCodes = charCodes.concat(Uppercase_Char_Codes);
    if (includeSymbols) charCodes = charCodes.concat(Symbol_Char_Codes);
    if (includeNumber) charCodes = charCodes.concat(Number_Char_Codes);

    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }

    return passwordCharacters.join('')
}


