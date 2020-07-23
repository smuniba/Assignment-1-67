//Chapter 1
//Question 1
// alert("Hello! Welcome to my Website");
//Question 2
// alert("JavaScript Alert\n\nError! Please enter a valid password.");
//Question 3
// alert("JavaScript Alert\n\nWelcome to JS Land...\nHappy Coding!");
//Question 4
// alert("JavaScript Alert\n\nWelcome to JS Land...");
// alert("JavaScript Alert\n\nHappy Coding!\n☐Prevent this page from creating additional dialogs.")
//Question 5
// console.log("JavaScript Alert\n\nHello... I can run JS through my web browser's console")
//Chapter 2
// //Question 1
// var username;
// //Question 2
// var myName = "Syeda Muniba Faisal";
// //Question 3
// var message = "Hello World";
// alert(message);
// //Question 4
// var name = "Jhone Doe";
// var age = "15 years old";
// var certification = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(certification); 
// //Question 5
// var food = "PIZZA";
// food1 = food.slice(0,5);
// food2 = food.slice(0,4);
// food3 = food.slice(0,3);
// food4 = food.slice(0,2);
// food5 = food.slice(0,1);
// alert(food1+"\n"+food2+"\n"+food3+"\n"+food4+"\n"+food5);
// //Another Solution
// document.write("Chapter 2");
// document.write("<br>Question 5<br>");
// for(var i=food.length;i>0;i--)
// {
//     var food1 = food.slice(0,i);
//     alert(food1);
//     document.write(food1+"<br>");
// }
// //Question 6
// var email = "muniba.faisal.qadri@gmail.com";
// alert("My email address is "+email);
// //Question 7
// var book = "A smarter way to learn JavaScript.";
// alert("I am trying to learn from the Book "+book);
// //Question 8
// document.write("<br>Chapter 5 Question 8<br>");
// document.write("Yah! I can write HTML content through JavaScript"); 
// //Question 9
// document.write("<br>Chapter 5 Question 9<br>");
// var str1 = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(str1);
// document.write("<br>")
// document.write(str1);
// //Chapter 3
// //Question 1
// var age = 20;
// alert("I am "+age+" years old.");
// //Question 2
// var times = 14;
// alert("You have visited this site "+times+" times");
// //Question 3
// var birthYear = 2000;
// document.write("<br>My birth year is "+birthYear+"<br>Data type of my declared variable is number.");
// //Question 4
// var name = prompt("Enter name:");
// var title = prompt("Enter product title:");
// var quantity = prompt("Enter number of products to be ordered:");
// document.write("<br>"+name+" ordered "+quantity+" "+title+" on XYZ Clothing store.");
// //Chapter 4
// //Question 1
// var name ;var fatherName;var age ;
// //Question 2
// // var name;var fatherName;var $age;var car_Name;var _house;
// // var 123;var ?house;var alert;var 12_house;var !@##;
// //Chapter 5
// //Question 1
// var num1 = +prompt("Enter first number: ");
// var num2 = +prompt("Enter second number: ");
// var result = num1 + num2;
// document.write("<br>Sum of "+num1+" and "+num2+" is "+result);
// //Question 2
// var num1 = +prompt("Enter first number: ");
// var num2 = +prompt("Enter second number: ");
// var result1 = num1 - num2;
// var result2 = num1 * num2;
// var result3 = num1 / num2;
// var result4 = num1 % num2;
// document.write("<br>Subtraction of "+num1+" and "+num2+" is "+result1);
// document.write("<br>Multiplication of "+num1+" and "+num2+" is "+result2);
// document.write("<br>Division of "+num1+" and "+num2+" is "+result3);
// document.write("<br>Modulus of "+num1+" and "+num2+" is "+result4);
// //Question 3
// var num1;
// document.write("<br>Value after variable declaration is:"+num1);
// num1 = 10;
// document.write("<br>Initial Value: "+num1);
// num1 = num1 + 1;
// document.write("<br>Value after increment is: "+num1);
// num1 = num1 + 7;
// document.write("<br>Value after addition is: "+num1);
// num1 = num1 - 1;
// document.write("<br>Value after decrement is: "+num1);
// num1 = num1 % 3;
// document.write("<br>The remainder is: "+num1);
// //Question 4
// var price = 600;
// var cost = price * 5;
// document.write("<br>Total cost to buy 5 tickets to a movie is "+cost+"PKR");
// //Question 6
// var celsius = 25;
// var result = (celsius*(9/5))+32;
// var fahrenheit = 70;
// var result1 = (fahrenheit-32)*(5/9);
// document.write("<br>"+celsius+"oC"+"is "+result+"oF");
// document.write("<br>"+fahrenheit+"oF"+"is "+result1+"oC");
// //Question 10
// var number = 10;
// var result = ((number + 5) * 10)/2;
// document.write("<br>The result is: "+result);
// //Chapter 6-9
// //Question 1
// var a = 10;
// document.write("<br>Result: ");
// document.write("<br>The value of a is: "+a);
// document.write("<br>.....................................");
// ++a;
// document.write("<br>The value of ++a is: "+a);
// document.write("<br>Now the value of a is: "+a);

// document.write("<br>The value of a++ is: "+a);
// a++;
// document.write("<br>Now the value of a is: "+a);
// --a;
// document.write("<br>The value of --a is: "+a);
// document.write("<br>Now the value of a is: "+a);

// document.write("<br>The value of a-- is: "+a);
// a--;
// document.write("<br>Now the value of a is: "+a);
// //Question 2
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write("<br>--a = 1");
// document.write("<br>--a - --b = 1 - 0 = 1");
// document.write("<br>--a - --b + ++b = 1 - 0 + 1 = 2");
// document.write("<br>--a - --b + ++b + b-- = 1 - 0 + 1 + 1 = 3");
// document.write("<br>a is 1");
// document.write("<br>b is 2")
// document.write("<br>result is "+result);
// //Question 3
// var name = prompt("Enter name: ");
// alert("Hello! "+name+" Good Morning");
// //Question 5
// var number1 = +prompt("Enter number to print its table: ");
// for(var i=1;i<=10;i++)
// {
//     if(number1 == "")
//     {
//         document.write("<br>");
//         document.write("5x"+i+"="+5*i);
//     }
// else
// {
//     document.write("<br>");
//     document.write(number1+"x"+i+"="+number1*i);
//     document.write("<br>");
// }
// }
// //Chapter 9-11
// //Question 1
// var city = prompt("Enter city name: ");
// if(city === "Karachi")
// {
//     alert("Welcom to city of lights.");
// }
// //Question 2
// var gender = prompt("Enter your gender: ");
// if(gender === "male" || gender === "Male")
// {
//     alert("Good Morning Sir.");
// }
// else if(gender === "female" || gender === "Female")
// {
//     alert("Good Morning Ma’am.");
// }
// //Question 4
// var fuel = +prompt("Enter remaining fuel in your car in litres: ");
// if(fuel < 0.25)
// {
//     alert("Please refill the fuel in your car")
// }
// //Question 5
// //a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// //b no output
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// //c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }//correct 
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }//correct
// //d output
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// //e
// if (true){
//     alert("True");
//     }//correct
//     if (false){
//     alert("False");
//     }
// //f
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
// //Question 7
// var secret = 5;
// var secret1 = +prompt("Guess the secret number: ");
// if(secret1 === 5)
// {
//     alert("Bingo! Correct Answer")
// }
// else if((secret1=secret1+1) === 5)
// {
//     alert("Close enough to the correct answer.");
// }
// //Question 8
// var numb = +prompt("Enter number to check whether it's divisible by 3 or not: ");
// if(numb%3 == 0)
// {
//     alert("The number is divisible by 3");
// }
// else
// {
//     alert("Number isn't divisible by 3");
// }
// //Question 9
// var numb1 = +prompt("Enter number to know if it's even or odd: ");
// if(numb1%2 == 0)
// {
//     alert("The number is even");
// }
// else
// {
//     alert("The number is odd");
// }
// //Question 10
// var temp = +prompt("Enter temperature: ");
// if(temp > 40)
// {
//     alert("It is hot outside.");
// }
// else if(temp > 30)
// {
//     alert("The Weather today is Normal.");
// }
// else if(temp > 20)
// {
//     alert("Today's Weather is Cool.");
// }
// else if(temp > 10)
// {
//     alert("OMG! Today's weather is so Cool.");
// }
// //Question 11
// document.write("<br>");
// var firstNumber = +prompt("Enter first number for calculation: ");
// var secondNumber = +prompt("Enter second number for calculation: ");
// var operator = prompt("Enter operator: ");
// var result = "";
// if(operator == "+")
// {
//     result = firstNumber + secondNumber;
//     alert(firstNumber+operator+secondNumber+"="+result);
// }
// else if(operator == "-")
// {
//     result = firstNumber - secondNumber;
//     alert(firstNumber+operator+secondNumber+"="+result);
// }
// else if(operator == "*")
// {
//     result = firstNumber * secondNumber;
//     alert(firstNumber+operator+secondNumber+"="+result);
// }
// else if(operator == "/")
// {
//     result = firstNumber / secondNumber;
//     alert(firstNumber+operator+secondNumber+"="+result);
// }
// else if(operator == "%")
// {
//     result = firstNumber % secondNumber;
//     alert(firstNumber+operator+secondNumber+"="+result);
// }
// //Chapter 12-13
// //Question 1
// var str2 = prompt("Enter anything other than special character:");
// var str3 = parseInt(str2);
// if(str3 >= 48 && str3 <= 57)
// {
//     alert("It's a number");
// }
// else if(str2 >= 65 && str2 <= 90)
// {
//     alert("It's an uppercase letter");
// }
// else if(str2 >= 97 && str2 <= 122)
// {
//     alert("It's a lowercase letter");
// }
// //Question 2
// var int1 = +prompt("Enter first integer: ");
// var int2 = +prompt("Enter second integer: ");
// if(int1 > int2)
// {
//     alert("Integer 1 is larger");
// }
// else if(int2 > int1)
// {
//     alert("Integer 2 is larger");
// }
// else if(int1 === int2)
// {
//     alert("Both are equal");
// }
// //Question 3
// var numb1 = +prompt("Enter a number to know if it's positive,negative or zero")
// if(numb1 > 0)
// {
//     alert("The number is positive")
// }
// else if(numb1 < 0)
// {
//     alert("The number is negative")
// }
// else
// {
//     alert("The number entered is zero")
// }
// //Question 4
// var str3 = prompt("Enter a character: ");
// if(str3=="a" || str3=="A" || str3=="e" || str3=="E" || str3=="i" || str3=="I" || str3=="o" || str3=="O" || str3=="u" || str3=="U")
// {
//     alert("True");
// }
// else
// {
//     alert("False");
// }
// //Question 5
// var password = "abc123";
// var pass = prompt("Enter your password: ");
// if(pass == "")
// {
//     alert("Please enter your password");
// }
// else if(pass == password)
// {
//     alert("Correct! The password you entered matches the original password");
// }
// else
// {
//     alert("Incorrect password");
// }
// //Question 6
// var greeting;
// var hour = 13;
// if (hour < 18) 
// {
//     greeting = "Good day";
//     document.write(greeting);
// }
// else
// {
//     greeting = "Good evening";
//     document.write(greeting);
// }
// //Question 7
// var time = prompt("Enter time in 24 hours clock format e.g 1900 as 7pm");
// if(time >= "0000" && time < "1200")
// {
//     alert("Good Morning");
// }
// else if(time >= "1200" && time < "1700")
// {
//     alert("Good Afternoon");
// }
// else if(time >= "1700" && time < "2100")
// {
//     alert("Good Evening");
// }
// else if(time >= "2100" && time <= "2359")
// {
//     alert("Good Night");
// }
// else
// {
//     alert("You didn't enter the time of corret clock format");
// }
// //Chapter 14-16
// //Question 1
// var arr1 = [];
// //Question 2
// var arr2 = {};
// //Question 3
// var str4 = ["car","bike","bicycle"];
// //Question 4
// var arr3 = [2,3,4,5];
// //Question 5
// var boolArray = [true,false];
// //Question 6
// var arr4 = ["car",1,"bike",true];
// //Chapter 17-20
// //Question 1
// var multi = [
//     ["Apple",2],
//     ["Banana",4],
//     ["Orange",6]
// ];
// //Question 2
// var multi = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write("<br>");
// for(var i=0;i<multi.length;i++)
// {
//     for(var j=0;j<multi[i].length;j++)
//     {
//         document.write(multi[i][j]);
//     }
//     document.write("<br>");
// }
// //Question 3
// document.write("Counting from 1-10");
// document.write("<br>");
// for(var i=1;i<11;i++)
// {
//     document.write(i);
//     document.write("<br>");
// }
// //Question 4
// document.write("<br>");
// var tab = +prompt("Enter number to display its multiplication table: ");
// document.write("Multiplication Table of: "+tab);
// document.write("<br>");
// var till = +prompt("Enter the length till when the table should be displayed: ");
// document.write("Length: "+till);
// document.write("<br>");
// for(var i=1;i<=till;i++)
// {
//     document.write(tab+"x"+i+"="+tab*i);
//     document.write("<br>");
// }
// //Question 5
// var fruits = ["apple","banana","mango","orange","strawberry"];
// document.write("<br>");
// for(var i=0;i<fruits.length;i++)
// {
//     document.write(fruits[i]);
//     document.write("<br>");
// }
// for(var i=0;i<fruits.length;i++)
// {
//     document.write("<br>");
//     document.write("Element at index "+i+" is "+fruits[i]);
// }
// //Question 7
// var items = ["cake","apple pie","cookie","chips","patties"];
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// for(var i=0;i<items.length;i++)
// {
//     if(search==items[i])
//     {
//         alert(search+" is available at index "+i+" in our bakery.");
//         break;
//     }
//     else
//     {
//     alert("We are sorry "+search+" isn't available in our bakery.");
//     }
// }
// //Question 8
// var arr5 = [24,53,78,91,12];
// document.write("<br>");
// document.write("Array items: "+arr5);
// document.write("<br>");
// for(var i=0;i<arr5.length;i++)
// {
//     if(arr5[i]>arr5[i+1])
//     {
//         document.write("The largest number is "+arr5[i]);
//     }
// }
// //Question 9
// var arr5 = [24,53,78,91,12];
// document.write("<br>");
// document.write("Array items: "+arr5);
// document.write("<br>");
// for(var i=arr5.length;i>0;i--)
// {
//     if(arr5[i]<arr5[i-1])
//     {
//         document.write("The smallest number is "+arr5[i]);
//     }
// }
// //Question 10
// document.write("<br>");
// document.write("<br>");
// document.write("Multiples of 5")
// document.write("<br>");
// for(var i=5;i<=100;i++)
// {
//     if(i%5 == 0)
//     {
//         document.write(i+",");
//     }
// }

//New Assignment Chapter 21-40
//Chapter 21-25
//Question 1
// var firstName = prompt("Enter first name: ");
// var lastName = prompt("Enter last name: ");
// var fullName = firstName + "" + lastName;
// alert("Hello "+fullName);
// //Question 2
// var model = prompt("Enter your favourite mobile phone model: ");
// document.write("My favourite phone is: "+model);
// var stringLength = model.length;
// document.write("<br>Length of string: "+stringLength);
// //Question 3
// var str1 = "Pakistani";
// var ind = str1.indexOf("n");
// document.write("<br>String: "+str1);
// document.write("<br>Index of 'n': "+ind);
// //Question 4
// var str1 = "Hello World";
// var lastInd = str1.lastIndexOf("l");
// document.write("<br>String: "+str1);
// document.write("<br>Last index of 'l': "+lastInd);
// //Question 5
// var str1 = "Pakistani";
// var charInd = str1.charAt(3);
// document.write("<br>String: "+str1);
// document.write("<br>Character at Index 3 : "+charInd);
// //Question 6
// var firstName = prompt("Enter first name: ");
// var lastName = prompt("Enter last name: ");
// var fullName = firstName.concat(lastName);
// alert("Hello "+fullName);
// //Question 7
// var city = "Hyderabad";
// var repStr = city.replace("Hyder","Islam");
// document.write("<br>City: "+city);
// document.write("<br>After replacement: "+repStr);
// //Question 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var repStr = message.replace(/and/g,"&");
// document.write("<br>Message: "+message);
// document.write("<br>After replacement: "+repStr);
// //Question 9
// var value = "472";
// document.write("<br>Value: "+value);
// if(typeof value == "string")
// {
//     document.write("<br>Type: String");
// }
// else
// {
//     document.write("<br>Type: Number");
// }
// value = parseInt(value);
// document.write("<br>Value: "+value);
// if(typeof value == "string")
// {
//     document.write("<br>Type: String");
// }
// else
// {
//     document.write("<br>Type: Number");
// }
// //Question 10
// var userInput = prompt("Enter any string: ");
// document.write("<br>User Input: "+userInput);
// userInput = userInput.toUpperCase();
// document.write("<br>Upper case: "+userInput);
//Question 11
// var str2 = prompt("Enter any string: ");
// document.write("<br>User Input: "+str2);
// var first = str2.slice(0,1);
// first = first.toUpperCase();
// var remaining = str2.slice(1);
// document.write("<br>Title case: "+first+remaining);
// //Question 12
// var num = 35.36;
// document.write("<br>Number: "+num);
// var str2 = num.toString();
// document.write("<br>Result: "+str2);
//Question 13
// var userName = prompt("Enter user name: ");
// for(var i=0;i<userName.length;i++)
// {
//     if(userName[i] == "!" || userName[i] == "@" || userName[i] == "," || userName[i] == ".")
//     {
//         alert("Enter a valid username.");
//         break;
//     }
//     else
//     {
//         alert("Username: "+userName);
//     }
// }
//Question 14
// var A = ["cake","apple pie","cookie","chips","patties"];
// var uInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// uInput = uInput.toLowerCase();
// var items = A.indexOf(uInput);
// if(A.indexOf(uInput) != -1)
// {
//         alert(uInput+" is available at index "+items+" in our bakery.");
// }
// else
// {
//     alert(uInput+" is not available in our bakery.");
// }
//Question 15
// var pass = prompt("Enter your password: ");
// if(pass.slice(0,1)>='0'&&pass.slice(0,1)<='9')
// {
//     alert("Password can not begin with a number.");
// }
// else if(pass.length>=6)
// {
//     alert(pass);
// }
// else if(pass>='a'&&pass<='z'||pass>='A'&&pass<='Z'||pass>='0'&&pass<='9')
// {
//     alert(pass);
// }
// else
// {
//     alert("Please enter a valid password.");
// }
//Question 16
// var university = "University of Karachi";
// var uni = university.split("");
// for(var i=0;i<university.length;i++)
// {
//     document.write("<br>"+uni[i]);
// }
//Question 17
// var userInput = prompt("Enter something: ");
// document.write("<br>"+userInput);
// document.write("<br>Last character of input: "+userInput.charAt(userInput.length - 1));
//Question 18
// var str1 = "The quick brown fox jumps over the lazy dog";
// document.write("<br>"+str1);
// str1 = str1.toLowerCase();
// var str1Len = str1.length;
// var searchFor = "the";
// var indexOfSearch = str1.indexOf(searchFor);
// var countWord = 0;
// for (var i = 0; i < str1Len; i++) 
// {
// if (str1.indexOf(str1.charAt(i)) === indexOfSearch) 
// {
//     countWord++
// }
// }
// document.write("<br>There are "+countWord+" occurences of the word 'the'.");
//Chapter 26-30
//Question 1
// var num = +prompt("Enter a number: ");
// document.write("<br>Number: "+num);
// document.write("<br>Round off value: "+Math.round(num));
// document.write("<br>Floor value: "+Math.floor(num));
// document.write("<br>Ceil value: "+Math.ceil(num));
//Question 2
// var num = +prompt("Enter a negative floating point number: ");
// document.write("<br>Number: "+num);
// document.write("<br>Round off value: "+Math.round(num));
// document.write("<br>Floor value: "+Math.floor(num));
// document.write("<br>Ceil value: "+Math.ceil(num));
//Question 3
// var num = +prompt("Enter any number: ");
// document.write("<br>The absolute value of "+num+" is "+Math.abs(num));
// //Question 4
// var dice = Math.random();
// dice = dice * 10;
// dice = dice.toFixed(0);
// document.write("<br>Random dice value: "+dice);
//Question 5
// var user1 = Math.random();
// user1 = user1.toFixed(0);
// var user2 = Math.random();
// user2 = user2.toFixed(0);
// if(user1 == "0")
// {
//     document.write("<br>"+user1);
//     document.write("<br>Random coin value: Heads");
// }
// else
// {
//     document.write("<br>"+user1);
//     document.write("<br>Random coin value: Tails");
// }
// if(user2 == "0")
// {
//     document.write("<br>"+user2);
//     document.write("<br>Random coin value: Heads");
// }
// else
// {
//     document.write("<br>"+user2);
//     document.write("<br>Random coin value: Tails");
// }
// //Question 6
// var randNum = Math.random();
// randNum = randNum * 100;
// randNum = randNum.toFixed(0);
// document.write("<br>Random number between 1 & 100: "+randNum);
//Question 7
// var weight = prompt("Enter your weight in kilograms: ");
// weight = parseFloat(weight);
// document.write("<br>The weight of user is: "+weight+" kilograms");
//Question 8
// var num1 = Math.random();
// num1 = num1*10;
// num1 = num1.toFixed(0);
// var num2 = +prompt("Enter a number between 1 and 10: ");
// if(num2 == num1)
// {
//     alert("Congrats you guessed it correct!");
// }
// else
// {
//     alert("Try again!");
// }
//Chapter 31-34
//Question 1
// document.write("<br>"+Date());
//Question 2
// var date = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var currentMonth = month[date.getMonth()];
// alert(currentMonth);
//Question 3
// var date = new Date();
// var day = new Array();
// day[0] = "Sunday";
// day[1] = "Monday";
// day[2] = "Tuesday";
// day[3] = "Wednesday";
// day[4] = "Thursday";
// day[5] = "Friday";
// day[6] = "Saturday";
// var today = day[date.getDay()];
// today = today.slice(0,3);    
// alert("Today is "+today);
//Question 4
// var date = new Date();
// var today = date.getDay();
// if(today == "0" || today == "6")
// {
//     alert("It's Fun day");
// }
//Question 5
// var date = new Date();
// var day = date.getDate();
// if(day < 16)
// {
//     document.write("First fifteen days of the month");
// }
// else
// {
//     document.write("Last fifteen days of the month");
// }
//Question 6
// var date = new Date();
// document.write("Current Date: "+date);
// var millisec = date.getTime();
// document.write("<br>Elapsed milliseconds since January,1 1970: "+millisec);
// var minutes = millisec / (1000 * 60 * 60);
// document.write("<br>Elapsed minutes since January,1 1970: "+minutes);
// Question 7
// var date = new Date();
// var time = date.getHours();
// if(time < 12)
// {
//     alert("It's AM");
// }
// else
// {
//     alert("It's PM");
// }
// Question 8
// var LaterDate = new Date();
// LaterDate.setDate(214);
// document.write("Later Date: "+LaterDate);
//Question 9
// var date = new Date("April 25,2020");
// var days = new Date();
// var milli = date.getTime();
// var millisec = days.getTime();
// var noOfDays = millisec - milli;
// noOfDays = noOfDays/(1000*24*60*60);
// noOfDays = Math.floor(noOfDays);
// document.write("<br>"+noOfDays+" days have passed since 1st Ramadan,2020");
// Question 10
// var date = new Date("Sat Dec 05 2015 22:50:16 GMT+0500 (PKT)");
// document.write("<br>On reference date "+date);
// var newDate = new Date("Jan 01,2015");
// date = date.getTime();
// newDate = newDate.getTime();
// var sec = date - newDate;
// sec = sec/(1000*60);
// sec = Math.ceil(sec);
// document.write("<br>"+sec+" seconds had passed since beginning of 2015"); 
// Question 11
// var date = new Date();
// document.write("<br>Current date: "+date);
// var hours = date.getHours();
// hours = hours - 1;
// date.setHours(hours);
// document.write("<br>1 hour ago, it was "+date);
// Question 12
// var date = new Date();
// alert("Current Date: "+date);
// var year = date.getFullYear();
// year = year - 100;
// date.setFullYear(year);
// alert(date);
// Question 13
// var age = +prompt("Enter your age: ");
// document.write("<br>Your age is: "+age);
// var date = new Date();
// date = date.getFullYear();
// date = date - age;
// document.write("<br>Your birth year is: "+date);
// Chapter 35-38
// Question 1
// function currentDT()
// {
//     var date = new Date();
//     document.write("<br>"+date);
// }
// currentDT();
// Question 2
// function greeting(firstName,lastName)
// {
//     alert("Hello "+firstName+""+lastName);
// }
// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// greeting(firstName,lastName);
//Question 3
// function sum(num1,num2)
// {
//     alert("Sum of "+num1+"+"+num2+"="+result);
// }
// var num1 = +prompt("Enter first number: ");
// var num2 = +prompt("Enter second number: ");
// var result = num1+num2;
// sum(num1,num2);
// Question 4
// function calculator(num1,operator,num2)
// {
//     var result = 0;
//     if(operator == "+")
//     {
//         result = num1+num2;
//     }
//     else if(operator == "-")
//     {
//         result = num1-num2;
//     }
//     else if(operator == "*")
//     {
//         result = num1*num2;
//     }
//     else if(operator == "/")
//     {
//         result = num1/num2;
//     }
//     else if(operator == "%")
//     {
//         result = num1%num2;
//     }
//     else
//     {
//         result = "Invalid Operator";
//     }
//     document.write(num1+operator+num2+"="+result);
// }
// var num1 = +prompt("Enter first number: ");
// var operator = prompt("Enter operator: ");
// var num2 = +prompt("Enter second number: ");
// calculator(num1,operator,num2);
//Question 5
// function square(num)
// {
//     alert(result);
// }
// var num = +prompt("Enter a number: ");
// result = num * num;
// square(num);
//Question 6
// function factorial(num)
// {   
//     if(num > 1)
//     {
//         return num * factorial(num-1);
//     }
//     else
//     {
//         return 1;
//     }
// }
// var num = +prompt("Enter a number: ");
// document.write("Factorial of "+num+" is "+factorial(num));
//Question 7
// function counting(start,end)
// {
//     for(var i=start;i<=end;i++)
//     {
//         document.write(i);
//         document.write("<br>");
//     }
// }
// var start = +prompt("Enter starting number for counting: ");
// var end = +prompt("Enter ending number for counting: ");
// counting(start,end);
//Question 8
// function hypotenuse(result)
// {
//     var hypotenuse = result;
//     document.write(hypotenuse);
// }
// function square(base,perpendicular)
// {
//     base = base * base;
//     perpendicular = perpendicular * perpendicular;
//     result = base + perpendicular;
// }
// var base = +prompt("Enter base to calculate hypotenuse: ");
// var perpendicular = +prompt("Enter perpendicular to calculate hypotenuse: ");
// square(base,perpendicular);
// hypotenuse(result);
// Question 9
// function area(width,height)
// {
//     var a = width * height;
//     document.write("<br>The area of rectangle is: "+a);
// }
// var width = +prompt("Enter the width of rectangle: ");
// var height = +prompt("Enter the height of rectangle: ");
// area(width,height);
// function area(width,height)
// {
//     var a = width * height;
//     document.write("<br>The area of rectangle is: "+a);
// }
// area(5,8);
//Question 10
// function check(str1)
// {
//     var check = "";
//     for(var i=str1.length - 1;i>=0;i--)
//     {
//         check+=str1[i];
//     }
//     if(check === str1)
//     {
//         document.write("<br>"+str1+" is a palindrome word")
//     }
//     else
//     {
//         document.write("<br>"+str1+" is not a palindrome word.")
//     }
// }
// var str1 = prompt("Enter a string to check whether its palindrome word or not:");
// check(str1);
//Question 11
// function upper(str1)
// {
//     var arr1 = str1.split(' ');
//     var arr = [];
//     for(var i=0;i<arr1.length;i++)
//     {
//         arr.push(arr1[i].charAt(0).toUpperCase()+arr1[i].slice(1));
//     }
//     return arr.join(' ');
// }
// var str1 = prompt("Enter any string: ");
// document.write(upper(str1));
// Question 12
// function longest(str1)
// {
//     var arr1 = str1.split(' ');
//     document.write(arr1);
//     for(var i=0;i<=arr1.length;i++)
//     {
//         if(arr1[i].length > arr1[i+1].length)
//         {
//             document.write(arr1[i]);
//         }
//     }
// }
// var str1 = prompt("Enter any string: ");
// longest(str1);
// Question 13
// function occur(str1,letter)
// {
//     for(var i=0;i<str1.length;i++)
//     {
//         if(str1[i] == letter)
//         {
//             count = count + 1;
//         }
//     }
//     document.write("The letter "+letter+" appeared "+count+" times in the string");
// }
// var str1 = prompt("Enter any string: ");
// var letter = prompt("Enter any letter of the string to know its number of occurence: ");
// var count = 0;
// occur(str1,letter);
//Question 14
// function calcCircumference(rad)
// {
//     var result = 2 * 3.142 * rad;
//     document.write("The Circumference of circle is: "+result);
// }
// function calcArea(rad)
// {
//     var result = 3.142 * rad * rad;
//     document.write("<br>The Area of circle is: "+result);
// }
// var rad = +prompt("Enter the radius of the circle: ");
// calcCircumference(rad);
// calcArea(rad);

//New Assignment Chapter 38-67
// Chapter 38-42
//Question 1
// function power(a,b)
// {
//     var result = Math.pow(a,b);
//     alert(result);
// }
// var a = +prompt("Enter a number: ");
// var b = +prompt("Enter the power to which number must be raised: ");
// power(a,b)
// Question 2
// function leapYear(year)
// {
//     if(year%4 == 0)
//     {
//         alert(year+" is a leap year");
//     } 
//     else
//     {
//         alert(year+" is not a leap year");
//     }
// }
// var year = prompt("Enter a year to know whether its a leap year or not: ");
// leapYear(year);
// Question 3
// function area()
// {
//     area1(a,b,c);
//     var result = s * (s-a) * (s-b) * (s-c);
//     alert ("Area of triangle is: "+result);
// }
// function area1(a,b,c)
// {
//      s = (a+b+c)/2;
// }
// var s = "";
// var a = +prompt("Enter the value of first side of triangle: ");
// var b = +prompt("Enter the value of second side of triangle: ");
// var c = +prompt("Enter the value of third side of triangle: ");
// area1(a,b,c);
// area();
// Question 4
// var sub1 = +prompt("Enter marks received in subject 1: ");
// var sub2 = +prompt("Enter marks received in subject 2: ");
// var sub3 = +prompt("Enter marks received in subject 3: ");
// var tot = +prompt("Enter total marks: ");
// function main()
// {
//     avg(sub1,sub2,sub3);
//     per(sub1,sub2,sub3,tot);
// }
// function avg(sub1,sub2,sub3)
// {
//     var average = (sub1+sub2+sub3)/3;
//     alert("The average is: "+average);
// }
// function per(sub1,sub2,sub3,tot)
// {
//     var percentage = (sub1+sub2+sub3)/tot * 100;
//     alert("The percentage is: "+percentage);
// }
// main();
// Question 5
// function indOf(str1,ind)
// {
//     for(var i=0;i<str1.length;i++)
//     {
//         if(i == str1.indexOf(ind))
//         {
//             alert("The index of "+ind+" is: "+i);
//         }
//     }
// }
// var str1 = prompt("Enter anything to know its index: ");
// var ind = prompt("Enter the character to know its index: ");
// indOf(str1,ind);
// Question 6
// function del_vow(str1) {
//     for (var i = 0; i <= str1.length; i++) {
//         if (str1.charAt(i) == 'a' || str1.charAt(i) == 'e' || str1.charAt(i) == 'i' || str1.charAt(i) == 'o' || str1.charAt(i) == 'u' || str1.charAt(i) == 'A' || str1.charAt(i) == 'E' || str1.charAt(i) == 'I' || str1.charAt(i) == 'O' || str1.charAt(i) == 'U') {
//             str1 = str1.replace(str1.charAt(i), '');
//         }
//     }
//     alert(str1);
// }
// var str1 = prompt("Enter a string: ");
// del_vow(str1);
//Question 7
// function findOccurrences() {
//     var str = prompt("Enter any string:");
//     var chars = str.toLowerCase().split("");
//     var count = 0;
//     for(let i = 0; i < chars.length - 1; i++) {
//       var char = chars[i];
//       var next = chars[i + 1];
//       if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
//         count++
//       }
//     }
//     return count;
//   }
//   function isCorrectCharacter(char) {
//     switch (char) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         return true;
//       default:
//         return false;
//     }
//   }
//   var found = findOccurrences();
//   alert(found);
// Question 8
// var distance = prompt("Enter distance between two cities in km: ");
// meters(distance);
// feet(distance);
// inches(distance);
// centimeters(distance);
// function meters(distance)
// {
//     distance = distance * 1000;
//     alert("The distance in meters is: "+distance);
// }
// function feet(distance)
// {
//     distance = distance * 3281;
//     alert("The distance in feet is: "+distance);
// }
// function inches(distance)
// {
//     distance = distance * 39370;
//     alert("The distance in inches is: "+distance);
// }
// function centimeters(distance)
// {
//     distance = distance * 100000;
//     alert("The distance in centimeters is: "+distance);
// }
// Question 9
// function overtime(hours)
// {
//     if(hours > 40)
//     {
//         var pay = 12*(hours-40);
//         alert("Your overtime pay is: "+pay);
//     }
// }
// var hours = prompt("Enter no of hours that you have worked: ");
// overtime(hours);
// Question 10
// function denominations(amount)
// {
//     var hundered = amount/100;
//     hundered = Math.floor(hundered);
//     amount = amount%100;
//     var fifty = amount/50;
//     fifty = Math.floor(fifty);
//     amount = amount%50;
//     var ten = amount/10;
//     ten = Math.floor(ten);
//     alert("You will have "+hundered+" hundered "+fifty+" fifty and "+ten+" ten notes");
// }
// var amount = prompt("Enter amount to withdraw: ");
// denominations(amount);
// Chapter 43-48
// Question 3
// function del(id)
// {
//     var record = document.getElementById(id);
//     record.innerHTML = "";

// }
// Question 5
// function increment(id)
// {
//     var counter = document.getElementById(id);
//     counter.value++;
//     counter.innerHTML = counter.value;
// }
// function decrement(id)
// {
//     var counter = document.getElementById(id);
//     counter.value--;
//     counter.innerHTML = counter.value;
// }
// Chapter 49-52
// Question 1
// function show()
// {
//     var username = document.getElementById("un");
//     var email = document.getElementById("email");
//     var pass = document.getElementById("pass");
//     document.write("Username: "+username.value+"<br>Email: "+email.value+"<br>Password : "+pass.value);
// }
// Question 2
// function expand() {
//     var para = "<b>SLC Roadster</b><br><br><b>Technical Specifications: </b><br><br><b>SLC 200</b><br><br>Engine: 4-Cylinder 1991 cc<br><br> Horsepower: 135 kW (184 Hp)/5500 rpm<br><br> Torque: 300 Nm/1200–4000 rpm<br><br>  Acceleration: 0-100 km/h in 6.9 sec<br><br> Top Speed: 237 km/h ";
//     document.getElementById("des").innerHTML = para;
// }
// Question 3
// function visible()
// {   
//     var ind = document.getElementById("ID");
//     var nam = document.getElementById("name");
//     var cls = document.getElementById("class");
//     document.getElementById("myTab").style.display = "block";

//     var row1 = document.createElement("tr");
//     row1.setAttribute("id","myRow");
//     var col1 = document.createElement("td");
//     var text = document.createTextNode(ind.value);
//     col1.setAttribute("id","col1");
//     col1.appendChild(text);
//     var col2 = document.createElement("td");
//     var text2 = document.createTextNode(nam.value);
//     col2.setAttribute("id","col2");
//     col2.appendChild(text2);
//     var col3 = document.createElement("td");
//     var text3 = document.createTextNode(cls.value);
//     col3.setAttribute("id","col3");
//     col3.appendChild(text3);
//     var col4 = document.createElement("td");
//     var btn1 = document.createElement("button");
//     btn1.innerHTML = "DELETE";
//     btn1.setAttribute("onclick","del(this)");
//     btn1.style.height = "20px";
//     btn1.style.width = "80px";
//     col4.appendChild(btn1);
//     var col5 = document.createElement("td");
//     var btn2 = document.createElement("button");
//     btn2.innerHTML = "EDIT";
//     btn2.setAttribute("onclick","edit(this)");
//     btn2.style.height = "20px";
//     btn2.style.width = "80px";
//     col5.appendChild(btn2);
//     document.getElementById("myTab").appendChild(row1).appendChild(col1);
//     document.getElementById("myTab").appendChild(row1).appendChild(col2);
//     document.getElementById("myTab").appendChild(row1).appendChild(col3);
//     document.getElementById("myTab").appendChild(row1).appendChild(col4);
//     document.getElementById("myTab").appendChild(row1).appendChild(col5);
// }
// function del(e)
// {
//     var record = e.parentNode.parentNode;
//     console.log(record);
//     record.remove();
// }
// function edit(e)
// {
//     document.getElementById("h3").style.display = "block";
//     document.getElementById("f2").style.display = "block";
//     console.log(e.parentNode.parentNode.firstChild);
//     var ind = e.parentNode.parentNode.childNodes[0];
//     var n = e.parentNode.parentNode.childNodes[1];
//     var c = e.parentNode.parentNode.childNodes[2]
//     document.getElementById("ind1").value = ind.innerHTML;
//     document.getElementById("name1").value = n.innerHTML;
//     document.getElementById("cls1").value = c.innerHTML;}
// function submitVal()
// {
//     var editVal = document.getElementById("ind1");
//     var editVal1 = document.getElementById("name1");
//     var editVal2 = document.getElementById("cls1");
//     document.getElementById("col1").innerHTML = editVal.value;
//     document.getElementById("col2").innerHTML = editVal1.value;
//     document.getElementById("col3").innerHTML = editVal2.value;
//     document.getElementById("h3").style.display = "none";
//     document.getElementById("f2").style.display = "none";
// }

// Chapter 53-58
// Question 1
// var modal = document.getElementById("mod");
//     function openModal(e)
//     {
//         document.getElementById("body").style.backgroundColor = "rgba(0,0,0,0.6)";
//         document.getElementById("modal").style.opacity = "30%";
//         var et = e.getAttribute("src");
//         var img1 = document.getElementById("c_img");
//         console.log(img1.src = e.getAttribute("src"));
//         img1.style.width = "600px";
//         img1.style.height = "400px";
//         modal.style.display = "block";
//         modal.appendChild(img1);
//     }
 
//     function closeModal()
//     {
//         setTimeout(()=>{ modal.style.display = "none"; }, 550);
//         setTimeout(()=>{ document.getElementById("body").style.backgroundColor = "white"; }, 550);
//         setTimeout(()=>{document.getElementById("modal").style.opacity = "100%";},550);
//     }
//     var span = document.getElementsByClassName("close")[0];
//     span.onclick = function() { 
//         document.getElementById("body").style.backgroundColor = "white";
//         document.getElementById("modal").style.opacity = "100%";
//         modal.style.display = "none";
//     }
// Question 2
// function changeSize(target)
// {
//     var par = document.getElementById("para");
//     var computedStyle = getComputedStyle(par);
//     var fs;
//     if(computedStyle){
//         fs = parseFloat(computedStyle && computedStyle.fontSize);
//         if(target == document.getElementById("btn1"))
//         {
//             fs += 10;
//         }
//         else if(target == document.getElementById("btn2"))
//         {
//             fs -= 10;
//         }
//         par.style.fontSize = fs + "px";
//     }   
// }
// Chapter 58-67
// Question 1
// // i
//     var ele = document.getElementById("main-content").nodeName;
//     document.write("i)Answer: "+ele);
// // ii
//     var chil = document.getElementById("main-content").children;
//     document.write("<br>ii)Answer: ")
//     for(var i=0;i<chil.length;i++)
//     {
//     console.log(chil[i]);
//     document.write("<br>"+chil[i]);
//     document.write("<br>"+chil[i].innerHTML);
//     }
// // iii
//     var rend = document.getElementsByClassName("render");
//     // console.log(rend[0]);
//     document.write("<br>iii)Answer:");
//     for(var i=0;i<rend.length;i++)
//     {
//         document.write("<br>"+rend[i].innerHTML);
//     }
// // iv
//     document.getElementById("first-name").value = "Brian";
//v
//     document.getElementById("last-name").value = "Stone";
//     document.getElementById("email").value = "brian123@gmail.com";
// // Question 2
// //i
// var elem = document.getElementById("form-content").nodeType;
// document.write("<br>i)Answer: Node type = "+elem);
// //ii
// document.write("<br>ii)Answer: Node type = "+document.getElementById("lastName").nodeType);
// var child_node = document.getElementById("lastName").childNodes;
// for(var i=0;i<child_node.length;i++)
// {
//     document.write("<br>Child node type = "+child_node[i].nodeType);
// }
// //iii
// var update = document.getElementById("lastName").childNodes[0];
// // console.log(update.nodeValue);
// update.nodeValue = "Last Name : Roberts";
// //iv
// var f_child = document.getElementById("main-content").firstChild;
// console.log(f_child);
// document.write("<br>iv)Answer: First Child = "+f_child);
// var l_child = document.getElementById("main-content").lastChild;
// console.log(l_child);
// document.write("<br>iv)Answer: Last Child = "+l_child);
// //v
// var next = document.getElementById("lastName").nextSibling;
// console.log(next);
// document.write("<br>v)Answer: Next Sibling = "+next);
// var previous = document.getElementById("lastName").previousSibling;
// console.log(previous);
// document.write("<br>v)Answer: Previous Sibling = "+previous);
// //vi
// var parent = document.getElementById("email").parentNode;
// console.log(parent);
// document.write("<br>vi)Answer: Parent Node = "+parent);
// var n_type = document.getElementById("email").nodeType;
// console.log(n_type);
// document.write("<br>vi)Answer: Node Type = "+n_type);
