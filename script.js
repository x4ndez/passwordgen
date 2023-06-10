// Assignment Code
let st_generateBtn = document.querySelector("#generate");
let st_password = document.querySelector("#password");
let st_alphanum = document.querySelector("#alphanum");
let st_funk = document.querySelector("#funk");
let st_word = document.querySelector("#word");
let st_pwLength = document.querySelector("#pwLength");
let st_pwLenInd = document.querySelector("#pwLenInd");

// Password object to hold the password value, length and if the user wanted to include funky characters.
let password = {

  value: "",
  length: 8,
  criteria: [true, false, false],
  //criteria[0] = alphanumeric
  //criteria[1] = funky
  //criteria[2] = word-by-word

}

//User Input: Criteria
st_alphanum.checked = password.criteria[0]; // Set Alphanumeric as default.
// console.log(password.criteria[0]);

//User Input: Password length
st_pwLength.value = password.length;
st_pwLenInd.innerHTML = st_pwLength.value; //Prints default password length to page.
st_pwLength.addEventListener("change", setPwLength); // Change the printed password length

function setPwLength() {

  st_pwLenInd.innerHTML = st_pwLength.value;

}

// Create arrays for usable characters: alphanumeric array, funky character array

const alphaLower = [
  "a", "b", "c", "d", "e", "f", "g", "h",
  "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x",
  "y", "z"
];

const alphaUpper = [
  "A", "B", "C", "D", "E", "F", "G", "H",
  "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "V", "W", "X",
  "Y", "Z"
];

const numeric = [
  "1", "2", "3", "4", "5", "6", "7", "8",
  "9"
]

const funky = [
  "`", "!", "@", "#", "$", "%", "^", "&",
  "*", "(", ")", "_", "+", "~", "-", "=",
  "[", "]", ";", "'", ",", ".", "/", "{",
  "}", "|", ":", '"', "<", ">", "?"
];

// const bigArray = alphaLower.concat(alphaUpper, numeric, funky); //Join user-selected arrays

function generateArray(x, y) {

  let localBigArray = [];

  if (x) {

    localBigArray = alphaLower.concat(alphaUpper, numeric);

  } else if (y) {

    localBigArray = alphaLower.concat(alphaUpper, numeric, funky);

  }

  return localBigArray;

}




// Prompt: Password criteria: Alphanumeric, funky, word-by-word (find a word library)

// Prompt: Password length



// Create function to create new randomized array of length given by user, include 0.
// Add functionality to check if there are funky characters in the password if the user has selected funky, if there are no funky characters, re-generate.

function randomNumber(bigArray) {

  let x = Math.floor(Math.random() * bigArray.length);

  return x;

}

function createRandomPassword(len, bigArray) {

  let passwordArray = [];

  for (let i = 0; i < len; i++) {

    passwordArray[i] = bigArray[randomNumber(bigArray)];

  }

  let passwordString = passwordArray.join(""); // Convert array to string

  return passwordString;

}

// Send string to output 'passwordText.value'

// Write password to the #password output
function writePassword() {


  //capture data
  password.length = st_pwLength.value;

  let bigArray = [];
  bigArray = generateArray(password.criteria[0], password.criteria[1]);

  password.value = createRandomPassword(password.length, bigArray);


  console.log(password.value);
  st_password.innerHTML = password.value;

}

// Add event listener to generate button
st_generateBtn.addEventListener("click", writePassword);