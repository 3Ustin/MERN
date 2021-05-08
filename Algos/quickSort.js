//changes array in place, without needing a sliced array
//returns the index of the pivot
const partition = (arr, left, right) => {
    let pivot = arr[left];
    let pointer = left;

    for(let i = left; i <= right; ++i){
        if(arr[i] < pivot){
            ++pointer;
            [arr[i], arr[pointer]] = [arr[pointer],arr[i]];
        }
    }
    [arr[left], arr[pointer]] = [arr[pointer],arr[left]];
    return pointer;
}

//changes array in place, but needs a sliced array
//returns the index of the pivot
const partition2 = (arr) => {
    let pivot = arr[0];
    let pointer = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            pointer++;
            
            let temp = arr[i];
            arr[i] = arr[pointer];
            arr[pointer] = temp;
        }
    }
    let temp = arr[0];
    arr[0] = arr[pointer];
    arr[pointer] = temp;
    return pointer;
}

//time for recursion again!!
//partition your array, then quickSort the left half
//and the right half.
//Each half should be partitioned and quickSorted recursively.
const quickSort = (arr) => {
    return arr;
}