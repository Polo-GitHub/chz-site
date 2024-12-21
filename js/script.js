// Show & Hide  password
const toggleBtn = document.querySelector(".show-btn");
const passInput = document.querySelector(".user__input");

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
