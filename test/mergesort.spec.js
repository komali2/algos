describe('mergesort', ()=>{
    it('Should exist', ()=>{
        expect(mergesort).toBeDefined();
    });
    it('should sort arrays', ()=>{
        expect(mergesort([Number.MAX_SAFE_INTEGER,8,7,3,6,9,2,4,5,1])).toEqual([1,2,3,4,5,6,7,8,9,Number.MAX_SAFE_INTEGER]);
        expect(mergesort([8,7,3,3,9,2,4,5,1])).toEqual([1,2,3,3,4,5,7,8,9]);
    })
});