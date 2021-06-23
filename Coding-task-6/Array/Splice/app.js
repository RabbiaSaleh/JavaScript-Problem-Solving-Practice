/*
Use the splice method to add two game names ‘Polo’ and ‘Kabaddi’ 
to the same array at the third index using the splice method 
*/
const game = ["cricket", "tennis", "golf", "soccer" ,"football"];

game.splice(2 , 0 , "kabaddi", "Polo");
console.log(game);