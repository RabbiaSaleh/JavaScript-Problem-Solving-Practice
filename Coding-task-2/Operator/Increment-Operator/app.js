/* ====2.Create a variable and display it on the webpage .
 Add a button on the webpage.
 Create a function that runs on every click of button.
 Whenever the function is executed 
 the value of the variable will be increased by 5.*/

 let Variable = 0 // variable that show on webpage when click the button

 //function that runs on every click of button
 function addVariable(){
     Variable = Variable + 5
    // console.log(Variable); just fo check that it's working or not
  
    document.querySelector('h1').innerHTML= Variable
 }