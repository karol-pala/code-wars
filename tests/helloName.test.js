const { helloName } = require('../modules/helloName');
const { TestScheduler } = require('jest');

test('should returns Hello, World!', () => {
    expect(helloName()).toStrictEqual('Hello, World!');
    expect(helloName('')).toStrictEqual('Hello, World!');
})

test('should return Hello, Name!', () => {
    expect(helloName('boB')).toStrictEqual('Hello, Bob!');
    expect(helloName('alice')).toStrictEqual('Hello, Alice!');
    expect(helloName('joHn')).toStrictEqual('Hello, John!');
})