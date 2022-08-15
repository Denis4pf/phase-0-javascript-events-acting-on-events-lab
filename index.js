// // // Your code here
// // const dodger = document.getElementById("dodger");
// // // dodger.style.backgroundColor = "#000000";

// // dodger.style.backgroundColor = "#FF69B4";

// // // dodger.style.bottom = "100px";

// // // dodger.style.bottom = "0px";

// // dodger.style.left = "0px";

// document.addEventListener("keydown", function (event) {
//     console.log(event);
// })

// document.addEventListener("keydown", function (event) {
//   if (event.key === "ArrowLeft") {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);

//     dodger.style.left = `${left - 1}px`;
//   }
// });

// const dodger = document.getElementById("dodger");

// function moveDodgerRight() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left - 1}px`;
//     }
//   }

//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//         moveDodgerLeft();
//     }
//   })

//   const dodger = document.getElementById("dodger");
//   function moveDodgerRight( {

//   })

var dodger = document.getElementById('dodger');
      
dodger.style.backgroundColor = "red";
      
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 8);
        
  if ( left > 0 ) {
    dodger.style.left = `${left - 6}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 8);

  if ( left < 360) {
    dodger.style.left = `${left + 6}px`;
  }
}