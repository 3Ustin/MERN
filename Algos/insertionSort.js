const insertionSort = (arr) => {
    var tempArr = [arr[0]];
    for(var i =1; i < arr.length; i++){
        for(let j = tempArr.length - 1; j > 0; j--){
            console.log(j);
            if(tempArr[j] <= arr[i]){
                console.log(tempArr[j] <= arr[i]);
                let temp = tempArr.splice(0,j);
                temp.push(arr[i]);
                temp.concat(tempArr.splice(j+1,tempArr.length));
            }
            else{
                tempArr.push(arr[i]);
            }
        }
    }
    return tempArr;
}

console.log(insertionSort([6,4,5,2]))


