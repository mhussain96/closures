// object literal

// var person = {
//   name: 'Maiwand',
//   age: 23
// };

// function outerFunction(){
//   var car = {
//     make: "BMW",
//     model: "1 Series"
//   }

//   function innerFunction() {
//     console.log(car);
//   }

//   innerFunction()
//   console.log(person);
// }

// outerFunction();

// console.log(car);



// CLOSURES
// passing functions to other functions

// function sayHello(){
//   console.log('Hello');
// } 

// function sayGoodbye() {
//   console.log('Goodbye');
// }

// function functionCaller(functionToRun) {
//   functionToRun();
// }

// // functionCaller(sayHello);
// functionCaller(sayGoodbye);

// // setTimeout(sayHello, 2000);
// // setInterval(sayHello, 2000);
//   setInterval(function(){

//     console.log('Maiwand');
//   }, 1000)

//   var message = "Timer finished";

//   function onTimeoutComplete(){
//     console.log(message);
//   }

//   setTimeoutComplete(onTimeoutComplete, 3000);


// var message = "hello";

// function createCounter(){
//   var total = 0 

//   return function(){
//     total++;
//     console.log(message);    
//     return total;
//   }
// }

// var counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());


// BLOCK SCOPE CLOSURE

for (var i = 0; i < 5; i++) {
  setTimeout((function (goblin) {
    return function(){
        console.log(goblin);
        
    }
  })(i), (1000 * i))
}

for (let i = 0; i < 5; i++) {
  setTimeout(function(){
    console.log(i);
    
  }, (1000 * i))
}

// 