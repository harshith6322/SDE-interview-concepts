// function x() {
//   function closur(x) {
//     // Set a timeout to log the value of x after x secon
//     console.log("fun call");
//     setTimeout(() => {
//       console.log(x);
//     }, x * 1000);
//   }
//   // Loop from 1 to 5
//   for (var i = 1; i <= 5; i++) {
//     // Call the closure function with the current value
//     console.log(i);
//     closur(i);
//   }
// }
// // Call the outer function x
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     (function (currentI) {
//       console.log(currentI); // Immediate log
//       setTimeout(() => {
//         console.log(currentI); // Delayed log
//       }, currentI * 1000);
//     })(i);
//   }
// }
// x();

// function outer(){

//     function inner(x){
//          setTimeout(()=>{
//             console.log(x)
//         },x*1000)
//     }

//     for(var i=0; i<6; i++){
//         console.log(i)
//        inner(i)
//     }
// }

// outer()

// function func() {
//   try {
//     console.log(1);
//     return;
//   } catch (e) {
//     console.log(2);
//   } finally {
//     console.log(3);
//   }
//   console.log(4);
// }
// func();

// let c = 0;
// let id = setInterval(() => {
//   console.log(c++);
// }, 1);
// setTimeout(() => {
//   clearInterval(id);
// }, 2000);

// var x = 23;
// (function () {
//   var x = 43;
//   (function random() {
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })();

// let a = 3;
// let b = new Number(3);
// let c = 3;
// console.log(a == b); //t
// console.log(a === b); //f
// console.log(b === c); //f

// function guessArray() {
//   let a = [1, 2];
//   let b = [1, 2];
//   console.log(a == b);
//   console.log(a === b);
// }
// guessArray();

var a = 1;
function data() {
  if (!a) {
    var a = 10;
  }
  console.log(a);
}

data();
console.log(a);

async function fetchData() {
  throw new Error("Data not found");
}
async function getData() {
  try {
    await fetchData();
  } catch (error) {
    console.log(error.message);
  }
}
getData();
