"use strict";

// const obj = new Object();

const options = {
    name: 'test',
    width: 10024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test'); 
    }
};

options.makeTest();

const {border, bg} = options.colors; //Диструктуризация
console.log(border);

console.log(Object.keys(options).length); //ЗАПОМНИТЬ!!!! ЧАСТО БУДЕТ ИСПОЛЬЗОВАТЬСЯ

// console.log(options.name);

// delete options.name;

// console.log(options);


// let counter = 0; // Проверка количества свойств в объекте
// for (let key in options) {
//     if (typeof (options[key]) === 'object'){
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//     } 
    
// }
// console.log(counter);