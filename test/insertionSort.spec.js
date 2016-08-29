describe('Insertion Sort', ()=>{
    it('should exist', ()=>{
        expect(insertionSort).toBeDefined();
    });
    it('should sort', ()=>{
        expect(insertionSort([ { "value": 3 }, { "value": 1 }, { "value": 2 } ])).toEqual([ { "value": 1 }, { "value": 2 }, { "value": 3 } ]);

        expect(insertionSort([ { "value": 10 }, { "value": 5, "order": 1 }, { "value": 5, "order": 2 } ])).toEqual([ { "value": 5, "order": 1 }, { "value": 5, "order": 2 }, { "value": 10 } ]);
    });
});