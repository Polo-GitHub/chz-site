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
}
// Clear error message
    function clearError(element, elementError){
    element.classList.remove("error__border");
    elementError.style.display = "none";   
}

    formBody.addEventListener("submit", (event)=>{
    event.preventDefault();

    if(userNameInput.value.trim() === ''){
        showError(userNameInput, userNameErr)
        userNameInput.style.borderColor = "#bf2155"
        labelUserError.style.color = "#bf2155"
       
    }
    if(userPasswordInput.value.trim() === ''){
        showError(userPasswordInput, userPasswordErr)
        userPasswordInput.style.borderColor = "#bf2155"
        labelPasswdErr.style.color = "#bf2155"  
    }
});
  

