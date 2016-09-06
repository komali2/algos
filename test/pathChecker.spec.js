describe('path checker', () => {
  it('should be defined', () => {
    expect(pathChecker).toBeDefined();
  });
  it('should return a bool', ()=>{
    expect(typeof(pathChecker([[1, 2, 3],[2, 1, 3]], [3, 6, 5]))).toEqual('boolean');
  })
  it('should return true if a path exists', ()=>{
    var board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    var pathGood = [1, 4, 5];
    expect(pathChecker(board, pathGood)).toEqual(true);
    pathGood = [3, 6, 9];
    expect(pathChecker(board, pathGood)).toEqual(true);
    pathGood = [9, 8, 5];
    expect(pathChecker(board, pathGood)).toEqual(true);
    pathGood = [6, 5, 4];
    expect(pathChecker(board, pathGood)).toEqual(true);
    pathGood = [1, 2, 3];
    expect(pathChecker(board, pathGood)).toEqual(true);
  });
  it('should return false if path doesnt exist', ()=>{
    var board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    var pathBad = [3, 6, 8];
    expect(pathChecker(board, pathBad)).toEqual(false);
    pathBad = [2, 1, 3];
    expect(pathChecker(board, pathBad)).toEqual(false);
    pathBad = [6, 9, 1];
    expect(pathChecker(board, pathBad)).toEqual(false);
    pathBad = [1, 9, 7];
    expect(pathChecker(board, pathBad)).toEqual(false);
    pathBad = [1, 2, 6];
    expect(pathChecker(board, pathBad)).toEqual(false);
  })

})
