//! Простые методы массивов 
//! PUSH - метод, к-й добовляет э-л в конец массива и возращаяет новую длинну массива (length) 
//  1 
//  let arr = ["elem-1", "elem-2"]; 
//  console.log(arr); 
//  let res = arr.push("elem-3"); 
//  console.log(res); 
//? () - вызов функции/метода 
// console.log(arr); 
// 2 
//  let arr = ["elem-1", "elem-2"]; 
//  let res = arr.push('hello','world') 
//  console.log(res); 
 
// ! error 
//  arr.push('1').push('2'); 
//  3.push('2') 
 
//!UNSHIFT - метод, к-й добавляет э-л в начало массива и возращает новую длинну массива (length) 
 
// let arr = ["elem-1", "elem-2"]; 
// arr.unshift("js"); 
// let res = arr.unshift("python"); 
// console.log(arr); 
// console.log(res); 
 
//! POP - метод, к-й удаляет э-л в конце массива и возращает и возвращает удаленный элемент 
// let nums = [100, 102, 99, 10]; 
//  let res = nums.pop(); 
// console.log(nums); 
// console.log(res); 
 
//! error 
// nums.pop().pop() 
// "10asasasa".pop() 
 
//! SHIFT - метод, к-й удаляет э-л в начале массива и возвращает удаленный элемент 
// let nums = [100, 102, 99, 10]; 
// let elem = nums.shift() 
// console.log(nums,elem); 
 
//! SPLICE - удаляет элементы начиная с указанного индекса (первый аргумент), вторым аргументом передаем количество удаляемых элементов, третим аргументом (необязательные аргументы) и далее принимает элементы на которые нужно заменить удаленные 
// let names = ["Dan", "Alex", "Anna", "Kate"]; 
// удаление 
// let res = names.splice(1, 1); 
// console.log(names); 
// console.log(res); 
 
// замена 
// names.splice(0,1,"Diana"); 
// console.log(names); 
// добавление 
// names.splice(1,0,"Alina", "Suse") 
// console.log(names); 
 
//! SLICE - копирует массив с указанного индекса до указанного индекса (не включительно), исходный массив не меняется 
// let arr = ["js", "php", "python", "c"]; 
// let copy = arr.slice(1, 3); 
// console.log(copy, arr); 
 
// let str = "Hello"; 
// console.log(str.slice(0,4)); 
// console.log(str.substring(0,4));

// //! JOIN - может сделать из массива строку и принимает в аргументы "соединитель", если передадим пустую строку значит разделителя нет, исходный массив не меняет
// let elems = ["a1", "a5", "a4"]
// console.log(elems.join());
// let nums = [1,3,13,31,13]
// console.log(nums.join(""));
// console.log(typeof nums.join(""));

// // ! SPLIT - может из строки сделать массив и принимает в аргументы "разделитель", если передадим пустую строку разделит по одному символу, исходную строку не меняет
// let str = "Hello+world";
// console.log(str.split("+"));
// console.log(str);



// ! REVERSE - переворачивает массив - исходный массив меняется
// let arr = ["js9", "js10", "js11", "js12"]
// console.log(arr.reverse());



// // srekaM
// let str = prompt("проверь слово");
// let arr = str.split("");
// let reversedArr = arr.reverse()
// let reversedStr = reversedArr.join("")
// console.log(reversedStr.toLowerCase());
// console.log(str.toUpperCase());
// ===
// const isPalindrom = (reversedStr.toLowerCase() === str.toLowerCase());
// if (isPalindrom){
//     alert("это палиндром")
// } else {
//     alert("это не палиндром")
// }

// ! CONCAT - может объединить несколько массивов в один
// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let arr3 = arr1.concat(arr2)
// console.log(arr3);
// console.log(arr1, arr2);

// ! INCLUDES - проверяет есть ли в массиве указанный элемент
// let arr = ["Diana", "Kate"]
// let isInArray = arr.includes("Maya")
// console.log(isInArray);

// let list = ["Alina","Diana", "Mary"]
// let name = prompt("Проверь себя в списке гостей")
// let isInArray = list.includes(name)
// console.log(isInArray);

// isInArray ? alert("Вы приглашены") : alert("Вы не приглашены")


// ! SORT - при сортировке меняет исходный массив, если не передать аргументы, то сортирует в лексикографическом порядке
// let nums = [215, 1334, 1, 11, 15, 2, 22]
// nums.sort()
// console.log(nums);

//? sort - по возрастанию
// nums.sort((a, b) => a - b )
// console.log(nums);

// sort? - по убыванию
// nums.sort((a, b) => b - a )
// console.log(nums);

// let arr = ["fsd", "asdfseghdfgs", "sdsfreg", "asdd", "d"]
// arr.sort((a,b) => a.length - b.length)
// console.log(arr);

// ! SPREAD operators
// let arr = [1,12,1321,432,5]
// console.log(arr);
// console.log(...arr); //распаковка чееек

// let arrCopy = [...arr]
// console.log(arrCopy);

// let arr1 = [1, 2]
// let arr2 = [3, 4]
// let arr3 = [5, 6]
// let arr4 = [7, 8]

// let mainArray = [...arr1, ...arr2, ...arr3, ...arr4, 9, 10]
// console.log(mainArray);

// let obj1 = {
//     age: 20,
// }
// let obj2 = {
//     name: "Maria",
// }

// let user = {
//     ...obj1,
//     ...obj2,
// }
// console.log(user);

// let arr =[]
// let nums = [10, 20, 30]
// arr.push(...nums) //arr.push(10,20,30)
// console.log(arr);

let str = "alex"
let arr = str.split("")
console.log(arr);
let firstletter = arr.shift()
console.log(firstletter);
let upperLetter = firstletter.toUpperCase()
console.log(upperLetter);
console.log(arr);
let letters = arr.join("")
console.log(upperLetter + letters);
