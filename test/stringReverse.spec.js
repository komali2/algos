describe('string reverse', ()=>{
    it('should exist', ()=>{
        expect(stringReverse).toBeDefined();
    });
    it('should reverse strings', ()=>{
        var stringIn;
        var stringOut;

        stringIn = 'hello';
        stringOut = 'olleh';
        expect(stringReverse(stringIn)).toEqual(stringOut);

        stringIn = 'azzab';
        stringOut = 'bazza';
        expect(stringReverse(stringIn)).toEqual(stringOut);

        stringIn = 'we. love to! sing';
        stringOut = 'gnis !ot evol .ew';
        expect(stringReverse(stringIn)).toEqual(stringOut);

        stringIn = 'bar';
        stringOut = 'rab';
        expect(stringReverse(stringIn)).toEqual(stringOut);
    });
})