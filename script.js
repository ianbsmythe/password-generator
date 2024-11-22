// create function for button to create password ✅
// link in the button onClick ✅
// create variables for password length, characters, and password ✅
// create for loop to generate password
// create variable for random characters
// return password
function darkLightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
  }

const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
let password1El = document.getElementById("password-one-el")
let password2El = document.getElementById("password-two-el")

function getRandomPassword(passwordLengthParameter) {

    let password = "";

    for (let i = 0; i < passwordLengthParameter; i++) {
        let characterIndex = Math.floor(Math.random() * characters.length);
        let character = characters.charAt(characterIndex);
        password += character;
    }

    return password
}

function renderPasswords() {

    const inputElement = document.getElementById("password-length-el");
    const passwordLength = inputElement.value; // 16

    let password1 = getRandomPassword(passwordLength);
    let password2 = getRandomPassword(passwordLength);
    password1El.value = password1
    password2El.value = password2
}