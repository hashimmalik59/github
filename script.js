// Alert
// alert("Alhadulillah");

// Variables and String
// let name = "Hashim Malik";
// let myNameIs = "My name is ";
// let statement = myNameIs + name;
// console.log(statement);

// let name = "Hashim Malik";
// alert(name);

// let originalWeight = 10;
// console.log("originalWeight is equals to =", originalWeight);
// let newWeight = originalWeight + 20;
// console.log("And newWeight is equal =" , newWeight);

// let name= "Hashim Malik";
// let myNameIs = "My name is ";
// let connect = myNameIs + name
// console.log(connect);
// document.querySelector('h1').textContent = connect;

// let weight = 150;
// let sumWeight = weight + 25;
// console.log(sumWeight);

// let myNameIs = "Hashim Ahmad Malik";
// console.log(myNameIs);
// document.write(myNameIs);

// let firstName, lastName, myAge;
// firstName = 'Hashim';
// lastName = 'Malik';
// myAge = 22;
// console.log(firstName, lastName, myAge);

// let 123age = 22;  (variable cannnot starting with number)
// let my Name = "Hashim Malik"; (in between variable name there is no space, if space is mentioned it will be showing error)
// let @follow = true; (variable cannnot starting with special characters except "$", "_")
// let Name = "Hashim Malik" (there is a huge difference between these two "Name" and "name" both are different bacause JavaScript is a case sensitive language)
// let name = "Hashim Malik"
// let myNameIs = "Hashim Malik"; (it is a good practice to write a variable in Camel Case in JavaScript like first word spellig is small and other word first spelling is Capital)

// let myAge = 22;
// let myAgeAfterSomeTime = 50;
// let differnceOfMyAge = myAgeAfterSomeTime - myAge;
// console.log(differnceOfMyAge);

// let myAge = 22;
// myAge = myAge + 8;
// console.log(myAge);

// let priceOfSugarIn2023 = 150;
// let priceOfSugarIn2024 = 155;
// let priceDifferenceOfSugar = priceOfSugarIn2024 - priceOfSugarIn2023;
// console.log(priceDifferenceOfSugar);

// let age = 22;
// let newAge = ++age;
// console.log(newAge);

// let age = 22;
// console.log(age);

// variable should be meaningful.
// variable should having no space and "-" in it.
// variable should not start with number like.
// variable is case-sensitive e.g: Apple and  apple both are different in JS.

// let firstName = "Hashim";
// let lastName = "Malik";
// console.log(firstName, lastName);

// Constant.
// const CNIC;
// console.log(CNIC);
// not assigning a variable in const showing ERROR.
// and updation is also a cause of ERROR.

// let firstName;
// console.log(firstName);
// let lastName = undefined;
// console.log(lastName);
// both variables are having same answer.

// let name = "Hashim"
// let age = 22;
// let isPass = true;
// console.log(name);
// console.log(age);
// console.log(isPass);

// Object.
// let Hashim_Data = {
//   name: "Hashim",
//   fatherName: "Altaf Ahmad",
//   age: 22,
//   cpga: 3.58,
//   isPass: true,
// };
// Dot Notation
// Hashim_Data.name = "Hashim Malik";
// console.log("This is Dot '.' Notation:", Hashim_Data.name);
// Bracket Notation
// Hashim_Data[name] = "Hashim Ahmad Malik"
// console.log("This is Bracket '[]' Notation:", Hashim_Data[name]);

// let animals = ['Lion', 'Elephant', 'Giraff', 'Deer', 'Tiger'];
// animals[6] = 'Cheetah';
// console.log(animals);
// console.log(animals.length);

// fullName = "Hashim Malik";
// age = 22;
// price = 250;
// fullName = 10000000;
// console.log(fullName);

// let name = "Hashim";
// name = "Ahmad";
// name = "Malik";

// const name = "Hashim";
// name = "Ahmad"
// name = "Malik"
// console.log(name);

// const fullName;
// console.log(fullName);

// {
//     let name = "Hashim Malik"
//     console.log(name);
// }
// {
//     let name = "Hashim Ahmad"
//     console.log(name);
// }

// let name = "Hashim Malik";
// let age = 22;
// let isFollow = true;
// let x = null;
// let y = undefined;
// let z = BigInt('123');
// let h = Symbol('abc');
// console.log(name, age, isFollow, x, y, z, h);

// Objects
// let studentHashimData = {
//     fullName : "Hashim Malik",
//     fatherName : "Altaf Ahmad",
//     age : 22,
//     class : "4th Semester",
//     CGPA : 3.58,
//     marks : 489,
//     isPass : true,
// }
// studentHashimData['fullName'] = "Hashim Ahmad Malik";
// console.log(studentHashimData["fullName"]);

// Practice Set 1
// let penDetails ={
//     penName : "Parker Jotter Standard CT Ball Pen",
//     penColor : "Black",
//     penStar : 4.5,
//     isDeal : true,
//     penPrice : 270,
//     penDiscount : "5%"
// }
// console.log(penDetails);

// Practice Set 2
// let myProfile = {
//     userName : "@hashimmalik95",
//     isFollow : true,
//     follower : 185,
//     following : 478
// }
// console.log(myProfile);
// console.log(typeof myProfile);
// console.log(typeof myProfile["userName"]);

// Chapter 2 (Operators and Conditional Statements)

//     Arithmeric Operators
// console.log("x + y = ", x + y);
// console.log("x - y = ", x - y);
// console.log("x * y = ", x * y);
// console.log("x / y = ", x / y);

// Modulus (Remainder)
// console.log("x % y = ", x % y);

// Exponentiation (value2 will be a exponent of value1 like, 9^7)
// console.log("x ** y = ", x ** y);

//      Unary Operators
// Increment
// increment++ (post)   --increment (pre)
// decrement++ (post)   --decrement (pre)
// ++x;
// console.log(++x);
// console.log(x);
// --x
// console.log(x);
// console.log(--x);

//       Assignment Operators
// =, +=, -=, *=, %=, **=
// console.log(x += y);
// console.log(x -= y);
// console.log(x *= y);
// console.log(x %= y);
// console.log(x **= y);

//      Comparison Operator

// console.log(x == y); // Equal to == (it will check the both values are equal)
// console.log(x != y); // Not Equal to != (it will not equal to)
// console.log(x !== y); // Not Equal & type (it will not be equal to and type)
// console.log(x === y); // Equal to & type (it will equal to and type also equal to)
// console.log(x > y);
// console.log(x >= y);
// console.log(x < y);
// console.log(x <= y);

// logical Operators

// let x = 9;
// let y = 7;
// console.log("x = 9 & y = 7");
// console.log("x <= 9 && y == 7", x <= 9 && y == 7);
// console.log("x <= 9 && y == 7", x <= 19 || y == 10);
// console.log("x <= 9 && y == 7", !(x == y));

//      Conditional Statements

// Ternary Operators

// let age = 22;
// age >= 18 ?console.log("Adult") : console.log("Not Adult")

// Practice Set 1

// let checkMultipleOf5 = prompt("Let's check mutiple of 5");
// if(checkMultipleOf5 % 5 === 0){
//     console.log(checkMultipleOf5, "This is a Multiple of 5");
// }else{
//     console.log(checkMultipleOf5, "This is not a Multiple of 5")
// }

// Practice set 2

// let checkMarksOfStudents = prompt("Please check the Marks of Students");
// let grade;
// if(checkMarksOfStudents >= 80 && checkMarksOfStudents <= 100){
// console.log("Contragulations! you are getting 'A grade")
// grade = "A"
// }else if(checkMarksOfStudents >= 70 && checkMarksOfStudents <= 89){
// console.log("Congratulations! you are geeting 'B' grade but next time try harder for 'A'")
// grade = "B"
// }else if(checkMarksOfStudents >= 60 && checkMarksOfStudents <= 69){
// console.log("Congratulations! you are geeting 'C' grade but next time try harder for 'B'")
// grade = "C"
// }else if(checkMarksOfStudents >= 50 && checkMarksOfStudents <= 59){
// console.log("Congratulations! you are geeting 'D' grade but next time try harder for 'C'")
// grade = "D"
// }else if(checkMarksOfStudents >= 0 && checkMarksOfStudents <= 49){
// console.log("Congratulations! you are geeting 'F' grade but next time try harder for 'D'")
// grade = "F"
// }
// console.log("Coongratulations! your", grade, "is");

//       Chapter 3 (Arrays)
// Arryas
// let cricketPlayers = ["Babar Azam", "Muhammad Rizwan", "Shaheen Shah Afridi", "Fakhar Zaman", "Naseem Shah"]
// console.log(cricketPlayers);
// console.log(cricketPlayers.length);
// console.log(cricketPlayers[3] = "Saim Ayub");
// console.log(cricketPlayers);

// let city1 = "Karachi"
// let city2 = "Lahore"
// let city3 = "Islamabad"
// let city4 = "Multan"
// let city5 = "Peshawar"
// let city6 = "Quetta"
// alert("Welcome to 'Awliyaon' ka shehar " + city4);

// Array Method

// let pakistaniCities = ["Peshawar", 'Karachi', 'Lahore', 'Multan', 'Islamabad', 'Quetta'];
// let indianCities = ["Bangalore", "Chennai", "Mumbai", "Kolkata"]
// let usCities = ["California", "Washington", "Los Angelas"];
// // cities.pop(); // pop() wil remove and item from an array both are working in the end of and array
// // cities.push("Islamabad", "Multan", "Quetta"); // push() wil add an item in the array both are working in the end of and array
// // cities.toString; // toString work to convert values into string in an array
// // cities.shift(); // shift() will remove and item from an array both are working in the start of and array
// // cities.unshift("Islamabad", "Peshawar", "Quetta"); // unshift() wil remove and item from an array both are working in the start of and array
// // let cities =  pakistaniCities.concat(indianCities, usCities); // concat() will join multiple arrays
// let newCities = pakistaniCities.slice(3, 5); // slice() method will remove the item from between array
// pakistaniCities.splice(5, 1, "Kashmir") // splice() methid will add, remove, replace items in an array
// console.log(pakistaniCities);

// Practice Set 1
// let companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
// companies.shift(); // Completed
// companies.splice(2, 1, "Ola") // Completed
// companies.push("Amazon"); // Completes
// console.log(companies);

// Chapter 3 (Loops)
// Loops are used to execute a piece of code again and again

// for Loop
// for (let i = 1; i <= 10; i++) {
//   console.log("Astaghfirullah");
//   console.log(i);
// }

// while Loop
// let x = 1;
// while(x <= 10){
//   console.log("Allah");
//   x++
// }

// do while Loop
// let y = 1;
// do{
//   console.log("Allah");
//   y++;
// }while(y <= 10);

// for in Loop
// let name = "Allah";
// for (let i of name) {
//   console.log(i);
// }

// for of loop
// let studentHashimData = {
//   fullName : "Hashim Malik",
//   fatherName : "Altaf Ahmad",
//   age : 22,
//   CGPA : 3.58,
//   isPass : true
// }
// console.log(studentHashimData);

// for(let data in studentHashimData){
//   console.log(data, "=", studentHashimData[data]);
// }

// for(let age = 22; age <= 50; age++){
//     console.log("Hashim Malik");
//     console.log(age);
// }

// let y = 1;
// while (y <= 10) {
//   console.log(y);
//   y++;
// }

// let z = 1;
// do {
//   console.log("Allah");
//   z++;
// } while (z <= 10);

// let fullName = "Hashim Malik";
// for(let i of fullName){
//     console.log(i);
// }

// let data = {
//     name : "Hashim",
//     age : 22,
//     cpga : 3.58,
//     isPass : true
// }
// for (let val in data){
//     console.log(val, "=", data[val]);
// }

// Practice Set 1

// for(let i = 0; i <= 100; i++){
//     if(i%2 === 0){
//         console.log(i, "This is even number");
// }
// }

// Practice Set 2

// let gameNumber = 22;
// let myNumber = prompt('Enter your game number');
// while(myNumber != gameNumber){
//     myNumber = prompt('You entered wrong game number')
// }
// alert('Congratulations you entered rigth number');

// Strings in JS

// let fullName = "Hashim Malik";
// console.log(fullName);
// console.log(fullName[6]);
// console.log(fullName.length);

// let name = `Hashim`;
// console.log(name);
// console.log(name.length);

// let myData = {
//     fullName : "Hashim Malik",
//     fatherName : "Altaf Ahmad",
//     age : 22,
//     isPass : true
// };
// console.log("My name is", myData.fullName, "And my father Name is", myData.fatherName, "my age is this", myData.age, "and i'm pass in my exam", myData.isPass);

// // Template Literals

// console.log(`My name is ${myData.fullName}, and my father name is ${myData.fatherName}, my age is ${myData.age}, i'm also pass in my exam ${myData.isPass}`);

// let convert = '         Hashim    Ahmad       Malik        ';
// let upperCase = convert.toUpperCase();
// let lowerCase = convert.toLowerCase();
// let trim = convert.trim();
// console.log(upperCase);
// console.log(lowerCase);
// console.log(trim);

// let character1 = "Hashim";
// let character2 = "Malik";
// let remove = character1.slice(1, 5);
// let concat = character1.concat(character2);
// let replace = character1.replace("h", "J")
// let search = character1.charAt(2);
// console.log(character1);

// // Practice set
// let fullName = prompt("Please enter your Full name");
// let userName = "@" + fullName + fullName.length;
// let gmail = "gmail.com";
// console.log(userName + gmail);

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// console.log(nameOfToday);

// myFunction();
// function myFunction(){
//     // do some work
//     alert("Allahu Akbar");
//     console.log("Allahu Akbar");
// }

// function message(quote){
//     console.log(quote);
// }
// message("'Every one should learn to code\nbecause it will improve your thinking\nSteve Job'");

// let x = 10;
// function myFunction(){
//     let x = 20;
//     console.log(x);
// }
// myFunction();

// let x = '123';
// y = Numebr(x);
// console.log(typeof y);

// let x = '5';
// let y = 3;
// let z = '5' + 3;
// console.log(z);

// let mrVar = "undefined";
// console.log(typeof mrVar);

// function stringNumber(str, num){
//     console.log(str * num);
// }
// stringNumber("Hashim Malik", 99);

// console.log('5' + 3 - 2);

// function sumOf2Numbers() {
//   let x = 3;
//   let y = 5;
//   let z = x + y;
// }
// sumOf2Numbers();

// function add(a, b){
//     console.log(a + b);
// }

// function sum(x, y){
//     add = x + y;
//     return add;
// }
// let addition = sum(2, 5);
// console.log(addition);

// function meraFunction(firstName, lastName, number){
// console.log(firstName,  lastName * number)
// }
// meraFunction("Hashim", "Malik", 32483940);

// function jama(a, b){
//     add = a + b;
//     console.log("In block code", add);
//     console.log(a);
//     console.log(b);
//     return add;
// }
// let jawab = jama(9, 11)
// console.log("Out of block code", jawab);

// const myArrowFunction = (value1, value2) => {
// console.log(value1 * value2);
// return value1 * value2;
// }

// Practice Set 1

// function myVowelsCount(str) {
//   let count = 0;
//   for (let i of str) {
//     if (i === "a" ||
//      i === "e" ||
//      i === "i" ||
//      i === "o" ||
//      i === "u") {
//     }
//     count++;
//   }
//   console.log(count);
// }

// let nowTime = new Date();
// let nowHours = nowTime.getHours();
// let nowMinutes = nowTime.getMinutes();
// let nowSecond = nowTime.getSeconds();
// let DOM1 = document.querySelector('.a').textContent = nowHours;
// let DOM2 = document.querySelector('.b').textContent = ":" + nowMinutes;
// let DOM3 = document.querySelector('.c').textContent = ":" + nowSecond;
// let DOM4 = document.querySelector('.d').textContent = "AM";
// console.log(nowHours + ":" + nowMinutes + ":" + nowSecond, "AM");
// // console.log(nowTime);

// let nowDate = new Date();
// let newMiliSeconds = nowDate.getMilliseconds();
// let newSeconds = nowDate.getSeconds();
// let newMinutes = nowDate.getMinutes();
// let newHours = nowDate.getHours();
// let newDate = nowDate.getDay();
// let newDate = nowDate.getDate();
// let newMonth = nowDate.getMonth();
// let newYear = nowDate.getFullYear();
// console.log(newMiliSeconds);
// console.log(newSeconds);
// console.log(newMinutes);
// console.log(newHours);
// console.log(newDate);
// console.log(newDate);
// console.log(newMonth);
// console.log(newYear);

// let date = new Date();
// console.log(date);

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// console.log(now)
// var theDay = now.getDay();
// console.log(theDay);
// var nameOfToday = dayNames[theDay];
// console.log(dayNames[6]);

// let d = ['sun','mon','tue','wed','thu','fri','sat']
// let day = d.getDay();
// console.log(day);

// let newDate = new Date();
// let newTime = newDate.getTime();
// console.log(newTime);

// let d = new Date();
// // var currentMonth = d.getMonth();
// let now = d.getUTCFullYear;
// console.log(now);

// let time = new Date();
// let newTime = time.setDay();
// console.log(newTime);

// let scoreAvg = 2;
// var numberOfStars = Math.round(scoreAvg);
// console.log(numberOfStars);

// function myFunction(x, y){
//     let z = x + y;
//     console.log(z);
//     return x;
// }
// myFunction(2, 9);

// function chickenBiryani(chawal, masala, chicken){
//     let biryaniTayyar = chickenBiryani;
//     console.log(biryaniTayyar);
//     return biryaniTayyar;
// }
// chickenBiryani();

// function time(){
//     let now = new Date();
//     let nowHours = now.getHours();
//     let nowMinutes = now.getMinutes();
//     alert(nowHours, ":", nowMinutes)
// }
// time();

// let time = new Date();
// let hours = time.getHours();
// let minutes = time.getMinutes();
// let DOM = hours, minutes;
// document.querySelector('h1').textContent = DOM;

// Get the current time
// let time = new Date();
// let hours = time.getHours();
// let minutes = time.getMinutes();
// let seconds = time.getSeconds();

// // Format the time
// let formattedTime = `${hours}:${minutes}:${seconds} PM`;

// // Display the time on the DOM
// document.querySelector('h1').textContent = formattedTime;

// function myFunction(){
//     document.write('Hello World');
//     document.write('<br>');
//     document.write('Hello World');
//     document.write('<br>');
//     document.write('Hello World');
//     document.write('<br>');
//     document.write('Hello World');
//     document.write('<br>');
//     document.write('Hello World');
//     document.write('<br>');
// }
// myFunction();

// function Almighty(){
// document.write('SubhanAllah');
// document.write('<br>');
// document.write('Alhamdulillah');
// document.write('<br>');
// document.write('AllahuAkbar');
// document.write('<br>');
// }
// Almighty();
// Almighty();
// Almighty();
// Almighty();

// function sum(x, y) {
//     // console.log(x + y);
//     let z = x + y;
//     return z;
// }
// sum(3, 8);
// sum(7, 2);
// sum(4, 6);
// sum(1, 5);
// sum(0, 9);

// function myFullName(firstName, lastName){
//     console.log(myFullName);
//     myFullName = firstName + lastName;
//     return myFullName;
// }
// myFullName("Hashim", "Malik");

// alert("Good Morning");
// alert("Hashim Malik");

// let number1 = 3.5;
// let number2 = 9.5;
// let number3 = number1 + number2;
// console.log(Math.round(number3));

// let Dal = 100;
// let Roti = 10*2;
// let  iceCream = 30;
// let bill = Dal + Roti + iceCream;
// bill.toString();
// console.log("You'r bill is " + bill);
// alert("You'r bill is " + bill)
// let priceOfIphone = 79990;
// let airPods = 24990*2;
// console.log(priceOfIphone*18/100, airPods*18/100);

// let doubleQoutes = "Hashim Malik";
// let singleQoutes = 'Hashim Malik';
// let backTicks = `Hashim Malik`;
// console.log(doubleQoutes,singleQoutes,backTicks);

// let firstName = "Hashim";
// let lastName = "Malik";
// let fullName = "Hashim Malik";
// let age = 22;
// console.log(firstName + " " +lastName);
// console.log(fullName + " " + age);

// let myString = "HASHIM MALIK";
// let upperCase = myString.toUpperCase();
// let lowerCase = myString.toLowerCase();
// console.log(lowerCase);

// function meraKaam(){
//     console.log("Allah");
// }
// meraKaam();

// function kuchBhi(pehlaNaam, dusraNaam){
//     console.log(dusraNaam, pehlaNaam);
// }
// kuchBhi("Hashim", "Ahmad");

// function functionJama(value1, value2){
//     console.log(value2 + value1);
//     console.log(value2 - value1);
//     console.log(value2 * value1);
//     console.log(value2 / value1);
//     console.log(value2 % value1);
// }
// functionJama(12,5);

// function mathematics(a,b){
//     console.log(a + b);
// }

// function multiply(x, y) {
//   z = x * y;
//   return z;
// }
// let reuslt =  multiply(9, 6);
// console.log(reuslt);

// let arrowCalcuation = (data1, data2) => {
//   console.log(data1 + data2);
// }
// arrowCalcuation(2, 9);

// let arrowMultiply = (num1, num2) => {
// console.log(num1 * num2);
// return num1 * num2;
// }
// let answer = arrowMultiply(5,7);
// console.log(answer);  // In Arrow function it cannot show answer
//  we need to declare further variable and then need to console

// let divide = (div1, div2) => {
//   console.log(div1/div2)
// }
// divide(6,3);

// function meraFunction(abc,xyz){
//   alpha = abc + xyz;
//   console.log(alpha);
//   return alpha;
// }
// meraFunction(234,6);

// const sum = (firstName, lastName) => {
//   return firstName+lastName;
// }
// sum(1,2)

// const sum = (x,y) => {
//   console.log(x+y)
//   // z = x + y;
//   // return z;
// }

// let arrowMultiply = (multiply1, multiply2) => {
//   console.log(multiply1 * multiply2)
// }
// arrowMultiply(23,2);

// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   // console.log(count);
//   return count;
// }