describe('Quicksort', () => {
  it('should be defined', () => {
    expect(quicksort).toBeDefined();
  });
  
  it('should be a function', () => {
    expect(typeof quicksort).toBe('function');
  });

  it('should sort arrays', () => {
    expect(quicksort([1, 5, 3, 2, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(quicksort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(quicksort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(quicksort([70, 100, 54, 1, 23, 18])).toEqual([1, 18, 23, 54, 70, 100]);
    expect(quicksort([1, 5, 3, 2, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(quicksort([-1, -5, -4, -2, -3])).toEqual([-5, -4, -3, -2, -1]);
    expect(quicksort([0, 3, -5, 1, -1])).toEqual([-5, -1, 0, 1, 3]);
  });

});