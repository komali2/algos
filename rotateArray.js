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

    var matrix = 
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, "A", "B", "C"],
      ["D", "E", "F", "G"]
    ];

    var rotatedMatrix = 
      [ 
        [ "D", 9, 5, 1 ], 
        [ "E", "A", 6, 2 ], 
        [ "F", "B", 7, 3 ], 
        [ "G", "C", 8, 4 ] 
      ]
rotateArray(matrix);