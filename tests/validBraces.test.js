const { validBraces } = require('../modules/validBraces')

test('should check if all brackets are closed', () => {
    expect(validBraces('()[{()(((())))}]')).toEqual(true);
    expect(validBraces('()[{()(((())))}')).toEqual(false);
})