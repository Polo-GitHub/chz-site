// Show & Hide  password
const toggleBtn = document.querySelector(".show-btn");
const passInput = document.querySelector(".user-input");

toggleBtn.addEventListener("click", () => {
    if (passInput.type === "text") {
        passInput.type = "password";
        toggleBtn.innerHTML = "Show"
    }
    else {
        passInput.type = "text"
        toggleBtn.innerHTML = "Hide"
    }

});

const formContainer = document.querySelector(".form__container");
const passwordError = document.querySelector(".password__error");
const usernameError = document.querySelector(".username__error");
const mainErrorMsg = document.querySelector(".user__error-mssg");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const usernameLabel = document.querySelector(".username__label");
const passwordLabel = document.querySelector(".password__label");
const yearSite = document.querySelector(".year");

yearSite.innerHTML = new Date().getFullYear()

formContainer.onsubmit = function (e) {
    e.preventDefault()


    const username = usernameInput.value.trim()
    const password = passInput.value.trim()
    if (username === "" && password === "") {
        mainErrorMsg.innerHTML = `<i class="fa-sharp fa-solid fa-circle-exclamation user-circle-exclamation">
        </i>Please tell us your username and <span>password.</span>`
        return
    }
    else if (username === "") {
        usernameError.innerHTML = `<i class="fa-sharp fa-solid fa-circle-exclamation circle-exclamation">
        </i>Please tell us your username.`
        usernameInput.classList.add("input__errorline");
        usernameLabel.classList.add("label__error")
        return
    }
    else if (password === "") {
        passwordError.innerHTML = `<i class="fa-sharp fa-solid fa-circle-exclamation circle-exclamation">
        </i>Please tell us your password.`
        passwordInput.classList.add("input__errorline");
        passwordLabel.classList.add("label__error")
        return
    }

}

usernameInput.oninput = function () {
    usernameError.innerHTML = ""
    mainErrorMsg.innerHTML = ""
    usernameInput.classList.remove("input__errorline");
    usernameLabel.classList.remove("label__error")
}
passwordInput.oninput = function () {
    passwordError.innerHTML = ""
    mainErrorMsg.innerHTML = ""
    passwordInput.classList.remove("input__errorline");
    passwordLabel.classList.remove("label__error")
}



  

