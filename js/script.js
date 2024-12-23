// Show & Hide  password
const toggleBtn = document.querySelector(".show-btn");
const passInput = document.querySelector(".user-input");

toggleBtn.addEventListener("click", ()=>{
    if(passInput.type === "text"){
        passInput.type = "password";
        toggleBtn.innerHTML = "Show"
    }
    else{
        passInput.type = "text"
        toggleBtn.innerHTML = "Hide"
    }

});
// Form Validation
const formBody = document.querySelector(".form__container");
const userNameInput = document.querySelector(".user__input");
const userPasswordInput = document.querySelector(".user-input");
const userNameErr = document.querySelector(".err__mssg");
const userPasswordErr = document.querySelector(".user__err");
const labelUserError = document.querySelector(".user__label");
const labelPasswdErr = document.querySelector(".user-label");

// Show error message
function showError(element, elementError){
    element.classList.add("error__border");
    elementError.style.display = "block";   
}
// Clear error message
function clearError(element, elementError){
    element.classList.remove("error__border");
    elementError.style.display = "none";   
}


