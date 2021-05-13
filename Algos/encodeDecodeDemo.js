const encode = (str) => {
    //variable declaration.
    var obj = {};
    var key = '';
    returnStr = '';
    tempStr = '';
    //loop through string opposite.
    for(i = 0; i < str.length; i++){
        key = str[i];
        //store obj and result if we havn't seen this before.
        if(!obj[key]){
            obj[key] = 1;
            tempStr += str[i];
        }
        else if(obj[key]){
            obj[key] += 1;
        }
    }
    for(i = 0; i<tempStr.length; i++){
        if(obj[tempStr[i]]){
            returnStr += tempStr[i]
            returnStr += obj[tempStr[i]];
        }

    }
    return returnStr;
}
//function call.
// console.log(encode("Snapppppppppppppppps! crackles! pops!"));


//Decoder
const decode = (str) => {
    let tempNum = 0;
    let tempStr = '';
    let returnStr = '';
    //Loop through the inputted Str
    for(i = 0; i < str.length; i++){
        //If the string is not a number. reset tempNum, and input that many of tempStr into returnStr
        if(isNaN(str[i])){
            if(tempNum != 0){
                //parseInt(tempNum)
                for(j = 0; j < parseInt(tempNum); j++){
                    returnStr += tempStr;
                }
                tempNum = 0;
            }
            tempStr = str[i];
        }
        else {
            tempNum = tempNum + str[i];
        }
    }
    return returnStr;
}
console.log(decode(encode("Snappppppppppppppppppppppppppppppps! crackles! pops!")));