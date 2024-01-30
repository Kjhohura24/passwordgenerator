// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like the password to contain?')
  );
  while (isNaN(length) || length <9 || length > 70) {
    alert('Password length needs to be a number between 10 and 70');
    length = parseInt(
      prompt('How many characters would you like the password to contain?')
    );
  }
  var hasSpecialCharacters = confirm( 
    'Click OK to include the special characters.'
  );

  var hasNumericaCharacters = confirm(
    'Click OK to include numeric characters.'
  );
  var hasLowerCasedCharacters = confirm(
    'Click OK to include lowercase character.'
  );
  var hasUpperCasedCharacters = confirm(
    'Click OK to include uppercase characters.'
  );

  while (
    !hasSpecialCharacters &&
    !hasNumericaCharacters &&
    !hasLowerCasedCharacters &&
    !hasUpperCasedCharacters
  )
  { alert('Must contain atleast one character type');
  };

  return {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericaCharacters: hasNumericaCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement =  arr[randIndex];
  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];

  if (options.hasSpecialCharacters) {
    result = result.concat(specialCharacters);
  }

  if (options.hasNumericaCharacters) {
    result = result.concat(numericCharacters)
  }

  if (options.hasLowerCasedCharacters) {
    result = result.concat(lowerCasedCharacters)
  }

  if (options.hasUpperCasedCharacters) {
    result = result.concat(upperCasedCharacters)
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacters =  result;
    var randomCharacter = getRandom(possibleCharacters);
    result[i] = randomCharacter;
  }

  result = result.join('');
  return result.slice(0, options.length);
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);