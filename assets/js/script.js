// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays for all character options
const smallAlph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const tallAlph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '/', ':', ';', "'", '"', '<', '>', ',', '.', '?']



function generatePassword() {   

    // Prompts user for password character length & gives resposne for incorrect input
    let passwordLength = prompt ("How many characters would you like in your password? Choose a number between 8 and 128.");
    // Changes input from string to integer
    passwordLength = parseInt(passwordLength, 10);

    if (passwordLength >= 8 && passwordLength <= 128){
        // console.log("Password Length: " + passwordLength);
    } else {
        confirm ("Try again. You must choose a number between 8 and 128.");
        return;
    }

    // Prompts user for uppercase characters & gives resposne for incorrect input
    let wantUpper = prompt ("Do you want to include uppercase characters in your password? Type yes or no.");
    wantUpper = (wantUpper || "").toLowerCase();

    if (wantUpper === "yes" || wantUpper === "no"){
        // console.log("Wants uppercase: " + wantUpper);
    } else {
        confirm ("Try again. You must type yes or no.");
        return;
    }

    // Prompts user for lowercase characters & gives resposne for incorrect input
    let wantLower = prompt ("Do you want to inlucde lowercase characters in your password? Type yes or no.");
    wantLower = (wantLower || "").toLowerCase();

    if (wantLower === "yes" || wantLower === "no"){
        // console.log("Wants lowercase: " + wantLower);
    } else {
        confirm ("Try again. You must type yes or no."); 
        return;
    }

    // Prompts user for numeric characters & gives resposne for incorrect input
    let wantNumeric = prompt ("Do you want to include numbers in your password?");
    wantNumeric = (wantNumeric || "").toLowerCase();

    if (wantNumeric === "yes" || wantNumeric === "no"){
        // console.log("Wants numbers: " + wantNumeric);
    } else {
        confirm ("Try again. You must type yes or no.");
        return;
    }  

    // Prompts user for special characters & gives resposne for incorrect input
    let wantSpecial = prompt ("Do you  want to include special characters in your password?");
    wantSpecial = (wantSpecial || "").toLowerCase();

    if (wantSpecial === "yes" || wantSpecial === "no"){
        // console.log("Wants special characters: " + wantSpecial);
    } else {
        confirm ("Try again. You must type yes or no.");
        return;
    }
   
    // Object to store user's selected options
    var passwordOptions = {
        len: passwordLength,
        upper: yesNoToBoolean(wantUpper),
        lower: yesNoToBoolean(wantLower),
        number: yesNoToBoolean(wantNumeric),
        symbol: yesNoToBoolean(wantSpecial),
    };

     // // If user answers all options with 'no', tells user they must make a choice.
    if (!passwordOptions.lower && !passwordOptions.upper && !passwordOptions.number && !passwordOptions.symbol) {
        confirm ("You have to choose to include at least one character type.");
        return;
    }
    
    // Prints password to the screen
    return makeUserPassword(passwordOptions);
}

 // Changes yes/no answer to boolean - true/false
function yesNoToBoolean(answer) {
    const lowercaseAnswer = (answer || "").toLowerCase();
    if (lowercaseAnswer === 'yes') {
        return true;
    }
        return false;
}

// Retrieves random index from tallAlph array * returns index
function getRandomUpper (){
    const randomIndex = Math.floor(Math.random() * tallAlph.length)
    return tallAlph[randomIndex];
}

// Retrieves random index from smallAlph array * returns index
function getRandomLower(){
    const randomIndex = Math.floor(Math.random() * smallAlph.length)
    return smallAlph[randomIndex];
}

// Retrieves random index from numeric array * returns index
function getRandomNumber(){
    const randomIndex = Math.floor(Math.random() * numeric.length)
    return numeric[randomIndex];
}

// Retrieves random index from symbol array * returns index
function getRandomSymbol(){
    const randomIndex = Math.floor(Math.random() * symbols.length)
    return symbols[randomIndex];
}

// Sets userPassword as an array; Determines whether user wants password option, if true, pushes random character to userPassword array. 
function makeUserPassword(passwordOptions){
    let userPassword = [];
    if (passwordOptions.upper){
        userPassword.push(getRandomUpper);
    }
    if (passwordOptions.lower){
        userPassword.push(getRandomLower);
    }
    if (passwordOptions.number){
        userPassword.push(getRandomNumber);
    }
    if (passwordOptions.symbol){
        userPassword.push(getRandomSymbol);
    }

// Sets result to a string. This loop determines how many times makeUserPassword() should run. It runs as many times as is determined by the user's 'len' input.
    let result = "";
    for (var i = 0; i < passwordOptions.len; i++){
        let passwordFeatures = userPassword[Math.floor(Math.random() * userPassword.length)];
        result += passwordFeatures();
    }
    return result;
}



// user prompted to set a new password; asked how many characters desired between 8 & 128
// user enters number in desired range
    // move to next question
// user doesn't enter number in desired range
    // error message; back to previous question;
// asked if you want uppercase letters
// asked if lowercase letters are wanted
// asked if numbers are wanted
// asked if symbols are wanted
// produces password that contains desired elements