/*
Add ‘Polo’ as a member of the same array
 at the end using one of the utility methods
Add ‘Polo’ as a member of the same array at
 the beginning of the array using one of the utility methods
Remove a member of the same array from the end
Remove a member of the same array from the beginning
*/
//==== array at the end

const game = ["cricket", "tennis", "golf", "soccer" ,"football",];
 game.push("Polo");
    console.log(game);

 //===== at the beginnig   
 game.unshift("polo");
    console.log(game);

 //== remove member from the end
 game.pop();
    console.log(game);

// === remove member from the beginning
game.shift();
    console.log(game);