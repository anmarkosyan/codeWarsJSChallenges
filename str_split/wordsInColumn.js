//========================== words In Column ===============================
//Функция получает строку из нескольких слов. Выведите слова в столбик, выравнивание по правому краю.
// Например, text = 'I will get everything I want'. Функция должна возвратить этот текст в виде строки,
// содержащей слова:
//'        I
//      will
//       get
//everything
//         I
//      want'

const wordsInColumn = text => {
    let arr = text.split(' ');
    let longLength = 0;

    for(let el of arr){
        if(el.length > longLength){
            longLength = el.length;
        }
    }
    for(let i = 0; i < arr.length; i++){
        let j = 0;
        while(arr[i].length < longLength){
            arr[i] = ' ' + arr[i] ;
            j++;
        }
    }
    return arr.join('\n');

}
console.log(wordsInColumn("joy every moment"));