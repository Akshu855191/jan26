Jan 26
MD- Markdown

1. Comments:- a)Single line comments // Double slash:- For single line
              b)Multi line comments /* and with */:- For multiple line

Q.1 Differnet Data Types?
Ans:- int,float,char,double,number,string,long,short,object,byte,varchar,mull,undefined,null.
    * Data Types in JS:-
      -Boolean(true | false)
      -String(A combination of characters,put it inside double or single quates"" | '')
      -Number (1, 2, 3, 2.8, -10, -55.28)
      -Null:- Nothing
      -Undefined:- The data type is not set 
          Example:- var a
                    console.log(a);
      -BigInt:- (Big Integer, Realllllly big number 2*50,2*55)
      -Symbol data type:- ([()],double square brackets)
      -object:- A collection of properties and function.

Q2. Data types vs Data structure?
 Ans:-Data Structure:- Array,stacks,queues,Trees,Graphs,Heaps,Linkedlist
      Data Types:- Objects,array,null,undefined,string,number,etc,etc

Q.3 How to check the data types?
Ans:- Syntax:- typeof operator
      Example:- var a = 123;
                console.log(typeof a);     it shows number.
      - We can not have in one variable multiple data types.
      - In array and object it is possiblentohave multiple data types.

***Primitive Data types and Non Primitive Data types
  *Primitive data types:- 
   -The lowest data type of any programing language. It cannot be broken further.
  *Non Primitive data types:-
  -This is a combination of other primitive and non primitive data types. (objects,array)
 
**JS is a dynamically type (loosly type) language.
  -It does not care about the data type. We can create a variable with 1 data type and than update iy with anotherdata type.
Example:-  var a = 200;
        console.log(a);
           var a = undefined;
        console.log(a);
           var a = "something";
        console.log(a);
  output:- It shows all the outputs it not care about data types it will show all the values.
 -opposite other languages:- Statically type (Strickly typed) language. Java,c,c++,objective,c,swift

**Mathematical operation in JS
  -  +,-,*,/, add, subtrack,multiply,divide,modulo %:- It gives the remainder

//Check if the number is an odd or an even number.
//When dividing by 2, if the remainder is 0, than the number is  even
  var n = 5;
  var remainder = n % 2;
  if(remainder == 0){
    console.log("Number is even");
}
  else{
    console.log("Number is odd");
}

7.Comparison:- == (Double equals):-Comparison between two values)
             Example:- console.log(10 == 10)                console.log(10 == "10")
            output:- True                                  output:- true:-Beacause js is dynamic programing language.
   - (>) :- Greater than
   - (<) :- Less than
   - (>=):- Greater than equal to
   - (<=):- Less than equal to 

8. alert:- This creates a popup and show in the browser.
      Syntax:- alert();
      Example:- alert("Hey Geeks");
9. How to take a input?
Ans:- prompt:-This is send to take the input
     Example:-
              var a = prompt();
              alert(a)
     - In prompt We can give some hint text
     Example:- var a = prompt("Please enter your name");
                 alert(a);    //It gves the hind first please enter your name.

10. Rules for a variable name
Ans:- Start variable name with a alphabet or an underscore.
    Correct:- abcd, _abcd, a, b ,Thisisverylong, a1b, ab12345
    Incorrect:- 1ab:- We cannot start with the number 
                a-b:- We cannot used - in the variable name
                a+b:- We cannot use + in the variable name
(
11. JS is a case sensitive language :- If we create a variable with name ABCD (all caps)
       than in order to use it, we need to use ABCD (all caps) only.
      Example:- var num=10;
                console.log(NUM);
         output:- Error NUM is not defined.Hence js is a case sensitive language.

12. Semantics:- For readability. Give meaning full variable names.
                E.g var n = 10;

13. JS is an interpreted language. It is executed line by line. Suppose
   if my script to crash at any line, then any code written after that line will not be executed.
   E.g :- var n = 10;
          console.log(NUM);
         console.log("ABCD");
          console.log("Another one");   output:- It will not execute anything. It will crash

   "Any fool can write code that a machine can understand. Good
    Programmer write a code that humans can understand.   //martin fowler

14. number + number= number
    number + string= String concatation (Combining)
    E.g   console.log(10 + 10);
          console.log(10 + "10");
        Output:- [20  1010]:- Output is 1010 beacause number and string combile and it right as it is.
     E.g:-    var n1 = prompt("Enter first number");
              var n2 = prompt("Enter secoud number");
              var sum = n1 + n2;
              console.log(sum);
             output:- 2030 :-Output is in combination of string 2030 not 20+30=50. it is 2030. This isa problem

15. Solution on this problem:- Parse the string into an integer. parseInt:-( If we take input as a decimal 
                          e.g 12.15 it will ignore the 15 and show the utput as 12 only.
                         - For decimalvalur we can use parseFloat.
                          e.g 12.15 parseFloat it will show all 12.15

        
                var n1 = prompt("Enter first number");
                var n2 = prompt("Enter secoud number");
                 n1 = parseInt(n1);
                 n2 = parseInt(n2);
                var sum = n1 + n2;
                 console.log(sum);
                  alert(sum);

         output:- 50   Enter first no 30 enter secound number 20 = 50


// Assignment 1:-
-Take three number from user and aleart minimum of those three.
//Asignment2
- take a character from the user and show whether it is ovlvel or consonent

