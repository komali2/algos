var mergesort = function(array){
    
    if(array.length <= 1){
        return array;
    }

    var left = array.slice(0, Math.floor(array.length / 2));
    var right = array.slice(Math.floor(array.length / 2));
    left = mergesort(left);
    right = mergesort(right);
    return merge(left, right);
    
}

function merge(left, right){
    var out = [];

    while(left.length && right.length){
        if(left[0] <= right[0]){
            out.push(left[0]);
            left = left.slice(1);
        }
        else if(right[0] <= left[0]){
            out.push(right[0]);
            right = right.slice(1);
        }
    }
    for(var i = 0; i < left.length; i++){
        out.push(left[i]);
    }
    for(var i = 0; i < right.length; i++){
        out.push(right[i]);
    }
    return out;
}

// mergesort([Number.MAX_SAFE_INTEGER,8,7,3,6,9,2,4,5,1])