const combine = (leftArr, rightArr) => {
    var newArr = [];
    var n = 0;
    var i = 0;
    while( i < leftArr.length || n < rightArr.length){
        if(leftArr[i] <= rightArr[n] || rightArr[n] == undefined){
            newArr.push(leftArr[i]);
            i++;
            console.log("leftArr[i]" + leftArr[i]);
        }
        else{
            newArr.push(rightArr[n]);
            n++;
            console.log("hereR" + rightArr[n]);
        }
        console.log('loop');
    }
    return newArr;
}

console.log(combine([5,6,7],[1,1,1,1,5,8,10]));

//use recursion to break up the array into halves and combine two sorted halves
const mergeSort = (arr) => {
    if(arr.length <=1) return arr;
    let half = Math.floor(arr.length/2);
    return combine(mergeSort(arr.slice(0, half)), mergeSort(arr.slice(half, arr.length)));
}

//should return [1,2,3,4,5,6,8,14]
console.log(mergeSort([5,4,2,6,8,14,1,3]));