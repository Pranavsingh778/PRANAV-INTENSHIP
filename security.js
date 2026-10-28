    let username=document.getElementById("username");
    let useremail=document.getElementById("usermail");
    let loggeduser = JSON.parse(localStorage.getItem("loggeduser"));
    let avatar = document.getElementById("avatar");
    let date = document.getElementById("date");
    let updated_time=document.getElementById("updated_time");

    username.innerText=loggeduser.Name + " " +loggeduser.Lastname;
    useremail.innerText=loggeduser.Email;
    date.innerText = loggeduser.Created_date;
    updated_time.innerText = loggeduser.ProfileUpdated_time || "Never Updated" ;

function changepass(){

    let curpass=document.getElementById("curpass").value;
    let curpasserror=document.getElementById("curpassError");
    curpasserror.innerText="";

    let newpass=document.getElementById("newpass").value;
    let newpasserror=document.getElementById("newpassError");
    newpasserror.innerText="";
    let confpass=document.getElementById("confnewpass").value;
    let confpasserror=document.getElementById("confpassError");
    confpasserror.innerText="";

    let loggeduser = JSON.parse(localStorage.getItem("loggeduser"));
    let currentEmail = loggeduser.Email;
    
    let users = JSON.parse(localStorage.getItem("users")) || [];
    

    if(curpass==""){
        curpasserror.innerText="Please Enter current password";
        return false;
    }
    else if(newpass==""){
        newpasserror.innerText="Please Enter new password";
        return false;
    }
    else if(newpass==curpass){
        newpasserror.innerText="The new password couldn't be same as old password";
        return false;
    }
    if(newpass.length<8){
        newpasserror.innerText="Password must be of at least 8 characters";
        return false;
    }
    else if (!/[A-Za-z]/.test(newpass)) {
        newpasserror.innerText="Password must contain at least a letter and a number";
        return false;
    }
    else if (!/[0-9]/.test(newpass)) {
        newpasserror.innerText="Password must contain at least a letter and a number";
        return false;
    }
    else if(confpass!=newpass){
        confpasserror.innerText="New password and confirm password must be same";
        return false;
    }
    else{

        for (let i = 0; i < users.length; i++) {

            if (users[i].Email == currentEmail) {

                if (users[i].Password != curpass) {
                    curpasserror.innerText="Old password is incorrect.";
                    return false;
                }

                users[i].Password = newpass;
                localStorage.setItem("users", JSON.stringify(users));
                localStorage.setItem("loggeduser", JSON.stringify(users[i]));

                alert("Password changed successfully.");
                clearx();

                return false;
            }
        }
        curpasserror.innerText = "User not found.";
        return false;
    }
}

updateAvatar()

function clearx(){
    document.getElementById("curpass").value="";
    document.getElementById("newpass").value="";
    document.getElementById("confnewpass").value="";
}
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