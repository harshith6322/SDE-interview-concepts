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
