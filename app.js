// const isEqualTO100 = (a,b) => a === 100 || b ===100 ; 

// console.log(isEqualTO100(100,0))


// const isEqualToNames = (f,l) => f === "Efe" || l === "KIRLI" || (f+l)=== "Efe KIRLI"

// console.log(isEqualToNames("Efe","KIRLI"))


// const getFileExtension = (str) => str.slice(str.lastIndexOf("."));
// console.log(getFileExtension("index.html"))

// const getFileExtension = (str) => str.slice(str.lastIndexOf());
// console.log(getFileExtension("efe.js"))

// String.fromCharCode
// charCodeAt
 
// const moveCharsForward = (str) => 
// str
// .split("")
// .map(efe => String.fromCharCode(efe.charCodeAt(0)+1))
// .join("");

// console.log(moveCharsForward("abcd"));

// function greet(){ 
//     return `selam`
// }


// const formatDate = ( date = new Date()) => {
//         const days = date.getDay()
//         const months = date.getMonth()
//         const years = date.getFullYear()

//         return `${days}/${months}/${years}` ;
// }
//  console.log(formatDate())
 
//  document.getElementById("deneme").innerHTML = ` ${formatDate()} ${greet()} ` 



// const addNew = (str) => `New!  ${str}`;

// document.getElementById("deneme").innerHTML = addNew("Offers")

// console.log(addNew("Offers"))

// const addNew = (str) => 
// str.indexOf("New!") === 0 ? str : `New!  ${str}`;

// document.getElementById("deneme").innerHTML = addNew("New! Offers")

// console.log(addNew("New! Offers")) 

 
//   const makeNewString = (str) => 
//   str.lenght < 3 ? str : str.slice(0,3) + str.slice(-3);

//   console.log(makeNewString("abc"))
//   console.log(makeNewString("abcdef"))
//   console.log(makeNewString("abc123abc123"))
  
//   console.log(makeNewString("ab"))

// const firstHalf = (str) => str.slice(0,str.length/2);

// console.log(firstHalf("efes"))
// console.log(firstHalf("java"))
// console.log(firstHalf("script"))
// console.log(firstHalf("python"))
// console.log(firstHalf("frontEnd"))


// const indicateFirstHalf = (str) => str.slice(0,str.length/3);

// console.log(indicateFirstHalf("123456"))
// console.log(indicateFirstHalf("123456789"))
// console.log(indicateFirstHalf("123456789101112"))

// const concantenate = (str1,str2) => 
//     str1.slice(1) + str2.slice(1);

//     console.log(concantenate("eefe ","ssamed"))


// const findNearstNumber = (num1,num2) =>  
// (100 - num1 ) < (100 - num2) ? num1 : num2;

// document.getElementById("deneme-2").innerHTML+= 
// `
// ${findNearstNumber(100,20)} 
// ${findNearstNumber(80,40)}  
// ${findNearstNumber(60,60)}
// `
// console.log(findNearstNumber(100,20))
// console.log(findNearstNumber(80,40))
// console.log(findNearstNumber(60,60))


// const findfarthestNumber = (num1,num2) => 
//     (100-num1) >  (100 - num2) ? num1 : num2 

//     document.getElementById("deneme-2").innerHTML=  ` 
//     en uzak sayi: ${findfarthestNumber(80,50)}` 
    
    

//     console.log(findfarthestNumber(80,50))

// const countChars = (str,char) => 
// str.split("").filter(ch => ch === char).length;

// const contains2To4 =(str,char) => 
//     countChars(str,char) >= 2 && countChars(str,char) <= 4 ;

//     console.log(contains2To4("efe!","e"))
//     console.log(contains2To4("oh!","o"))
//     console.log(contains2To4("ooooh!","o"))


// const countEventNumbers= (arr) => 
// arr.filter(num => num % 2 === 0).length ;

// console.log(countEventNumbers([1,2,3,4,5,6]))
// console.log(countEventNumbers([2,2,2,2,2,2]))
// console.log(countEventNumbers([3,5,7,9,11,25,100]))

// const countEvenNumber = (arr) => 
// arr.filter(num => num % 2 ===0).length ;

// console.log(countEvenNumber([12,5,8]));
// ----------------------------------------------------------

// const countEvenNumber = (arr) => 
//      arr.filter ( number => number % 2 ===0).length;

// const crateArrayOfNumber = (num) => {
//     const returnArray =[];
//     for ( let i=1 ; i<=num; i++){
//         returnArray.push(i);
//     }
//     return returnArray;
// }
//     console.log(crateArrayOfNumber(6)) //(6) [1, 2, 3, 4, 5, 6]
//     console.log(crateArrayOfNumber(10)) //(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(countEvenNumber(crateArrayOfNumber(6))) // 3
// console.log(countEvenNumber(crateArrayOfNumber(10))) // 5


// ------------------------------------------------
// const countEvenNumbers = (arr) => 
//     arr.filter(count => count % 2 === 0).length;


// const createArray = (num) => {

//     const arrayiReturnEt = []; // arayin icine push edelim.
//     for ( let i=1; i<=num; i++) {
//         arrayiReturnEt.push(i);
//     }
//     return arrayiReturnEt    

// }
//         console.log(createArray(8))  //(8) [1, 2, 3, 4, 5, 6, 7, 8]
//         console.log(createArray(16)) //(16) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
// console.log(countEvenNumbers(createArray(8))) // 4
// console.log(countEvenNumbers(createArray(16))) // 8


// ------------------------------------------------
// const countEnum = (evv) => 

//     evv.filter(count => count % 2 === 0 ).length;

//  const  crtAry = (num) => {
//     const returnAry = [];
//     for ( let i = 1;  i < num; i++){
//         returnAry.push(i);
//     }
//     return returnAry;
// }     
// console.log(crtAry(5))
// console.log(countEnum(crtAry(5)))

// ----------------------------------------------------


// const isAscending = (arr) => {
//     for (let i=0 ; i < arr.length; i+=1) {
//         if (arr[i+1] < arr[i] ) 
//             return false
//     }  
//             return true    
    
// }

// console.log(isAscending([1,2,3,4,5,6]))
// console.log(isAscending([6,5,4,3,2,1]))

// ------------------------------------------------------

// const isAscending = (arr) => {
//    for (let i=0 ; i < arr.length; i+=1) {
//         if (arr[i+1] < arr[i] ) 
//             return false
//     }  
//             return true    
    
// }
// const createArray = (ar) => {
//     const newArr = [];
//     for ( let i=0 ;i<ar ; i++){
//         newArr.push(i)
//     }
//     return newArr
// }
// console.log(createArray(5))
// console.log(isAscending(createArray(5))) 
// -----------------------------------------------------------
// const isAscending = (arr) => {
//     for (let i=0 ; i < arr.length; i+=1) {
//         if (arr[i+1] < arr[i] ) 
//             return false
//     }  
//             return true    
    
// }

// console.log(isAscending([1,2,3,4,5,6]))
// console.log(isAscending([6,5,4,3,2,1]))
// -----------------------------------------------------------


// const isAscending = (arr) => {
    
//     for (let i=0 ; i<arr.lenght ; i++) {
//     if (arr[i+1] < arr[i]) 
//     return false ;
// }
// return true;
   
// }
// console.log(isAscending)
// console.log(isAscending([1,2,3,4,5,6]))
// -------------------------------------------------------------

// const largestEvent = (arr) => 
// Math.max(...arr.filter(num=> num %2 === 0));

// console.log(largestEvent([1,2,3,4,5,6,7,8,9,10]))
// console.log(largestEvent([1,2,3,4,555,66,7,88,9,10]))
// console.log(largestEvent([1,22,3,4,5,6,7,8,9,100]))

// -------------------------------------------------------------
// const largestEvent = (arr) => 
//     Math.max(...arr.filter(num=> num %2 === 0));

//     console.log(largestEvent([2,3,4,5,6]))
// -------------------------------------------------------------


// const replaceFirstDigit = (str) => 
// // str.replace("samed","efe samed") ;
// str.replace(/[0-9]/,"$") ;

// console.log(replaceFirstDigit("A123123BFSDFSD"))
// console.log(replaceFirstDigit("samed"))

// -------------------------------------------------------------

// const isLeapYear = (year) =>
//         year % 4 === 0 ;
//         console.log(isLeapYear(2014));
// --------------------------------------------------------------
// const yearsArr = (years) => {
//     const leapArray = [];
//     for (let i = 0 ; i <= years ;i++){
//         leapArray.push(i)
//     }
//     return leapArray;
// }
// --------------------------------------------------------------

// const objA = {a:1,b:2,c:1};
// const objB = {a:1,b:1,c:1};
// const objC = {a:1,b:1,c:1};

// const objectEqual = (a,b) => {
//         Object.keys(a).every(key => b[key]);

//     // console.log(Object.keys(a));
//     // console.log(Object.keys(b));
// }
// console.log(objectEqual(objA, objB));

// ----------------------------------------------------------------
// const parseCSV = (csvString) =>
// csvString.split("\n");

// const str = `
// abc,def,ghi
// jkl,mno,pqr
// stu,vwx,yza`
//         console.log(parseCSV(str));

// ----------------------------------------------------------------


// const getRandomHexNum = () => 
// Math.floor(Math.random() * 20);
// // Math.random() * 20;

//     console.log(getRandomHexNum())
//     console.log(getRandomHexNum())
//     console.log(getRandomHexNum())
//     console.log(getRandomHexNum())
//     console.log(getRandomHexNum())
//     console.log(getRandomHexNum())

// -------------------------------------------------------------------

// const getRandomHexNum = () => 
// Math.floor(Math.random() * 20).toString(20);

// const getRandomHexColor = () => "#" + Array.from(
//     {length: 6}).map(getRandomHexNum).join("");
//     document.getElementById("deneme-2").innerHTML= getRandomHexColor()

//     console.log(getRandomHexColor());
//     console.log(getRandomHexColor());
//     console.log(getRandomHexColor());
//     console.log(getRandomHexColor());
//     console.log(getRandomHexColor());
//     console.log(getRandomHexColor());
// ------------------------------------------------------------------------------

//  [1,2,3,4,5] , (x) => x > 3 
// console.log([1,2,3,4,5].every(x=> x > 3)) 
// console.log([1,2,3,4,5].every(x=> x > 0)) 


// const isEveryElem = (arr,fn) => {   // fn -> fonksiyon(function)
//     for ( let i = 0 ; i<arr.length; i++){
//         if (!fn(arr[i])) {  //eğer benim fonksiyoum array içinde değer döndürmüyorsa "false" olsun.
//             return false;
//         }
//         return true;
//     }
// }
// console.log(isEveryElem([1,2,3,4,5] ,(x) => x > 3 )) //false
// console.log(isEveryElem([1,2,3,4,5] ,(x) => x > 0 )) //true


// let names = ["Dindar" , "Meral" , "Samed" , "Emre" , "Kirli" ] ;
// let sortedNames = names.sort()
// console.log(names)
// document.getElementById("deneme-2").innerHTML = sortedNames
// // sortedNames.join(" ") --> boşluk nokta,virgül  vb.... herşey koyabilirsin.
// //    sortedNames[0] +
// //     sortedNames[1]  +
// //     sortedNames[2] +
// //     sortedNames[3] +
// //     sortedNames[4] 

// console.log(sortedNames)


// let users = [
//     { 
//         name : "Efe Kirli",
//         age : 25
//     },
//     { 
//         name : "Emre Kirli",
//         age : 19
//     },
//     { 
//         name : "Meral Kirli",
//         age : 51
//     },
//     { 
//         name : "Dindar Kirli",
//         age : 54
//     },
   
// ];

// users.sort(function(a,b) {
//     if(a.name < b.name ){
//         return -1;
//     }
//     if(a.name > b.name ){
//         return 1;
//     }
//     return 0 ; 

// });

// console.log(users)


// let names = ["Dindar" , "Meral" , "Samed" , "Emre" , "Kirli" ] ; 

// const alphabeticalOrder = (str) => 
//     str.split("").sort((a,b) => a > b ? 1 : -1)
//     .join("") ;
//     console.log(alphabeticalOrder("samed"));
//     console.log(alphabeticalOrder("emre"));
//     console.log(alphabeticalOrder("efe"));
//     console.log(alphabeticalOrder("kirli"));
//     console.log(alphabeticalOrder("dindar"));
//     console.log(alphabeticalOrder("meral"));


// let stuffs = "paper,scissors,rock,desk"
// let splitStuffs = stuffs.split(",")
// console.log(splitStuffs)  // consol da  array'e donustu

// document.getElementById("deneme-2").innerHTML= `${splitStuffs} + ${stuffs}`


// const countVowel = (str,letters = ["a","e","i","o","u"]) => 
//     str
//         .split("")
//         .filter(s => letters.indexOf(s) > -1 )
//         .length;

// console.log(countVowel("a,b,c,d,e"))
// console.log(countVowel("abcdeeeeeeeeeeeeeeeeeeeee"))
// console.log(countVowel("abcde",["a"]))

// const countCoins = (money,coins = [25 ,10 ,5 ,2 , 1]) => 
// {
//     const totalCoins = [] ;
//     for ( let i=0; i<coins.length; i++) {
//         const thisCoinNum = Math.floor(money / coins[i]);
//         for(let y=0 ; y<thisCoinNum; y++){
//             totalCoins.push(coins[i])
//         }
//         money -= coins[i] * thisCoinNum;
//     }
//         return totalCoins;
// }

// console.log(countCoins(47))



// -------------------------------------------------------

// const getUniqueChars = (str) => 
//     str.split("").filter(
//         (item,index,arr) =>
//         arr.slice(index + 1).indexOf(item) === - 1
        
//     );

//     console.log(getUniqueChars("aaaaabbbbcccc"));


const countCoins = (money,coins = [25 ,10 ,5 ,2 , 1]) => 
{
    const totalCoins = [] ;
    for ( let i=0; i<coins.length; i++) {
        const thisCoinNum = Math.floor(money / coins[i]);
        console.log(thisCoinNum)
        for(let y=0 ; y<thisCoinNum; y++){
            totalCoins.push(coins[i])
        }
        money -= coins[i] * thisCoinNum;
    }
        return totalCoins;
}

console.log(countCoins(50))





    
    
    






   




        

        









 
