var quicksort = function(array){
    if(array.length <=1){
        return array;
    }
    
    //var pivot = Math.floor(array.length - 1);
    var pivot = 0;
    var left = [];
    var right = [];

    for(var i = 1; i < array.length; i++){
        if(array[i] < array[pivot]){
            left.push(array[i]);
        } else{
            right.push(array[i]);
        }
    }
    return(quicksort(left).concat(array[pivot], quicksort(right)));
};
