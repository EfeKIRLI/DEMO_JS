// var guestList = ["efe","emre","mehmet","orhan","ekrem","zeynep","aslı"];
// var guestName = prompt("What is your name?");
// console.log(guestName.slice(0,1).toUpperCase()+ guestName.slice(1,guestName.length)) // "Efe" toUpperCase() first char

// if (guestList.includes(guestName)){ 
//     alert("Welcome!")
// } 
// else { 
//     alert("Sorry oops..")

// }

// let output = []
// var count = parseFloat(prompt());

// function fizzBuzz() { 
//     if (count % 3 === 0 && count % 5 === 0) {
//         output.push('FizzBUzz')
//     } 
//     else if (count % 5 === 0){ 
//         output.push('Fizz')
//     }
//     else if (count % 3 === 0) { 
//         output.push('Buzz')
//     }
//     else {
//         output.push(count)
//     }
//     count++;
//     console.log(output)
// }
// fizzBuzz()

// let Arr = Array(9).fill(19)
// console.log(Arr)

// const numbers = [];
// for (let i = 0; i < 20; i++) {
//     numbers.push(i);      
// }

// const squaredNumbers = numbers.map(num => num * num)
// console.log(numbers)
// console.log(squaredNumbers)

// const words = ['Hello','World','js','javascript','React']
// const wordsLengths = words.map(word => word.length)
// console.log(wordsLengths)

// const names = ["efe","samed","emre","zeynep","furkan"]
// const uppercaseNames = names.map(name => name.toLocaleUpperCase().slice(0,1) + name.slice(1,name.length))
// console.log(uppercaseNames)

// const newWords = ["Epistemoloji","Antroposen","Biyofilia","Gig ekonomi","Teknopopülizm","Fütüristik","Zoonoz Hastalık"]
// const addNumber = newWords.map((wordd,index) => `${index+1}. ${wordd}`)
// console.log(addNumber)

// const fahTemp = [32,68,86,104];
// const celTemp = fahTemp.map(fahrenheit =>((fahrenheit - 32) * 5/9).toFixed(2)) 
// console.log(celTemp)

// const matrix1 = [[1,1],[2,2]]
// const matrix2 = [[4,4],[5,5]]
// const totalMatrix = matrix1.map((row,rowIndex) => row.map((element,colIndex)=> element + matrix2[rowIndex[colIndex]]));

// console.log(totalMatrix)


// const numberss = [2,4,6,8,10]
// const doubleNumbers = numberss.map(num => num * 2)
// console.log(doubleNumbers)

// const Words = ["reply","again"]
// const WorsUpper = Words.map(wor => wor.toUpperCase())
// console.log(WorsUpper)

// const squNumbers = []
// for (let i = 0; i < 10; i++) {
//     squNumbers.push(i)
    
// }
// const squaaaNumber = squNumbers.map(squ => Math.sqrt(squ).toFixed(2))
// console.log(squaaaNumber)


// const fruits = ["elma", "armut", "muz", "çilek", "portakal"];
// const SortedFruitsAscending = fruits.sort((a, b) => a.length - b.length);
// const fruitsIndex = SortedFruitsAscending.forEach((a,b) => {
//     console.log(`a:${a}`)
// })
// console.log(`${SortedFruitsAscending}`)     
// console.log(SortedFruitsAscending)

// const myArray = ['elma', 'armut', 'kiraz', 'muz'];

// const newArray = myArray.map((element, index) => {
//     return `Index: ${index}, Element: ${element}`;
// });

// console.log(newArray);

const numbers = [-2, 5, -8, 10, -3, 7];
const positiveNumbers = numbers.filter(num => num > 0 )
console.log(positiveNumbers)

const All_Numbers = []
for (let i = 0; i < 20; i++) {
    All_Numbers.push(i);
}
const evenNumbers = All_Numbers.filter(num => num % 2 === 0 )
console.log(evenNumbers)


const words = ['elma', 'armut', 'kiraz', 'muz'];
const filteredWords = words.filter(word => word.includes('a'));
console.log(filteredWords); // ['armut', 'muz']


const wordsLenght = ['elma', 'armut', 'kiraz', 'muz'];
const filteredwordsLenght = wordsLenght.filter(word => word.length === 5);
console.log(filteredwordsLenght); // ['armut']

const Nums = []
while (Nums.length < 6) {
    const randomNums = Math.floor(Math.random()*10); 
    Nums.push(randomNums)
    console.log(randomNums) //[9, 6, 3, 8, 3, 7]
}

console.log(Nums) 
// 9
// 6
// 3
// 8
// 3
// 7



// let i = 1; 
// while (i < 2) {
    
//     console.log(i)
//     i++
// }


let numberOfBottles = 99 
while (numberOfBottles >=0) {
    let bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    }

    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");

    if (numberOfBottles === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
    }
}

// const fibonacciNumbers = [];

// function fibonacciGenerator() {
//     let a = 0;
//     let b = 1;

//     for (let i = 0; i <= 20; i++) {
//         fibonacciNumbers.push(a);
//         const temp = a + b;
//         a = b;
//         b = temp;
//     }
// }

// fibonacciGenerator();
// console.log(fibonacciNumbers);

// const n = [1,2,4,5,6]
// const nu = n.map(ni => ni + ni-1)
// console.log(nu)

// const years = []
// for (let i = 2000; i <= 2020; i++) {
//     years.push(i) 
// }
// console.log(years)


// const ReduceNum = [2,4,6,8]
// const sumReduce = ReduceNum.reduce((acc,cur)=>{
//     return acc+cur
// })
// console.log(sumReduce)

// const multiplicationOperation  = ReduceNum.reduce((acc,cur)=> { 
//     return acc*cur
// })
// console.log(multiplicationOperation)

// const divideEven = ReduceNum.reduce((acc,cur)=> { 
//     if (cur % 2 === 0) {
//         console.log(cur)
//     }
     
// })
// console.log(divideEven)

// const reducePeople = [ 
//     {name:'Dolar:',country:'ABD'},
//     {name:'Dolar:',country:'ABD'},
//     {name:'canadian dollar:',country:'Canada'},
//     {name:'canadian dollar:',country:'Canada'},
//     {name:'canadian dollar:',country:'Canada'},
//     {name:'canadian dollar:',country:'Canada'},
//     {name:'Euro:',country:'Germany'},
//     {name:'Euro:',country:'Germany'},
//     {name:'Euro:',country:'Germany'},
//     {name:'Euro:',country:'Germany'},
//     {name:'Euro:',country:'Germany'},
//     {name:'Sterlini:',country:'England'},
//     {name:'Sterlini:',country:'England'},
//     {name:'Sterlini:',country:'England'},
//     {name:'Sterlini:',country:'England'},
//     {name:'Sterlini:',country:'England'},
//     {name:'Sterlini:',country:'England'},
//     {name:'Sterlini:',country:'England'},
//     {name:'Sterlini:',country:'England'},
// ];

// const groupedByCountry = reducePeople.reduce((grouped,countries)=> { 
//     const key = countries.country
//     // grouped[key] = grouped[key] || [];
//     // grouped[key].push(countries)
// })
// console.log(reducePeople)


const values = [8, 3, 11, 6, 7];

const max = values.reduce((accumulator, current) => {
  return Math.max(accumulator, current);
}); //, values[0]

console.log(max); // Output: 11


const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 }
  ];
  
  const averageAge = people.reduce((accumulator, current) => {
    return accumulator + current.age;
  }, 0) / people.length;
  
  console.log(averageAge); // Output: 25.666666666666668
  







