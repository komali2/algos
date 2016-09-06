describe('string math', () => {
  it('should exist', () => {
    expect(stringMath).toBeDefined();
  });
  it('should return a string', () => {
    expect(typeof stringMath('3+4*7')).toEqual('number');
  });
  it('should add and subtract', () => {
    expect(stringMath('3+4')).toEqual('7');
    expect(stringMath('2+20')).toEqual('22');
    expect(stringMath('1+2+3')).toEqual('6');
    expect(stringMath('2-1')).toEqual('1');
    expect(stringMath('5-2-1')).toEqual('2');
    expect(stringMath('1+5-4')).toEqual('2');
    expect(stringMath('5-3+1')).toEqual('3');
  });
  it('should multiply and divide', ()=>{
    expect(stringMath('1*2')).toEqual('2');
    expect(stringMath('2*2')).toEqual('4');
    expect(stringMath('2*3*2')).toEqual('12');
    expect(stringMath('10/2')).toEqual('5');
    expect(stringMath('12/2/2')).toEqual('3');
    expect(stringMath('10/1')).toEqual('10');
  });
  it('should respect order of operations', ()=>{
    expect(stringMath('1+2*5')).toEqual('11');
    expect(stringMath('5-1*2')).toEqual('3');
    expect(stringMath('1+4*2-3')).toEqual('6');
  });
})