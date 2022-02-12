// let acc = document.getElementsByClassName("accordion");

// for (let i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         this.classList.toggle("accordion-active");

//         /* Toggle between hiding and showing the active panel */
//         let panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// }





// // Select all accordion items
// var acc = document.querySelectorAll('.accordion');

// // Iterate to add event listeners
// acc.forEach(item => {
//     item.addEventListener('click', function () {
//         // When it's clicked, loop through all the items
//         acc.forEach(el => {
//             // Close any open items
//             if (el.classList.contains('accordion-active')) {
//                 closeAcc(el);
//                 // If it's the one that was clicked and it's closed, open it
//             } else if (el === item) {
//                 openAcc(el);
//             }
//         });
//     });
// });

// function closeAcc (el) {
//     el.classList.remove('accordion-active');
//     el.nextElementSibling.style.maxHeight = null;
// };

// function openAcc (el) {
//     el.classList.add('accordion-active');
//     el.nextElementSibling.style.maxHeight = el.nextElementSibling.scrollHeight + 'px';
// }

const accordion = document.getElementsByClassName('accordion__container');

console.log(accordion[1]);


for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    accordion.forEach(el => {
      el.classList.remove('accordion__active');
    });
    this.classList.toggle('accordion__active');
    
  })
}

// accordion.forEach(item => {
//     item.addEventListener('click', function () {
//         // When it's clicked, loop through all the items
//         accordion.forEach(el => {
//             // Close any open items
//             if (el.classList.contains('accordion__active')) {
//               el.classList.remove('accordion-active');
//             } else if (el === item) {
//               el.classList.add('accordion-active');
//             }
//         });
//     });
// });

