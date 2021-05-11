//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my shoe"
const rotateString = (str, num) => {
    let strBack = '';
    let strFront = '';
    for(i = 0; i < str.length; i++){
        if(i < (str.length - num)){
            strFront += str[i]
        }
        else{
            strBack += str[i];
        }
    }
    return (strBack + strFront);
}

// let testString = "012   345";
// console.log(rotateString(testString, 1));

//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// -> returns true
const isRotation = (str1, str2) => {
    if(str1.length != str2.length){return false}
    for(j = str1.length-1; j > 0; j--){
        let temp = '';
        temp = rotateString(str1,j);
        if(temp == str2){
            return true;
        }
    }
    return false;
}

console.log(isRotation(" my shoes today?Did I sine", "es today?Did I shine my sho"));
console.log(isRotation("  wate rmel  on","rmel  on  wate "));