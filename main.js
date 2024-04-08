// Funksiyalar bilan ishlash Funksiyalar uch turda bo'ladi. 1-Function declaration, 2-Function expression, 3-Arrow Function
// const ageFunc = prompt("Foydalanuvchi yoshini kiriting: ");

// function myFunc() {
//     if(ageFunc < 18) {
//         return "Welcome";
//     }
//     else {
//         return "No entry";
//     }
// }

// console.log(myFunc());


// function myFunc(a, b) {
//     return(a + b);
// }
// console.log(myFunc(22, 10));


// const Exp = function(a, b, c) {
//     return(a + b + c);
// }
// console.log(Exp(58, 20, 33));


// const Arrow = (a,b) => {
//     return(a - b)
// }
// console.log(Arrow(50, 22));

// const user = {
//     lastName: "Bektemirov",
//     name: "Faxriyor",
//     age: 14,
//     height: 1.62,
//     color: {
//         red: "qizil",
//         green: "yashil",
//         bule: "kok"
//     }
// }


// var myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

// var myArray = myData.split(",");

// var myNewString = myArray.join(",");

// console.log(myNewString);

// var dogNames = ["Rocket", "Flash", "Bella", "Slugger"];

// console.log(dogNames.toString());

// const myArray = [
//     "Manchester",
//     "London",
//     "Liverpool",
//     "Birmingham",
//     "Leeds",
//     "Carlisle",
// ];

// myArray.push("Davlat");
// myArray.push("Faxriyor");

// myArray.pop();
// myArray.pop();
// myArray.pop();

// console.log(myArray);

// myArray.unshift("Izzat");
// myArray.unshift("Davlat");
// myArray.unshift("Faxriyor");

// var removedItem = myArray.shift();

// console.log(removedItem);


// arr.push("Salom dunyo");
// arr.pop();

// arr.unshift("dars");
// arr.shift();

// console.log(arr);

// const data = "red, green, blue, yellow";

// const newArr = data.split(",");

// const arrString = newArr.join(",");



// console.log(newArr.toString());

// const arr = ["первый элемент", "второй элемент", "последний элемент"];

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for(let value of arr) {
//     console.log(value);
// }

// console.log(arr.fill(0,2));

// const words = [12, 130, 52, 94, 7];

// const result = words.filter((word) => word > 25 );

// const thisArg = words.findIndex( result => result == 7 )

// console.log(thisArg);

// const newArr = words.flat()
// console.log(newArr);

// words.forEach((element) => console.log(element))

// const newMap = words.map((num) => num  + 1)
// console.log(newMap);


// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10

// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

// const reversed = array1.reverse();
// console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
// console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]


// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]














// const arr = ["Izzat", "Davlat", "Faxriyor"]


// function logger(x,y,z) {
//    return(x+y+z)
// }

// const newFunc = logger(...arr)

// console.log(newFunc);


// const url = 'https://jsonplaceholder.typicode.com/comments';

// fetch(url)
//    .then(res => res.json())
//    .then(json => console.log(json))


const loader = document.querySelector(".loader_cont")

setTimeout(() => {
   loader.style.opacity = '0'
   setTimeout(() => {
      loader.style.display = 'none'
   }, 500);
}, 3000)