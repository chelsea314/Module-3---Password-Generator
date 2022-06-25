// Assignment Code
// var smallAlph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var tallAlph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
// var symbols = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '/', ':', ';', "'", '"', '<', '>', ',', '.', '?']

// console.log(lowerCase, upperCase, numeric, specialCharacters);

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// || Asks users how many characters they want in their password between >=8 - <=128
 function generatePassword (){
let passwordLength = prompt("How many characters do you want in your password? Enter a number between 8 and 128.");
// console.log(passwordLength);

// validate user input; store info
if (passwordLength >= 8 && passwordLength <= 128){
    confirm ("Your password will contain " + passwordLength + " characters. Click ok to continue.");

// if user inputs invalid number
} else {
    confirm ("Try again. Please make sure to enter a number between 8 and 128.");
return 
// generatePassword()
;
}

// || Asks if user wants lowercase characters in password
let lowerCase = prompt("Do you want to include lowercase characters in your password? Type yes or no.");

// validate user input; store info
if (lowerCase === "yes" || lowerCase === "no" || lowerCase === "No" || lowerCase === "Yes"){
    confirm ("Include lowercase characters: " + lowerCase + ". Click ok to continue.");

// if user inputs invalid response  
} else {
    confirm ("Try again. Please make sure to answer with yes or no.");
return
// generatePassword()
;
}

// ask if user wants uppercase characters
let upperCase = prompt("Do you want to include uppercase characters in your password? Type yes or no.");

// validate user input; store info
if (upperCase === "yes" || upperCase === "no" || lowerCase === "No" || lowerCase === "Yes"){
    confirm ("Include uppercase characters: " + upperCase + ". Click ok to continue.");

// if user inputs invalid response  
} else {
    confirm ("Try again. Please make sure to answer with yes or no.");
return
// generatePassword()
;
}

// ask if user wants numbers
let numbers = prompt("Do you want to include numbers in your password? Type yes or no.");

// validate user input; store info
if (numbers === "yes" || numbers === "no" || lowerCase === "No" || lowerCase === "Yes"){
    confirm ("Include numbers: " + numbers + ". Click ok to continue.");

// if user inputs invalid response  
} else {
    confirm ("Try again. Please make sure to answer with yes or no.");
return
// generatePassword()
;
}

// ask if user wants special characters
let specialCharacters = prompt("Do you want to include special characters in your password? Type yes or no.");

// validate user input; store info
if (specialCharacters === "yes" || specialCharacters === "no" || lowerCase === "No" || lowerCase === "Yes"){
    confirm ("Include special characters: " + specialCharacters + ". Click ok to continue.");

// if user inputs invalid response  
} else {
    confirm ("Try again. Please make sure to answer with yes or no.");
return
// generatePassword()
;
}

}

// generate password that matches the user's criteria
// display alert/write password to the page
