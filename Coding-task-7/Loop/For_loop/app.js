/* A --- Write a for loop to traverse the array 
and find if ‘Cricket’ exists in the array.
Print ‘Cricket exists’ if it is in the array.
Otherwise print ‘Does not exist’
*/

let games = ["cricket" ,"football", "tennis", "polo",];
for (i=0 ; i < games.length; i++ ){
    if (games[i] && 'cricket') {
        console.log('cricket exists');
    }
    else {
        console.log('cricket does not exist');
    }    
}

// B --- Write a forEach loop and attempt the same problem as above.

var fvrtGame;
games.forEach(myFunction);

function myFunction(fvrtGame){
    if ("cricket" && fvrtGame){
        console.log('cricket exists');
    }
    else{
        console.log('cricket does not exists');
    }
}
// C ---Write a for..of loop and attempt the same problem as above

for (i of games){ 
    if (i && "cricket"){
        console.log('cricket exists');
    }
    else {
        console.log('cricket does not exists')
    }

}