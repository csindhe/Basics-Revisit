//Google Question:

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

//Solution:

//Method 1: Passing needed variables into inner function
const arrG=[10, 20, 30, 40];
for(var i = 0; i < arrG.length; i++){
    setTimeout(function(i_local) {
       console.log('Index: ' + i_local + ', element: ' + arrG[i_local]);
    }(i), 3000);
}

//Method 2: ES6 feature
for(let i = 0; i < arrG.length; i++){
    setTimeout(function() {
       console.log('Index: ' + i + ', element: ' + arrG[i]);
    }, 3000);
}

//let is ES6 feature. It creates new binding every single time function is called.

//This often confuse people who are new to JavaScript or functional programming. 
//It is a result of misunderstanding what closures are. 
//A closure does not merely pass the value of a variable or even a reference to the variable. 
//A closure captures the variable itself!

//Lexical Scoping--> parser resolving the variable names when functions are nested.
//Functions in Javascript forms CLOSURES.
//Closure = Function + Lexical Environment within which that function was declared.

//Closures are very useful because it lets you associate some data with a function that operates 
//on that data.

//Emulation of private methods with closures
//Closure Scope Chain --> Local Scope(Own Scope), Outer Functions Scope, Global Scope

//Creating closures in loops -- common mistake
//performance considerations
//--When creating new object or class, methods should be associated to object's prototype rather than
//  defined into object constructor. Because whenever constructor is called, the methods would get 
//  reassigned (i.e. for every object creation)

