/*
Use filter function to filter
an array containing values of ages of
[40, 56, 80, 90, 100, 101, 102, 23, 22]
*/
 let ages = ["40", "56", "80", "90", "100", "101", "102", "23", "22"];
    console.log(ages);

 
// Use it to filter the ages greater than or equal to 40.   

let x= ages.filter(olderThen80);
function olderThen80(ags) {
    return ags <= 40;

}   