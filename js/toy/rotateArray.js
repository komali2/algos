var rotateArray = function(matrix){
    var out = [];
    for(var i = 0; i < matrix.length; i++){
        out.push([]);
    }
    var len = matrix.length;
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix[0].length; j++){
            //move matrix[i][j] to out[j][len-i]
            out[j][len-i-1] = matrix[i][j];
        }
    }
    return out;
}
