import sum from './function';

var result = sum('12', '2');
console.log(result, typeof result); // Should print 14 string
console.log(sum('12', 'abc')); // � Error 
