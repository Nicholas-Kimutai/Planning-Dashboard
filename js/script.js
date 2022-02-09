// hero form switch functionality
var loginForm = document.querySelector(".login-form");
var signUpForm = document.querySelector(".signup-form");
var signUpE = document.querySelector("#signup");
var loginE = document.querySelector("#login");

signUpE.addEventListener("click", () => {
    signUpForm.classList.remove("hidden-form");
    loginForm.classList.add("hidden-form");
});

loginE.addEventListener("click", () => {
    loginForm.classList.remove("hidden-form");
    signUpForm.classList.add("hidden-form");
});
