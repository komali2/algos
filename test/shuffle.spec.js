describe('shuffle', ()=>{
  it('should exist', ()=>{
    expect(shuffle).toBeDefined();
  });
  it('should not change array length', ()=>{
    var arr = [1, 2, 3, 4, 5];
    expect(shuffle(arr).length).toEqual(arr.length);
  })
  //how do you even test... for this...
  it('should be shuffled?', ()=>{
    var arr = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(shuffle(arr)).not.toEqual(arr);
  })

})