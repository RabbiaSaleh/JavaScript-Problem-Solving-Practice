/* === Declare a variable using let inside a function. 
Add that same variable in another function and see what happens.
*/
function one(){
    let a = "rabbia" ;
        console.log(a);
}
function two(){
    let a = "rabbia" ;
        console.log(a);
}
/*====Now declare a variable using var in a block and
 try reassigning the value to that variable in another block 
 and see if it throws an error or not.
 */
function three(){
    var b = "ali";
    console.log(b);
}
function four(){
    b = "Saleh";
        console.log(b);
}
//It does not through any error in the console.log.

/* ==== Create a global variable and 
try using that variable in another function 
and see if you're able to access that variable.
*/
let numb= 56;
function check(){
    console.log(numb);
}
// we are able to access global variable in the function.