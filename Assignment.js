//1. Create Two variables with number values in them and display 
//  the result inside console.
console.log("--------------------ques 1-----------------------")
var a=123;
var b=234;
console.log("variable a: " +a +"  Variable b: " +b)
console.log("--------------------ques 2-----------------------")

//2. Create a function that accepts two parameters and returns 
// the result after multiplying them. Also Display the result inside console.
function multiply(a,b)
{
    return a*b;
}
console.log(multiply(5,4))
console.log("--------------------ques 3-----------------------")

//3. Create two string variables concatenate ( Add ) them and display 
// the length of the result string.
var a="I am ";
var b="Mohit";
var c=a+b;
console.log(c)
var d=c.length
console.log(d)
console.log("--------------------ques 4-----------------------")


//4. Create a variable  var​ str = ​"Please locate where 'locate' occurs!"​; 
//Display(in console) the position of first occurrence of the 
//  word “Where” and index of the last occurrence of “locate”.
var str = "Please locate where 'locate' occurs!"
console.log("Index of first occurence of 'where'is :" + str.indexOf("where"))
console.log("Index of last occurence of 'locate'is :" + str.lastIndexOf("locate"))
console.log("--------------------ques 5-----------------------")

//5. var str = "Please locate where 'locate' occurs!" ;
//Extract the word “locate” from the above string.
var str = "Please locate where 'locate' occurs!" ;
console.log("Word 'locate' found at index: " + str.search("locate"))
console.log("Required word from string is: " + str.slice(7,13))
console.log("--------------------ques 6-----------------------")

//6. str = "Please visit Microsoft!" ;
//Replace the word “Microsoft” with google and console the result
var str = "Please visit Microsoft!" ;
console.log("Before replacing the word : " + str)
console.log("After replacing the word : " + str.replace("Microsoft","Google"))
console.log("--------------------ques 7-----------------------")

//7. var text1 = "Hello World!" ;
//Convert the variable to uppercase and lowercase and console the result.
var text1 = "Hello World!" ;
console.log(text1.toLowerCase())
console.log(text1.toUpperCase())
console.log("--------------------ques 8-----------------------")

//8. var text = "Hello!" ;
//Convert the above word to an array and console the result
var text = "Hello!" ;
a = new Array(text)
console.log(a)
console.log("--------------------ques 9-----------------------")

//9. var​ fruits = [​"Banana"​, ​"Orange"​, ​"Apple"​, ​"Mango"​]; 
//For the above array :  
//- Add a new element. 
var fruits = ['Banana','Orange','Apple','Mango']
console.log(fruits)
fruits[4]="grapes"
console.log("After adding a new element : " +fruits)
delete fruits[4]
console.log("After deleting an existing element : " +fruits)
console.log("Type of fruits is : " + typeof(a))
fruits[1]="Pineapple"
console.log("After changing the value of an element : " +fruits)
fruits.splice(2,0,"Guava")
console.log("Array after inserting an element : " + fruits)
console.log("Array to string : " + fruits.join())
console.log("--------------------ques 10-----------------------")

//10.var x = 9.656 ;
//- Convert the above number to a string and console the result.
var x = 9.656 ;
console.log(x)
console.log("After converting to String : " + x.toString())

//- Fix this number to two decimal places and console the result.
var x = 9.656 ;
console.log(x)
console.log("After converting to two decimal places : " + x.toExponential(2))
console.log("--------------------ques 11-----------------------")

//11. var x = 7.65
//- Convert the value to a nearest integer and console the result.
var x = 7.65
console.log("After converting the number to integer : " + x.toPrecision(1))

//- Calculate the square root of above variable and console the result.
var x = 7.65
console.log("Square root of the number is : " + Math.sqrt(x))
console.log("--------------------ques 12-----------------------")

//12.Generate a random number between 0 to 9 and 0 to 99 
//then console the result.
console.log("Random no's between 0-9 is:" + parseInt(Math.random()*10))
console.log("Random no's between 0-99 is:" + parseInt(Math.random()*100))
console.log("--------------------ques 13-----------------------")

//13.Sort this array var points = [ 40 , 100 , 1 , 5 , 25 , 10 ];
//And console the result.
var points = [40,100,1,5,25,10]
console.log("Sorted array is: " + points.sort(function(a,b){ return a-b;}))
console.log("--------------------END-----------------------")







