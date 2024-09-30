let sliderel = document.querySelector("#slider");
let plenel = document.querySelector("#plen");
let resultel = document.querySelector("#result");
plenel.textContent = sliderel.value;
let btnel = document.querySelector("button");
let upperel = document.querySelector("#uppercase");
let lowerel = document.querySelector("#lowercase");
let numbersel = document.querySelector("#numbers");
let symbolsel = document.querySelector("#symbols");
let iconel = document.querySelector("#icon");




sliderel.addEventListener("input", () => {
    plenel.textContent = sliderel.value;
});

btnel.addEventListener("click", () => {
    generatePassword();
});

let generatePassword = () => {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let sym = "@#$%^&*";
    
    let allChar = "";
    let password = "";
    if (upperel.checked) {
        allChar += upper;
    }
    if (lowerel.checked) {
        allChar += lower;
    }
    if (numbersel.checked) {
        allChar += num;
    }
    if (symbolsel.checked) {
        allChar += sym;
    }
    i = 0;
   while (i< sliderel.value) {
       password += allChar.charAt(Math.floor(Math.random() * allChar.length));
       i++;
    }
    resultel.value = password;
};

iconel.addEventListener("click", () => {
    if (resultel.value != "") {
        navigator.clipboard.writeText(resultel.value);
        iconel.textContent = "check";
        iconel.title = "copied";
        setTimeout(() => {
            iconel.textContent = "content_copy";
            iconel.title = "";
        }, 2000);
    }
}); 

