describe('flatten array', () => {
  it('should exist', () => {
    expect(flattenArray).toBeDefined();
  });
  it('should flatten arrays', () => {
    var a = [];
    var b = [];

    a = [[1], [2], [3]];
    b = [1, 2, 3];
    expect(flattenArray(a)).toEqual(b);

    a = [[1, 2], [3], [4, 5]];
    b = [1, 2, 3, 4, 5];
    expect(flattenArray(a)).toEqual(b);

    a = [[1, [2]], [3], [[4, [5, 6]], 7]];
    b = [1, 2, 3, 4, 5, 6, 7];
    expect(flattenArray(a)).toEqual(b);

  })
});