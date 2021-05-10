//given a string of words(with spaces),
//return an array of words
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]
const stringToWordArray = (str) => {
    var arr = [];
    var word = "";
    //for loop to loop through string
    for(i = 0; i < str.length; i++){
        //asking if loop i variable is at a space.
        if(str[i] == " "){
            //if the stored word is just a space or empty go to next iteration in the for loop.
            if(word == "" || word == " "){
                continue;
            }
            //if the stored word is actually a word push to arr, and reset word.
            else{
                //store word to arr.
                arr.push(word);
                //reset word.
                word = "";
            }
        }
        //if there is NOT a space just add to temp word.
        else{
            //add char to word.
            word += str[i];
        }
    }
    //outside of the loop we want to check if word is empty or a space.
    if(word == "" || word == " "){
        
    }
    //if the word is actually a word push it.
    else{
        arr.push(word);
    }
    //return arr.
    return arr;
    
}

console.log(stringToWordArray("    yellow        orange    bunnies.   input.this.     "));


//write a function that, given a string of words(with spaces),
//returns a new string with words in reverse sequence.
//"This is a test" -> "test a is This"
const reverseWordOrder = (str) => {

}

