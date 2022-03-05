const loginForm = document.getElementById("login-form");
const loginButton= document.getElementById("login-form-submit");
loginButton.addEventListener("click",(e)=> {
    e.preventDefault();
    alert("YOU HAVE SUCCESSFULLY LOGGED IN!!");
    location.reload();
})