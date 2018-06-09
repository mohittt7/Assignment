console.log("-----------------Ques 1------------------")
//1. Write a JavaScript function to convert a binary number to a 
//  decimal number.
console.log("I am unable to make the logic for this question ")
// -I am unable to make the logic for this ques.

console.log("-----------------Ques 2------------------")
//2. Write a JavaScript function to convert a decimal number to 
//  binary, hexadecimal or octal number.
console.log("I am unable to make the logic for this question ")
// -I am unable to make the logic for this ques.

console.log("-----------------Ques 3------------------")
//3. Write a JavaScript function to generate a random integer.

console.log("Random number : " + parseInt(Math.random()*100))

console.log("-----------------Ques 4------------------")
//4. Write a JavaScript function to format a number up to specified 
//  decimal places.

var a=8.56789;
console.log("The number upto 3 decimal places : " + a.toExponential(3))
console.log("The number upto 2 decimal places : " + a.toExponential(2))
console.log("The number upto 1 decimal place : " + a.toExponential(1))

console.log("-----------------Ques 5------------------")
//5. Write a JavaScript function to find the highest value in an array.

var arr=[11,45,22,76,43,1,100,500,5,7,10]
console.log(arr)
var b= arr.sort(function(x,y){ return x-y})
console.log("Highest Value is : " + b[b.length-1])

console.log("-----------------Ques 6------------------")
//6. Write a JavaScript function to find the lowest value in an array.

var arr=[11,45,22,76,43,1,100,500,5,7,10]
console.log(arr)
var b= arr.sort(function(x,y){ return x-y})
console.log("Lowest Value is : " + b[0])

console.log("-----------------Ques 7------------------")
//7. Write a JavaScript function to get the greatest common divisor 
//  (gcd) of two integers.

console.log("I am unable to make the logic for this question ")
// -I am unable to make the logic for this ques.

console.log("-----------------Ques 8------------------")
//8. Write a JavaScript function to test if a number is a power of 2.

function power(n) 
{
    if (typeof n !== 'number') 
         return 'Not a number'; 
   
       return n && (n & (n - 1)) === 0; // DOUBT
}
   
   console.log(power(16));
   console.log(power(18));
   console.log(power(256));

   console.log("-----------------Ques 11------------------")
//11. Write a JavaScript function to capitalize the first letter of a string.

function capitalize(s)
{
     console.log(s[0].toUpperCase() + s.slice(1))
}
capitalize("i am mohit")

console.log("-----------------Ques 12------------------")
//12. Write a JavaScript program that accept two integers and display 
//  the larger.

function larger(m,n)
{
    if(m>n)
    {
        console.log("Larger number is : " +m)
    }
    else
    {
        console.log("Larger number is :" +n)
    }
}
larger(7,8)
larger(15,5)

console.log("-----------------Ques 13------------------")
//13. Write a JavaScript program which compute, the average marks of 
//    the following students Then, this average is used to determine the 
//    corresponding grade.
/*     Student name    marks   range     grade
        david           80      <60        F
        vinoth          77      <70        D
        divya           88      <80        C
        ishita          95      <90        B
        thomas          68      <100       A
*/
//Average marks of the students
var arr1=[
    {
        name:"david",
        marks:80
    },
    {
        name:"vinoth",
        marks:77
    },
    {
        name:"divya",
        marks:88
    },
    {
        name:"ishita",
        marks:68
    }
]
console.log(arr1)
var p=arr1.reduce(function(a,b,c)
{

    if(c==1)
    {
    return a.marks+b.marks
    }
    else 
    {
    return a+b.marks
    }
}
)
var r=p/arr1.length;
console.log("Average marks of the students : " +r)
function grade1(k)
{
    if(k>90)
    {
        console.log("A grade")
    }
    else if(k>80)
    {
        console.log("B grade")
    }
    else if(k>70)
    {
        console.log("C grade")
    }
    else if(k>60)
    {
        console.log("D grade")
    }
    else
    {
        console.log("F grade")
    }
}
grade1(r);

console.log("-----------------Ques 14------------------")
//14. Write a JavaScript program to construct the following pattern, 
//    using a nested for loop.

for(let i=0;i<5;i++)
{
    for(let j=0;j<i;j++)
    {
        console.log("*")  //DOUBT- how to print in a form of pyramid
    }
    console.log(" ")
}

console.log("-----------------Ques 15------------------")
//15.write a program to generate all possible combinations of a string
console.log("I am unable to make the logic for this question ")
// -I am unable to make the logic for this ques.

console.log("------------------ End -------------------")
