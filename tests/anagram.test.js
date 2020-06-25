const { anagram } = require('../modules/anagram')

test('returns only anagrams', () => {
    expect(anagram('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toStrictEqual(['aabb', 'bbaa']);
    expect(anagram('cbcbc', ['cccbb', 'bcccb', 'bbaa', 'dada'])).toStrictEqual(['cccbb', 'bcccb']);
    expect(anagram('canine', ['cannie', 'encina', 'neanic', 'dada', 'gata'])).toStrictEqual(['cannie', 'encina', 'neanic']);
    expect(anagram('monitor', ['tromino', 'abcd', 'bbaa', 'dada'])).toStrictEqual(['tromino']);
})

test('returns empty array', () => {
    expect(anagram('abba', ['tromino', 'abcd', 'dada'])).toStrictEqual([]);
    expect(anagram('cbcbc', ['aabb', 'abcd', 'bbaa', 'dada'])).toStrictEqual([]);
    expect(anagram('canine', ['cccbb', 'bcccb', 'bbaa', 'dada'])).toStrictEqual([]);
    expect(anagram('monitor', ['cannie', 'encina', 'neanic', 'dada', 'gata'])).toStrictEqual([]);
})

