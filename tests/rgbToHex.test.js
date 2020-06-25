const { rgbToHex } = require('../modules/rgbToHex');

test('should translate colors from rgb to hex', () => {
    expect(rgbToHex(124, 225, 5)).toEqual('7CE105');
    expect(rgbToHex(44, 180, 55)).toEqual('2CB437');
    expect(rgbToHex(160, 1, 1)).toEqual('A00101');
    expect(rgbToHex(200, 2, 150)).toEqual('C80296');
    expect(rgbToHex(-12, -10, -5)).toEqual('000000');
    expect(rgbToHex(270, 300, 400)).toEqual('FFFFFF');
    expect(rgbToHex(-270, 300, 400)).toEqual('00FFFF');
})