// ES6 task

// GLOBAL SCOPE

// ● Declare a variable using var outside of any function or block.

// var car = "BMW";

// console.log(car);

//  ● Declare a variable using let outside of any function or block.

// let phone = "16 pro max";

// console.log("phone:", phone);

// ● Declare a variable using const outside of any function or block.

// const brand = "Apple";
// const model = "iPhone 15 Pro Max";

// console.log("Brand:", brand);
// console.log("Model:", model);

// FUNCTION SCOPE

//  ● Create a function and declare a variable using var inside the function.

// function myCar() {
//     var car = "BMW M5";
//     // ● Declare a variable using let inside the function.
//     let model = 2025 ;
//     //  ● Declare a variable using const inside the function.
//     const brand = "BMW";

//     console.log("Inside function:", car);
//     console.log("Inside function:", model);
//     console.log("Inside function:", brand);
// }

// myCar();
// ● Try to log all three variables to the console outside the function.
// console.log("outside function:", car);
// console.log("outside function:", model);
// console.log("outside function:", brand);

// BLOCK SCOPE

//  ● Use an if statement and declare a variable using var inside the block.

// if (true) {
//   var phone = "iPhone 15";  

//   ● Declare a variable using let inside the block.

//   let price = 1500;

// ● Declare a variable using const inside the block. 

//   const brand = "Apple";   
//   console.log("Inside if block - Phone:", phone);
//   console.log("Inside block - Price:", price);
//   console.log("Inside block - Brand:", brand);
// }
// ● Try to log all three variables to the console outside the block.
// console.log("Outside block - Phone:", phone);   
// console.log("Outside block - Price:", price);   
// console.log("Outside block - Brand:", brand);   

// HOISTING WITH Var

// ● Write code where you log a var variable before it is declared.

// console.log(phone); 
// var phone = "iPhone 15";
// console.log(phone);     

//   ● What value do you get?
// declaring before giving me the undefined value.

// HOISTING WITH let and const

//  ● Write code where you log a let variable before it is declared.

// console.log(price);  
// let price = 1500;
// console.log(price);  

//  ● Write code where you log a const variable before it is declared.

// console.log(brand);
// const brand = "Apple";
// console.log(brand); 

//  ● What kind of error do you get?
// its giving this kind of error (app.js:84 Uncaught ReferenceError: Cannot access 'price' before initialization).

// Re-declaration

//  ● Try to declare the same variable name twice using var.
// var phone = "iPhone 15";
// var phone = "Samsung Galaxy S24";  
// console.log(phone);

//  ● Try to declare the same variable name twice using let.

// let price = 1500;
// let price = 2000;  
// console.log(price);

//  ● Try to declare the same variable name twice using const.

// const brand = "Apple";
// const brand = "Samsung";  
// console.log(brand);

//  ● What happens in each case?
// if we declaaring var 2 times then its picking the second value as the main value and if we are declaring let 2 times then its giving error and if we declaring const 2 times then is picking the first variable value as the main value.

// Re-assignment    

//  ● Declare a variable using var and assign it a value. Then reassign it a new value.

// var phone = "iPhone 15";
// console.log("Before:", phone);

// phone = "Samsung Galaxy S24"; 
// console.log("After:", phone);

//  ● Declare a variable using let and assign it a value. Then reassign it a new value.

// let price = 1500;
// console.log("Before:", price);

// price = 2000;  
// console.log("After:", price);

//  ● Declare a variable using const and assign it a value. Then reassign it a new value.

// const brand = "Apple";
// console.log("Before:", brand);

// brand = "Samsung";  
// console.log("After:", brand);

// ● What happens in each case?
// const does not allow re-assignment

// Temporal Dead Zone (TDZ)


//  ● Declare a let variable inside a block but try to log it before the declaration.
// {
//   console.log(price); 
//   let price = 1500;
// }
//  ● Declare a const variable inside a block but try to log it before the declaration.
// {
//   console.log(brand); 
//   const brand = "Apple";
// }
//  ● What error do you get? Why?
// i am getting a reference error .this is because let and const are not safe to be used before declaretion

//  
