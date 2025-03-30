var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname"); 
var email = document.getElementById("email");
var password = document.getElementById("password");
var submitButton = document.getElementById("submit");
var error = document.getElementsByClassName("error");
var image = document.getElementsByTagName("img")[0]; 
var image1 = document.getElementsByTagName("img")[1];
var image2 = document.getElementsByTagName("img")[2];   
var image3 = document.getElementsByTagName("img")[3];


submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Validate first name
    if (firstName.value.trim() === "") {
        error[0].style.display = "block";
        image.style.display = "block"; 
        firstName.style.border = "2px solid hsl(0, 100%, 74%)";
        
    } else {
        error[0].style.display = "none";
        image.style.display = "none"; 
        firstName.style.border = "";
    }

    // Validate last name
    if (lastName.value.trim() === "") {
        error[1].style.display = "block"; 
        image1.style.display = "block";
        lastName.style.border = "2px solid hsl(0, 100%, 74%)";
    } else {
        error[1].style.display = "none";
        image1.style.display = "none";
        lastName.style.border = "";  
    }

    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        error[2].style.display = "block"; 
        image2.style.display = "block";
        email.placeholder = "email@example/com";
        email.classList.add("placeholder");
        email.style.border = "2px solid hsl(0, 100%, 74%)";
    } else {
        error[2].style.display = "none"; 
        image2.style.display = "none";
        email.style.border = "";
        email.placeholder = "Email Address" 
    }

    // Validate password
    if (password.value.trim() === "") {
        error[3].style.display = "block"; 
        image3.style.display = "block";
        error[4].style.display = "none";
        password.style.border = "2px solid hsl(0, 100%, 74%)";
    } 
    else {
        if (password.value.length < 8) {
            error[4].style.display = "block"; 
            image3.style.display = "block";
            error[3].style.display = "none"; 
            password.style.border = "2px solid hsl(0, 100%, 74%)";
        }
        else{
            error[4].style.display = "none";
            error[3].style.display = "none"; 
            image3.style.display = "none";
            password.style.border = "";
        }
    }
});