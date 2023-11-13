//console.log('i love pizza');
//console.log('its realy good');
//window.alert('This is wonderful');

//single line comment

/*multiple
line
comment*/

//Dealing with variables

//let age = 20;
//let firstName = 'Bro';
//let student = true;
//console.log(age);
//console.log(firstName);
//console.log(student);

//document.getElementById('p1').innerHTML='I am not incharge';
//document.getElementById('p2').innerHTML='I am not fine';
//document.getElementById('p3').innerHTML='I am not coming';

/*arithematic expression is a combination of
operands(values,variables etc)
operators(+,-,*,%,/)
that can be evaluated to a value
e.g z = x + y; */

//let students = 20;
//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students % 2;
//console.log(students);
//let extraStudents = students % 3;
//console.log(extraStudents);

/*operator precedence
1.parentesis()
2.exponents
3.multiplication and division
addition and subtraction */


/*How to accept user inpu

1.window prompt
2.Html textbox */

//E.g

//let username = window.prompt("what is your name");
//console.log(username);
//let username;

//document.getElementById("myButton").onclick = function(){
  //  username = document.getElementById("myText").value;
    //console.log(username);
    //document.getElementById("myLabel").innerHTML = username;
//}
    
//type conversion:changing from one data type to another

//let age2 = window.prompt("How old are you?:");
//age = Number(age2);
//console.log("You are",age2,"years old");

//const=variables that can't change
//to calculte circumference of a circle
// c= 2*pie*r

//const pie = 3.1429;
//let radius;
//let circumference;

//radius = window.prompt("Enter the radius:");
//radius = Number(radius);
//circumference = 2 * pie *radius;
//console.log("The circumference is",circumference);
 //Lets talk about math:math is an intrinsic object that provides basic mathematics functionality and constants

//  let x = 3.142;
//  let y= 5;
//  let z = 9;
//  let maximum;
//  let minimum;
 //x = Math.floor(x);
 // x = Math.round(x);
 //x = Math.ceil(x);
 //x = Math.pow(x,2);
 //x = Math.sqrt(x);
 //x = Math.abs(x);
 //maximum = Math.max(x,y,z);
 //minimum = Math.min(x,y,z);
 //console.log(minimum); 
 
 //Program to get the hypothenus of a right-angled triangle

//  let a;
//  let b;
//  let c;

 /*a = window.prompt("Enter A");
 a = Number(a);

 b = window.prompt("Enter B");
 b = Number(b);

c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
console.log("C is:",c);*/

//We can use more advanced method by going to html

// document.getElementById("SubmitButton").onclick=function(){
//     a = document.getElementById("aTextBox").value;
//     a = Number(a);

//     b = document.getElementById("bTextBox").value;
//     b = Number(b);

//     c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
//     document.getElementById("cLabel").innerHTML="C is :" +c;

// }

//To create simple counter using JavaScript
//we go to html file and create one label and three buttons

// let count = 0;
// document.getElementById("decreaseBtn").onclick=function(){
//     count -= 1
//     document.getElementById("countLabel").innerHTML=count;

// }
// document.getElementById("resetBtn").onclick=function(){
//     count = 0;
//     document.getElementById("countLabel").innerHTML=count;

// }
// document.getElementById("increaseBtn").onclick=function(){
//     count += 1;
//     document.getElementById("countLabel").innerHTML=count;
// }

//To make game with JavaScript: we beging by creating a random number

//let x = Math.random();//generate a random decimal number between 0 and 1
//console.log(x);

//To generate a random between 1 and 0,we have

//let x = Math.random() * 6; //generate a random nuber between zero and five
//console.log(x);
//to truncate the zeros,we round down

//let x = Math.floor(Math.random() * 6);
//console.log(x);

//to generate random number between one and six as in a dice,

//let x= Math.floor(Math.random() * 6)+1;
//console.log(x);

//if you want to generate a random number between one and twenty as in a 20-sided dice, you have
//let x= Math.floor(Math.random() * 20)+1;
//console.log(x);

//This will serve as a rolling dice

// let x= Math.floor(Math.random() * 6)+1;
// let y= Math.floor(Math.random() * 6)+1;
// let z= Math.floor(Math.random() * 6)+1;

// console.log(x);
// console.log(y);
// console.log(z);

//let us create some label in our html

// let x;
// let y;
// let z;

// document.getElementById("rollButton").onclick = function(){
//     x= Math.floor(Math.random() * 6)+1;
//     y= Math.floor(Math.random() * 6)+1;
//     z= Math.floor(Math.random() * 6)+1;

//    //we use code below to update the numbers after the each click
//    document.getElementById("xLabel").innerHTML = x; 
//    document.getElementById("yLabel").innerHTML = y; 
//    document.getElementById("zLabel").innerHTML = z; 
// }

//Useful string properties and methods:.lenght,.charAt,e.t.c

// let userName = 'Bro John';
// let username;
//et phoneNumber = "123-456-789";
//userName.length;
//console.log(userName.length);
//console.log(userName.charAt(0));//finding the xter on index 0
//console.log(userName.indexOf("o"));
//console.log(userName.lastIndexOf("o"));
//console.log(userName.trim());

// username = userName.toUpperCase();
// console.log(username);
// username = userName.toLowerCase();
// console.log(username);

//phoneNumber = phoneNumber.replaceAll("-","/");
//console.log(phoneNumber);
//console.log(username);

//phoneNumber = phoneNumber.replaceAll("-","");
//console.log(phoneNumber);

//Slice method: it extracts a portion of the string,returns it as a new string without modifying the original string

//let fullName = "Bro Code";
//let firstName;
//let lastName;

//firstName = fullName.slice(0,3);
//console.log(firstName);
//lastName = fullName.slice(4);
//console.log(lastName);

//alternatively,instead of counting the index mannually, we can use

//firstName = fullName.slice(0,fullName.indexOf(" "));
//lastName = fullName.slice(fullName.indexOf(" ")+1);

//console.log(firstName);
//console.log(lastName);

//method chaining: calling one method after another in one continuos line of code

//let userName = 'bRo';
//let letter = userName.charAt(0).toUpperCase();
//console.log(letter);



//If statement :A basic form of decission making
//If a condition is true,then do something
//if its not true,don't do it

// let age = 80;
// if(65 >age >= 18){
//     console.log("You are an adult");
// }
// else if(age < 0){
//     console.log("You haven't been born");
// }
// else if(age >= 65){
//     console.log("You are a senior citizen");
// }
// else{
//     console.log("You are a child");
// }

//Using check property in JavaScript

// document.getElementById("myButton").onclick = function(){
//     const myCheckBox = document.getElementById("myCheckBox")
//     const masterBtn = document.getElementById("masterBtn")
//     const visaBtn = document.getElementById("visaBtn")
//     const paypalBtn = document.getElementById("paypalBtn")    
//     if(myCheckBox.checked){
//         console.log("You are subscribed");
//     }
//     else{
//         console.log("You are not subscribed");
//     }
//     if(masterBtn.checked){
//         console.log("You are paying with master card");
//     }
//     else if(visaBtn.checked){
//         console.log("You are paying with Visa Card");
//     }
//     else if(paypalBtn.checked){
//         console.log("You are paying with Paypal");
//     }
//     else{
//         console.log("You must select a payment type");
//     }
// }

//Switch: A statement that examines a value 
//for a match against many case clauses.
//More efficient than many esle if statements

// let grade = "A";
// switch(grade){
//     case"A":
//         console.log("You did excellent!");
//         break;
//     case"B":
//         console.log("You did very good");
//         break;
//     case"C" :
//         console.log("You did well");
//         break;
//     case"D":
//         console.log("You Passed");
//         break;
//     case"F":
//         console.log("You failed");
//         break;
//     default:
//         console.log(grade, "is not a letter grade");
// }

//Another example of using switch

// let grade = "85";
// switch(true){
//     case grade >= 90:
//         console.log("You did excellent!");
//         break;
//     case grade >=80:
//         console.log("You did very good");
//         break;
//     case grade >= 70:
//         console.log("You did well");
//         break;
//     case grade >=60:
//         console.log("You Passed");
//         break;
//     case grade >=50:
//         console.log("You failed");
//         break;
//     default:
//         console.log(grade, "is not a letter grade");
// }

//Gives us ability to check more than one condition concurently
//&& AND(Both conditions must be true)
// || OR(Either of the conditon must be true)
// let temp = 20;
// if(temp> 0 && temp<30){
//     console.log("The weatheris good");
// }
// else{
//     console.log("The weather is bad")
// }
// if(temp> 0 || temp<30){
//     console.log("The weather is good");
// }
// else{
//     console.log("The weather is bad")
// }
//! NOT logical operator is used to reverse a conditions boolean value
//true->false  false->true

// let temp = -15;
// let sunny = true;
// if(temp>0){
//     console.log("Its warm outside");
// }
// else{
//     console.log("Its cold outside");
// }

// //it can also be written as
// if(!(temp>0)){
//      console.log("Its cold outside");
// }
// else{
//      console.log("Its warm outside")
// }

// if(sunny){
//     console.log("Its sunny outside")
// }
// else{
//     console.log("Its cloudy outside")
// }

// if(!(sunny)){
//     console.log("Its cloudy outside")
// }
// else{
//     console.log("Its sunny outside")
// }

//while loop:used to repeat some code 
//while some condition its true
//potentially infinite

// let userName = "";
// while(userName==""){
//     userName = window.prompt("Enter your name:");
// }
// console.log("Hello",userName);

// let userName = "";
// while(userName=="" || userName == null){
//     userName = window.prompt("Enter your name:");
// }
// console.log("Hello",userName);

//Case of infinite

// while(1==1){
//     console.log("Help I am stuck in an infinite loop");
//     break;
// } 


//do while loop: do something,
//                then check the condition,
//                repeat if condition is true

// let userName;
// do{
//   userName = window.prompt("Enter your name:");
// }
// while(userName==""){
//   console.log("Hello",userName);
// }

//for loop: repeat some code a 
//          certain amount of times


// for(let counter=1;counter<=10;counter+=1){
//   console.log(counter);
// }

// for(let i=10;i>0;i-=2){
//   console.log(i);
// }
// console.log("Happy new year!")

//break: breaks out of a loop entirely
//continue:skip an iteration of a loop

// for(let i = 1;i <= 20;i += 1){
//   if(i==13){
//     break;
//   }
//   console.log(i);
// }


// for(let i = 1;i <= 20;i += 1){
//   if(i==13){
//     continue;
//   }
//   console.log(i);
// }

//Nested loop: It is a loop inside another loop

// for(let i=1;i<=2;i+=1){
//   for(let j=1;j<=3;j+=1){
//     console.log(j);
//   }
// }


//Using a nested loop to draw a rectangle
//the outer loop will be incharge of the rows
//the inner loop will be incharge of the columns

//Find out why this is not working
//let symbol = window.prompt("Enter a sybol to use");
// let rows = window.prompt("Enter # of rows:");
// let columns = window.prompt("Enter # of columns:");

// for(let i=1;i<=rows;i+=1){
//   for(let j=1;j<=columns;j+=1){
//     document.getElementById("myRectangle").innerHTML+=j;
//   }
//   document.getElementById("myRectangle").innerHTML+=i;
// }


//Function: Define code once and use it many times
//            to perform some ConvolverNode,call the function

// let username = "John";
// age = 21;
// function happyBirthday(){
//   console.log(username,",happy birthday to you")
//   console.log("Happy birthday to dear,",username)
//   console.log("Happy birthday to you")
//   console.log("You are", age, "years old")
// }
// happyBirthday()
// happyBirthday()

//return: used within a function to return
//         a value back to the place where you invoked a function

//An example is to calculate the arae of a rectangle
//using a function and return the value

// let lenght;
// let width;
// let area;
// width = window.prompt("Enter width:");
// lenght = window.prompt("Enter lenght:");

// area = getArea(lenght,width);
// console.log("The area is",area);

// function getArea(lenght,width){
//   return lenght*width;
// }

//ternary operator: shortcut for an "if/else statement"
//                  takes three operands
//                  1.A condition with ?
//                   2.expression if True
//                    3.expression if False
//condition ? exprIfTrue : exprIfFalse

//E.g lets use a check age function

// let adult = checkAge(11);
// console.log(adult);

// function checkAge(age){
//   if(age>=18){
//     return true;
//   }
//   else{
//     return false;
//   }

// }

//Using ternary operator,we have

// let adult = checkAge(18);
// console.log(adult);

// function checkAge(age){
//  return age>=18? true:false;

// }

//An example to check if somebody won agame
//This involves boolean value

//checkWinner(true);

// function checkWinner(win){
//   win ? console.log("You win!"): console.log("You loose!");
// } 

//Variable scope: Where a variable is accessible
//let: variables are limited to  block scope{}
//var:variables are limited to a function(){}
//Global variable is decleared outside any function
//(if global,var will CHANGE browser's window properties)

//Example of a variable limited to block scope

//for(let i=1;i<=3;i+=1){
  //console.log(i);//this will work
//}
//console.log(i); //will not work because the variable 'i' is limited to block scope

//declaring variable i with var
//for(var i=1;i<=3;i+=1){
  //console.log(i);//this will work
//}
//console.log(i); //will also work because the variable 'i' is decleared with var


//variable decleared with var keyword is limited to a function.e.g

// doSomething();
// function doSomething(){
//   for(var i=1;i<=3;i+=1){
//     console.log(i);//this will work
//   }
// }
//console.log(i);//this will not work

//let name = 'John';//global variable because it was decleared outside any function

//you don't declear a global variable with var keyword because it will change the browser's properties


//Template literals = delimited with (``)
//instead of double or single quotes allows embedded variables and expressions

// let userName = 'John';
// let items = 3;
// let total = 75;

// console.log("Hello",userName);
// console.log("You have",items,"items in your cart");
// console.log("Your total is $",total);


//The above can be written using template literals.
//here you insert the variable inside a {} preceded by a dollar sign

// console.log(`Hello ${userName}`);
// console.log(`You have ${items} items in your cart`);
// console.log(`Your total is $ ${total}`);

//This csn be done in a single line
//let text=`Hello ${userName}<br> You have ${items} items in your cart<br> Your total is $ ${total}`;
//console.log(text);


//This is more useful when we need to change HTML document

//document.getElementById("myLabel").innerHTML=text;


//toLocaleString:returns a string with a language 
//                sensitive representation of this number
//number.toLocaleString(locale,{options});

//'tolocale' = specify that language(undefined=default set in browser)
//'options' = object with formatting options


//let myNum = 123456.789;
//myNum = myNum.toLocaleString("en-US");//US English
//myNum = myNum.toLocaleString("hi-IN");//Hindi
//myNum = myNum.toLocaleString("de-DE");//standard German

//Any language you need,you look up the code

//Lets format some currencies.just look up the currency code

//myNum = myNum.toLocaleString("en-US",{style: "currency",currency:"USD"});//DOLLARS
//myNum = myNum.toLocaleString("hi-IN",{style: "currency",currency:"INR"});//REUBIES
//myNum = myNum.toLocaleString("de-DE",{style: "currency",currency:"EUR"});//EUROS

//Intead of style of currency,lets try percent
//here,we set the first argument as undefined

//myNum = myNum.toLocaleString(undefined,{style:"percent"});//formating a number as a percent
//myNum = myNum.toLocaleString(undefined,{style:"unit",unit:"celsius"});//formating the number to a unit
//console.log(myNum);


//javascript code for guessing game

// const answer = (Math.floor(Math.random()*10+1));
// let guesses = 0;

// document.getElementById("submitButton").onclick=function(){
//   let guess = document.getElementById("guessField").value;
//   guesses +=1;
//   if(guess==answer){
//     alert(`${answer} is the number. It took you ${guesses} guesses`)

//   }
//   else if(guess<answer){
//     alert(`Too small`);
//   }
//   else{
//     alert(`Too large!`)
//   }
// }

//Creating a practice program 
//to convert temperature using html element



// function toCelsius(temp){
  
//   return (temp-32)*(5/9);
// }
// function toFahrenheit(temp){
//   return temp*9/5+32;
// }


// document.getElementById("submitBtn").onclick=function(){
//   let temp;
//   if(document.getElementById("cBtn").checked){
//        temp=document.getElementById("textBox").value;
//        temp=Number(temp);
//        temp = toCelsius(temp);
//        document.getElementById("tempLabel").innerHTML=temp+"";
//   }else if(document.getElementById("fBtn").checked){
//     temp=document.getElementById("textBox").value;
//        temp=Number(temp);
//        temp = toFahrenheit(temp);
//        document.getElementById("tempLabel").innerHTML=temp+"";

//   }else{
//     document.getElementById("tempLabel").innerHTML="Select a unit";

//   }

// }

//Array: is a variable that can store multiple values

//let fruits = ["orange","mango","apple","banana"];

//console.log(fruits);
//console.log(fruits[0]);//display only the element on idex 0
//you can replace any of the element with
//fruits[0] = "coconut";//replace an element
// console.log(fruits);
//to add a new element to the array,use push

//fruits.push("lemon");//add an element

//fruits.pop();//removes last element

//fruits.unshift("lemon");//adds element to begining of the array
//console.log(fruits);

//fruits.shift();//removes element from the begining
// let length = fruits.length;//no of elements in the array
// let index = fruits.indexOf("apple");
// console.log(index);

//Looping through elements of an array
//one way is to use  standard for() loop

//let prices = [5,10,15,20];

// for(let i=0;i<prices.length;i+=1){
//   console.log(prices[i]);
// }

//to count in descending order, we have

// for(let i= prices.length-1;i>=0;i-=1){
//   console.log(prices[i]);
// }

//alternatively,we use for of:

// for(let price of prices){
//   console.log(price);
// }

//Sorting an array of strings in JavaScript

//let fruits = ["orange","mango","apple","banana"];
//fruits = fruits.sort();//in alphabetical order
// fruits = fruits.sort().reverse();//in reverse alphabetical order
// for(let fruit of fruits){
//   console.log(fruit);
// }

//2D arrays(multi-dimentional array):its an array of arrays

// let fruits =      ["oranges","apples","bananas"];
// let vegetables =  ["onions","potatoes","carriots"];
// let meats =       ["eggs","chicken","fish"];

//we combine these three arrays to form a 2D array

//let groceryList = ["fruits","vegetables","meats"];

//to replace oranges with mangoes,we have
//groceryList[0][0] = "mangoes"

//to replace bananas with pineaple,we have
// groceryList[0][2] = "mangoes"


// for(let list of groceryList){
//     for(let food of list){
//         console.log(food);
//     }
// }
//Spread operator(...): allows an iterable such as an array or
// string to expanded in places where zero 
//or more arguments are expected(unpacks the elements). e.g

//let Numbers = [1,2,3,4,5,6,7,8,9];
//let userName ="BRO JOHN";
//console.log(Numbers);
//console.log(...Numbers);
//console.log(userName);
//console.log(...userName);

//Application of spread operator 
//to get maximum number from Numbers

//let maximum = Math.max(Numbers);//will not work
//let maximum = Math.max(...Numbers);//this worked
//console.log(maximum);//gives result

//Using speread operator to merge two classes

// let class1 = ["john","james","joke"];
// let class2 = ["edith","joshua","jenny"];
// //class1.push(class2);
// class1.push(...class2);//this displays all the six students
// //console.log(class1);
// console.log(...class1);


//rest parameters represent an indefinite number of parameters
//packs arguments into an array
//...
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a, b, c, d, e));

// function sum(...numbers){
//   let total = 0;
//   for(let number of numbers){
//     total += number
//   }
//   return total  
// }

//callback: a function passed as an argument into another function
//ensure that a function is not going 
//to run before a task is completed
//help us develope assynchronous code
//(when one function has to wait for another function)
//that helps us avoid errors and potential problems
//Ex. wait for a file to load

//In this example, when you pass displayConsole into sum().the result will display on the console
//when you pass displayDOM,the result will display on the DOM by changing the innerHTML 

// sum(2,3,displayDOM);

// function sum(x,y,doSomething){
//   let result = x+y;
//   doSomething(result);
// }

// function displayConsole(output){
//   console.log(output);
// }
// function displayDOM(output){
//   document.getElementById("myLabel").innerHTML = output;
// }

//array.forEach(): executes a provided callbck function
//once for each array element


let students = ["john","james","jonah"];
students.forEach(capitalize);

function capitalize(element,index,array){//function to capitalise the first letter of each string
  array[index] = element[0].toUpperCase+element.substring(1);//this line will capitalize the first letter of each string

}
console.log(students[0]);
2:44:01

