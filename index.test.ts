import sum from './function';

test('sum "1" + "2" to equal "3"', () => {
    expect(sum('1', '2')).toBe('3');
});

test('sum "2" + "2" to equal "4"', () => {
    expect(sum('2', '2')).toBe('4');
});

test('sum "abc" + "2" to "error"', () => {
    expect(sum('abc', '2')).toBe('Error');
});