const { longestSlideDown } = require('../modules/longestSlideDown');

test('should find the longest slide from the pyramid like structure', () => {
    expect(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]])).toStrictEqual(23);
})