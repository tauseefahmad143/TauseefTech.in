var lengthSlider = document.querySelector('.pass-length .range');
var passlengthtext = document.querySelector('.pass-length .length');
var options = document.querySelectorAll('.option input');
var GenerateBtn = document.getElementById('generate-btn');
var passwordInput = document.querySelector('.password-field');
var passIndicator = document.querySelector('.Pindicator');
var copyIcon = document.querySelector('.icon');
var copied = document.querySelector('.copied');
var characters = {
    Lowercase: "abcdefghijklmnopqrstuvwxyz",
    Uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    Numbers: "0123456789",
    Symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}
function GeneratePassword() {

    let staticpassword = "",
        passlength = lengthSlider.value,
        randompassword = "",
        duplicate = false;

    options.forEach(option => {
        if (option.checked) {
            if (option.id !== "duplicate" && option.id !== "spaces") {
                staticpassword += characters[option.id];
            }
            else if (option.id === "spaces") {
                staticpassword += "  ${staticpassword}  ";
            }
            else {
                duplicate = true;
            }
        }
    });

    for (i = 0; i < passlength; i++) {
        let randomChar = staticpassword[Math.floor(Math.random() * staticpassword.length)];
        if (duplicate) {
            !randompassword.includes(randomChar) || randomChar == " " ? randompassword += randomChar : i--;
        }
        else {
            randompassword += randomChar;
        }
    }
    passwordInput.value = randompassword;
}
const updatePassIndicator = () => {
    if (lengthSlider.value <= 8) {
        passIndicator.id = "weak";
    }
    else if (lengthSlider.value <= 16) {
        passIndicator.id = "medium";
    }
    else {
        passIndicator.id = "strong";
    }
}
const updateslider = () => {
    passlengthtext.innerHTML = lengthSlider.value;
    GeneratePassword();
    updatePassIndicator();
}
const CopyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace('fa-regular', 'fa-solid');
    copyIcon.classList.replace('fa-copy', 'fa-check');
    copied.style.display = "block";
    setTimeout(() => {
        copyIcon.classList.replace('fa-solid', 'fa-regular');
        copyIcon.classList.replace('fa-check', 'fa-copy');
        copied.style.display = "none";
    }, 1000);
}
updateslider();
GenerateBtn.addEventListener('click', GeneratePassword);
lengthSlider.addEventListener('input', updateslider);
copyIcon.addEventListener('click', CopyPassword);