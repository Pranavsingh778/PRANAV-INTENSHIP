 
        function scr(){

            let email=document.getElementById("email").value;
            let emailerror=document.getElementById("emailError");
            emailerror.innerText="";

            let password=document.getElementById("password").value;
            let passworderror=document.getElementById("passwordError");
            passworderror.innerText="";

            let remember=document.getElementById("terms");
            let termserror=document.getElementById("termsError");
            termserror.innerText="";

            let invalid=document.getElementById("invalidError");
            invalid.innerText="";

            if(email==""||password==""){
                alert("All fields are mandatory");
                return false;
            }
            else if(password.length<8){
                passworderror.innerText="password must be of atleast 8 character";
                return false;
            }
            else if(remember.checked!=true){
                termserror.innerText="Please read terms and conditions.";
                return false;
            }
            else{
                let data=localStorage.getItem("users");
                let users=[];
                if (data && data!== "") {
                    users = JSON.parse(data);
                }
                for(let i = 0; i < users.length; i=i+1){
                  if(users[i].Email==email && users[i].Password==password){
                        localStorage.setItem("loggeduser", JSON.stringify(users[i]));
                        window.location.href="./dashboard.html";
                        return false;
                    }
                }
                invalid.innerText="Invalid Email or Password";  
                return false;              
            }


        }
    