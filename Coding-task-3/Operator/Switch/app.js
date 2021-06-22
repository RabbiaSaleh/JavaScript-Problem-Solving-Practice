/*JavaScript program to print the grade of person using the following conditions:
->A if percentage >85
->A- if %<=85 and >80
->B if %<=80 and >70
->C if %<=70 and >60
->D if %<=60 and >40
->E if %<=40 and also should print 'candidate failed' if %<=35
*/
var percentage = prompt("Enter percentage and check console for your Grade");
 
switch(true){
    case percentage > 85:
        console.log("your Grade is A+");
    break;
    case percentage <=85 && percentage > 80:
        console.log("your Grade is A");
    break;
    case percentage <= 80 && percentage >70:
        console.log("your Grade is B");
    break;
    case percentage <=70 && percentage >60:
        console.log("your Grade is C");
    break;
    case percentage <=60 && percentage >40:
        console.log("your Grade is D");
    break;
    case percentage <=40 && percentage > 35: 
        console.log("your Grade is E");
    break;
    case percentage <= 35:  
        console.log('candidate failed');
    default:
        console.log("thanks for checking your marks")   
}