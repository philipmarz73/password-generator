
var generateBtn = document.querySelector("#generate");

// defining arrays of numbers, symbols and letters for password
var numbers = [0,1,2,3,4,5,6,7,8,9];
var upCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var symbols = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','/','{','}','[',']','|'];

// set up function variables
var allGood = false;
var answer = "";
var c = "";
var finish = "";
var i = 0;
var inputAnswer = "";
var lcInput = "";
var numInput = "";
var symInput = "";
var ucInput = "";

function setStart () {
  i = 0;
  allGood = false;
  conditionsMet = false;
}
// check input length

function inputLength(){
  while(allGood === false){
    var inputAnswer = prompt("please enter password length between 8 and 128 characters");
    var numInput = isNaN(inputAnswer);
    if(inputAnswer < 8 || inputAnswer > 128 || inputAnswer === null || inputAnswer === "")
    {
      alert("answer must be 8 or more characters and 128 or less");
    } else if (numInput) {
      alert("input must be numerals");
    } else {
        allGood = true;
        return inputAnswer;
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
  var numberOption = confirm("include number option\n ok = yes; cancel = no");
  return number;
}
function optSym() {
  var symInput = confirm("include symbol option\n ok = yes; cancel = no");
  return symbol;
}

// functions to collect user input

function userInput(){
  conditionsMet = false
  while (conditionsMet === false){
    answer = inputLength();
    ucInput = upCase();
    lcInput = lowCase();
    numInput = numOpt();
    symInput = symb();
    if(ucInput === false && lcInput === false && numInput === false && symInput === false){
      alert("please check at least one option");
    }else{
      conditionsMet = true;
    }
    
  }

}
















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  return "This will be replaced by my generated password."; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
