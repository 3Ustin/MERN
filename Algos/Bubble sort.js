function bubbleSort(arr) {
    arrIsSorted = false;
    swappedAdjacentElements = false;
    while (arrIsSorted == false){
        for (j = 0; j < arr.length; j++){
            if(arr[j+1]){
                if(arr[j] > arr[j+1]){
                    swappedAdjacentElements = true;
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        if(swappedAdjacentElements){
            arrIsSorted = false;
            swappedAdjacentElements = false;
        }
        else{
            arrIsSorted = true;
        }
    }
    return arr;
}

console.log(bubbleSort([1,5,13,45,4,1,43,97,3,14,7]));