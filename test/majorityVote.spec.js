describe('majority vote', ()=>{
  it('should exist', ()=>{
    expect(majorityVote).toBeDefined();
  });

  it('should sort properly', ()=>{
    var input = [1,2,2,2,2,2,4];
    var output = 2;

    expect(majorityVote(input).toEqual(output));

    input = [2,1,1,2,3,3,2,4,4,2,5,5];
    output = -1;
    expect(majorityVote(input).toEqual(output));

    input = [1,2,3];
    output = -1;
    expect(majorityVote(input).toEqual(output));
  });
});