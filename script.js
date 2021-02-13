
var generateBtn = document.querySelector("#generate");

// defining arrays of numbers, symbols and letters for password
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var symbols = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','/','{','}','[',']','|'];

// set up function variables
var allGood = false;
var answer = "";
var c = "";
var finish = "";
var i = 0;
var promptAnswer = "";
var lcInput = "";
var numInput = "";
var symInput = "";
var ucInput = "";


// defining starting function to check if conditions of choice met
function setStart () {
  i = 0;
  allGood = false;
  conditionsMet = false;
}
// check user input length and input if conditions met

function inputLength(){
  while(allGood === false){
    var promptAnswer = prompt("please enter password length between 8 and 128 characters");
    var numAnswer = isNaN(promptAnswer);
    if(promptAnswer < 8 || promptAnswer > 128 || promptAnswer === null || promptAnswer === "")
    {
      alert("password must be from 8 to 128 characters long; please answer in numerals");
    } else if (numAnswer) {
      alert("input must be in numerals");
    } else {
        allGood = true;
        return promptAnswer;
        break;

    }
  }
}


// functions to query input options
function optUcase() {
  var upperCase = confirm("include uppercase option\n ok = yes; cancel = no");
  return upperCase;
}
function optLcase() {
  var lowerCase = confirm("include lowercase option\n ok = yes; cancel = no");
  return lowerCase;
}
function optNum() {
  var numbers = confirm("include number option\n ok = yes; cancel = no");
  return numbers;
}
function optSym() {
  var symbols = confirm("include symbol option\n ok = yes; cancel = no");
  return symbols;
}

// collect user input

function userInput(){
  conditionsMet = false
  while (conditionsMet === false){
    // answer = inputLength();
    ucInput = optUcase();
    lcInput = optLcase();
    numInput = optNum();
    symInput = optSym();
    if(ucInput === false && lcInput === false && numInput === false && symInput === false){
      alert("please check at least one option");
    }else{
      conditionsMet = true;
    }
  }
}
// add functions to randomize password inputs for uc, lc, numbers, symbols

// randomize letter inputs: choose from 26 letters:
function upperCase(){       
  var ucInput = Math.floor(Math.random() * 26);
   c = c + upCase[parseInt(ucInput)];
        }

function lowerCase(){       
    var lcInput = Math.floor(Math.random() * 26);
     c = c + lowCase[parseInt(lcInput)];
        }

// randomize number input: choose from numbers 0-9:
function numbers(){       
      var numInput = Math.floor(Math.random() * 10);
       c = c + numbers[parseInt(numInput)];
        }

// randomize symbol input: choose from 20 symbols
function symbols(){       
        var symInput = Math.floor(Math.random() * 20);
         c = c + symbols[parseInt(symInput)];
        }

// 'generate' function uses input types chosen by User; 
// checks to see input = 'true' for each type; otherwise 
// skips types not chosen
function generate() {
  while(parseInt(i) <=(answer)) {
    if(ucInput === true) {
      upperCase();
      i += 1;
      if(parseInt(i) === parseInt(answer)){
        break;
      }
    }
    if(lcInput === true) {
      lowerCase();
      i += 1;
      if( parseInt(i) === parseInt(answer)){
          break;
      }
    }
    if(numInput === true) {
      numbers();
      i += 1;
      if( parseInt(i) === parseInt(answer)){
          break;
        }
    }
    if(symInput === true) {
      symbols();
      i += 1;
      if( parseInt(i) === parseInt(answer)){
          break;
      }
    }
  } 
}      
// with inputs checked, function to generate password starts

function generatePassword(){
  setStart();
  answer = inputLength();
  userInput();
  generate();
  passwordResult = c;
  c = '';
  return passwordResult;
  
}
        

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function generatePassword() {
//   return "This will be replaced by my generated password."; 
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
