/*
Make index.html, app.js and style.css files
Make a div in your html file with some text and
 give it some styles. Use border and color properties to do that.
Now get the reference of first div using DOM methods
Print the color and border of the div
Change color of the text using DOM set methods or 
replace it using some other technique
*/

//color reference
let colorReference = document.querySelector(".div-1").style.color;
console.log(colorReference);

//border reference
let border = document.querySelector(".div-1").style.border;
console.log(border);


//changing background-color using className method
let classNameChange = document.querySelector(".div-1").className = "change-color";
console.log(classNameChange);