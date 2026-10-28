const firstName = localStorage.getItem("firstName");
const lastName = localStorage.getItem("lastName");
const email = localStorage.getItem("email");




const welcome = document.getElementById("welcomeText");

if (welcome) {
    welcome.innerText = `Welcome Back, ${firstName} `;
}



const userName = document.getElementById("userName");

userName.innerText = `${firstName} ${lastName}`;



const userEmail = document.getElementById("userEmail");

userEmail.innerText = email;



const avatar = document.getElementById("User");

const initials = `${firstName[0]}${lastName ? lastName[0] : ""}`.toUpperCase();

avatar.innerText = initials;


//  PROFILE INPUTS 

const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const dobInput = document.getElementById("dob");
const pinInput = document.getElementById("pin");

const streetInput = document.getElementById("email-input");
const countryInput = document.getElementById("country");
const cityInput = document.getElementById("city");
const githubInput = document.getElementById("github");

const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");


// DEFAULT USER DATA 

if (fullNameInput) {
    fullNameInput.value = `${firstName} ${lastName}`;
   
}

if (emailInput) {
    emailInput.value = email;
  
}




if (phoneInput) {

    phoneInput.addEventListener("input", function () {

        this.value = this.value.replace(/\D/g, "");

        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }

    });

}




if (pinInput) {

    pinInput.addEventListener("input", function () {

        this.value = this.value.replace(/\D/g, "");

        if (this.value.length > 6) {
            this.value = this.value.slice(0, 6);
        }

    });

}




const savedProfile = JSON.parse(
    localStorage.getItem("profileData")
);

if (savedProfile) {

    if (dobInput) {
        dobInput.value = savedProfile.dob || "";
    }

    if (phoneInput) {
        phoneInput.value = savedProfile.phone || "";
    }

    if (streetInput) {
        streetInput.value = savedProfile.street || "";
    }

    if (pinInput) {
        pinInput.value = savedProfile.pin || "";
    }

    if (countryInput) {
        countryInput.value = savedProfile.country || "";
    }

    if (cityInput) {
        cityInput.value = savedProfile.city || "";
    }

    if (githubInput) {
        githubInput.value = savedProfile.github || "";
    }

}




if (saveBtn) {

    saveBtn.addEventListener("click", function (e) {

        e.preventDefault();



        if (phoneInput && phoneInput.value.length !== 10) {

            alert("Phone Number must be exactly 10 digits.");
            return;

        }


        // PIN validation
        if (pinInput && pinInput.value.length !== 6) {

            alert("PIN Code must be exactly 6 digits.");
            return;

        }


        if (dobInput) {
            dobInput.max = "9999-12-31";
        }
        const fullName = fullNameInput ? fullNameInput.value.trim() : "";
const newEmail = emailInput ? emailInput.value.trim() : "";

const nameParts = fullName.split(" ");

const newFirstName = nameParts[0] || "";
const newLastName = nameParts.slice(1).join(" ");

localStorage.setItem("firstName", newFirstName);
localStorage.setItem("lastName", newLastName);
localStorage.setItem("email", newEmail);


        //  SAVE ALL DATA 

        const profileData = {

            fullName: fullNameInput ? fullNameInput.value : "",

            email: emailInput ? emailInput.value : "",

            dob: dobInput ? dobInput.value : "",

            phone: phoneInput ? phoneInput.value : "",

            street: streetInput ? streetInput.value : "",

            pin: pinInput ? pinInput.value : "",

            country: countryInput ? countryInput.value : "",

            city: cityInput ? cityInput.value : "",

            github: githubInput ? githubInput.value : ""

        };


        localStorage.setItem(
            "profileData",
            JSON.stringify(profileData)
        );
        if (userName) {
    userName.innerText = `${newFirstName} ${newLastName}`;
}

if (userEmail) {
    userEmail.innerText = newEmail;
}

if (avatar) {
    const initials = `${newFirstName[0] || ""}${newLastName[0] || ""}`.toUpperCase();
    avatar.innerText = initials;
}

        alert("Profile Saved Successfully!");

    });

}


// CANCEL CHANGES 

if (cancelBtn) {

    cancelBtn.addEventListener("click", function (e) {

        e.preventDefault();


       

        if (dobInput) {
            dobInput.value = "";
        }

        if (phoneInput) {
            phoneInput.value = "";
        }

        if (streetInput) {
            streetInput.value = "";
        }

        if (pinInput) {
            pinInput.value = "";
        }

        if (countryInput) {
            countryInput.value = "";
        }

        if (cityInput) {
            cityInput.value = "";
        }

        if (githubInput) {
            githubInput.value = "";
        }

    });

}


// LOGOUT 

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function (e) {

        e.preventDefault();

        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        localStorage.removeItem("email");

        window.location.href = "landing.html";

    });

}