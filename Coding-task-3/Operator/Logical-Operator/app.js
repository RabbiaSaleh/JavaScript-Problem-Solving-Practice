/*What happens if we write:

True && True
False && True
False && False
False || True
5>4 && 2<5
2==9 || 2==2
!(!(4>2))
*/

// in && the both side must be true other wise it will be false.

 let a = true && true;
 // the answer is true because both sides are true,
 
 let b = false && true;
// the answer is false because one side is false;

 let c = false && false;
 // the answer is false because both side are false.

 // in || condition one side is true answer will be true,

 let d = false || true;
 // the answer is true because one side is true,

 let f = 2==9 || 2==2;
// the answer is true because 2 == 2 is true.

// in ! condition answer the answer would be reversed.

let g = !(!(4>2));
/* first 4 >2 is true,
but ! invert the answer , and answer will be false,
again ! invert the answer and the final answer is true;
*/


    