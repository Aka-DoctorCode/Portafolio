let button = document.getElementById("contact-button");
let form = document.getElementById("contact-form");
let submitButton = document.getElementById("enviar");//create an anitmation on load and that doesnt stop for this button making it first jump 3 times then it will rotate twice
let inputName = document.getElementById("name");
let inputName2 = document.getElementById("email");
let inputName3 = document.getElementById("message");
let X = document.getElementById("botonX");

X.addEventListener("click", function() {
    X.textContent = "CERRANDO...";
    setTimeout(()=>{
        form.classList.add("formularioOculto")
        form.classList.remove("formularioNoOculto");
    },1000)
});

button.addEventListener("click", function() {
    form.classList.remove("formularioOculto");
    form.classList.add("formularioNoOculto");
});
submitButton.addEventListener("click", function() {
    submitButton.textContent = "Enviando...";
    setTimeout(()=>{
        form.classList.add("formularioOculto")
        form.classList.remove("formularioNoOculto");
    },5000)
});
//EXPRESIONES REGULARES
let nombreRegex = /^[a-zA-Z]{3,}$/g;
let emailRegex = /\w+\@\w{2,}\.\w{2,}/g;
let messageRegex = /^[a-zA-Z-0-9.,!?@#$%^&*(){}[\]\\\/<>+=:;'"`~|_]{4,}$/g;

inputName.addEventListener("keydown", function(){
    inputName.value.match(nombreRegex) 
        ? (inputName.classList.add("inputValido"), inputName.classList.remove("inputInvalido"))
        : (inputName.classList.remove("inputValido"), inputName.classList.add("inputInvalido"))
});
inputName2.addEventListener("keydown", function(){
    inputName2.value.match(emailRegex) 
        ? (inputName2.classList.add("inputValido"), inputName2.classList.remove("inputInvalido"))
        : (inputName2.classList.remove("inputValido"), inputName2.classList.add("inputInvalido"))
});
inputName3.addEventListener("keydown", function(){
    inputName3.value.match(messageRegex) 
        ? (inputName3.classList.add("inputValido"), inputName3.classList.remove("inputInvalido"))
        : (inputName3.classList.remove("inputValido"), inputName3.classList.add("inputInvalido"))
});