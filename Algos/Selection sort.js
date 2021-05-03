//MY FAILED ATTEMPT
// function selectionSort(arr) {
//     for(var i = 0; i < arr.length; i++){
//         var smallVal = i;
//         for(var j = i; j < arr.length; j++){
//             if(arr[j] < smallVal){
//                 smallVal = j;
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[smallVal];
//         arr[smallVal] = temp;
//     }
//     return arr;
// }

// console.log(selectionSort([1,5,2,3,4]));


//like bubble sort, but a little better.
//on first loop, searches for lowest value
//when finished, swaps lowest value for value at 0 index
//on second loop, searches for second lowest value, then
//swaps with value at 1 index
//continue this pattern until whole array is sorted
function selectionSort(arr){
    for(let i = 0; i < arr.length; ++i){
        let min = i;
        for(let j = i; j < arr.length; ++j){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        console.log(arr[min]);
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    
    return arr;
}

console.log(selectionSort([5,4,2,6,8,14,1,3]));