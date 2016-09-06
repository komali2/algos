describe('rotate array', () => {
  it('should exist', () => {
    expect(rotateArray).toBeDefined();
  });
  it('should rotate arrays', () => {
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

    expect(rotateArray(matrix)).toEqual(rotatedMatrix);

    matrix = [ [ 1 ] ];
    rotatedMatrix = [ [ 1 ] ];

    expect(rotateArray(matrix)).toEqual(rotatedMatrix);

    matrix = 
      [ 
        [ 1, 2 ], 
        [ 3, 4 ] 
      ];
    rotatedMatrix = 
    [ 
      [ 3, 1 ], 
      [ 4, 2 ] 
    ];

    expect(rotateArray(matrix)).toEqual(rotatedMatrix);

    matrix = 
     [ 
       [ 1, 2, 3 ], 
       [ 4, 5, 6 ], 
       [ 7, 8, 9 ] 
      ];
    rotatedMatrix = 
      [ 
        [ 7, 4, 1 ], 
        [ 8, 5, 2 ], 
        [ 9, 6, 3 ] 
      ];

    expect(rotateArray(matrix)).toEqual(rotatedMatrix);
  })
});