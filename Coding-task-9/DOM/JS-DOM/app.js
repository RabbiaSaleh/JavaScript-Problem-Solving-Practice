/*
Make index.html, app.js and style.css files
Make 3 divs in your html file and give them class ‘div-class’
Now get the reference of first div using DOM methods
Change attribute class of this div to ‘changed-class’
After that change the style attribute of that div to
give red color to the text and give solid blue border to it.
Put some text in the first div too.
*/


//reference of first div
let element = document.getElementsByClassName("div-class")[0];
console.log(element);

// class name changed
let b = element.className = "Changed-class";
console.log(b);

//style attribute
element.style.color = "red";
element.style.border = " 3px solid blue";