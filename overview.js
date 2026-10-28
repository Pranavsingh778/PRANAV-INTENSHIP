let username=document.getElementById("username");
let useremail=document.getElementById("usermail");
let rightusername=document.getElementById("rightusername");
let loggeduser = JSON.parse(localStorage.getItem("loggeduser"));
let avatar = document.getElementById("avatar");

username.innerText=loggeduser.Name + " " +loggeduser.Lastname;
useremail.innerText=loggeduser.Email;
rightusername.innerText=loggeduser.Name;

updateAvatar();

function updateAvatar() {

let first = loggeduser.Name || "";
let last = loggeduser.Lastname || "";

let initials = first.charAt(0).toUpperCase();

if (last !== "") {
    initials += last.charAt(0).toUpperCase();
}
    avatar.innerText = initials;
}
function edit(){
    window.location.href="./Profile setting.html";
}
function change(){
    window.location.href="security.html";
}
function logout() {
    localStorage.removeItem("loggeduser");
    window.location.href = "./landing page.html";
};


document.getElementById("editProfile").addEventListener("click", function () {
    window.location.href = "./profile%20setting.html";
});

document.getElementById("changePassword").addEventListener("click", function () {
    window.location.href = "./security.html";
});