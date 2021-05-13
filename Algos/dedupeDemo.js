const dedupe = (str) => {
    //variable declaration.
    var obj = {};
    var key = '';
    returnStr = '';
    //loop through string opposite.
    for(i = str.length-1; i >= 0; i--){
        key = str[i];
        //store obj and result if we havn't seen this before.
        if(!obj[key]){
            obj[key] = key;
            returnStr = str[i] + returnStr;
        }
    }
    return returnStr;
}
//function call.
console.log(dedupe("Snaps! crackles! pops!"));

