    let username=document.getElementById("username");
    let useremail=document.getElementById("usermail");
    let loggeduser = JSON.parse(localStorage.getItem("loggeduser"));
    let avatar = document.getElementById("avatar");
    updateAvatar();

    username.innerText=loggeduser.Name + " " +loggeduser.Lastname;
    useremail.innerText=loggeduser.Email;
    
    function updateAvatar() {

    let first = loggeduser.Name || "";
    let last = loggeduser.Lastname || "";

    let initials = first.charAt(0).toUpperCase();

    if (last !== "") {
        initials += last.charAt(0).toUpperCase();
    }
        avatar.innerText = initials;
    }

    function logout() {
        localStorage.removeItem("loggeduser");
        window.location.href = "./landing page.html";
    }