// // 1: Example
// console.log(hello); 
// var hello = 'world';

// // 1: How computer reads it
// // var hello; // initializes hello
// // console.log(hello); // prints undefined
// // hello = 'world'; // stores 'world' in hello

// // 2: Example
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// // 2: How computer reads it
// var needle = 'haystack'; // initializes and defines var needle to haystack.
// test(); // calls test function
// function test(){
//     var needle = 'magnet'; // initializes and defines var needle to magnet
//     console.log(needle); // prints magnet
// }

// //3: Example
// var brendan = 'super cool'; // defines and initializes var brendan as super cool
// function print(){
//     brendan = 'only okay'; // defines brendan as only okay
//     console.log(brendan); // console.log's only okay when called
// }
// console.log(brendan); // console.log's super cool

// //4: Example
// var food = 'chicken'; // initializes and defines food as chicken
// console.log(food); // prints to console chicken
// eat(); // calls eat function
// function eat(){
//     var food; // initilizes food as undefined.
//     food = 'half-chicken'; // defines food as half-chicken
//     console.log(food); // log's to console half-chicken
//     var food = 'gone'; // innitializ food and defines as gone.
// }

// // 5: Example
// mean(); // calls mean function --- 
// console.log(food); //keytype error - no variable called food.
// var mean = function() {
//     food = "chicken"; //defines food as chicken.
//     console.log(food); // prints to console chicken.
//     var food = "fish"; // defines food as fish.
//     console.log(food); // prints fish to console.
// }
// console.log(food); //prints fish.

// ^^^^^^ I don't know why mean() is throwing an error. 
// it might be that var mean = function(){} is differently sytactically than I thought. 

// //6: Example
// console.log(genre); // prints genre as disco to console.
// var genre = "disco"; // initializes genre and defines as disco.
// rewind(); //calls function rewind
// function rewind() { 
//     genre = "rock"; // defines genre as rock
//     console.log(genre); //prints genre as rock
//     var genre = "r&b"; // defines genre as r&b
//     console.log(genre); // prints genre as r&b
// }
// console.log(genre); // prints genre as r&b

//I got line 60 wrong it's supposed to print as undefined.
//I got line 69 wrong, it's supposed to print as disco, which doesn't make sense.
    //it seams when we make a var inside of a scope, it doesn't override the scopes outside of it. 
    //It seems like we made a NEW var named genre vs overwriting the OLD var named genre.


// //7: Example
// dojo = "san jose"; // throws an error for a non initialized var being defined.
// console.log(dojo); // prints to console dojo as san jose
// learn(); //calls funtion learn
// function learn() {
//     dojo = "seattle"; //defines dojo as seattle
//     console.log(dojo); // prints dojo as seattle
//     var dojo = "burbank"; // initialized in begininning of scope dojo as burbank
//     console.log(dojo);// prints to console dojo as burbank
// }
// console.log(dojo); //  prints to console dojo as san jose.

//I got line 78 wrong. I don't understand why.
    //it seems that even if you initialize something in a scope it effects the whole scope.
    //it sesems taht the initialization of dojo in the function learn somehow effected the first dojo, but that shouldn't be true. 
        //As I understand scope that is.


// //8: Example
// console.log(makeDojo("Chicago", 65)); //calls makeDojo function passing Chicago, and 65 as parameters.
// console.log(makeDojo("Berkeley", 0)); //calls makeDojo function passing Berkeley, and 0 as parameters.
// function makeDojo(name, students){
//     const dojo = {}; // makes a dojo object for scope that can't change.
//     dojo.name = name; // I feel like this would throw and error cause your changing a const. Though defining might be okay, but i think this is like a init and define process in one.
//     dojo.students = students;// ^^^^^
//     if(dojo.students > 50){ // boolean conditional asking is dojo.students greater than 50?
//         dojo.hiring = true; // defines dojo.hiring as true
//     }
//     else if(dojo.students <= 0){  // boolean conditional asking is dojo.students less than or equal to 0?
//         dojo = "closed for now"; // redefine the dojo object as a string 'closed for now'
//     }
//     return dojo; // function ends returning dojo with will print to the screen I predict two undefines. If not see printing.
// }
//If I'm wrong in my assumption 1st | {name:chicago, students:65, hiring:true}
//If I'm wrong in my assumption 2nd | "closed for now"


// I got line 99 wrong, but the main concept was sorta on track.
    //The error didn't happen at line 99 to redefine the const, because adding key:value pairs to an object doesn't change the type or value of the const. It's still a dictionanary.
        //Makes me think that you can edit string const, array const, and etc. 
        //Seemingly you can redefine a const as the same type. 
        // you can't redefine a const as a different type.
    //I'm also confused because the error just says assignment to contstant variable. 

