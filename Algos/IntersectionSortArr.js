//Intersect Sorted Arrays
//Given two sorted arrays, return a new array containing all the numbers they have in common
//This includes duplicates too! The intersection of [2,2] and [2,2,2] would be [2,2]

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
//Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
//Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []

const intersect = (arrLeft, arrRight) => {
    let newArr = [];
    let objL = {};
    let objR = {};
    let l = 0;
    let r = 0;
    while(l < arrLeft.length && r < arrRight.length){
        if(objL[arrLeft[l]]){
            objL[arrLeft[l]] = objL[arrLeft[l]] + 1;
        }
        else{
            objL[arrLeft[l]] = 1;
        }
        if(objR[arrLeft[r]]){
            objR[arrLeft[r]] = objR[arrLeft[r]] + 1;
        }
        else{
            objR[arrLeft[r]] = 1;
        }
        l++;
        r++;
    }
    for(i = 0; i < arrLeft.length; i++){
        if(objL[arrLeft[i]] == objR[arrLeft[i]]){
            for(j = 0; j< objL[arrLeft[i]]; i++){
                newArr.push(arrLeft[i]);
            }
        }
        else if (objL[arrLeft[i]] < objR[arrLeft[i]]){
            for(j = 0; j< objL[arrLeft[i]]; i++){
                newArr.push(arrLeft[i]);
            }
        }
        else{
            for(j = 0; j< objR[arrLeft[i]]; i++){
                newArr.push(arrLeft[i]);
            }
        }
    }
}

console.log(intersect([2,4,7,9,10],[2,3,5,7,9,10]));
// console.log(intersect([1,1,4,5,8],[1,1,1,5,6,8]));
// console.log(intersect([1,3,5,7,9],[2,4,6,8,10]));
// console.log(intersect([-9,1,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));


// //ALEX SOLUTION
// function intersection(arrA, arrB) {
// let intersections = [];
// do {
//     if (arrA[0] < arrB[0]) { arrA.shift(); }    //if A smaller, remove first A
//     else if (arrA[0] > arrB[0]) { arrB.shift(); }  //if B is smaller, remove first B
//     else {                  //If one isnt greater than the other, they are equal
//         intersections.push(arrA[0]);   //push first value of A into intersections
//         arrA.shift()            //remove first value of A
//         arrB.shift();              //remove first balue of B
//     }
// } while (arrA.length > 0 && arrB.length > 0)

// return intersections;
// }



// //SUCCESSFUL ITERATION OF MY ATTEMPT
// const intersect = (arrLeft, arrRight) => {
//     let leftObj = {};
//     let rightObj = {};
//     let newArr = [];

//     //loop through left arr
//     for(let i = 0; i < arrLeft.length; ++i){
//         //if key at current value exists
//         if(leftObj.hasOwnProperty(arrLeft[i])){
//             //add one to value
//             leftObj[arrLeft[i]] += 1;
//         }
//         //else set value at key to 1
//         else leftObj[arrLeft[i]] = 1;
//     }

//     //do the same for right array
//     for(let i = 0; i < arrRight.length; ++i){
//         //if key at current value exists
//         if(rightObj.hasOwnProperty(arrRight[i])){
//             //add one to value
//             rightObj[arrRight[i]] += 1;
//         }
//         //else set value at key to 1
//         else rightObj[arrRight[i]] = 1;
//     }

//     //loop through left object keys
//     let leftKeys = Object.keys(leftObj);
//     for(let i = 0; i < leftKeys.length; ++i){
//         //if other object has that key
//         if(rightObj.hasOwnProperty(leftKeys[i])){
//             //take the lower value
//             let times = rightObj[leftKeys[i]] < leftObj[leftKeys[i]] ? rightObj[leftKeys[i]] : leftObj[leftKeys[i]];
//             //push the key to the new array x times(x = lower value)
//             for(let j = 0; j < times; ++j){
//                 newArr.push(parseInt(leftKeys[i]));
//             }
//         }       
//     }
//     return newArr;
// }