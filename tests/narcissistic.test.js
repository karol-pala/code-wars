const { narcissistic } = require('../modules/narcissistic');

test('returns narcissistic numbers, e.g. 3^3 + 7^3 + 1^3 = 371', () => {
    expect(narcissistic(153)).toEqual(true);
    expect(narcissistic(1634)).toEqual(true);
    expect(narcissistic(54748)).toEqual(true);
    expect(narcissistic(1741725)).toEqual(true);
    expect(narcissistic(1542)).toEqual(false);
    expect(narcissistic(999)).toEqual(false);
})