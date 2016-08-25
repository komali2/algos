var quicksort = function(array){
    if(array.length <=1){
        return array;
    }
    
    let pivot = Math.floor(array.length - 1);
    let left = [];
    let right = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] < array[pivot]){
            left.push(array[i]);
        } else if(array[i] > array[pivot]){
            right.push(array[i]);
        }
    }
    return(quicksort(left).concat(array[pivot], quicksort(right)));
};