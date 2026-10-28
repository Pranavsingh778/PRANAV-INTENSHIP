        
        function checkx(){
            let first=document.getElementById("firstName").value.trim();
            let firsterror=document.getElementById("firstNameError");
            firsterror.innerText = "";

            let last=document.getElementById("lastName").value.trim();
            let lasterror=document.getElementById("lastNameError");
            lasterror.innerText = "";

            let mail=document.getElementById("email").value.trim();
            let emailerror = document.getElementById("emailError");
            emailerror.innerText ="";

            let password=document.getElementById("password").value;
            let passworderror=document.getElementById("passwordError");
            passworderror.innerText="";

            let confirmp=document.getElementById("confirmPassword").value;
            let confirmerror=document.getElementById("confirmPasswordError");
            confirmerror.innerText="";

            let checkbox=document.getElementById("terms");
            let termserror=document.getElementById("termsError");
            termserror.innerText="";
            
            

            if(first==""||last==""||mail==""||password==""||confirmp==""){
                alert("All fields are mandatory");
                return false;
            }
            else if(!/^[A-Za-z]{2,20}$/.test(first)){
                firsterror.innerText="Enter valid First Name";
                return false;
            }
            else if(!/^[A-Za-z]{2,20}$/.test(last)){
                lasterror.innerText="Enter valid last Name";
                return false;
            }
            else if(!/^[^ @]+@gmail\.com$/.test(mail)){
                emailerror.innerText = "Enter a valid email";
                return false;
            }
            else if(password.length<8){
                passworderror.innerText="Password error";
                return false;
            }
            else if (!/[A-Za-z]/.test(password)) {
                passworderror.innerText="Password must contain at least a letter.";
                return false;
            }

            else if (!/[0-9]/.test(password)) {
                passworderror.innerText="Password must contain at least a number.";
                return false;
            }
            else if(confirmp!=password){
                confirmerror.innerText="Password and confirm password must be same";
                return false;
            }
            else if(!checkbox.checked){
                termserror.innerText="please read terms & conditions";
                return false;
            }
            else{
                let data=localStorage.getItem("users");
                let users=[];
                if (data && data !== "") {
                    users=JSON.parse(data);
                }
                for(let i=0;i<users.length;i=i+1){
                    if(users[i].Email==mail){
                        alert("Email already registered");
                        return false;
                    }
                }
                users.push({
                    Name: first,
                    Lastname: last,
                    Email:mail,
                    Password:password,
                    Created_date: new Date().toLocaleString()
                });
                localStorage.setItem("users",JSON.stringify(users));
                alert("Account created successfully")
                window.location.href = "./login.html";
                return false;
            }
            

        
        }
        
