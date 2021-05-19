const union = (leftArr,rightArr) => {
    let newArr = [];
    for(var i = 0; i < leftArr.length; i++){
        console.log("i: " + i);
        for(var j = 0; j< rightArr.length; j++){
            console.log("j: " + j);
            if(leftArr[i] == rightArr[j]){
                newArr.push(leftArr[i]);
            }
            else{
                for(var k = 0; k<newArr.length; k++){
                    if(newArr[k] == leftArr[i] || newArr[k] == rightArr[j]){
                        continue;
                    }
                    else{
                        console.log(push)
                    }
                }
            }
        }
    }
    return newArr;
}
console.log(union([1,1,1,1],[1,2,3,1]))