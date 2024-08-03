function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}

const loader = document.getElementById("preloader")
window.addEventListener("load",function(){
  window.scrollTo(0, 0);
  setTimeout(function(){
      loader.style.display="none";
  });


// Add this to your existing script.js

// Get all section elements
var sections = document.querySelectorAll('section');

// Get all navigation links
var navLinks = document.querySelectorAll('.navigation a');

// Add a scroll event listener
window.addEventListener('scroll', function () {
    var currentSection = "";

    sections.forEach(function (section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Update navigation indicators
    navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        var targetSection = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);



function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      
      document.getElementsByClassName("navbar")[0].style.background = "#0D1117";
    } else {
     
      document.getElementsByClassName("navbar")[0].style.background = "none";
    }
}

// When the user scrolls the page, execute addScrolledClass
window.onscroll = function() {
    scrollFunction()
};

})

// function toggleMenu() {
//     var menu = document.querySelector('.menu');
//     menu.classList.toggle('show');
// }

// // Add this to your existing script.js

// // Get all section elements
// var sections = document.querySelectorAll('section');

// // Get all navigation links
// var navLinks = document.querySelectorAll('.navigation a');

// // Add a scroll event listener
// window.addEventListener('scroll', function () {
//     var currentSection = "";

//     sections.forEach(function (section) {
//         var sectionTop = section.offsetTop;
//         var sectionHeight = section.clientHeight;

//         if (pageYOffset >= sectionTop - sectionHeight / 3) {
//             currentSection = section.getAttribute('id');
//         }
//     });

//     // Update navigation indicators
//     navLinks.forEach(function (link) {
//         link.classList.remove('active');
//         if (link.getAttribute('href').substring(1) === currentSection) {
//             link.classList.add('active');
//         }
//     });
// });

// // Smooth scrolling for navigation links
// navLinks.forEach(function (link) {
//     link.addEventListener('click', function (e) {
//         e.preventDefault();

//         var targetSection = document.querySelector(link.getAttribute('href'));
//         window.scrollTo({
//             top: targetSection.offsetTop,
//             behavior: 'smooth'
//         });
//     });
// });

// var words = document.getElementsByClassName('word');
// var wordArray = [];
// var currentWord = 0;

// words[currentWord].style.opacity = 1;
// for (var i = 0; i < words.length; i++) {
//   splitLetters(words[i]);
// }

// function changeWord() {
//   var cw = wordArray[currentWord];
//   var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
//   for (var i = 0; i < cw.length; i++) {
//     animateLetterOut(cw, i);
//   }
  
//   for (var i = 0; i < nw.length; i++) {
//     nw[i].className = 'letter behind';
//     nw[0].parentElement.style.opacity = 1;
//     animateLetterIn(nw, i);
//   }
  
//   currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
// }

// function animateLetterOut(cw, i) {
//   setTimeout(function() {
// 		cw[i].className = 'letter out';
//   }, i*80);
// }

// function animateLetterIn(nw, i) {
//   setTimeout(function() {
// 		nw[i].className = 'letter in';
//   }, 340+(i*80));
// }

// function splitLetters(word) {
//   var content = word.innerHTML;
//   word.innerHTML = '';
//   var letters = [];
//   for (var i = 0; i < content.length; i++) {
//     var letter = document.createElement('span');
//     letter.className = 'letter';
//     letter.innerHTML = content.charAt(i);
//     word.appendChild(letter);
//     letters.push(letter);
//   }
  
//   wordArray.push(letters);
// }

// changeWord();
// setInterval(changeWord, 4000);



// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      
//       document.getElementsByClassName("navbar")[0].style.background = "#0D1117";
//     } else {
     
//       document.getElementsByClassName("navbar")[0].style.background = "none";
//     }
// }

// // When the user scrolls the page, execute addScrolledClass
// window.onscroll = function() {
//     scrollFunction()
// };