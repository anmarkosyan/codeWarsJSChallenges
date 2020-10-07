//===================== check type =======================


function checkType (value){
    //#1 not so good solution, typeof not to work with objects classes , return all type object([], {}, null, newDate)
    // if(Array.isArray(value)) return 'array';
    // else if({}.toString.call(value) === '[object Date]') return 'date'
    // else if({}.toString.call(value) === '[object Null]') return 'null'
    // else return typeof value;

    //#2 better, constructor not to work with null and undefined = return TypeError
    // if(toString.call(value) === '[object Null]') return 'null';
    // if(typeof value === 'undefined') return 'undefined'
    // return value.constructor.name.toLowerCase();

    //#3 best solution
    return {}.toString.call(value).slice(8, -1).toLowerCase()

}
console.log(checkType(''));//'string'
console.log(checkType([]));//'array'
console.log(checkType({}));//'object'
console.log(checkType(null));//'null'
console.log(checkType(undefined));//'undefined'
console.log(checkType(new Date()));//'date'
console.log(checkType(NaN));//'number'
console.log(checkType(12345));//'number'
