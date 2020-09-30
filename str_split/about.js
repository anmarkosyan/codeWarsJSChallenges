//============== String.split(separator|regExp, limit) ==========================

let str = '1I do, 2you do, 3they do';
console.log(str.split('do'));
// ["1I ", ", 2you ", ", 3they ", ""], сам разделитель не включается в массив
console.log(str.split(' '));
// ["1I", "do,", "2you", "do,", "3they", "do"], в качестве разделителя указана пустая строка
console.log(str.split('o', 2));
// ["1I d", ", 2y"], есть лимит на количество выводимых подстрок
console.log(str.split('1'))
// ["", "I do, 2you do, 3they do"]
console.log(str.split());
//[ '1I do, 2you do, 3they do' ]
console.log(str.split(/\d/))
//[ '', 'I do, ', 'you do, ', 'they do' ], numbers like separator
let str1 = '12 3 4 5'
console.log(str1.split(/\s*/));
//[ '1', '2', '3', '4', '5' ]
console.log(str.split(/\s*/));
//['1', 'I', 'd', 'o', ',',
// '2', 'y', 'o', 'u', 'd',
// 'o', ',', '3', 't', 'h',
// 'e', 'y', 'd', 'o']



