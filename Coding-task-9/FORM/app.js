/*
Make index.html, app.js and style.css files
Make two input fields, one for the email and other for password.
Also, make a button with ‘Log In’ text
Put a relevant event using addEventListener.
Now write a function that’d be called on that event
Check that whether values of both email and password fields are empty or
 not using the same function
If any of the fields is empty, ask use to fill up the fields
If both are filled, show an alert saying ‘Logged In Successfully’.
Also, check for format of email in the first input field and 
ensure that password field’s length is not less than 8 character.
*/

document.querySelector("#button").onclick = addEventListener;
function addEventListener() {
    const element1 = document.getElementById("email");
    const element2 = document.getElementById("password");

    if (element1.value == "" && element2.value == "") {
        alert("Fill the requirments first");
    }
    else if(element1.value == "" || element2.value == ""){
        alert("fill all the blanks");
    }
    else {
        alert("logged in successfully");
    } 

}